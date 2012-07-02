# typist
typist provides a reliable typeOf function for javascript's primitive types.

## usage

	<script src="typist.js"></script>

then:

	var t = window.typist;

	// -> 'number'
	t.typeOf(1234);

or as a node package:

	npm install typist

then:

	var t = require('typist');

	// -> 'boolean'
	t.typeOf(true);


## api

`typeOf(item)`

	Returns the primitive type of item. 
	If item is not a 'string', 'number', 'boolean', 'array', or 'function', return 'object'.

`isString(item)`

	Return true if the item is a string.

`isNumber(item)` 

	Return true if the item is a number.

`isBoolean(item)` 

	Return true if the item is a boolean.

`isArray(item)` 

	Return true if the item is an array.

`isFunction(item)`

	Return true if the item is a function.

`isObject(item)`

	Return true if the item is an object. 
	`isObject` will return false if the item is another primitive type.

`buildIsType(type, constructor)` 

	To build an 'isType' function for any type, use buildIsType.
	We can build one for typed arrays of 8 bit signed integers.

	var isInt8Array = buildIsType('Int8Array', Int8Array);

	The first argument is the name of the type as a string.
	It is used to build to string returned by the call to

	Object.prototype.toString.call(item);

	The case of the type string is corrected automatically.

	'Int8Array' becomes '[object Int8Array]'
	'int8Array' becomes '[object Int8Array]'

	The second argument is the constructor function of the type.

	As another example, we can construct any of the primitive type
	identifying functions.

	var isNumber = buildIsType('number', Number);
	var isArray = buildIsType('array', Array);
	 
	These constructed versions are less efficient than the ones provided
	below since the type operator will never succeed (the types you construct 
	will assume that `typeof yourObj` returns 'object').
	    
## tests

Execute `npm test` to run typist's unit tests.

