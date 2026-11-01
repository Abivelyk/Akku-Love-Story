# Visual direction and implementation notes

## Visual direction

The current build follows the original AKKÚ gallery: a dark Nero Marquina marble rotunda, fluted stone columns, warm brass track lights, walnut frames, an armillary sculpture, and a star ceiling. It keeps all seven rooms and the original keepsakes and controls.

## Performance choices

- The embedded base64 photo bundle has been removed; artwork loads from the local `assets/` folder.
- Texture image requests are queued in small batches so the browser is not flooded at startup.
- Compact screens use a lower device pixel ratio, fewer concurrent texture requests, and omit the desktop-only mirrored frame meshes.
- The animation loop pauses when the page is hidden.

## Media paths

All page and runtime media references resolve relative to this repository, so the same folder works from GitHub Pages and a local HTTP server.