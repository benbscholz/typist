// typist v0.1.0
// Reliable typeOf function and related utilities.
// (c) 2012 Ben Brooks Scholz 
// MIT Licensed.

(function () {
  var root = this;

  var typist = function () {

    var STRING = {
      'type'       :'string',
      'constructor': String,
      'prototype'  :'[object String]'
    };
    
    var NUMBER = {
      'type'       :'number',
      'constructor': Number,
      'prototype'  :'[object Number]'
    };

    var BOOLEAN = {
      'type'       :'boolean',
      'constructor': Boolean,
      'prototype'  :'[object Boolean]'
    };

    var ARRAY = {
      'type'       :'array',
      'constructor': Array,
      'prototype'  :'[object Array]'
    };

    var OBJECT = {
      'type'       :'object',
      'constructor': Object,
      'prototype'  :'[object Object]'
    };

    var FUNCTION = {
      'type'       :'function',
      'constructor': Function,
      'prototype'  :'[object Function]'
    };

    var typeOf = function (item) {
      var prototype;
      var type = typeof item;

      if (type === 'string'  || item.constructor === String)   return 'string';
      if (type === 'number'  || item.constructor === Number)   return 'number';
      if (type === 'boolean' || item.constructor === Boolean)  return 'boolean';
      if (type === 'function'|| item.constructor === Function) return 'function';
      if (type === 'array'   || item.constructor === Array)    return 'array';

      prototype = Object.prototype.toString.call(item);

      if (prototype === STRING.prototype)   return 'string';
      if (prototype === NUMBER.prototype)   return 'number';
      if (prototype === BOOLEAN.prototype)  return 'boolean';
      if (prototype === FUNCTION.prototype) return 'function';
      if (prototype === ARRAY.prototype)    return 'array';

      return 'object';
    };
  
    var isType = function (item, type) {
      return (item && item.constructor === type.constructor) ||
             (Object.prototype.toString.call(item) === type.constructor);
    };

    var isString = function (item) {
      return typeof item === 'string' ? true : isType(item, STRING);    
    };

    var isNumber = function (item) {
      return typeof item === 'number' ? true : isType(item, NUMBER);    
    };

    var isBoolean = function (item) {
      return typeof item === 'boolean' ? true : isType(item, BOOLEAN);    
    };

    var isArray = function (item) {
      return typeof item === 'array' ? true : isType(item, ARRAY);    
    };

    var isFunction = function (item) {
      return typeof item === 'function' ? true : isType(item, FUNCTION);
    };

    var isObject = function (item) {
      return isType(item, OBJECT);    
    };

    var buildIsType = function (type, constructor) {
      return function (item) {
        return isType(item, buildType(type, constructor));
    }
    };

    var buildType = function (type, constructor) {
      var upperCaseType = type[0].toUpperCase()+type.slice(1,type.length);
      var prototype     = '[object '+upperCaseType+']';
  
      return { 
        'type'       :'object',
        'constructor':constructor,
        'prototype'  :prototype   
      };
    };

    return {
      typeOf     :typeOf,
      isString   :isString,
      isNumber   :isNumber,
      isBoolean  :isBoolean,
      isArray    :isArray,
      isFunction :isFunction,
      isObject   :isObject,
      buildIsType:buildIsType
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = typist();
  }

  root.typist = typist();

})();