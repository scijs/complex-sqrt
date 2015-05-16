'use strict'

var csqrt = require('../index.js'),
    assert = require('assert')

describe('sqrt(a+bi)',function() {

  it('computes when a==b==0',function() {
    var a = 0, b = 0
    var e = csqrt(a,b)
    assert( Math.abs(e[0] - 0) < 1e-8 )
    assert( Math.abs(e[1] - 0) < 1e-8 )
  })

  it('computes when abs(a) > abs(b) and a > 0 and b > 0',function() {
    var a = 2, b = 1
    var e = csqrt(a,b)
    assert( Math.abs(e[0] - 1.45534669022535500) < 1e-8 )
    assert( Math.abs(e[1] - 0.34356074972251244) < 1e-8 )
  })

  it('computes when abs(b) > abs(a) and a > 0 and b > 0',function() {
    var a = 1, b = 2
    var e = csqrt(a,b)
    assert( Math.abs(e[0] - 1.2720196495140690) < 1e-8 )
    assert( Math.abs(e[1] - 0.7861513777574233) < 1e-8 )
  })

  it('computes when abs(b) > abs(a) and a < 0 and b > 0',function() {
    var a = -1, b = 2
    var e = csqrt(a,b)
    assert( Math.abs(e[0] - 0.7861513777574234) < 1e-8 )
    assert( Math.abs(e[1] - 1.2720196495140688) < 1e-8 )
  })

  it('computes when abs(b) > abs(a) and a < 0 and b < 0',function() {
    var a = -1, b = -2
    var e = csqrt(a,b)
    assert( Math.abs(e[0] - 0.7861513777574234) < 1e-8 )
    assert( Math.abs(e[1] + 1.2720196495140688) < 1e-8 )
  })

  it('passes the output to an argument',function() {
    var a = -1, b = -2
    var result = new Array(2)
    var e = csqrt(a,b,result)
    assert( Math.abs(result[0] - 0.7861513777574234) < 1e-8 )
    assert( Math.abs(result[1] + 1.2720196495140688) < 1e-8 )
  })


})
