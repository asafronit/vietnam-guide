# בונה את ריפו המדריך מהתבנית.
# ההבדל מגרסת ה-Artifact: שם הכל היה חייב להיות מוטמע בגלל CSP.
# כאן הנתונים, התצלומים והאקלים יוצאים לקבצים נפרדים — נשמרים בקאש,
# נטענים במקביל, ועריכת תוכן לא כותבת מחדש 900KB של HTML.
param(
  [string]$Scratch = 'C:\Users\Asaf\AppData\Local\Temp\claude\g--CLAUDE\2230f5e0-88a2-4c46-8a26-b0d6e76f2788\scratchpad',
  [string]$Dest    = 'G:\CLAUDE\vietnam-guide',
  [string]$Poi     = 'G:\CLAUDE\VIETNAM\kml\out\poi-data.js'
)
$ErrorActionPreference = 'Stop'
$utf8 = New-Object Text.UTF8Encoding($false)

New-Item -ItemType Directory -Force -Path "$Dest\assets\photos" | Out-Null

# --- נתונים ואקלים: העתקה ישירה ---
Copy-Item $Poi "$Dest\assets\poi-data.js" -Force
Copy-Item "$Scratch\weather.js" "$Dest\assets\climate.js" -Force

# --- תצלומים: מ-data URI לקבצים ---
$man = Get-Content "$Scratch\photos\manifest.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$rows = @(); $credits = @()
foreach ($m in ($man | Sort-Object id)) {
  Copy-Item "$Scratch\photos\$($m.id).jpg" "$Dest\assets\photos\$($m.id).jpg" -Force
  $rows += '  "{0}":"assets/photos/{0}.jpg"' -f $m.id
  $t = ($m.title -replace '^File:','') -replace '"','\"'
  $credits += '  "{0}":{{"t":"{1}","a":"{2}","l":"{3}","u":"{4}"}}' -f `
    $m.id, $t, ($m.artist -replace '"','\"'), ($m.license -replace '"','\"'), $m.page
}
$photosJs = "/* התצלומים כקבצים ולא כ-data URI: נטענים במקביל, נשמרים בקאש,`n" +
            "   וה-HTML נשאר קטן. Wikimedia Commons, רישיון חופשי. */`n" +
            "const STATION_PHOTO={`n" + ($rows -join ",`n") + "`n};`n" +
            "const PHOTO_CREDIT={`n" + ($credits -join ",`n") + "`n};`n"
[IO.File]::WriteAllText("$Dest\assets\photos.js", $photosJs, $utf8)

# --- ה-HTML: מחליפים את שלושת בלוקי ה-inline בהפניות חיצוניות ---
$html = Get-Content "$Scratch\trip-template.html" -Raw -Encoding UTF8
$map = @{
  '/*__CLIMATE__*/'  = 'assets/climate.js'
  '/*__PHOTOS__*/'   = 'assets/photos.js'
  '/*__POI_DATA__*/' = 'assets/poi-data.js'
}
foreach ($ph in $map.Keys) {
  $block = "<script>`n$ph`n</script>"
  $blockN = $block -replace "`r`n","`n"
  $htmlN  = $html  -replace "`r`n","`n"
  if (-not $htmlN.Contains($blockN)) { throw "block not found for $ph" }
  $html = $htmlN.Replace($blockN, ('<script src="{0}" defer></script>' -f $map[$ph]))
}
# --- לוגיקת האפליקציה יוצאת גם היא החוצה ---
# defer על ארבעתם משמר את סדר הביצוע: נתונים לפני קוד, וכולם אחרי הפרסור.
$m = [regex]::Match($html, '(?s)<script>\s*\(function\(\)\{\s*"use strict";.*?\}\)\(\);\s*</script>\s*$')
if (-not $m.Success) { throw 'app script block not found' }
$appJs = $m.Value -replace '(?s)^<script>\s*','' -replace '(?s)\s*</script>\s*$',''
[IO.File]::WriteAllText("$Dest\assets\app.js", $appJs, $utf8)
$html = $html.Remove($m.Index, $m.Length).Insert($m.Index, '<script src="assets/app.js" defer></script>' + "`n")

# --- מסמך שלם ---
# עטיפת ה-Artifact סיפקה doctype/head/body בחינם. אתר אמיתי צריך אותם בעצמו,
# וגם manifest ורישום worker שאין להם משמעות בתוך Artifact.
# lang/dir כאן הם ברירת מחדל בלבד; app.js דורס אותם לפי בחירת השפה השמורה.
$head = @'
<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0f6b57">
<meta name="description" content="מאגר נקודות עניין לטיול בווייטנאם: אטרקציות, אוכל רחוב, מסעדות, שווקים, לינה, והתאמה למזג האוויר.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
'@
$tail = @'
<script>
// נרשם בשקט. הכשלה כאן לעולם לא צריכה לשבור את הדף.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
</script>
</body>
</html>
'@
# ה-<title> הוא השורה הראשונה בתבנית ושייך ל-head; כל השאר הוא body.
$nl = "`n"
$idx = $html.IndexOf('<link rel="preconnect"')
if ($idx -lt 0) { throw 'preconnect anchor not found' }
$titleLine = $html.Substring(0, $idx).TrimEnd()
$rest = $html.Substring($idx)
$bodyIdx = $rest.IndexOf('<div class="wrap">')
if ($bodyIdx -lt 0) { throw 'body anchor not found' }
$headRest = $rest.Substring(0, $bodyIdx).TrimEnd()
$body = $rest.Substring($bodyIdx)

$doc = $head + $titleLine + $nl + $headRest + $nl + '</head>' + $nl + '<body>' + $nl + $body + $nl + $tail
[IO.File]::WriteAllText("$Dest\index.html", $doc, $utf8)

# --- חתימת גרסה ל-service worker ---
# נגזרת מתוכן הנכסים, לא ממספר שמישהו זוכר להעלות. sw.js נשמר עם
# תבנית __ASSET_HASH__ בגיט, והבנייה מחליפה אותה — כך שכל שינוי תוכן
# מבטל את הקאש בלי מגע יד.
$swSrc = Join-Path $PSScriptRoot 'sw.js'
if (-not (Test-Path $swSrc)) { $swSrc = "$Dest\sw.js" }
$sw = Get-Content $swSrc -Raw -Encoding UTF8
$sw = $sw -replace 'const VERSION = "[^"]*";', 'const VERSION = "__ASSET_HASH__";'
$fingerprint = (Get-ChildItem "$Dest\assets" -Recurse -File | Sort-Object FullName |
  ForEach-Object { (Get-FileHash $_.FullName -Algorithm SHA256).Hash }) -join ''
$fingerprint += (Get-FileHash "$Dest\index.html" -Algorithm SHA256).Hash
$stream = [IO.MemoryStream]::new([Text.Encoding]::UTF8.GetBytes($fingerprint))
$hash = (Get-FileHash -InputStream $stream -Algorithm SHA256).Hash.Substring(0, 12).ToLower()
[IO.File]::WriteAllText("$Dest\sw.js", $sw.Replace('__ASSET_HASH__', $hash), $utf8)
Write-Host "sw VERSION: $hash"

$kb = [int]((Get-Item "$Dest\index.html").Length / 1KB)
Write-Host "index.html: $kb KB"
Get-ChildItem "$Dest\assets" -File | ForEach-Object { Write-Host ("  assets/{0}  {1} KB" -f $_.Name, [int]($_.Length/1KB)) }
Write-Host ("  assets/photos/  {0} files, {1} KB" -f
  (Get-ChildItem "$Dest\assets\photos").Count,
  [int](((Get-ChildItem "$Dest\assets\photos" | Measure-Object Length -Sum).Sum)/1KB))
