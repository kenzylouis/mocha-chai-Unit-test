// const assert = require('assert');  // if you want to use the default aassertion library from node.js
const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
//const app = require('../app');

describe('App', function(){
  it('sayHello should return hello', function(){
    let result = sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function(){
    let result = sayHello();
    assert.typeOf(result, 'string');
  });
});
