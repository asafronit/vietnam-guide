# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing, and deliberately unusual: `trip-template.html` is a single file holding all
HTML, CSS and JS, and `build-site.ps1` extracts the inline script into `assets/app.js`
and writes `index.html`. **Both are build artifacts and are never edited directly.**
No framework, no bundler, no npm runtime dependency. Leaflet is the one external
script. Published as a PWA to GitHub Pages from `main`, root.

Content is not authored here: it is built in a separate Python pipeline at
`G:\CLAUDE\VIETNAM\kml` from per-station YAML, validated, geocoded, and exported to
`assets/poi-data.js` and `assets/transfers-data.js`.

## Users and job

Two adults, in Vietnam, 26 October to 24 November 2026. One of them built the guide;
the other did not, so nothing may depend on inside knowledge.

They use it in two scenes **the user weighs equally**:

- Standing in the street, one hand, tropical sun, needing an answer in about two
  seconds: what is near me, is it open, how do I get there.
- Sitting in the evening with time, comparing options in depth and deciding tomorrow.

A design that serves only one of the two scenes fails. There must be a way to move
between them.

## What the product makes possible

A pre-researched pool, not a day-by-day itinerary. 277 verified places across 14
stations and 18 inter-city transfers with 50 options, every record carrying its own
sources, a checked date, a confidence level, and a weather limiter (rain, wind, sea or
flood) that drives a per-record feasibility verdict against live forecast and
seven-year climate normals.

The mechanism that is genuinely different: **it is a survey record, not a
recommendation feed.** Each entry says what it is, why it earned its place, who
checked it and when, and what weather would ruin it. It answers without a network.

## Durable constraints

- **Hebrew-first, RTL**, with Vietnamese and Latin strings mixed into nearly every
  line. Language is a one-tap control, not a buried preference, because `<html lang>`
  sets the screen-reader voice for the whole page.
- **The five-colour link standard is locked and must never be recoloured:** sky =
  maps, green = Grab, navy = Booking, red = video, purple = WhatsApp. Colour is never
  alone — every action also carries an icon and a word.
- **Light theme is the default**, because a dark ground loses to direct sunlight. Dark
  exists as a toggle.
- **WCAG 2.2 AA is non-negotiable.** Reviewed repeatedly; findings are fixed, not
  deferred.
- **Offline.** Fonts, icons and all data are local and precached. The map is the one
  exception and is a known gap: Leaflet loads from a CDN.
- **390px first**, and must survive 320px with enlarged text.
- Numeric ranges must be bidi-isolated. A range written with an en dash renders
  reversed in an RTL card, which has already shipped twice as a silent bug.

## What is wrong with the current look

The user's own diagnosis, and the brief for any new direction: **crowded, generic,
characterless, not clean.** It works and it is accessible, but it could be any app,
and nothing on screen says Vietnam, says this trip, or says survey record.

## Open decisions

- Passenger composition beyond the two adults is not settled. Do not assume or
  emphasise a couple, a family, or a solo traveller anywhere in content or design.
- 121 of 277 records still have no coordinates, so the map and the near-me sort are
  incomplete. Affects map-led directions.

## Hard date

Departure is 26 October 2026. Anything not landed by then is not used on the trip.
