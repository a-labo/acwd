'use strict'

const acwd = require('acwd')

acwd.chdir('/foo/bar')
acwd.chdir('/foo/bar/baz')

console.log(acwd()) // => '/foo/bar/baz'

acwd.restore() // back history;

console.log(acwd()) // => '/foo/bar'
