// const assert = require('assert');  // if you want to use the default aassertion library from node
const assert = require('assert').assert;
const app = require('../app');

describe('App', function(){
  it('app shoould return hello', function(){
    assert.equal(app(), 'hello');
  });
});
