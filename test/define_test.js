/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const assert = require('assert')
const co = require('co')
const path = require('path')

describe('define', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Define', () => co(function * () {
    let acwd = define()
    assert.equal(acwd(), process.cwd())

    let dirname0 = path.resolve(`${__dirname}/..`)
    let dirname1 = path.resolve(`${__dirname}/../..`)
    acwd.chdir(dirname0)
    assert.equal(acwd(), dirname0)
    acwd.chdir(dirname1)
    assert.equal(acwd(), dirname1)
    acwd.restore()
    assert.equal(process.cwd(), dirname0)
    acwd.restore()
    acwd.restoreAll()
  }))
})

/* global describe, before, after, it */
