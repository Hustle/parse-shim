// This is a shim that loads the correct version of parse for a given environment
if (Parse) {
  module.exports = Parse;
} else if (typeof window === 'undefined') {
  module.exports = require('parse/node');
} else {
  module.exports = require('parse');
}
