# parse-shim
Requires the right version of Parse JS SDK for a particular platform.


### Raison d'État
Versions of the Parse JS SDK >1.5 split the codebase into two requireables:

 - The version of parse for the browser `require('parse')`
 - The version of parse for node `require('parse/node')`
 
 If you share code between a front-end and back-end you will find the need to load
 one version of Parse when in the browser environment but another if you are in the
 Node environment. This module will come in handy.

### Installation
```sh
npm install --save parse-shim
```

### Usage
```js
var Parse = require('parse-shim');
```
