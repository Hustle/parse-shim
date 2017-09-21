// This is a shim that loads the correct version of parse for a given environment

const isNode = require('detect-is-node')

if ( typeof Parse !== 'undefined' && Parse ) {
  module.exports = Parse;
} else if (isNode) {
  module.exports = require('parse/node');
} else {
  module.exports = require('parse');
}
