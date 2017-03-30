
# color-composite

> For turning layers of alpha colors into one

```js
var layer = require('color-composite')
var parse = require('color-parse')

var out = layer([
  parse('rgba(255, 0, 0, 0.3)'),
  parse('rgba(0, 255, 0, 0.3)'),
  parse('rgba(0, 0, 255, 0.3)')
])

console.log(out)
// => { space: 'rgb', values: [116, 82, 57], alpha: 0.657 }
```

This implements the [alpha compositing](https://en.wikipedia.org/wiki/Alpha_compositing#Description) function and lets you use an array of colors.

## Installation

```sh
npm install --save color-composite
```

## Usage

### `composite([ top, ..., bottom ])`

Turn a layer of alpha colors (from `top` to `bottom`) into one color

Colors that are input or output are the same objects as what [`color-parse`](https://npmjs.com/color-parse) returns

```js
composite([
  parse('rgba(0, )')
])
```

### `composite.over(a, b)`

Composites A over B.  A more bare implementation of `composite`.

```js
composite.over(
  parse('rgba(127, 195, 255, 0.5)'),
  parse('rgba(195, 127, 255, 0.75)')
)
// => { space: 'rgb', values: [156, 166, 255], alpha: 0.875 }
```

Made from the [Alpha compositing "over operator"](https://en.wikipedia.org/wiki/Alpha_compositing#Description) on Wikipedia:

![Alpha compositing "over operator"](https://wikimedia.org/api/rest_v1/media/math/render/svg/12ea004023a1756851fc7caa0351416d2ba03bae)

## License

MIT © [Jamen Marz](https://git.io/jamen)
