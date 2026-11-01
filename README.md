# A Garden That Keeps Us

A personal love-story website for Akkú. Scroll through a moonlit 3D rose garden, revisit twenty-six photographs, watch eight short films, open a few “when you need it” notes, and read a letter.

## What is inside

- Scroll-controlled Three.js garden with framed photographs along the path
- Twenty-six original memories with an accessible photo viewer
- Eight locally stored films, loaded only after choosing Play
- Optional soundtrack; it starts only after the visitor asks
- Six open-when notes and a typewriter letter reveal
- Responsive layout, reduced-motion support, and a still-image WebGL fallback

## Run locally

Serve this folder over HTTP, for example with a simple static web server. There is no build step. Keep the assets folder beside index.html.

## Performance details

- The generated garden environment is compressed to a 392 KB JPEG.
- Gallery photos use native lazy loading; the Three.js photo textures load in small batches.
- Video files are not fetched until a film is played.
- WebGL pixel density is capped and the render loop pauses while the tab is hidden.

## Media

The assets folder contains the original photos, films, soundtrack, and the generated garden environment. Music and video are user initiated.


