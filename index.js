module.exports = composite
composite.over = over

function composite (layers, space) {
  var output = layers[0]
  for (var i = 1, max = layers.length; i < max; i++) {
    output = over(output, layers[i])
  }
  return output
}

function over (a, b) {
  if (a.alpha === 1) return a
  if (a.alpha === 0) return b

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
