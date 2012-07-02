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
			var type = typeof item;
			var prototype;

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
			if (item && item.constructor === type.constructor) 
		    	return true;
			else if (Object.prototype.toString.call(item) === type.constructor)
		    	return true;
			else
		    	return false;
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

	    // To build an 'isType' function for any type, use buildIsType.
	    // We can build one for typed arrays of 8 bit signed integers.
	    //
	    // var isInt8Array = buildIsType('Int8Array', Int8Array);
	    //
	    // The first argument is the name of the type as a string.
	    // It is used to build to string returned by the call to
	    //
	    // Object.prototype.toString.call(item);
	    //
	    // The case of the type string is corrected automatically.
	    //
	    // 'Int8Array' becomes '[object Int8Array]'
	    // 'int8Array' becomes '[object Int8Array]'
	    //
	    // The second argument is the constructor function of the type.
	    //
	    // As another example, we can construct any of the primitive type
	    // identifying functions.
	    //
	    // var isNumber = buildIsType('number', Number);
	    // var isArray = buildIsType('array', Array);
	    // 
	    // These constructed versions are less efficient than the ones provided
	    // below since the type operator will never succeed (the types you construct 
	    // will assume that `typeof yourObj` returns 'object').
	    //
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