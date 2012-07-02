
var assert = require('assert');
var t      = require('../../src/typist');

// Primitive types.
var STRING1 = "";
var STRING2 = String("");
var STRING3 = new String("");
var STRING4 = "testing a string";
var STRING5 = String("testing a string");
var STRING6 = new String("test a string");

var BOOLEAN1 = false;
var BOOLEAN2 = Boolean(false);
var BOOLEAN3 = new Boolean(false);
var BOOLEAN4 = true;
var BOOLEAN5 = Boolean(true);
var BOOLEAN6 = new Boolean(true);

var NUMBER1 = 0;
var NUMBER2 = Number(0);
var NUMBER3 = new Number(0);
var NUMBER4 = 1234.5;
var NUMBER5 = Number(1234.5);
var NUMBER6 = new Number(1234.5);

function ArrayImpostor() {}
ArrayImpostor.prototype = [];

var ARRAY1 = [];
var ARRAY2 = Array([]);
var ARRAY3 = new Array([]);
var ARRAY4 = new ArrayImpostor();
var ARRAY5 = [1,2,3,4];
var ARRAY6 = Array([1,2,3,4]);
var ARRAY7 = new Array([1,2,3,4]);

function FunctionImpostor() {}
FunctionImpostor.prototype = function () {};

var FUNCTION1 = function () {};
var FUNCTION2 = Function("");
var FUNCTION3 = new Function("");
var FUNCTION4 = new FunctionImpostor();
var FUNCTION5 = function (a) { return [a]; };
var FUNCTION6 = Function("a", "return [a];");
var FUNCTION7 = new Function("a", "return [a];");

function ObjectImpostor () {}
ObjectImpostor.prototype = {};

var OBJECT1 = {};
var OBJECT2 = Object({});
var OBJECT3 = new Object({});
var OBJECT4 = new ObjectImpostor();
var OBJECT5 = {'a': 1};
var OBJECT6 = Object({'a': 1});
var OBJECT7 = new Object({'a': 1});

module.exports = {
    // typist.typeOf(item)
    'FUNCTION1 is a funtion': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION1), 'function');
    },
    'FUNCTION2 is a function': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION2), 'function');
    },
    'FUNCTION3 is a function': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION3), 'function');
    },
    'FUNCTION4 is a function': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION4), 'function');
    },
    'FUNCTION5 is a function': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION5), 'function');
    },
    'FUNCTION6 is a funtion': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION6), 'function');
    },
    'FUNCTION7 is a function': function (beforeExit, assert) {
        assert.equal(t.typeOf(FUNCTION7), 'function');
    },   
    'BOOLEAN1 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN1), 'boolean');
    },
    'BOOLEAN2 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN2), 'boolean');
    },
    'BOOLEAN3 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN3), 'boolean');
    },
    'BOOLEAN4 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN4), 'boolean');
    },
    'BOOLEAN5 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN5), 'boolean');
    },
    'BOOLEAN6 is a boolean': function (beforeExit, assert) {
        assert.equal(t.typeOf(BOOLEAN6), 'boolean');
    },
    'NUMBER1 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER1), 'number');
    },
    'NUMBER2 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER2), 'number');
    },   
    'NUMBER3 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER3), 'number');
    }, 
    'NUMBER4 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER4), 'number');
    },
    'NUMBER5 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER5), 'number');
    },
    'NUMBER6 is a number': function (beforeExit, assert) {
        assert.equal(t.typeOf(NUMBER6), 'number');
    },
    'STRING1 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING1), 'string');
    },
    'STRING2 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING2), 'string');
    },   
    'STRING3 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING3), 'string');
    },
    'STRING4 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING4), 'string');
    },
    'STRING5 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING5), 'string');
    },
    'STRING6 is a string': function (beforeExit, assert) {
        assert.equal(t.typeOf(STRING6), 'string');
    },
    'ARRAY1 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY1), 'array');
    },
    'ARRAY2 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY2), 'array');
    },
    'ARRAY3 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY3), 'array');
    },
    'ARRAY4 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY4), 'array');
    },
    'ARRAY5 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY5), 'array');
    },
    'ARRAY6 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY6), 'array');
    },
    'ARRAY7 is an array': function (beforeExit, assert) {
        assert.equal(t.typeOf(ARRAY7), 'array');
    },
    'arguments is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(arguments), 'object');
    },
    'OBJECT1 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT1), 'object');
    },
    'OBJECT2 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT2), 'object');
    },
    'OBJECT3 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT3), 'object');
    },
    'OBJECT4 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT4), 'object');
    },
    'OBJECT5 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT5), 'object');
    },
    'OBJECT6 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT6), 'object');
    },
    'OBJECT7 is an object': function (beforeExit, assert) {
        assert.equal(t.typeOf(OBJECT7), 'object');
    }
};