/**
 * This module defines custom JDOC tags for documenting Express routes.
 * @module jsdoc-router-plugin
 */

'use strict'

const plugins = [
  require('./lib/api'),
  require('./lib/apiHeader'),
  require('./lib/apiParam'),
  require('./lib/apiRequestBody'),
  require('./lib/apiResponseBody')
]

exports.defineTags = function (dictionary) {
  for (const plugin of plugins) {
    dictionary.defineTag(plugin.name, plugin.options)
  }
}

exports.handlers = {
  newDoclet: function (e) {
    for (const plugin of plugins) {
      plugin.newDocletHandler(e)
    }
  }
}
