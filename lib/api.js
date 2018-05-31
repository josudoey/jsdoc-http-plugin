/**
 * This module defines a custom jsDoc tag.
 * It allows you to document header parameters of a route.
 * @module lib/headerparam
 */

'use strict'

exports.name = 'api'
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: true,
  canHaveType: true,
  canHaveName: true,
  onTagged: function (doclet, tag) {
    doclet.api = {
      'path': tag.value.name,
      'method': tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : ''
    }
  }
}
exports.newDocletHandler = function (e) {
  var api = e.doclet.api
  if (api) {
    e.doclet.scope = 'api'
    e.doclet.description = `<h5>Route:</h5>
                            <table class="params">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">${api.method}</td>
                            <td class="description last">${api.path}</td>
                            </tr>
                            </table>
                            ${e.doclet.description || ''}`
  }
}
