var expect = require('chai').expect;

var blue2post = require('..');
var blueprint = require('./blueprint.json');
var postman_collection;

describe('simple usage', function() {

  it('should be able to process the collection', function() {
    expect(function() {
      postman_collection = blue2post(blueprint);
    }).to.not.throw(/.*/);
  });

  it('should retain the name', function() {
    expect(postman_collection).to.have.ownProperty('name');
    expect(postman_collection.name).to.equal(blueprint.name);
  });

});
