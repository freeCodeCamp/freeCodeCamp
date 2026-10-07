# sharp

<img src="https://cdn.jsdelivr.net/gh/lovell/sharp@main/docs/image/sharp-logo.svg" width="160" height="160" alt="sharp logo" align="right">

The typical use case for this high speed Node.js module
is to convert large images in common formats to
smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.

Resizing an image is typically 4x-5x faster than using the
quickest ImageMagick and GraphicsMagick settings
due to its use of [libvips](https://github.com/libvips/libvips).

Colour spaces, embedded ICC profiles and alpha transparency channels are all handled correctly.
Lanczos resampling ensures quality is not sacrificed for speed.

As well as image resizing, operations such as
rotation, extraction, compositing and gamma correction are available.

Most modern macOS, Windows and Linux systems running Node.js >= 14.15.0
do not require any additional install or runtime dependencies.

## Documentation

Visit [sharp.pixelplumbing.com](https://sharp.pixelplumbing.com/) for complete
[installation instructions](https://sharp.pixelplumbing.com/install),
[API documentation](https://sharp.pixelplumbing.com/api-constructor),
[benchmark tests](https://sharp.pixelplumbing.com/performance) and
[changelog](https://sharp.pixelplumbing.com/changelog).

## Examples

```sh
npm install sharp
```

```javascript
const sharp = require('sharp');
```

### Callback

```javascript
sharp(inputBuffer)
  .resize(320, 240)
  .toFile('output.webp', (err, info) => { ... });
```

### Promise

```javascript
sharp('input.jpg')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then( data => { ... })
  .catch( err => { ... });
```

### Async/await

```javascript
const semiTransparentRedPng = await sharp({
  create: {
    width: 48,
    height: 48,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})
  .png()
  .toBuffer();
```

### Stream

```javascript
const roundedCorners = Buffer.from(
  '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
);

const roundedCornerResizer =
  sharp()
    .resize(200, 200)
    .composite([{
      input: roundedCorners,
      blend: 'dest-in'
    }])
    .png();

readableStream
  .pipe(roundedCornerResizer)
  .pipe(writableStream);
```

## Contributing

A [guide for contributors](https://github.com/lovell/sharp/blob/main/.github/CONTRIBUTING.md)
covers reporting bugs, requesting features and submitting code changes.

## Licensing

Copyright 2013 Lovell Fuller and others.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
