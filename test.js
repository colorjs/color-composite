var test = require('tape')
var { composite, over } = require('./')

test('over function', function (t) {
  t.plan(3)

  t.same(
    over('rgba(127, 195, 255, 0.5)', 'rgba(195, 127, 255, 0.75)'),
    {
      space: 'rgb',
      values: [ 156, 166, 255 ],
      alpha: 0.875
    }
  )


  t.same(
    over('rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'),
    {
      space: 'rgb',
      values: [ 170, 85, 0 ],
      alpha: 0.75
    }
  )

  t.same(
    over('rgba(180, 26, 60, 0.25)', 'rgba(57, 124, 142, 0.75)'),
    {
      space: 'rgb',
      values: [ 95, 94, 117 ],
      alpha: 0.8125
    }
  )
})

test('layer function', function (t) {
  t.plan(1)

  t.same(
    composite([
      'rgba(255, 0, 0, 0.3)',
      'rgba(0, 255, 0, 0.3)',
      'rgba(0, 0, 255, 0.3)'
    ]),
    {
      space: 'rgb',
      values: [ 116, 82, 57 ],
      alpha: 0.657
    }
  )
})
