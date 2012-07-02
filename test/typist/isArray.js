
var assert = require('assert');
var t = require('../../src/typist');

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
	// typist.isArray(item)
    'ARRAY1 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY1));
    },
    'ARRAY2 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY2));
    },
    'ARRAY3 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY3));
    },
    'ARRAY4 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY4));
    },
    'ARRAY5 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY5));
    },
    'ARRAY6 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY6));
    },
    'ARRAY7 is an array': function (beforeExit, assert) {
        assert.ok(t.isArray(ARRAY7));
    },
    'arguments is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(arguments));
    },
    'BOOLEAN1 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN1));
    },
    'BOOLEAN2 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN2));
    },
    'BOOLEAN3 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN3));
    },
    'BOOLEAN4 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN4));
    },
    'BOOLEAN5 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN5));
    },
    'BOOLEAN6 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(BOOLEAN6));
    },
    'NUMBER1 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER1));
    },
    'NUMBER2 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER2));
    },   
    'NUMBER3 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER3));
    }, 
    'NUMBER4 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER4));
    },
    'NUMBER5 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER5));
    },
    'NUMBER6 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(NUMBER6));
    },
    'STRING1 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING1));
    },
    'STRING2 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING2));
    },   
    'STRING3 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING3));
    },
    'STRING4 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING4));
    },
    'STRING5 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING5));
    },
    'STRING6 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(STRING6));
    },
    'FUNCTION1 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION1));
    },
    'FUNCTION2 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION2));
    },
    'FUNCTION3 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION3));
    },
    'FUNCTION4 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION4));
    },
    'FUNCTION5 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION5));
    },
    'FUNCTION6 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION6));
    },
    'FUNCTION7 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(FUNCTION7));
    },
    'OBJECT1 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT1));
    },
    'OBJECT2 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT2));
    },
    'OBJECT3 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT3));
    },
    'OBJECT4 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT4));
    },
    'OBJECT5 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT5));
    },
    'OBJECT6 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT6));
    },
    'OBJECT7 is not an array': function (beforeExit, assert) {
        assert.ok(!t.isArray(OBJECT7));
    }
};