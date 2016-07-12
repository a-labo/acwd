/**
 * Working directory manager.
 * @module acwd
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get define () { return d(require('./define')) }
}
