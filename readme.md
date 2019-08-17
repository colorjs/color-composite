# color-composite

Composite semitransparent colors.

```js
const { composite } = require('color-composite')

const out = composite([
  'rgba(255, 0, 0, 0.3)',
  'rgba(0, 255, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)'
])

console.log(out)
// => { space: 'rgb', values: [116, 82, 57], alpha: 0.657 }
```

## Install

```sh
npm i color-composite
```

## Usage

### `composite([ top, ..., bottom ])`

Composite an array of colors from `top` to `bottom` into one color.

Takes color strings or objects as input. Returns a color object.

```js
const { composite } = require('color-composite')

composite([
  'rgba(255, 0, 0, 0.3)',
  'rgba(0, 255, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)'
])
// => { space: 'rgb', values: [116, 82, 57], alpha: 0.657 }
```

### `over(a, b)`

Compsites color A over color B.

Takes color strings or objects as input. Returns a color object.

```js
const { over } = require('color-composite')

over(
  'rgba(127, 195, 255, 0.5)',
  'rgba(195, 127, 255, 0.75)'
)
// => { space: 'rgb', values: [156, 166, 255], alpha: 0.875 }
```

Made from the [Alpha compositing "over operator"](https://en.wikipedia.org/wiki/Alpha_compositing#Description) on Wikipedia.