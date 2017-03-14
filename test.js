var test = require('tape')
var parse = require('color-parse')
var composite = require('./')
var over = composite.over

test('over function', function (t) {
  t.plan(3)

  t.same(
    over(
      parse('rgba(127, 195, 255, 0.5)'),
      parse('rgba(195, 127, 255, 0.75)')
    ),
    parse('rgba(156, 166, 255, 0.875)')
  )


  t.same(
    over(
      parse('rgba(255, 0, 0, 0.5)'),
      parse('rgba(0, 255, 0, 0.5)')
    ),
    parse('rgba(170, 85, 0, 0.75)')
  )

  t.same(
    over(
      parse('rgba(180, 26, 60, 0.25)'),
      parse('rgba(57, 124, 142, 0.75)')
    ),
    parse('rgba(95, 94, 117, 0.8125)')
  )
})

test('layer function', function (t) {
  t.plan(1)

  t.same(
    composite([
      parse('rgba(255, 0, 0, 0.3)'),
      parse('rgba(0, 255, 0, 0.3)'),
      parse('rgba(0, 0, 255, 0.3)')
    ]),
    parse('rgba(116, 82, 57, 0.657)')
  )
})
