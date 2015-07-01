# api-blueprint-to-postman

__Work In Progress!__ *Funtionality is incomplete and/or possibly incorrect!  
Please be patient as I figure out the structure of both blueprint and postman files and implement more functionality.*

[![Build Status][travis-shield]][travis]
[![Coverage Status][coveralls-shield]][coveralls]
[![Dependency Status][dependencies-shield]][dependencies]
[![devDependency Status][dependencies-dev-shield]][dependencies-dev]
[![peerDependency Status][dependencies-peer-shield]][dependencies-peer]

[![Develop Status][travis-shield-develop]][travis]
[![Develop Coverage Status][coveralls-shield-develop]][coveralls]

Convert an [API Blueprint](https://apiblueprint.org/) into a [Postman](https://www.getpostman.com/) collection.


## Installation

[![api-blueprint-to-postman on NPM](https://nodei.co/npm/api-blueprint-to-postman.png?small=true)][npm]

## Usage

```javascript
// get a JSON structure in compliance with API Blueprint Serialization Scheme
var blueprint = require('blueprint.json');
// get this module
var api_blueprint_to_postman = require('api-blueprint-to-postman');
// call this module as a function with the JSON as input
var collection = api_blueprint_to_postman(blueprint);
// output is another JSON object compliant with postman collection scheme
fs.writeFileSync('collection.json.postman_collection', JSON.stringify(collection));
```

## License
[MIT](/LICENSE)


[npm]:                     https://www.npmjs.com/package/api-blueprint-to-postman
[travis]:                  https://travis-ci.org/call-a3/api-blueprint-to-postman
[travis-shield]:           https://img.shields.io/travis/call-a3/api-blueprint-to-postman.svg
[travis-shield-develop]:   https://img.shields.io/travis/call-a3/api-blueprint-to-postman/develop.svg?label=develop%20build
[coveralls]:               https://coveralls.io/r/call-a3/api-blueprint-to-postman
[coveralls-shield]:        https://img.shields.io/coveralls/call-a3/api-blueprint-to-postman.svg
[coveralls-shield-develop]:https://img.shields.io/coveralls/call-a3/api-blueprint-to-postman/develop.svg?label=develop%20coverage
[dependencies]:            https://david-dm.org/call-a3/api-blueprint-to-postman
[dependencies-dev]:        https://david-dm.org/call-a3/api-blueprint-to-postman#info=devDependencies
[dependencies-peer]:       https://david-dm.org/call-a3/api-blueprint-to-postman#info=peerDependencies
[dependencies-shield]:     https://img.shields.io/david/call-a3/api-blueprint-to-postman.svg
[dependencies-dev-shield]: https://img.shields.io/david/dev/call-a3/api-blueprint-to-postman.svg
[dependencies-peer-shield]:https://img.shields.io/david/peer/call-a3/api-blueprint-to-postman.svg
