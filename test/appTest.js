// const assert = require('assert');  // if you want to use the default aassertion library from node.js
const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('app should return hello', function(){
    assert.equal(app(), 'hello');
  });
});
