const parse = require('color-parse')

function composite (colors) {
  var output = colors[0]
  for (var i = 1, max = colors.length; i < max; i++) {
    output = over(output, colors[i])
  }
  return output
}

function over (a, b) {
  if (!a.space) a = parse(a)
  if (!b.space) b = parse(b)

  if (a.space !== 'rgb') {
    throw new Error('First color\'s space ' + a.space + ' is not supported.')
  } else if (b.space !== 'rgb') {
    throw new Error('Second color\'s space ' + b.space + ' is not supported.')
  }

  if (a.alpha === 1) {
    return a
  } else if (a.alpha === 0) {
    return b
  }

  var o = {
    space: b.space,
    values: b.values.slice(),
    alpha: a.alpha + b.alpha * (1 - a.alpha)
  }

  // Color channels
  for (var i = 0; i < 3; i++) {
    var preA = a.values[i] * a.alpha
    var preB = b.values[i] * b.alpha
    o.values[i] = Math.round((preA + preB * (1 - a.alpha)) / o.alpha)
  }

  return o
}

module.exports = { composite, over }