/**
 * Current working directory
 * @function define
 * @returns {function} - Acwd instance
 */
'use strict'

const fs = require('fs')

/** @lends define */
function define () {
  function acwd () {
    return process.cwd()
  }

  return Object.assign(acwd, {
    _history: [],
    _changeDirectoryIfExists (cwd) {
      let exists = fs.existsSync(cwd)
      if (exists) {
        process.chdir(cwd)
      } else {
        throw new Error(`[${acwd.prefix}] cwd directory not exists: ${cwd}`)
      }
    },
    chdir (cwd) {
      let here = process.cwd()
      acwd._changeDirectoryIfExists(cwd)
      acwd._history.push(here)
    },
    restore () {
      let cwd = acwd._history.pop()
      if (cwd) {
        acwd._changeDirectoryIfExists(cwd)
      } else {
        throw new Error(`[${acwd.prefix}] No history found.`)
      }
    },
    restoreAll () {
      let cwd = acwd._history[ 0 ]
      if (!cwd) {
        return
      }
      acwd.chdir(cwd)
      acwd._history = []
    }
  })
}

module.exports = define

