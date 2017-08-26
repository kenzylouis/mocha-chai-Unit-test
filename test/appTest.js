// const assert = require('assert');  // if you want to use the default aassertion library from node.js
const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//Results declared globally
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){
  it('sayHello should return hello', function(){
    //let result = app.sayHello();
    assert.equal(sayHelloResult, 'hello');
  });

  it('sayHello should return type string', function(){
    //let result = app.sayHello();
    assert.typeOf(sayHelloResult, 'string');
  });

  it('addNumbers should be above 5', function(){
    //let result = app.addNumbers(5,5);
    assert.isAbove(addNumbersResult, 5);
  });

  it('addNumbers should return type number', function(){
    //let result = app.addNumbers(5,5);
    assert.typeOf(addNumbersResult, 'number');
  });
});
