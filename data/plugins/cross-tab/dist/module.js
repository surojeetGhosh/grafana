define(["@emotion/css","@grafana/data","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__emotion_css__, __WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/tinycolor2/tinycolor.js":
/*!***********************************************!*\
  !*** ../node_modules/tinycolor2/tinycolor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./CrossTabCtrl.tsx":
/*!**************************!*\
  !*** ./CrossTabCtrl.tsx ***!
  \**************************/
/*! exports provided: getCategoriesOptions, getCategoriesUniqueValues, enhanceDataLinks, parseData, isDecimalAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesOptions", function() { return getCategoriesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesUniqueValues", function() { return getCategoriesUniqueValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhanceDataLinks", function() { return enhanceDataLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseData", function() { return parseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDecimalAllowed", function() { return isDecimalAllowed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./types.ts");




/**
 * Returns options list for pivot table categories
 */
var getCategoriesOptions = function getCategoriesOptions(context) {
  var categories = [];
  if (context && context.data && context.data.length > 0) {
    context.data[0].fields.forEach(function (item) {
      categories.push({
        name: item.name,
        displayName: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["getFieldDisplayName"])(item, context.data[0])
      });
    });
  }
  return categories;
};
/**
 * Returns categories values for pivot categories filter
 */
var getCategoriesUniqueValues = function getCategoriesUniqueValues(context, categories) {
  var categoriesValues = {};
  if (context && context.data && context.data.length > 0) {
    context.data[0].fields.forEach(function (item) {
      var catItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(categories, ['name', item.name]);
      if (catItem) {
        categoriesValues[item.name] = {
          values: [],
          isShow: false
        };
        item.values.toArray().map(function (val) {
          if (!categoriesValues[item.name].values.includes(val)) {
            categoriesValues[item.name].values.push(val);
          }
        });
      }
    });
  }
  return categoriesValues;
};
/**
 * encode string according to RFC 3986; in contrast to encodeURIComponent()
 * also the sub-delims "!", "'", "(", ")" and "*" are encoded;
 * unicode handling uses UTF-8 as in ECMA-262.
 */
function encodeURIComponentStrict(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Replace URL variables with relevant data.
 */
var enhanceDataLinks = function enhanceDataLinks(rowAttrs, rowKeys, colAttrs, colKeys, link, replaceVariables) {
  var scopedVars = {};
  var variablesQuery = _grafana_data__WEBPACK_IMPORTED_MODULE_1__["locationUtil"].getVariablesUrlParams();
  var timeRangeUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__["locationUtil"].getTimeRangeUrlParams();
  scopedVars[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataLinkBuiltInVars"].includeVars] = {
    text: variablesQuery,
    value: variablesQuery
  };
  scopedVars[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataLinkBuiltInVars"].keepTime] = {
    text: timeRangeUrl,
    value: timeRangeUrl
  };
  scopedVars[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataLinkBuiltInVars"].timeRangeFrom] = {
    text: timeRangeUrl === null || timeRangeUrl === void 0 ? void 0 : timeRangeUrl.split('&')[0],
    value: timeRangeUrl === null || timeRangeUrl === void 0 ? void 0 : timeRangeUrl.split('&')[0]
  };
  scopedVars[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataLinkBuiltInVars"].timeRangeTo] = {
    text: timeRangeUrl === null || timeRangeUrl === void 0 ? void 0 : timeRangeUrl.split('&')[1],
    value: timeRangeUrl === null || timeRangeUrl === void 0 ? void 0 : timeRangeUrl.split('&')[1]
  };
  var URL = replaceVariables(link.url, scopedVars);
  var filtersObject = {};
  rowKeys.forEach(function (key, index) {
    // Because of Subtotal rows, which are not actual data, getting undefined hence adding below check.
    if (!rowAttrs[index]) {
      return;
    }
    // @ts-ignore
    filtersObject[rowAttrs[index].name] = key;
  });
  colKeys.forEach(function (key, index) {
    // @ts-ignore
    filtersObject[colAttrs[index].name] = key;
  });
  Object.keys(filtersObject).forEach(function (cat) {
    // @ts-ignore
    URL = URL.replace('$(' + cat + ')', encodeURIComponentStrict(filtersObject[cat]));
  });
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, link), {
    url: URL
  });
};
/**
 * Returns series data in CSV format for pivot table.
 */
var parseData = function parseData(seriesData, options) {
  var overrideAllowed = function overrideAllowed(field) {
    var _a, _b;
    return !((_b = (_a = options === null || options === void 0 ? void 0 : options.categories) === null || _a === void 0 ? void 0 : _a.valueCategory) === null || _b === void 0 ? void 0 : _b.find(function (item) {
      return item.name === field.name;
    }));
  };
  var data = {};
  seriesData.series[0].fields.forEach(function (item) {
    data[item.name] = seriesData.series[0].length ? Array(seriesData.series[0].length).fill(null).map(function (_, index) {
      var _a;
      var itemVal = item.values.get(index);
      if (!overrideAllowed(item)) {
        return itemVal;
      }
      var displayValueObj = (_a = item.display) === null || _a === void 0 ? void 0 : _a.call(item, itemVal);
      return displayValueObj && displayValueObj.text !== 'NaN' ? displayValueObj.text : itemVal;
    }) : [];
  });
  var dataAsSCV = [];
  Object.keys(data).forEach(function (key) {
    if (!dataAsSCV[0]) {
      dataAsSCV[0] = [];
    }
    dataAsSCV[0].push(key);
    data[key].forEach(function (val, index) {
      var position = index + 1;
      if (!dataAsSCV[position]) {
        dataAsSCV[position] = [];
      }
      dataAsSCV[position].push(val);
    });
  });
  return dataAsSCV;
};
var isDecimalAllowed = function isDecimalAllowed(aggType) {
  return ![_types__WEBPACK_IMPORTED_MODULE_3__["AggregatorType"].COUNT, _types__WEBPACK_IMPORTED_MODULE_3__["AggregatorType"].MAX, _types__WEBPACK_IMPORTED_MODULE_3__["AggregatorType"].MIN, _types__WEBPACK_IMPORTED_MODULE_3__["AggregatorType"].MIN].includes(aggType);
};

/***/ }),

/***/ "./CrossTabPanel.tsx":
/*!***************************!*\
  !*** ./CrossTabPanel.tsx ***!
  \***************************/
/*! exports provided: notificationStyle, CrossTabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationStyle", function() { return notificationStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossTabPanel", function() { return CrossTabPanel; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var CrossTabCtrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! CrossTabCtrl */ "./CrossTabCtrl.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types */ "./types.ts");
/* harmony import */ var _pivotTable_TableRenderers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pivotTable/TableRenderers */ "./pivotTable/TableRenderers.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }







var notificationStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};
var CrossTabPanel = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (_a) {
  var _b, _c, _d;
  var data = _a.data,
    width = _a.width,
    height = _a.height,
    options = _a.options,
    fieldConfig = _a.fieldConfig,
    replaceVariables = _a.replaceVariables,
    onOptionsChange = _a.onOptionsChange;
  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "panel-empty"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "No data found in response"));
  }
  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__["LoadingState"].Loading) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: notificationStyle
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Loading..."));
  }
  if (options.colMax && options.rowMax && options.colMax * options.rowMax > types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].VIEW_MODE_NODE_LIMIT) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: notificationStyle
    }, renderAlertNotification("The number of selected rows and columns exceeds the set limit. Ensure that the product of the rows and columns is less than " + types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].VIEW_MODE_NODE_LIMIT, 'error'));
  }
  var pivotData;
  if (data.error || data.series.length === 0) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var textColor = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])().colors.text;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: notificationStyle
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      style: {
        color: textColor
      }
    }, "No data"));
  } else {
    try {
      checkCategoriesValues(options);
      pivotData = Object(CrossTabCtrl__WEBPACK_IMPORTED_MODULE_2__["parseData"])(data, options);
      // for now testing it for view mode
      //if(locationService.getSearchObject().editPanel === undefined) {
      updateCategoriesValueAccordingToData(options, data);
      //}
    } catch (_e) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: notificationStyle
      }, renderAlertNotification('Failed to parse plugin response data', 'error'));
    }
  }
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_pivotTable_TableRenderers__WEBPACK_IMPORTED_MODULE_5__["PivotTable"], {
    series: data.series[0],
    width: width,
    height: height,
    data: pivotData,
    categories: options.categories,
    aggregatorType: options.aggregatorType,
    fieldConfig: fieldConfig,
    replaceVariables: replaceVariables,
    showTotals: options.showTotals,
    showSubTotals: options.showSubTotals,
    subTotalColumn: options.subTotalColumn,
    showRowPercentage: options.showRowPercentage,
    showColumnPercentage: options.showColumnPercentage,
    hideEmpty: options.hideEmpty,
    onChange: onOptionsChange,
    rowMax: options.rowMax,
    colMax: options.colMax,
    colorOptions: {
      headerColor: options.headerColor,
      headerBgColor: options.headerBgColor,
      subTotalHeaderBgColor: options.subTotalHeaderBgColor
    },
    textAlign: {
      columnTextAlign: (_b = options.columnTextAlign) !== null && _b !== void 0 ? _b : 'left',
      rowTextAlign: (_c = options.rowTextAlign) !== null && _c !== void 0 ? _c : 'left',
      valueTextAlign: (_d = options.valueTextAlign) !== null && _d !== void 0 ? _d : 'right'
    }
  });
});
CrossTabPanel.displayName = 'CrossTabPanel';
var renderAlertNotification = function renderAlertNotification(msg, severity) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: 'alert alert-' + severity
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "alert-icon"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "xl",
    name: 'exclamation-triangle'
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "alert-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "alert-title"
  }, msg)));
};
// this works during editor mode when we can change options
var checkCategoriesValues = function checkCategoriesValues(options) {
  var cols = updateCategories(options.categories.columnsCategories);
  options.categories.columnsCategories = cols;
  var rows = updateCategories(options.categories.rowsCategories);
  options.categories.rowsCategories = rows;
  var value = updateCategories(options.categories.valueCategory);
  options.categories.valueCategory = value;
};
var updateCategories = function updateCategories(data) {
  var index = data.findIndex(function (value) {
    return _typeof(value) === 'object' && value != null;
  });
  if (index === -1) {
    var categories_1 = [];
    data.forEach(function (item) {
      item !== null && item !== undefined && categories_1.push({
        name: item,
        displayName: item
      });
    });
    return categories_1;
  }
  return data;
};
// update categories object during viewing mode
// editing mode update is taken care by pivotConfigEditor
var updateCategoriesValueAccordingToData = function updateCategoriesValueAccordingToData(options, data) {
  // get new categories as per data changed
  var newColumns = getCategoriesOptions(data.series);
  options.categories.categoriesValues = getCategoriesValues(data.series, newColumns);
};
/**
 * Returns options list for pivot table categories
 */
var getCategoriesOptions = function getCategoriesOptions(data) {
  var categories = [];
  if (data && data.length > 0) {
    data[0].fields.forEach(function (item) {
      categories.push({
        name: item.name,
        displayName: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_0__["getFieldDisplayName"])(item, data[0])
      });
    });
  }
  return categories;
};
var getCategoriesValues = function getCategoriesValues(data, categories) {
  var categoriesValues = {};
  if (data && data.length > 0) {
    data[0].fields.forEach(function (item) {
      var catItem = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(categories, ['name', item.name]);
      if (catItem) {
        categoriesValues[item.name] = {
          values: [],
          isShow: false
        };
        item.values.toArray().map(function (val) {
          if (!categoriesValues[item.name].values.includes(val)) {
            categoriesValues[item.name].values.push(val);
          }
        });
      }
    });
  }
  return categoriesValues;
};

/***/ }),

/***/ "./customPanelEditors/PivotCategoriesEditor.tsx":
/*!******************************************************!*\
  !*** ./customPanelEditors/PivotCategoriesEditor.tsx ***!
  \******************************************************/
/*! exports provided: CategoryType, PivotCategoriesEditor, updateCategoriesAccordingToRecievedData, updateOptionsAfterSelect, updateOptionsAfterChangeOrder, updateOptionsAfterChangeRowsValuesOrder, updateOptionsAfterChangeColsValuesOrder, updateCategoriesValueFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryType", function() { return CategoryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotCategoriesEditor", function() { return PivotCategoriesEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategoriesAccordingToRecievedData", function() { return updateCategoriesAccordingToRecievedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOptionsAfterSelect", function() { return updateOptionsAfterSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOptionsAfterChangeOrder", function() { return updateOptionsAfterChangeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOptionsAfterChangeRowsValuesOrder", function() { return updateOptionsAfterChangeRowsValuesOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOptionsAfterChangeColsValuesOrder", function() { return updateOptionsAfterChangeColsValuesOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategoriesValueFilter", function() { return updateCategoriesValueFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CrossTabCtrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CrossTabCtrl */ "./CrossTabCtrl.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./styles.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./types.ts");
/* harmony import */ var _PivotCategoriesFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PivotCategoriesFilter */ "./customPanelEditors/PivotCategoriesFilter.tsx");
/* harmony import */ var _PivotCategoriesPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PivotCategoriesPicker */ "./customPanelEditors/PivotCategoriesPicker.tsx");










var CategoryType;
(function (CategoryType) {
  CategoryType["ROW"] = "row";
  CategoryType["COLUMN"] = "col";
  CategoryType["VALUE"] = "val";
  CategoryType["NONE"] = "none";
})(CategoryType || (CategoryType = {}));
/* istanbul ignore next */
var PivotCategoriesEditor = function PivotCategoriesEditor(_a) {
  var value = _a.value,
    context = _a.context,
    _onChange = _a.onChange;
  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''), 2),
    searchQuery = _b[0],
    setSearchQuery = _b[1];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var styles = getStyles(theme);
  var labelStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_6__["getLabelStyles"])(theme);
  var suffix = searchQuery !== '' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styles.searchClear,
    onClick: function onClick() {
      return setSearchQuery('');
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "times"
  }), "Clear filter") : null;
  /*
   * get all categories from the plugin data
   */
  var categories = Object(_CrossTabCtrl__WEBPACK_IMPORTED_MODULE_5__["getCategoriesOptions"])(context);
  if (categories.length > 0) {
    updateCategoriesAccordingToRecievedData(value, categories, context);
  }
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log(context);
  }, [value, context]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ControlledCollapse"], {
    label: "Fields",
    collapsible: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.currentTarget.value);
    },
    prefix: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "filter",
      className: styles.icon
    }),
    suffix: suffix,
    placeholder: "Filter categories"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PivotCategoriesPicker__WEBPACK_IMPORTED_MODULE_9__["PivotCategoriesPicker"], {
    categories: categories,
    filterQuery: searchQuery,
    rowCategories: value.rowsCategories,
    columnCategories: value.columnsCategories,
    valCategories: value.valueCategory,
    onSelect: function onSelect(categories) {
      return updateOptionsAfterSelect(Object(_CrossTabCtrl__WEBPACK_IMPORTED_MODULE_5__["getCategoriesOptions"])(context), categories, value, _onChange);
    },
    onChangeOrder: function onChangeOrder(catByTypes) {
      return updateOptionsAfterChangeOrder(catByTypes, value, _onChange);
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ControlledCollapse"], {
    label: "Field filters",
    collapsible: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PivotCategoriesFilter__WEBPACK_IMPORTED_MODULE_8__["PivotCategoriesFilter"], {
    context: context,
    rowCategories: value.rowsCategories,
    columnCategories: value.columnsCategories,
    categoriesValueFilter: value.categoriesValueFilter,
    value: value,
    onSelect: _onChange,
    onChange: function onChange(cat, val, checked) {
      return updateCategoriesValueFilter(cat, val, checked, value, _onChange);
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styles.sortCollapseWrapper
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ControlledCollapse"], {
    label: "Sort order",
    collapsible: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(labelStyles.description)
  }, 'Select the sorting order for columns'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: '5px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    options: categoriesSortingOptions,
    value: value.colOrder,
    onChange: function onChange(selectedOrder) {
      return updateOptionsAfterChangeColsValuesOrder(selectedOrder, value, _onChange);
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(labelStyles.description),
    style: {
      marginTop: '20px'
    }
  }, 'Select the sorting order for rows'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      marginTop: '5px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    options: categoriesSortingOptions,
    value: value.rowOrder,
    onChange: function onChange(selectedOrder) {
      return updateOptionsAfterChangeRowsValuesOrder(selectedOrder, value, _onChange);
    }
  })))));
};
var categoriesSortingOptions = [{
  value: _types__WEBPACK_IMPORTED_MODULE_7__["SortingOrders"].NONE,
  label: 'None'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_7__["SortingOrders"].KEY_ASC,
  label: 'Key asc'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_7__["SortingOrders"].KEY_DESC,
  label: 'Key desc'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_7__["SortingOrders"].TOTAL_ASC,
  label: 'Totals asc'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_7__["SortingOrders"].TOTAL_DESC,
  label: 'Totals desc'
}];
/* istanbul ignore next */
var getStyles = function getStyles(theme) {
  return {
    icon: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), theme.palette.gray33),
    wrapper: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      flex-direction: column;\n    "], ["\n      display: flex;\n      flex-direction: column;\n    "]))),
    searchClear: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n    "], ["\n      color: ", ";\n      cursor: pointer;\n    "])), theme.palette.gray60),
    sortCollapseWrapper: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      > div > div:nth-child(2) {\n        overflow: inherit;\n        > div:nth-child(2) {\n          overflow: inherit;\n        }\n      }\n    "], ["\n      > div > div:nth-child(2) {\n        overflow: inherit;\n        > div:nth-child(2) {\n          overflow: inherit;\n        }\n      }\n    "])))
  };
};
/*
 * remove categories if not exist in plugin data (for renaming case or different categories in different time range)
 */
var updateCategoriesAccordingToRecievedData = function updateCategoriesAccordingToRecievedData(value, categories, context) {
  function updatedCategory(cat) {
    var catMap = [];
    cat.forEach(function (element) {
      var found = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(categories, ['name', element === null || element === void 0 ? void 0 : element.name]);
      found && catMap.push(found);
    });
    return catMap;
  }
  value.rowsCategories = updatedCategory(value.rowsCategories);
  value.columnsCategories = updatedCategory(value.columnsCategories);
  value.valueCategory = updatedCategory(value.valueCategory);
  value.categoriesValues = Object(_CrossTabCtrl__WEBPACK_IMPORTED_MODULE_5__["getCategoriesUniqueValues"])(context, categories);
};
/*
 * Updated categories objects (rows, columns, and value) after selection
 */
var updateOptionsAfterSelect = function updateOptionsAfterSelect(catOpts, categories, options, onChange) {
  var colCategories = [];
  var rowCategories = [];
  var valCategories = [];
  categories.forEach(function (cat) {
    switch (cat.type) {
      case CategoryType.COLUMN:
        {
          var found = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(catOpts, ['name', cat === null || cat === void 0 ? void 0 : cat.name]);
          found && colCategories.push(found);
          break;
        }
      case CategoryType.ROW:
        {
          var found = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(catOpts, ['name', cat === null || cat === void 0 ? void 0 : cat.name]);
          found && rowCategories.push(found);
          break;
        }
      case CategoryType.VALUE:
        {
          var found = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(catOpts, ['name', cat === null || cat === void 0 ? void 0 : cat.name]);
          found && valCategories.push(found);
          break;
        }
    }
  });
  options.rowsCategories = rowCategories;
  options.columnsCategories = colCategories;
  options.valueCategory = valCategories;
  onChange(options);
};
/*
 * Updated categories order in each section (rows, columns, and value)
 */
var updateOptionsAfterChangeOrder = function updateOptionsAfterChangeOrder(catByTypes, options, onChange) {
  var colCategories = [];
  var rowCategories = [];
  var valCategories = [];
  Object.keys(catByTypes).forEach(function (catType) {
    switch (catType) {
      case CategoryType.COLUMN:
        {
          catByTypes[catType].forEach(function (cat) {
            return colCategories.push(cat.key);
          });
          break;
        }
      case CategoryType.ROW:
        {
          catByTypes[catType].forEach(function (cat) {
            return rowCategories.push(cat.key);
          });
          break;
        }
      case CategoryType.VALUE:
        {
          catByTypes[catType].forEach(function (cat) {
            return valCategories.push(cat.key);
          });
          break;
        }
    }
  });
  options.rowsCategories = rowCategories;
  options.columnsCategories = colCategories;
  options.valueCategory = valCategories;
  onChange(options);
};
/*
 * Updated 'rowOrder' object in options
 */
var updateOptionsAfterChangeRowsValuesOrder = function updateOptionsAfterChangeRowsValuesOrder(rowOrder, options, onChange) {
  options.rowOrder = rowOrder.value;
  onChange(options);
};
/*
 * Updated 'colOrder' object in options
 */
var updateOptionsAfterChangeColsValuesOrder = function updateOptionsAfterChangeColsValuesOrder(colOrder, options, onChange) {
  options.colOrder = colOrder.value;
  onChange(options);
};
/*
 * Updated 'categoriesValueFilter' object to hide categories values in the pivot table
 */
var updateCategoriesValueFilter = function updateCategoriesValueFilter(cat, val, selected, options, onChange) {
  if (!options.categoriesValueFilter[cat]) {
    options.categoriesValueFilter[cat] = [];
  }
  var index = options.categoriesValueFilter[cat].indexOf(val);
  if (!selected) {
    if (index === -1) {
      options.categoriesValueFilter[cat].push(val);
    }
  } else {
    if (index !== -1) {
      options.categoriesValueFilter[cat].splice(index, 1);
    }
  }
  onChange(options);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./customPanelEditors/PivotCategoriesFilter.tsx":
/*!******************************************************!*\
  !*** ./customPanelEditors/PivotCategoriesFilter.tsx ***!
  \******************************************************/
/*! exports provided: PivotCategoriesFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotCategoriesFilter", function() { return PivotCategoriesFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PivotCategoriesFilterItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PivotCategoriesFilterItem */ "./customPanelEditors/PivotCategoriesFilterItem.tsx");
/* harmony import */ var _CrossTabCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CrossTabCtrl */ "./CrossTabCtrl.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./styles.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_6__);







var PivotCategoriesFilter = function PivotCategoriesFilter(_a) {
  var context = _a.context,
    rowCategories = _a.rowCategories,
    columnCategories = _a.columnCategories,
    categoriesValueFilter = _a.categoriesValueFilter,
    value = _a.value,
    onSelect = _a.onSelect,
    onChange = _a.onChange;
  var categoriesValues = Object(_CrossTabCtrl__WEBPACK_IMPORTED_MODULE_3__["getCategoriesUniqueValues"])(context, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(rowCategories)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(columnCategories)));
  return Object.keys(categoriesValues).length > 0 ? renderFilterItems(categoriesValues, categoriesValueFilter, onChange, onSelect, value) : renderEmptyFilterItemsList();
};
var renderFilterItems = function renderFilterItems(categoriesValues, categoriesValueFilter, onChange, onSelect, value) {
  /* istanbul ignore next */
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maxHeight: '240px',
      overflowY: 'auto'
    }
  }, Object.keys(categoriesValues).map(function (key) {
    value.filterable[key] = {
      values: categoriesValues[key].values,
      isShow: value.filterable[key] ? value.filterable[key].isShow : false
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key,
      style: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 0.9
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PivotCategoriesFilterItem__WEBPACK_IMPORTED_MODULE_2__["FilterItem"], {
      key: key,
      category: key,
      values: categoriesValues[key].values,
      categoriesValueFilter: categoriesValueFilter[key] ? categoriesValueFilter[key] : [],
      onChange: onChange
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 0.1,
        marginLeft: '15px',
        marginTop: '18px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      value: value.filterable[key].isShow,
      onChange: function onChange(e) {
        value.filterable[key].isShow = e.currentTarget.checked;
        onSelect(value);
      }
    })))
    // )
    ;
  }));
};

var renderEmptyFilterItemsList = function renderEmptyFilterItemsList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var labelStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_5__["getLabelStyles"])(theme);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["cx"])(labelStyles.description)
  }, 'No Row or Column categories selected');
};

/***/ }),

/***/ "./customPanelEditors/PivotCategoriesFilterItem.tsx":
/*!**********************************************************!*\
  !*** ./customPanelEditors/PivotCategoriesFilterItem.tsx ***!
  \**********************************************************/
/*! exports provided: FilterItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItem", function() { return FilterItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./styles.tsx");





var FilterItem = function FilterItem(_a) {
  var category = _a.category,
    values = _a.values,
    categoriesValueFilter = _a.categoriesValueFilter,
    onChange = _a.onChange;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var style = Object(_styles__WEBPACK_IMPORTED_MODULE_4__["getCategoryFilterStyles"])(theme);
  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false), 2),
    isOpen = _b[0],
    setIsOpen = _b[1];
  /* istanbul ignore next */
  var onClickToggle = function onClickToggle() {
    setIsOpen(!isOpen);
  };
  /* istanbul ignore next */
  var onToggleChecked = function onToggleChecked(e, val) {
    onChange(category, val, e.currentTarget.checked);
  };
  /* istanbul ignore next */
  var renderFilterItemValue = function renderFilterItemValue(val) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: val
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: !categoriesValueFilter.includes(val),
      label: val,
      onChange: function onChange(e) {
        return onToggleChecked(e, val);
      }
    }));
  };
  /* istanbul ignore next */
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])([style.collapse, 'panel-container'])
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: style.header,
    onClick: onClickToggle
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: style.headerButtons
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: isOpen ? 'angle-up' : 'angle-down'
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])([style.headerLabel])
  }, category)), isOpen && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])([style.collapseBody])
  }, values.map(function (val) {
    return renderFilterItemValue(val);
  })));
};
FilterItem.displayName = 'FilterItem';

/***/ }),

/***/ "./customPanelEditors/PivotCategoriesPicker.tsx":
/*!******************************************************!*\
  !*** ./customPanelEditors/PivotCategoriesPicker.tsx ***!
  \******************************************************/
/*! exports provided: PivotCategoriesPicker, moveUp, moveDown, onDrop, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotCategoriesPicker", function() { return PivotCategoriesPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUp", function() { return _moveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveDown", function() { return _moveDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDrop", function() { return _onDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return _removeItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./styles.tsx");
/* harmony import */ var _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PivotCategoriesEditor */ "./customPanelEditors/PivotCategoriesEditor.tsx");
/* harmony import */ var _PivotCategoryItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PivotCategoryItem */ "./customPanelEditors/PivotCategoryItem.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var PivotCategoriesPicker = function PivotCategoriesPicker(_a) {
  var categories = _a.categories,
    filterQuery = _a.filterQuery,
    rowCategories = _a.rowCategories,
    columnCategories = _a.columnCategories,
    valCategories = _a.valCategories,
    onSelect = _a.onSelect,
    onChangeOrder = _a.onChangeOrder;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var labelStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_4__["getLabelStyles"])(theme);
  var allCategories = [];
  allCategories = createCategoriesObject(categories, filterQuery, rowCategories, columnCategories, valCategories);
  var catByTypes = {
    row: [],
    col: [],
    val: [],
    none: []
  };
  allCategories.forEach(function (t) {
    var catType = t.type;
    var index = 0;
    var quantity = 0;
    if (catType === _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].COLUMN) {
      index = columnCategories.indexOf(t.name);
      quantity = columnCategories.length;
    } else if (catType === _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].ROW) {
      index = rowCategories.indexOf(t.name);
      quantity = rowCategories.length;
    }
    /* istanbul ignore next */
    catByTypes[catType].push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PivotCategoryItem__WEBPACK_IMPORTED_MODULE_6__["PivotCategoryItem"], {
      key: t.name,
      categoryName: t.name,
      catType: catType,
      index: index,
      quantity: quantity,
      onDragStart: function onDragStart(e) {
        return _onDragStart(e, t.name);
      },
      moveUp: function moveUp() {
        return _moveUp(t, catByTypes, onChangeOrder);
      },
      moveDown: function moveDown() {
        return _moveDown(t, catByTypes, onChangeOrder);
      },
      removeItem: function removeItem() {
        return _removeItem(t, allCategories, onSelect);
      }
    }));
  });
  /* istanbul ignore next */
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "not-selected-cat-area",
    style: {
      display: 'flex',
      padding: '5px 28px 0px 0px',
      flexWrap: 'wrap'
    },
    onDragOver: function onDragOver(e) {
      return _onDragOver(e);
    },
    onDrop: function onDrop(e) {
      _onDrop(e, _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE, allCategories, onSelect);
    }
  }, catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE]), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(labelStyles.description),
    style: {
      marginTop: '20px'
    }
  }, 'Column fields:'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "column-cat-area",
    style: {
      minHeight: '40px',
      maxHeight: '140px',
      overflowY: 'auto'
    },
    onDragOver: function onDragOver(e) {
      return _onDragOver(e);
    },
    onDrop: function onDrop(e) {
      _onDrop(e, _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].COLUMN, allCategories, onSelect);
    }
  }, catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].COLUMN].length > 0 && catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].COLUMN]), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(labelStyles.description),
    style: {
      marginTop: '20px'
    }
  }, 'Row fields:'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "row-cat-area",
    style: {
      minHeight: '40px',
      maxHeight: '140px',
      overflowY: 'auto'
    },
    onDragOver: function onDragOver(e) {
      return _onDragOver(e);
    },
    onDrop: function onDrop(e) {
      _onDrop(e, _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].ROW, allCategories, onSelect);
    }
  }, catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].ROW].length > 0 && catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].ROW]), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(labelStyles.description),
    style: {
      marginTop: '20px'
    }
  }, 'Value field:'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "value-cat-area",
    style: {
      height: '40px',
      maxHeight: '140px',
      overflowY: 'auto'
    },
    onDragOver: function onDragOver(e) {
      return _onDragOver(e);
    },
    onDrop: function onDrop(e) {
      return _onDrop(e, _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].VALUE, allCategories, onSelect);
    }
  }, catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].VALUE].length > 0 && catByTypes[_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].VALUE]));
};
/**
 * Returns categories list for select.
 * Remove selected (columns, rows, and value) categories and filter by search query.
 */
var createCategoriesObject = function createCategoriesObject(categories, filterQuery, rowCategories, columnCategories, valCategories) {
  var catObject = [];
  var selectedCategories = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(rowCategories)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(columnCategories)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(valCategories));
  var unselectedCategories = categories.filter(function (cat) {
    return !selectedCategories.includes(cat);
  });
  var filteredCategories = unselectedCategories.filter(function (cat) {
    return cat.name.toLowerCase().includes(filterQuery.toLowerCase());
  });
  rowCategories.forEach(function (cat) {
    cat && catObject.push({
      name: cat.name,
      type: _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].ROW
    });
  });
  columnCategories.forEach(function (cat) {
    cat && catObject.push({
      name: cat.name,
      type: _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].COLUMN
    });
  });
  valCategories.forEach(function (cat) {
    cat && catObject.push({
      name: cat.name,
      type: _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].VALUE
    });
  });
  filteredCategories.forEach(function (cat) {
    cat && catObject.push({
      name: cat.name,
      type: _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE
    });
  });
  return catObject;
};
/* istanbul ignore next */
var _onDragStart = function _onDragStart(ev, id) {
  var _a, _b;
  ev.dataTransfer.setData('id', id);
  (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('dragFrom', (_b = ev.target.parentElement) === null || _b === void 0 ? void 0 : _b.id);
};
/* istanbul ignore next */
var _onDragOver = function _onDragOver(ev) {
  ev.preventDefault();
};
/**
 * Update category position (move up) in categories list (row and column categories).
 */
var _moveUp = function _moveUp(category, catByTypes, onChangeOrder) {
  moveArrayItemToNewIndex(category, true, catByTypes, onChangeOrder);
};
/**
 * Update category position (move down) in categories list (row and column categories).
 */

var _moveDown = function _moveDown(category, catByTypes, onChangeOrder) {
  moveArrayItemToNewIndex(category, false, catByTypes, onChangeOrder);
};
/**
 * Set/Update category type in category object after drop.
 */

var _onDrop = function _onDrop(ev, type, allCategories, onSelect) {
  var _a, _b, _c, _d;
  if (((_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('dragFrom')) === ((_b = ev.currentTarget) === null || _b === void 0 ? void 0 : _b.id)) {
    return (_c = ev.preventDefault) === null || _c === void 0 ? void 0 : _c.call(ev);
  }
  var id = (_d = ev.dataTransfer) === null || _d === void 0 ? void 0 : _d.getData('id');
  var filteredCategories = [];
  allCategories.forEach(function (cat) {
    var itemClone = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["clone"])(cat);
    if (itemClone.name === id) {
      itemClone.type = type;
    }
    !Object(lodash__WEBPACK_IMPORTED_MODULE_7__["find"])(filteredCategories, function (el) {
      return el.name === itemClone.name && el.type === itemClone.type;
    }) && filteredCategories.push(itemClone);
  });
  onSelect(filteredCategories);
};
/**
 * Update category position in categories list (row and column categories).
 */

var moveArrayItemToNewIndex = function moveArrayItemToNewIndex(category, up, catByTypes, onChangeOrder) {
  var arr = catByTypes[category.type];
  var current_index = arr.findIndex(function (item) {
    return item.key === category.name;
  });
  var new_index = up ? current_index - 1 : current_index + 1;
  arr.splice(new_index, 0, arr.splice(current_index, 1)[0]);
  catByTypes[category.type] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(arr));
  onChangeOrder(catByTypes);
};
/**
 * Remove category type (set to 'none) from category object.
 */
var _removeItem = function _removeItem(category, allCategories, onSelect) {
  var filteredCategories = allCategories.filter(function (cat) {
    if (cat.name === category.name) {
      cat.type = _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE;
    }
    return cat;
  });
  onSelect(filteredCategories);
};


/***/ }),

/***/ "./customPanelEditors/PivotCategoryItem.tsx":
/*!**************************************************!*\
  !*** ./customPanelEditors/PivotCategoryItem.tsx ***!
  \**************************************************/
/*! exports provided: PivotCategoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotCategoryItem", function() { return PivotCategoryItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./styles.tsx");
/* harmony import */ var _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PivotCategoriesEditor */ "./customPanelEditors/PivotCategoriesEditor.tsx");






var PivotCategoryItem = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PivotCategoryItem, _super);
  function PivotCategoryItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PivotCategoryItem.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        padding: '5px',
        width: 'fit-content'
      },
      draggable: true,
      onDragStart: this.props.onDragStart
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CatItem, {
      categoryName: this.props.categoryName,
      catType: this.props.catType,
      index: this.props.index,
      quantity: this.props.quantity,
      moveUp: this.props.moveUp,
      moveDown: this.props.moveDown,
      removeItem: this.props.removeItem
    }));
  };
  return PivotCategoryItem;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

var CatItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_a, ref) {
  var categoryName = _a.categoryName,
    catType = _a.catType,
    index = _a.index,
    quantity = _a.quantity,
    moveUp = _a.moveUp,
    moveDown = _a.moveDown,
    removeItem = _a.removeItem,
    children = _a.children,
    otherProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["categoryName", "catType", "index", "quantity", "moveUp", "moveDown", "removeItem", "children"]);
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var buttonStyles = Object(_styles__WEBPACK_IMPORTED_MODULE_4__["getButtonStyles"])({
    theme: theme,
    size: 'sm',
    variant: 'secondary',
    hasText: children !== undefined,
    hasIcon: false
  });
  var trashIconStyle = Object(_styles__WEBPACK_IMPORTED_MODULE_4__["getTrashIconStyle"])(theme);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(buttonStyles.button)
  }, otherProps, {
    ref: ref
  }), catType === _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE || catType === _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].VALUE || quantity < 2 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, catType !== _PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_5__["CategoryType"].NONE ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    className: trashIconStyle.trashIcon,
    name: "trash-alt",
    onClick: removeItem
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    style: {
      marginLeft: '10px',
      cursor: 'grab'
    }
  }, categoryName)) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    style: {
      cursor: 'grab'
    }
  }, categoryName)) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      marginRight: '5px'
    },
    className: trashIconStyle.trashIcon,
    name: "trash-alt",
    onClick: removeItem
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      lineHeight: '0.9',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      fontSize: '10px',
      display: index > 0 ? '' : 'none'
    },
    onClick: moveUp
  }, "\u25B2"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      fontSize: '10px',
      display: index < quantity - 1 ? '' : 'none'
    },
    onClick: moveDown
  }, "\u25BC")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    style: {
      marginLeft: '10px',
      cursor: 'grab'
    }
  }, categoryName)));
});
CatItem.displayName = 'CatItem';

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var CrossTabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! CrossTabPanel */ "./CrossTabPanel.tsx");
/* harmony import */ var _customPanelEditors_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customPanelEditors/PivotCategoriesEditor */ "./customPanelEditors/PivotCategoriesEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./types.ts");
var _a;





var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["PanelPlugin"](CrossTabPanel__WEBPACK_IMPORTED_MODULE_2__["CrossTabPanel"]).useFieldConfig({
  standardOptions: (_a = {}, _a[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Thresholds] = {
    defaultValue: 0
  }, _a[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Links] = {
    defaultValue: 0
  }, _a[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Mappings] = {
    defaultValue: null
  }, _a[_grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Decimals] = {
    defaultValue: 0
  }, _a),
  disableStandardOptions: [_grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Min, _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Max, _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].Color, _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].NoValue, _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldConfigProperty"].DisplayName, 'fieldMinMax'],
  useCustomConfig: function useCustomConfig(builder) {
    /* istanbul ignore next */
    builder.addSelect({
      path: 'cellDisplayMode',
      name: 'Cell display mode',
      description: 'Color text or background',
      defaultValue: _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].None,
      settings: {
        options: [{
          value: _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].None,
          label: 'No coloring'
        }, {
          value: _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].ColorText,
          label: 'Color text'
        }, {
          value: _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].ColorBackground,
          label: 'Color background'
        }]
      }
    });
  }
}).setPanelOptions(function (builder) {
  /* istanbul ignore next */
  return builder.addSelect({
    path: 'aggregatorType',
    name: 'Aggregate function',
    description: 'Select the aggregate function',
    defaultValue: 'Sum',
    settings: {
      options: [],
      getOptions: function getOptions(context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
          var options;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            options = [];
            Object.keys(_types__WEBPACK_IMPORTED_MODULE_4__["AggregatorType"]).forEach(function (key) {
              // @ts-ignore
              options.push({
                value: _types__WEBPACK_IMPORTED_MODULE_4__["AggregatorType"][key],
                label: _types__WEBPACK_IMPORTED_MODULE_4__["AggregatorType"][key]
              });
            });
            return [2 /*return*/, options];
          });
        });
      }
    }
  }).addNumberInput({
    path: 'colMax',
    name: 'Max columns allowed',
    description: 'Set maximum number of columns allowed for the pivot table',
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].DEFAULT_COL_LIMIT,
    settings: {
      max: _types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].VIEW_MODE_NODE_LIMIT,
      min: 1
    }
  }).addNumberInput({
    path: 'rowMax',
    name: 'Max rows allowed',
    description: 'Set maximum number of rows allowed for the pivot table',
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].DEFAULT_ROW_LIMIT,
    settings: {
      max: _types__WEBPACK_IMPORTED_MODULE_4__["LIMITS"].VIEW_MODE_NODE_LIMIT,
      min: 1
    }
  }).addCustomEditor({
    id: 'categories',
    path: 'categories',
    name: 'Pivot categories',
    description: 'Select the categories that will appear in each section (row, column, and value)',
    editor: _customPanelEditors_PivotCategoriesEditor__WEBPACK_IMPORTED_MODULE_3__["PivotCategoriesEditor"],
    defaultValue: {
      rowsCategories: [],
      columnsCategories: [],
      valueCategory: [],
      categoriesValueFilter: {},
      rowOrder: _types__WEBPACK_IMPORTED_MODULE_4__["SortingOrders"].KEY_ASC,
      colOrder: 'none',
      filterable: {}
    }
  }).addBooleanSwitch({
    path: 'showTotals',
    name: 'Show the Total columns and row',
    category: ['Total'],
    description: 'Show/Hide Total columns and row values',
    defaultValue: true
  }).addBooleanSwitch({
    path: 'showRowPercentage',
    name: 'Show Percentage of the Total row',
    category: ['Total'],
    description: 'Show/Hide Percentage of the Total row',
    defaultValue: false,
    showIf: function showIf(currentConfig) {
      return !currentConfig.aggregatorType.includes('Sum as') && !currentConfig.aggregatorType.includes('Count as') && currentConfig.showTotals && currentConfig.categories.valueCategory.length < 2;
    }
  }).addBooleanSwitch({
    path: 'showColumnPercentage',
    name: 'Show Percentage of the Total column',
    category: ['Total'],
    description: 'Show/Hide Percentage of the Total column',
    defaultValue: false,
    showIf: function showIf(currentConfig) {
      return !currentConfig.aggregatorType.includes('Sum as') && !currentConfig.aggregatorType.includes('Count as') && currentConfig.showTotals && currentConfig.categories.valueCategory.length < 2;
    }
  }).addBooleanSwitch({
    path: 'showSubTotals',
    name: 'Show the Subtotal row',
    category: ['Total'],
    description: 'Show/Hide Subtotal row values',
    defaultValue: false,
    showIf: function showIf(currentConfig) {
      // Hide SubTotal and reset if Total is disabled. Also ther eis no point if sort order is Total Asc and Desc
      // because we loss the context of calculation and showing the subtotal hence best thing will be to just disable it.
      var showSub = currentConfig.showTotals && currentConfig.categories.rowsCategories.length > 1 && currentConfig.categories.rowOrder !== _types__WEBPACK_IMPORTED_MODULE_4__["SortingOrders"].TOTAL_ASC && currentConfig.categories.rowOrder !== _types__WEBPACK_IMPORTED_MODULE_4__["SortingOrders"].TOTAL_DESC;
      if (!showSub) {
        currentConfig.showSubTotals = false;
      }
      return showSub;
    }
  }).addSelect({
    path: 'subTotalColumn',
    name: 'Apply Subtotal for',
    category: ['Total'],
    description: 'Select the column for which you want to apply the Subtotal',
    defaultValue: 0,
    settings: {
      options: [],
      getOptions: function getOptions(context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
          var options, rowsCategories;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            options = [];
            rowsCategories = context.options.categories.rowsCategories;
            rowsCategories.forEach(function (category, index) {
              // Ignore the last field because we don't show the subtotal for last column.
              if (index === rowsCategories.length - 1) {
                return;
              }
              options.push({
                value: index,
                label: category.displayName
              });
            });
            // If field is removed from rowFields then default 0 field should be set as subTotal column.
            if (!options.hasOwnProperty(context.options.subTotalColumn)) {
              context.options.subTotalColumn = 0;
            }
            return [2 /*return*/, options];
          });
        });
      }
    },
    showIf: function showIf(currentConfig) {
      return currentConfig.showTotals && currentConfig.showSubTotals && currentConfig.categories.rowsCategories.length > 1;
    }
  }).addColorPicker({
    path: 'subTotalHeaderBgColor',
    name: 'Subtotal header background color',
    category: ['Total'],
    description: 'Select color for Subtotal header background',
    showIf: function showIf(currentConfig) {
      return currentConfig.showTotals && currentConfig.showSubTotals && currentConfig.categories.rowsCategories.length > 1;
    }
  }).addColorPicker({
    path: 'headerColor',
    name: 'Header text color',
    category: ['Text'],
    description: 'Select color for header text'
  }).addColorPicker({
    path: 'headerBgColor',
    category: ['Background'],
    name: 'Header background color',
    description: 'Select color for header background'
  }).addRadio({
    path: 'columnTextAlign',
    name: 'Column text align',
    category: ['Fields alignment'],
    defaultValue: 'left',
    settings: {
      options: [{
        value: 'left',
        label: 'Left'
      }, {
        value: 'center',
        label: 'Center'
      }, {
        value: 'right',
        label: 'Right'
      }]
    }
  }).addRadio({
    path: 'rowTextAlign',
    name: 'Row text align',
    category: ['Fields alignment'],
    defaultValue: 'left',
    settings: {
      options: [{
        value: 'left',
        label: 'Left'
      }, {
        value: 'center',
        label: 'Center'
      }, {
        value: 'right',
        label: 'Right'
      }]
    }
  }).addRadio({
    path: 'valueTextAlign',
    name: 'Value text align',
    category: ['Fields alignment'],
    defaultValue: 'right',
    settings: {
      options: [{
        value: 'left',
        label: 'Left'
      }, {
        value: 'center',
        label: 'Center'
      }, {
        value: 'right',
        label: 'Right'
      }]
    }
  });
});

/***/ }),

/***/ "./pivotTable/TableRenderers.tsx":
/*!***************************************!*\
  !*** ./pivotTable/TableRenderers.tsx ***!
  \***************************************/
/*! exports provided: PivotTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotTable", function() { return PivotTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var CrossTabCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! CrossTabCtrl */ "./CrossTabCtrl.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./styles.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./types.ts");
/* harmony import */ var _pivotUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pivotUtils */ "./pivotTable/pivotUtils.js");
/* harmony import */ var _runTimeFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runTimeFilter */ "./pivotTable/runTimeFilter.tsx");











// helper function for setting row/col-span in pivotTableRenderer
var spanSize = function spanSize(arr, i, j) {
  var x;
  var len = 0;
  var noDraw = i !== 0 ? true : false;
  while (i + len < arr.length) {
    var asc1 = void 0,
      end1 = void 0;
    var stop = false;
    for (x = 0, end1 = j, asc1 = end1 >= 0; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) {
      if (noDraw && arr[i - 1][x] !== arr[i][x]) {
        noDraw = false;
      }
      if (arr[i][x] !== arr[i + len][x]) {
        stop = true;
      }
    }
    if (noDraw) {
      return -1;
    }
    if (stop) {
      break;
    }
    len++;
  }
  return len;
};
var getDisplayValue = function getDisplayValue(_a, val) {
  var unit = _a.unit,
    decimals = _a.decimals,
    aggregatorType = _a.aggregatorType,
    theme = _a.theme;
  var dec = Object(CrossTabCtrl__WEBPACK_IMPORTED_MODULE_4__["isDecimalAllowed"])(aggregatorType) ? decimals : 0;
  var displayProcessor = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["getDisplayProcessor"])({
    field: {
      config: {
        unit: unit || 'string',
        decimals: dec
      }
    },
    theme: theme
  });
  var displayValueObj = displayProcessor(('' + val).replace(/,/g, ''));
  var displayVal = displayValueObj && displayValueObj.text !== 'NaN' ? Object(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["formattedValueToString"])(displayValueObj) : val;
  var displayNum = ('' + displayVal).replace(/,/g, '');
  return !isNaN(displayNum) ? Object(_pivotUtils__WEBPACK_IMPORTED_MODULE_9__["addSeparators"])((1 * displayNum).toFixed(dec), ',', '.') : displayVal;
};
var getColorValue = function getColorValue(options, val, theme) {
  var _a, _b;
  var color = '';
  if (!options) {
    return color;
  }
  if ((_a = options[val]) === null || _a === void 0 ? void 0 : _a.color) {
    return theme.visualization.getColorByName(options[val].color);
  }
  for (var k in options) {
    var c = options[k].text === val ? (_b = options[k]) === null || _b === void 0 ? void 0 : _b.color : undefined;
    if (c) {
      return theme.visualization.getColorByName(c);
    }
  }
  return color;
};
var getDataLinkForHeaders = function getDataLinkForHeaders(val, series, dataLinks, fieldName) {
  var _a;
  if (!fieldName) {
    return undefined;
  }
  var fieldInContext = series.fields.find(function (i) {
    return i.name === fieldName;
  });
  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(dataLinks, fieldInContext === null || fieldInContext === void 0 ? void 0 : fieldInContext.config.links)) {
    var link = (_a = fieldInContext === null || fieldInContext === void 0 ? void 0 : fieldInContext.getLinks) === null || _a === void 0 ? void 0 : _a.call(fieldInContext, {
      calculatedValue: {
        text: val.replace(/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, ' '),
        numeric: fieldInContext.type === 'time' ? +new Date(val) : Number(val)
      }
    })[0];
    return link;
  }
  return undefined;
};
var getFormattedVal = function getFormattedVal(val, series, theme, fieldName) {
  var _a, _b, _c, _d, _e;
  if (!fieldName) {
    return {
      val: val,
      cssProps: {}
    };
  }
  var fieldInContext = series.fields.find(function (i) {
    return i.name === fieldName;
  });
  if (!(fieldInContext === null || fieldInContext === void 0 ? void 0 : fieldInContext.display)) {
    return {
      val: val,
      cssProps: {}
    };
  }
  var cssProps = {};
  var fColor = getColorValue((_c = (_b = (_a = fieldInContext === null || fieldInContext === void 0 ? void 0 : fieldInContext.config) === null || _a === void 0 ? void 0 : _a.mappings) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.options, val, theme);
  if (fColor) {
    switch ((_e = (_d = fieldInContext === null || fieldInContext === void 0 ? void 0 : fieldInContext.config) === null || _d === void 0 ? void 0 : _d.custom) === null || _e === void 0 ? void 0 : _e.cellDisplayMode) {
      case _types__WEBPACK_IMPORTED_MODULE_8__["CellDisplayMode"].ColorText:
        cssProps.color = fColor;
        break;
      case _types__WEBPACK_IMPORTED_MODULE_8__["CellDisplayMode"].ColorBackground:
        cssProps.backgroundColor = fColor;
        break;
      default:
        break;
    }
  }
  return {
    val: val,
    cssProps: cssProps
  };
};
var PivotTable = react__WEBPACK_IMPORTED_MODULE_6___default.a.memo(function (_a) {
  var _b;
  var data = _a.data,
    width = _a.width,
    height = _a.height,
    categories = _a.categories,
    aggregatorType = _a.aggregatorType,
    fieldConfig = _a.fieldConfig,
    showTotals = _a.showTotals,
    showSubTotals = _a.showSubTotals,
    subTotalColumn = _a.subTotalColumn,
    replaceVariables = _a.replaceVariables,
    showRowPercentage = _a.showRowPercentage,
    showColumnPercentage = _a.showColumnPercentage,
    hideEmpty = _a.hideEmpty,
    _onChange = _a.onChange,
    rowMax = _a.rowMax,
    colMax = _a.colMax,
    colorOptions = _a.colorOptions,
    series = _a.series,
    textAlign = _a.textAlign;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var theme2 = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme2"])();
  var pivotProp = {
    width: width,
    height: height,
    data: data,
    rows: categories.rowsCategories,
    cols: categories.columnsCategories,
    vals: categories.valueCategory,
    rowOrder: categories.rowOrder,
    colOrder: categories.colOrder,
    valueFilter: categories.categoriesValueFilter,
    aggregatorType: aggregatorType,
    showTotals: showTotals,
    showSubTotals: showSubTotals,
    subTotalColumn: subTotalColumn,
    showRowPercentage: showRowPercentage,
    showColumnPercentage: showColumnPercentage,
    hideEmpty: hideEmpty,
    fieldConfig: fieldConfig,
    theme: theme,
    rowMax: rowMax,
    colMax: colMax,
    headerColor: colorOptions.headerColor,
    headerBgColor: colorOptions.headerBgColor,
    subTotalHeaderBgColor: colorOptions.subTotalHeaderBgColor
  };
  var pivotData = new _pivotUtils__WEBPACK_IMPORTED_MODULE_9__["PivotData"](pivotProp);
  pivotProp = pivotData.props;
  var colAttrs = pivotProp.cols;
  var rowAttrs = pivotProp.rows;
  var rowKeys = pivotData.getRowKeys();
  var colKeys = pivotData.getColKeys();
  var _c = pivotData.getHideStatus(),
    colsHidden = _c.colsHidden,
    rowsHidden = _c.rowsHidden;
  var grandTotalAggregator = pivotData.getAggregator([], []);
  var tableContainerWidth = pivotProp.width;
  var tableContainerHeight = pivotProp.height;
  var cellDisplayMode = fieldConfig.defaults.custom.cellDisplayMode;
  var thresholds = fieldConfig.defaults.thresholds;
  var dataLinks = (_b = fieldConfig.defaults.links) !== null && _b !== void 0 ? _b : [];
  var filterable = categories.filterable;
  var subTotalColumnIndex = pivotProp.subTotalColumn;
  // deleting /resetting unwanted memory
  delete pivotData.aggregator;
  var styles = Object(_styles__WEBPACK_IMPORTED_MODULE_7__["getTableStyles"])(theme, colorOptions);
  var getFieldStyles = function getFieldStyles(field, isSubTotalRow) {
    return Object(_styles__WEBPACK_IMPORTED_MODULE_7__["getFieldStyle"])(field, theme2, {
      column: {
        textAlign: textAlign.columnTextAlign,
        color: colorOptions.headerColor,
        background: colorOptions.headerBgColor
      },
      row: {
        textAlign: textAlign.rowTextAlign,
        color: colorOptions.headerColor,
        background: isSubTotalRow ? colorOptions.subTotalHeaderBgColor : colorOptions.headerBgColor
      },
      value: {
        textAlign: textAlign.valueTextAlign
      }
    });
  };
  if (aggregatorType.includes('Sum as') || aggregatorType.includes('Count as') || categories.valueCategory.length > 1) {
    showRowPercentage = false;
    showColumnPercentage = false;
  }
  var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}), 2),
    isColPopoverVisible = _d[0],
    setColPopoverVisible = _d[1];
  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}), 2),
    isRowPopoverVisible = _e[0],
    setRowPopoverVisible = _e[1];
  /* istanbul ignore next*/
  var onShowColPopover = function onShowColPopover(index) {
    return function (event) {
      var _a;
      setColPopoverVisible(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, isColPopoverVisible), (_a = {}, _a[index] = true, _a)));
    };
  };
  var onCloseColPopover = function onCloseColPopover(index) {
    var _a;
    setColPopoverVisible(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, isColPopoverVisible), (_a = {}, _a[index] = false, _a)));
  };
  var onShowRowPopover = function onShowRowPopover(index) {
    return function (event) {
      var _a;
      setRowPopoverVisible(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, isRowPopoverVisible), (_a = {}, _a[index] = true, _a)));
    };
  };
  var onCloseRowPopover = function onCloseRowPopover(index) {
    var _a;
    setRowPopoverVisible(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, isRowPopoverVisible), (_a = {}, _a[index] = false, _a)));
  };
  var getDisplayValueWrapper = react__WEBPACK_IMPORTED_MODULE_6___default.a.useCallback(function (val) {
    return getDisplayValue({
      unit: fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.defaults.unit,
      decimals: fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.defaults.decimals,
      aggregatorType: aggregatorType,
      theme: theme2
    }, val);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [fieldConfig, aggregatorType]);
  var spanSizeCounter = 0;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      width: tableContainerWidth,
      height: tableContainerHeight,
      overflow: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
    className: styles.container
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", null, colAttrs.map(function (c, j) {
    var colEl = Array.from(document.querySelectorAll('th')).find(function (el) {
      return el.textContent === c.displayName;
    });
    var isFilterVisible = filterable[c.name] ? filterable[c.name].isShow : false;
    // @ts-ignore
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
      key: "colAttr" + j,
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('column'))
    }, j === 0 && rowAttrs.length !== 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
      className: styles.headersCol,
      colSpan: rowAttrs.length,
      rowSpan: colAttrs.length
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
      className: styles.headersCol
    }, c.displayName, isFilterVisible && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: styles.filterItem,
      onClick: onShowColPopover(j)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: 'filter'
    }), isColPopoverVisible[j] && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_runTimeFilter__WEBPACK_IMPORTED_MODULE_10__["RunTimeFilter"], {
        attr: c,
        cat: categories,
        onClose: function onClose() {
          return onCloseColPopover(j);
        },
        onChange: function onChange(cat, val, checked) {
          return Object(_runTimeFilter__WEBPACK_IMPORTED_MODULE_10__["updateRunTimeFilter"])(cat, val, checked, pivotProp, categories, _onChange);
        }
      }),
      placement: "bottom-start",
      referenceElement: colEl,
      show: true
    }))), colKeys.map(function (colKey, i) {
      var _a, _b;
      var x = spanSize(colKeys, i, j);
      var totalColumnAggregator = pivotData.getAggregator([], colKey);
      if (x === -1) {
        return null;
      }
      var formattedVal = getFormattedVal(colKey[j], series, theme2, (_a = colAttrs[j]) === null || _a === void 0 ? void 0 : _a.name);
      var link = getDataLinkForHeaders(formattedVal.val, series, dataLinks, (_b = colAttrs[j]) === null || _b === void 0 ? void 0 : _b.name);
      if (totalColumnAggregator.value || !hideEmpty) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
          style: formattedVal.cssProps,
          className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.colLabel, styles.headersCol),
          key: "colKey" + i,
          colSpan: x,
          rowSpan: j === colAttrs.length - 1 && rowAttrs.length !== 0 ? 2 : 1
        }, link ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.headers, styles.linkValues),
          style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, formattedVal.cssProps), {
            border: 0,
            cursor: 'pointer'
          }),
          href: link.href,
          title: link.title,
          target: link.target
        }, formattedVal.val) : formattedVal.val);
      } else {
        return true;
      }
    }), j === 0 && showTotals && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, colsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headersCol),
      rowSpan: colAttrs.length + (rowAttrs.length === 0 ? 0 : 1)
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.headersCol),
      rowSpan: colAttrs.length + (rowAttrs.length === 0 ? 0 : 1)
    }, "Total")));
  }), rowAttrs.length !== 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
    style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('column'))
  }, rowAttrs.map(function (r, i) {
    var rowEl = Array.from(document.querySelectorAll('th')).find(function (el) {
      return el.textContent === r.displayName;
    });
    var isFilterVisible = filterable[r.name] ? filterable[r.name].isShow : false;
    // @ts-ignore
    // @ts-ignore
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
      className: styles.headersCol,
      key: "rowAttr" + i
    }, r.displayName, isFilterVisible && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: styles.filterItem,
      onClick: onShowRowPopover(i)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: 'filter'
    }), isRowPopoverVisible[i] && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_runTimeFilter__WEBPACK_IMPORTED_MODULE_10__["RunTimeFilter"], {
        attr: r,
        cat: categories,
        onClose: function onClose() {
          return onCloseRowPopover(i);
        },
        onChange: function onChange(cat, val, checked) {
          return Object(_runTimeFilter__WEBPACK_IMPORTED_MODULE_10__["updateRunTimeFilter"])(cat, val, checked, pivotProp, categories, _onChange);
        }
      }),
      placement: "bottom-start",
      referenceElement: rowEl,
      show: true
    })));
  }), showTotals && colAttrs.length === 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, colsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers)
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers)
  }, 'Total')), showTotals && colAttrs.length > 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers)
  }, null), !showTotals && colAttrs.length > 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers)
  }, null), showTotals && !colAttrs.length && '')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, rowKeys.map(function (rowKey, i) {
    var totalAggregator = pivotData.getAggregator(rowKey, []);
    var totalAggVal = totalAggregator.value;
    if (spanSizeCounter === 0 && i === 0) {
      spanSizeCounter = spanSize(rowKeys, i, subTotalColumnIndex + 1);
    }
    if (totalAggVal || !hideEmpty) {
      spanSizeCounter--;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        key: "rowKeyRow" + i
      }, rowKey.map(function (txt, j) {
        var _a, _b;
        var x = spanSize(rowKeys, i, j);
        var subTotalIndex = rowKey.indexOf(_types__WEBPACK_IMPORTED_MODULE_8__["SUB_TOTAL_KEY"]);
        var subTotalColSpan = 1;
        if (txt === _types__WEBPACK_IMPORTED_MODULE_8__["SUB_TOTAL_KEY"] && subTotalIndex > -1 && subTotalIndex < rowAttrs.length - 1) {
          subTotalColSpan = rowAttrs.length - subTotalIndex;
        }
        if (x === -1 && subTotalColSpan === 1) {
          return null;
        }
        var formattedVal = getFormattedVal(txt, series, theme2, (_a = rowAttrs[j]) === null || _a === void 0 ? void 0 : _a.name);
        var link = getDataLinkForHeaders(formattedVal.val, series, dataLinks, (_b = rowAttrs[j]) === null || _b === void 0 ? void 0 : _b.name);
        var colSpan = j === rowAttrs.length - 1 && colAttrs.length !== 0 ? 2 : 1;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
          key: "rowKeyLabel" + i + "-" + j,
          className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.headers),
          style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, formattedVal.cssProps), getFieldStyles('row', subTotalIndex > -1 ? true : false)),
          rowSpan: x,
          colSpan: subTotalColSpan > 1 ? subTotalColSpan + colSpan : colSpan
        }, link ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.headers, styles.linkValues),
          style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, formattedVal.cssProps), {
            border: 0,
            cursor: 'pointer'
          }),
          href: link.href,
          title: link.title,
          target: link.target
        }, formattedVal.val) : formattedVal.val);
      }), colKeys.map(function (colKey, j) {
        var aggregator = pivotData.getAggregator(rowKey, colKey);
        var value = aggregator.value;
        var formattedValue = getDisplayValueWrapper(aggregator.format);
        var totalColumnAggregatorVal = pivotData.getAggregator([], colKey).value;
        var showRowPerc = showTotals && showRowPercentage ? '(' + Math.round(value / totalAggVal * 100) + '%)' : '';
        var showColPerc = showTotals && showColumnPercentage ? '(' + Math.round(value / totalColumnAggregatorVal * 100) + '%)' : '';
        var enhancedLink = value && value !== 0 && dataLinks && dataLinks.length > 0 ? Object(CrossTabCtrl__WEBPACK_IMPORTED_MODULE_4__["enhanceDataLinks"])(rowAttrs, rowKey, colAttrs, colKey, dataLinks[0], replaceVariables) : null;
        var cellColor = Object(_styles__WEBPACK_IMPORTED_MODULE_7__["colorScaleGenerator"])(theme, cellDisplayMode, thresholds, value);
        if (totalColumnAggregatorVal || !hideEmpty) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values),
            style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cellColor), getFieldStyles('value')),
            key: "pvtVal" + i + "-" + j
          }, enhancedLink ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.linkValues)
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            style: cellColor,
            href: enhancedLink.url,
            title: enhancedLink.title,
            rel: "noreferrer",
            target: enhancedLink.targetBlank ? '_blank' : undefined
          }, showTotals ? formattedValue + " " + showRowPerc + " " + showColPerc : formattedValue)) : showTotals ? formattedValue + " " + showRowPerc + " " + showColPerc : formattedValue);
        } else {
          return true;
        }
      }), showTotals && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, colsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values)
      }, "..."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('value')),
        className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values, styles.totalValue)
      }, getDisplayValueWrapper(totalAggregator.format))));
    } else {
      return true;
    }
  }), showTotals && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, rowsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers),
    colSpan: rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)
  }), colKeys.map(function (colKey, i) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
      className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values),
      key: "total" + i
    }, "...");
  }), colsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values)
  }, "..."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values)
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
    style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('row')),
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.totalLabel, styles.headers),
    colSpan: rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)
  }, "Total"), colKeys.map(function (colKey, i) {
    var totalAggregator = pivotData.getAggregator([], colKey);
    if (totalAggregator.value || !hideEmpty) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('value')), {
          color: theme2.colors.text
        }),
        className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values, styles.totalValue),
        key: "total" + i
      }, getDisplayValueWrapper(totalAggregator.format));
    } else {
      return true;
    }
  }), colsHidden && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values)
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getFieldStyles('value')), {
      color: theme2.colors.text
    }),
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["cx"])(styles.values, styles.totalValue)
  }, getDisplayValueWrapper(grandTotalAggregator.format)))))));
});
PivotTable.displayName = 'PivotTable';

/***/ }),

/***/ "./pivotTable/pivotUtils.js":
/*!**********************************!*\
  !*** ./pivotTable/pivotUtils.js ***!
  \**********************************/
/*! exports provided: getDelimiter, addSeparators, aggregatorTemplates, aggregators, naturalSort, numberFormat, getSort, sortAs, PivotData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelimiter", function() { return getDelimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeparators", function() { return addSeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggregatorTemplates", function() { return aggregatorTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggregators", function() { return aggregators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "naturalSort", function() { return naturalSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSort", function() { return getSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortAs", function() { return sortAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PivotData", function() { return PivotData; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types */ "./types.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var getDelimiter = function getDelimiter() {
  return '=4f0c7760-357b-11ed-885a-1d0d442e0042=';
};
var addSeparators = function addSeparators(nStr, thousandsSep, decimalSep) {
  var x = String(nStr).split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? decimalSep + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1".concat(thousandsSep, "$2"));
  }
  return x1 + x2;
};
var numberFormat = function numberFormat(opts_in) {
  var defaults = {
    digitsAfterDecimal: 0,
    scaler: 1,
    thousandsSep: ',',
    decimalSep: '.',
    prefix: '',
    suffix: ''
  };
  var opts = Object.assign({}, defaults, opts_in);
  return function (x) {
    if (Array.isArray(x)) {
      var res = [];
      x.forEach(function (v) {
        var result = addSeparators((opts.scaler * v).toFixed(opts.digitsAfterDecimal), opts.thousandsSep, opts.decimalSep);
        res.push("".concat(opts.prefix).concat(result).concat(opts.suffix));
      });
      return res.join(' / ');
    }
    if (!Array.isArray(x) && isNaN(x) || !isFinite(x)) {
      return '';
    }
    if (!Array.isArray(x)) {
      var result = addSeparators((opts.scaler * x).toFixed(opts.digitsAfterDecimal), opts.thousandsSep, opts.decimalSep);
      return "".concat(opts.prefix).concat(result).concat(opts.suffix);
    }
  };
};
var rx = /(\d+)|(\D+)/g;
var rd = /\d/;
var rz = /^0/;
var naturalSort = function naturalSort(as, bs) {
  // nulls first
  if (bs !== null && as === null) {
    return -1;
  }
  if (as !== null && bs === null) {
    return 1;
  }

  // then raw NaNs
  if (typeof as === 'number' && isNaN(as)) {
    return -1;
  }
  if (typeof bs === 'number' && isNaN(bs)) {
    return 1;
  }

  // numbers and numbery strings group together
  var nas = Number(as);
  var nbs = Number(bs);
  if (nas < nbs) {
    return -1;
  }
  if (nas > nbs) {
    return 1;
  }

  // within that, true numbers before numbery strings
  if (typeof as === 'number' && typeof bs !== 'number') {
    return -1;
  }
  if (typeof bs === 'number' && typeof as !== 'number') {
    return 1;
  }
  if (typeof as === 'number' && typeof bs === 'number') {
    return 0;
  }

  // 'Infinity' is a textual number, so less than 'A'
  if (isNaN(nbs) && !isNaN(nas)) {
    return -1;
  }
  if (isNaN(nas) && !isNaN(nbs)) {
    return 1;
  }

  // finally, "smart" string sorting per http://stackoverflow.com/a/4373421/112871
  var a = String(as);
  var b = String(bs);
  if (a === b) {
    return 0;
  }
  if (!rd.test(a) || !rd.test(b)) {
    return a > b ? 1 : -1;
  }

  // special treatment for strings containing digits
  a = a.match(rx);
  b = b.match(rx);
  while (a.length && b.length) {
    var a1 = a.shift();
    var b1 = b.shift();
    if (a1 !== b1) {
      if (rd.test(a1) && rd.test(b1)) {
        return a1.replace(rz, '.0') - b1.replace(rz, '.0');
      }
      return a1 > b1 ? 1 : -1;
    }
  }
  return a.length - b.length;
};
var sortAs = function sortAs(order) {
  var mapping = {};

  // sort lowercased keys similarly
  var l_mapping = {};
  for (var i in order) {
    var x = order[i];
    mapping[x] = i;
    if (typeof x === 'string') {
      l_mapping[x.toLowerCase()] = i;
    }
  }
  return function (a, b) {
    if (a in mapping && b in mapping) {
      return mapping[a] - mapping[b];
    } else if (a in mapping) {
      return -1;
    } else if (b in mapping) {
      return 1;
    } else if (a in l_mapping && b in l_mapping) {
      return l_mapping[a] - l_mapping[b];
    } else if (a in l_mapping) {
      return -1;
    } else if (b in l_mapping) {
      return 1;
    }
    return naturalSort(a, b);
  };
};
var getSort = function getSort(sorters, attr) {
  if (sorters) {
    if (typeof sorters === 'function') {
      var sort = sorters(attr);
      /* istanbul ignore next */
      if (typeof sort === 'function') {
        return sort;
      }
    } else if (attr in sorters) {
      /* istanbul ignore next */
      return sorters[attr];
    }
  }
  return naturalSort;
};

// aggregator templates default to US number formatting but this is overrideable
var usFmt = numberFormat();
var usFmtInt = numberFormat({
  digitsAfterDecimal: 0
});
var usFmtPct = numberFormat({
  digitsAfterDecimal: 1,
  scaler: 100,
  suffix: '%'
});
var aggregatorTemplates = {
  count: function count() {
    var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usFmtInt;
    return function () {
      return function () {
        return {
          count: 0,
          push: function push() {
            this.count++;
          },
          value: function value() {
            return this.count;
          },
          format: formatter
        };
      };
    };
  },
  sum: function sum() {
    return function () {
      for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }
      return function () {
        return {
          sum: 0,
          sumArr: [],
          push: function push(record) {
            var _this = this;
            if (x[0].length > 1) {
              x[0].forEach(function (v, i) {
                if (!_this.sumArr[i]) {
                  _this.sumArr[i] = 0;
                }
                _this.sumArr[i] += parseFloat(record[x[0][i].name]);
              });
              this.sum = this.sumArr;
            }
            if (x[0].length === 1 && x[0][0] && !isNaN(parseFloat(record[x[0][0].name]))) {
              this.sum += parseFloat(record[x[0][0].name]);
            } else if (x[0] && !isNaN(parseFloat(record[x[0].name]))) {
              this.sum += parseFloat(record[x[0].name]);
            }
          },
          value: function value() {
            return this.sum;
          },
          format: numberFormat({
            digitsAfterDecimal: x[1]
          })
        };
      };
    };
  },
  extremes: function extremes(mode) {
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : usFmt;
    return function () {
      for (var _len2 = arguments.length, attr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        attr[_key2] = arguments[_key2];
      }
      return function (data) {
        return {
          val: null,
          valArr: [],
          sorter: getSort(typeof data !== 'undefined' ? data.sorters : null, attr.name),
          push: function push(record) {
            var _this2 = this;
            if (attr[0].length === 1) {
              var x = record[attr[0][0].name];
              if (['min', 'max'].includes(mode)) {
                x = parseFloat(x);
                if (!isNaN(x)) {
                  this.val = Math[mode](x, this.val !== null ? this.val : x);
                }
              }
            }
            if (attr[0].length > 1) {
              attr[0].forEach(function (v, i) {
                if (!_this2.valArr[i]) {
                  _this2.valArr[i] = null;
                }
                var x = record[attr[0][i].name];
                if (!isNaN(x)) {
                  _this2.valArr[i] = Math[mode](x, _this2.valArr[i] !== null ? _this2.valArr[i] : x);
                }
              });
              this.val = this.valArr;
            }
          },
          value: function value() {
            return this.val;
          },
          format: function format(x) {
            if (!Array.isArray(x) && isNaN(x)) {
              return x;
            } else if (Array.isArray(x)) {
              /* istanbul ignore next */
              x.forEach(function (v) {
                if (isNaN(v)) {
                  return v;
                }
              });
              return formatter(x);
            } else {
              return formatter(x);
            }
          }
        };
      };
    };
  },
  quantile: function quantile(q) {
    return function () {
      for (var _len3 = arguments.length, attr = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        attr[_key3] = arguments[_key3];
      }
      return function () {
        return {
          vals: [],
          push: function push(record) {
            var _this3 = this;
            if (attr[0].length === 1) {
              var x = attr[0][0] ? parseFloat(record[attr[0][0].name]) : null;
              if (!isNaN(x)) {
                this.vals.push(x);
              }
            }
            if (attr[0].length > 1) {
              attr[0].forEach(function (v, i) {
                var x = attr[0][i] ? parseFloat(record[attr[0][i].name]) : null;
                if (!isNaN(x)) {
                  if (!_this3.vals[i]) {
                    _this3.vals[i] = [];
                  }
                  _this3.vals[i].push(x);
                }
              });
            }
          },
          value: function value() {
            if (this.vals.length === 0) {
              return '';
            }
            if (Array.isArray(this.vals[0])) {
              var arr = [];
              this.vals.forEach(function (v) {
                v.sort(function (a, b) {
                  return a - b;
                });
                var i = (v.length - 1) * q;
                arr.push((v[Math.floor(i)] + v[Math.ceil(i)]) / 2.0);
              });
              return arr;
            } else {
              this.vals.sort(function (a, b) {
                return a - b;
              });
              var i = (this.vals.length - 1) * q;
              return (this.vals[Math.floor(i)] + this.vals[Math.ceil(i)]) / 2.0;
            }
          },
          format: numberFormat({
            digitsAfterDecimal: attr[1]
          })
        };
      };
    };
  },
  runningStat: function runningStat() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mean';
    var ddof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var formatter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : usFmt;
    return function () {
      for (var _len4 = arguments.length, attr = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        attr[_key4] = arguments[_key4];
      }
      return function () {
        return {
          n: 0.0,
          m: 0.0,
          s: 0.0,
          valArr: [],
          fvalArr: [],
          push: function push(record) {
            var _this4 = this;
            this.n += 1.0;
            if (attr[0].length === 1) {
              var x = attr[0][0] ? parseFloat(record[attr[0][0].name]) : null;
              if (isNaN(x)) {
                return;
              }
              // this.n += 1.0;
              if (this.n === 1.0) {
                this.m = x;
              }
              var m_new = this.m + (x - this.m) / this.n;
              this.s = this.s + (x - this.m) * (x - m_new);
              this.m = m_new;
            }
            if (attr[0].length > 1) {
              var n = this.n;
              attr[0].forEach(function (v, i) {
                if (!_this4.valArr[i]) {
                  _this4.valArr[i] = {
                    m: 0.0,
                    s: 0.0
                  };
                }
                var x = attr[0][i] ? parseFloat(record[attr[0][i].name]) : null;
                if (isNaN(x)) {
                  return;
                }
                if (n === 1.0) {
                  _this4.valArr[i].m = x;
                }
                var m_new = _this4.valArr[i].m + (x - _this4.valArr[i].m) / n;
                _this4.valArr[i].s = _this4.valArr[i].s + (x - _this4.valArr[i].m) * (x - m_new);
                _this4.valArr[i].m = m_new;
              });
            }
          },
          value: function value() {
            var _this5 = this;
            if (mode === 'mean' && !this.valArr.length) {
              if (this.n === 0) {
                return 0;
              }
              return this.m;
            } else if (mode === 'mean' && this.valArr.length) {
              this.valArr.forEach(function (v, i) {
                if (!_this5.fvalArr[i]) {
                  _this5.fvalArr[i] = 0;
                }
                if (_this5.n === 0) {
                  _this5.fvalArr[i] = 0;
                } else {
                  _this5.fvalArr[i] = v.m;
                }
              });
              return this.fvalArr;
            }
            if (this.n <= ddof && !this.valArr.length) {
              return 0;
            }
            /* istanbul ignore next */
            if (this.n <= ddof && this.valArr.length) {
              this.valArr.forEach(function (v, i) {
                _this5.fvalArr[i] = 0;
              });
            }
          },
          format: numberFormat({
            digitsAfterDecimal: attr[1]
          })
        };
      };
    };
  },
  fractionOf: function fractionOf(wrapped) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'total';
    return function (attr, dec) {
      return function (data, rowKey, colKey) {
        return {
          selector: {
            total: [[], []],
            row: [rowKey, []],
            col: [[], colKey]
          }[type],
          inner: wrapped.apply(void 0, _toConsumableArray(Array.from([attr] || false)))(data, rowKey, colKey),
          push: function push(record) {
            this.inner.push(record);
          },
          format: numberFormat({
            digitsAfterDecimal: dec,
            scaler: 100,
            suffix: '%'
          }),
          value: function value() {
            var _data$getAggregator$i;
            var innerVal = data.getAggregator.apply(data, _toConsumableArray(Array.from(this.selector || []))).innerVal || ((_data$getAggregator$i = data.getAggregator.apply(data, _toConsumableArray(Array.from(this.selector || []))).inner) === null || _data$getAggregator$i === void 0 ? void 0 : _data$getAggregator$i.value());
            var val = this.inner.value() / innerVal;
            if (!val) {
              return '';
            }
            return val;
          }
        };
      };
    };
  }
};
aggregatorTemplates.max = function (f) {
  return aggregatorTemplates.extremes('max', f);
};
aggregatorTemplates.min = function (f) {
  return aggregatorTemplates.extremes('min', f);
};
aggregatorTemplates.median = function (f) {
  return aggregatorTemplates.quantile(0.5, f);
};
aggregatorTemplates.average = function (f) {
  return aggregatorTemplates.runningStat('mean', 1, f);
};

// default aggregators & renderers use US naming and number formatting
var aggregators = function (tpl) {
  return {
    Count: tpl.count(usFmtInt),
    Sum: tpl.sum(usFmt),
    Average: tpl.average(usFmt),
    Median: tpl.median(usFmt),
    Minimum: tpl.min(usFmt),
    Maximum: tpl.max(usFmt),
    'Sum as a fraction of Totals': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
    'Sum as a fraction of rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
    'Sum as a fraction of columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
    'Count as a fraction of Totals': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
    'Count as a fraction of rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
    'Count as a fraction of columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
  };
}(aggregatorTemplates);

/*
Data Model class
*/
var PivotData = /*#__PURE__*/function () {
  function PivotData() {
    var _this$props$colMax,
      _this$props$rowMax,
      _this$props$fieldConf,
      _this6 = this;
    var inputProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, PivotData);
    this.props = Object.assign({}, PivotData.defaultProps, inputProps);
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.checkPropTypes(PivotData.propTypes, this.props, 'prop', 'PivotData');
    var urlParams = _grafana_data__WEBPACK_IMPORTED_MODULE_2__["urlUtil"].getUrlSearchParams();
    this.colMax = (_this$props$colMax = this.props.colMax) !== null && _this$props$colMax !== void 0 ? _this$props$colMax : types__WEBPACK_IMPORTED_MODULE_1__["LIMITS"].DEFAULT_COL_LIMIT;
    this.rowMax = (_this$props$rowMax = this.props.rowMax) !== null && _this$props$rowMax !== void 0 ? _this$props$rowMax : types__WEBPACK_IMPORTED_MODULE_1__["LIMITS"].DEFAULT_ROW_LIMIT;
    this.tree = new Map();
    this.rowKeys = [];
    this.colKeys = [];
    this.rowTotals = new Map();
    this.colTotals = new Map();
    this.sorted = false;
    this.digitsAfterDecimal = (_this$props$fieldConf = this.props.fieldConfig) === null || _this$props$fieldConf === void 0 ? void 0 : _this$props$fieldConf.defaults.decimals;
    this.aggregator = this.props.aggregators[this.props.aggregatorType](this.props.vals, this.digitsAfterDecimal);
    this.allTotal = this.aggregator(this, [], []);

    // Fields related to SubTotal Feature.
    this.showSubTotals = this.props.showSubTotals;
    this.subTotalColumnIndex = this.props.subTotalColumn;
    this.colSubTotals = new Map();

    // iterate through input, accumulating data for cells
    PivotData.forEachRecord(this.props.data, this.props.derivedAttributes, function (record) {
      if (_this6.filter(record)) {
        _this6.processRecord(record);
      }
    });

    // resetting allTotal
    this.allTotal = {
      innerVal: this.allTotal.inner ? this.allTotal.inner.value() : null,
      value: this.allTotal.value(),
      format: this.allTotal.format(this.allTotal.value())
    };

    // If SubTotal is enabled then only calculate the logic and add the rows. Adding the subTotal calculation
    // row in the map after checking the next row size.
    if (this.showSubTotals && this.props.rows.length > 1) {
      var tempRowKeys = [];
      var subTotalRecord = undefined;
      var nextSubTotalFlatKey = undefined;
      this.rowKeys.forEach(function (rowKey, index) {
        var subTotalFlatKey = rowKey.slice(0, _this6.subTotalColumnIndex + 1).join(String.fromCharCode(0));
        var lastRow = index === _this6.rowKeys.length - 1;
        if (_this6.rowKeys.hasOwnProperty(index + 1)) {
          nextSubTotalFlatKey = _this6.rowKeys[index + 1].slice(0, _this6.subTotalColumnIndex + 1).join(String.fromCharCode(0));
        }
        // Check if the next row is present and the subTotalKey is different then we have to add the subtotal row
        // or if the record is the last row then also we have to add the Subtotal Row.
        if (_this6.rowKeys.hasOwnProperty(index + 1) || lastRow) {
          subTotalRecord = _toConsumableArray(rowKey);
        }
        tempRowKeys.push(rowKey);
        if (nextSubTotalFlatKey && (subTotalFlatKey !== nextSubTotalFlatKey || lastRow)) {
          subTotalRecord = subTotalRecord.slice(0, _this6.subTotalColumnIndex + 1);
          subTotalRecord[_this6.subTotalColumnIndex + 1] = types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"];
          var flatRowKey = subTotalRecord.join(String.fromCharCode(0));
          tempRowKeys.push(subTotalRecord);
          if (_this6.colSubTotals.get(flatRowKey)) {
            _this6.rowTotals.set(flatRowKey, _this6.colSubTotals.get(flatRowKey));
          }
        }
      });
      this.rowKeys = tempRowKeys;
    }
    this.refineValues(this.rowTotals);
    this.refineValues(this.colTotals);
    this.refineValues(this.colSubTotals);
    this.tree.forEach(function (val, key) {
      if (!val) {
        return;
      }
      _this6.tree.set(key, {
        innerVal: val.inner ? val.inner.value() : null,
        value: val.value(),
        format: val.format(val.value())
      });
    });
  }
  _createClass(PivotData, [{
    key: "refineValues",
    value: function refineValues(map) {
      map.forEach(function (val, key) {
        map.set(key, {
          innerVal: val.inner ? val.inner.value() : null,
          value: val.value(),
          format: val.format(val.value())
        });
      });
    }
  }, {
    key: "filter",
    value: function filter(record) {
      for (var k in this.props.valueFilter) {
        if (this.props.valueFilter[k].includes(record[k])) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "arrSort",
    value: function arrSort(attrs, asc) {
      var _this7 = this;
      var sortersArr = function () {
        var result = [];
        var _iterator = _createForOfIteratorHelper(attrs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var a = _step.value;
            result.push(getSort(_this7.props.sorters, a));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return result;
      }();
      return function (a, b) {
        for (var _i = 0, _Object$keys = Object.keys(sortersArr || {}); _i < _Object$keys.length; _i++) {
          var i = _Object$keys[_i];
          var sorter = sortersArr[i];
          // Little trick introduced to always show the Subtotal row last in the rowSpan when sorting is
          // applied using panel Sort Order option. We only support 'Key asc' & 'Key desc' for the Subtotal row.
          // Using ~ and white space as a first character to sort the subtotal according to ASC & DESC.
          var str1 = a[i] === types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"] ? asc ? '~' + a[i] : ' ' + a[i] : a[i];
          var str2 = b[i] === types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"] ? asc ? '~' + b[i] : ' ' + b[i] : b[i];
          var comparison = asc ? sorter(str1, str2) : sorter(str2, str1);
          if (comparison !== 0) {
            return comparison;
          }
        }
        return 0;
      };
    }
  }, {
    key: "sortKeys",
    value: function sortKeys() {
      var _this8 = this;
      if (!this.sorted) {
        this.sorted = true;
        var v = function v(r, c) {
          return _this8.getAggregator(r, c).value;
        };
        switch (this.props.rowOrder) {
          case 'none':
            break;
          case 'key_a_to_z':
            this.rowKeys.sort(this.arrSort(this.props.rows, true));
            break;
          case 'key_z_to_a':
            this.rowKeys.sort(this.arrSort(this.props.rows, false));
            break;
          case 'value_a_to_z':
            this.rowKeys.sort(function (a, b) {
              return naturalSort(v(a, []), v(b, []));
            });
            break;
          case 'value_z_to_a':
            this.rowKeys.sort(function (a, b) {
              return -naturalSort(v(a, []), v(b, []));
            });
            break;
        }
        switch (this.props.colOrder) {
          case 'none':
            break;
          case 'key_a_to_z':
            this.colKeys.sort(this.arrSort(this.props.cols, true));
            break;
          case 'key_z_to_a':
            this.colKeys.sort(this.arrSort(this.props.cols, false));
            break;
          case 'value_a_to_z':
            this.colKeys.sort(function (a, b) {
              return naturalSort(v([], a), v([], b));
            });
            break;
          case 'value_z_to_a':
            this.colKeys.sort(function (a, b) {
              return -naturalSort(v([], a), v([], b));
            });
            break;
        }
      }
    }
  }, {
    key: "getColKeys",
    value: function getColKeys() {
      this.sortKeys();
      this.colsHidden = this.colKeys.length > this.colMax ? true : false;
      return this.colKeys.length > this.colMax ? this.colKeys.slice(0, this.colMax) : this.colKeys;
    }
  }, {
    key: "getRowKeys",
    value: function getRowKeys() {
      this.sortKeys();
      this.rowsHidden = this.rowKeys.length > this.rowMax ? true : false;
      return this.rowKeys.length > this.rowMax ? this.rowKeys.slice(0, this.rowMax) : this.rowKeys;
    }
  }, {
    key: "getHideStatus",
    value: function getHideStatus() {
      return {
        colsHidden: this.colsHidden,
        rowsHidden: this.rowsHidden
      };
    }
  }, {
    key: "processRecord",
    value: function processRecord(record) {
      var _this$props$fieldConf2,
        _this9 = this;
      // this code is called in a tight loop
      var colKey = [];
      var rowKey = [];
      var displayProcessor = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
        field: {
          config: {
            unit: (_this$props$fieldConf2 = this.props.fieldConfig) === null || _this$props$fieldConf2 === void 0 ? void 0 : _this$props$fieldConf2.defaults.unit
          }
        },
        theme: Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme2"])()
      });
      var _iterator2 = _createForOfIteratorHelper(this.props.cols),
        _step2;
      try {
        var _loop = function _loop() {
          var _this9$props$fieldCon, _this9$props$fieldCon2, _this9$props$fieldCon3;
          var x = _step2.value;
          var displayValueObj = displayProcessor(record[x.name]);
          var date = !isNaN(record[x.name]) ? new Date(record[x.name]) : Date.parse(record[x.name]);
          var value = isNaN(date) ? ((_this9$props$fieldCon = _this9.props.fieldConfig) === null || _this9$props$fieldCon === void 0 ? void 0 : (_this9$props$fieldCon2 = _this9$props$fieldCon.defaults.mappings) === null || _this9$props$fieldCon2 === void 0 ? void 0 : (_this9$props$fieldCon3 = _this9$props$fieldCon2.find(function (v) {
            return v.options[record[x.name]] ? true : false;
          })) === null || _this9$props$fieldCon3 === void 0 ? void 0 : _this9$props$fieldCon3.options[record[x.name]].text) || record[x.name] : displayValueObj.text;
          colKey.push(x.name in record ? value : 'null');
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(this.props.rows),
        _step3;
      try {
        var _loop2 = function _loop2() {
          var _this9$props$fieldCon4, _this9$props$fieldCon5, _this9$props$fieldCon6;
          var x = _step3.value;
          var displayValueObj = displayProcessor(record[x.name]);
          var date = !isNaN(record[x.name]) ? new Date(record[x.name]) : Date.parse(record[x.name]);
          var value = isNaN(date) ? ((_this9$props$fieldCon4 = _this9.props.fieldConfig) === null || _this9$props$fieldCon4 === void 0 ? void 0 : (_this9$props$fieldCon5 = _this9$props$fieldCon4.defaults.mappings) === null || _this9$props$fieldCon5 === void 0 ? void 0 : (_this9$props$fieldCon6 = _this9$props$fieldCon5.find(function (v) {
            return v.options[record[x.name]] ? true : false;
          })) === null || _this9$props$fieldCon6 === void 0 ? void 0 : _this9$props$fieldCon6.options[record[x.name]].text) || record[x.name] : displayValueObj.text;
          rowKey.push(x.name in record ? value : 'null');
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var flatRowKey = rowKey.join(String.fromCharCode(0));
      var flatColKey = colKey.join(String.fromCharCode(0));
      this.allTotal.push(record);
      if (rowKey.length !== 0) {
        if (!this.rowTotals.get(flatRowKey)) {
          this.rowKeys.push(rowKey);
          this.rowTotals.set(flatRowKey, this.aggregator(this, rowKey, []));
        }
        this.rowTotals.get(flatRowKey).push(record);
      }
      if (colKey.length !== 0) {
        if (!this.colTotals.get(flatColKey)) {
          this.colKeys.push(colKey);
          this.colTotals.set(flatColKey, this.aggregator(this, [], colKey));
        }
        this.colTotals.get(flatColKey).push(record);
      }

      // Filling subTotal aggregator for each sub total key.
      if (this.showSubTotals && colKey.length !== 0 && rowKey.length !== 0) {
        var subTotalKey = rowKey.slice(0, this.subTotalColumnIndex + 1).join(String.fromCharCode(0)) + "\0" + types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"];
        if (!this.colSubTotals.get(subTotalKey)) {
          if (this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_COLUMNS || this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_COLUMNS) {
            // For this 2 functions, final total is the reference point for calculation hence passing blank array for rowKey & colKey.
            this.colSubTotals.set(subTotalKey, this.aggregator(this, [], []));
          } else if (this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_ROWS || this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_ROWS) {
            // For this 2 functions, sobTotal row total is the reference point hence passing subTotalRecord as a rowKey.
            var subTotalRecord = _toConsumableArray(rowKey.slice(0, this.subTotalColumnIndex + 1));
            subTotalRecord[this.subTotalColumnIndex + 1] = types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"];
            this.colSubTotals.set(subTotalKey, this.aggregator(this, subTotalRecord, colKey));
          } else {
            this.colSubTotals.set(subTotalKey, this.aggregator(this, rowKey, colKey));
          }
        }
        this.colSubTotals.get(subTotalKey).push(record);
      }
      if (colKey.length !== 0 && rowKey.length !== 0) {
        var compKey = flatRowKey + getDelimiter() + flatColKey;
        if (!this.tree.get(compKey)) {
          this.tree.set(compKey, this.aggregator(this, rowKey, colKey));
        }
        this.tree.get(compKey).push(record);
      }

      // Adding SubTotal Calculation for each row and column in the tree to access it in HTML.
      if (this.showSubTotals && colKey.length !== 0 && rowKey.length !== 0) {
        var _subTotalKey = rowKey.slice(0, this.subTotalColumnIndex + 1).join(String.fromCharCode(0)) + "\0" + types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"] + getDelimiter() + flatColKey;
        if (!this.tree.get(_subTotalKey)) {
          if (this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_ROWS || this.props.aggregatorType === types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_ROWS) {
            // For this 2 functions, sobTotal row total is the reference point for calculation hence passing subTotalRecord as a rowKey.
            var _subTotalRecord = _toConsumableArray(rowKey.slice(0, this.subTotalColumnIndex + 1));
            _subTotalRecord[this.subTotalColumnIndex + 1] = types__WEBPACK_IMPORTED_MODULE_1__["SUB_TOTAL_KEY"];
            this.tree.set(_subTotalKey, this.aggregator(this, _subTotalRecord, colKey));
          } else {
            this.tree.set(_subTotalKey, this.aggregator(this, rowKey, colKey));
          }
        }
        this.tree.get(_subTotalKey).push(record);
      }
    }
  }, {
    key: "getAggregator",
    value: function getAggregator(rowKey, colKey) {
      var _this$props$fieldConf3;
      var agg;
      var flatRowKey = rowKey.join(String.fromCharCode(0));
      var flatColKey = colKey.join(String.fromCharCode(0));
      if (rowKey.length === 0 && colKey.length === 0) {
        agg = this.allTotal;
      } else if (rowKey.length === 0) {
        agg = this.colTotals.get(flatColKey);
      } else if (colKey.length === 0) {
        agg = this.rowTotals.get(flatRowKey);
      } else {
        var compKey = flatRowKey + getDelimiter() + flatColKey;
        agg = this.tree.get(compKey);
      }
      var aggregatorType = this.props.aggregatorType;
      var decimals = (_this$props$fieldConf3 = this.props.fieldConfig) === null || _this$props$fieldConf3 === void 0 ? void 0 : _this$props$fieldConf3.defaults.decimals;
      return agg || {
        value: null,
        format: function () {
          var defaultCount = 0;
          switch (aggregatorType) {
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].MIN:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].MAX:
              return defaultCount;
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].AVERAGE:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].MEDIAN:
              return defaultCount.toFixed(decimals);
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_COLUMNS:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_ROWS:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].SUM_AS_FRANCTION_OF_TOTAL:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_COLUMNS:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_ROWS:
            case types__WEBPACK_IMPORTED_MODULE_1__["AggregatorType"].COUNT_AS_FRANCTION_OF_TOTAL:
              return defaultCount.toFixed(decimals) + '%';
          }
        }()
      };
    }
  }]);
  return PivotData;
}(); // can handle arrays or jQuery selections of tables
PivotData.forEachRecord = function (input, derivedAttributes, f) {
  var addRecord, record;
  if (Object.getOwnPropertyNames(derivedAttributes).length === 0) {
    addRecord = f;
  } else {
    /* istanbul ignore next */
    addRecord = function addRecord(record) {
      for (var k in derivedAttributes) {
        var derived = derivedAttributes[k](record);
        if (derived !== null) {
          record[k] = derived;
        }
      }
      return f(record);
    };
  }

  // if it's a function, have it call us back
  if (typeof input === 'function') {
    return input(addRecord);
  } else if (Array.isArray(input)) {
    if (Array.isArray(input[0])) {
      // array of arrays
      return function () {
        var result = [];
        for (var _i2 = 0, _Object$keys2 = Object.keys(input || {}); _i2 < _Object$keys2.length; _i2++) {
          var i = _Object$keys2[_i2];
          var compactRecord = input[i];
          if (i > 0) {
            record = {};
            for (var _i3 = 0, _Object$keys3 = Object.keys(input[0] || {}); _i3 < _Object$keys3.length; _i3++) {
              var j = _Object$keys3[_i3];
              var k = input[0][j];
              record[k] = compactRecord[j];
            }
            result.push(addRecord(record));
          }
        }
        return result;
      }();
    }

    // array of objects
    /* istanbul ignore next */
    return function () {
      var result1 = [];
      for (var _i4 = 0, _Array$from = Array.from(input); _i4 < _Array$from.length; _i4++) {
        record = _Array$from[_i4];
        result1.push(addRecord(record));
      }
      return result1;
    }();
  }
  throw new Error('unknown input format');
};
PivotData.defaultProps = {
  aggregators: aggregators,
  cols: [],
  rows: [],
  vals: [],
  aggregatorType: 'Count',
  sorters: {},
  valueFilter: {},
  rowOrder: 'key_a_to_z',
  colOrder: 'key_a_to_z',
  derivedAttributes: {},
  width: '0px',
  height: '0px'
};
PivotData.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]).isRequired,
  aggregatorType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  cols: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),
  rows: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),
  vals: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),
  valueFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any)),
  sorters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func)]),
  derivedAttributes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func),
  rowOrder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['none', 'key_a_to_z', 'key_z_to_a', 'value_a_to_z', 'value_z_to_a']),
  colOrder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['none', 'key_a_to_z', 'key_z_to_a', 'value_a_to_z', 'value_z_to_a'])
};


/***/ }),

/***/ "./pivotTable/runTimeFilter.tsx":
/*!**************************************!*\
  !*** ./pivotTable/runTimeFilter.tsx ***!
  \**************************************/
/*! exports provided: RunTimeFilter, updateRunTimeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunTimeFilter", function() { return RunTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRunTimeFilter", function() { return updateRunTimeFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_3__);




var RunTimeFilter = function RunTimeFilter(_a) {
  var attr = _a.attr,
    cat = _a.cat,
    onClose = _a.onClose,
    onChange = _a.onChange;
  var onCancel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    return onClose();
  }, [onClose]);
  if (!cat.categoriesValueFilter[attr.name]) {
    cat.categoriesValueFilter[attr.name] = [];
  }
  var renderFilterItemValue = function renderFilterItemValue(val) {
    /* istanbul ignore next */
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: val
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: !cat.categoriesValueFilter[attr.name].includes(val),
      label: val,
      onChange: function onChange(e) {
        return onToggleChecked(e, val);
      }
    }));
  };
  var onToggleChecked = function onToggleChecked(e, val) {
    /* istanbul ignore next */
    onChange(attr.name, val, e.currentTarget.checked);
  };
  var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function (theme) {
    return {
      filterContainer: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      label: filterContainer;\n      width: 100%;\n      min-width: 250px;\n      height: 100%;\n      max-height: 400px;\n      overflow: auto;\n      background-color: ", ";\n      border: ", " solid ", ";\n      padding: ", ";\n      margin: ", " 0;\n      box-shadow: 0px 0px 20px ", ";\n      border-radius: ", ";\n    "], ["\n      label: filterContainer;\n      width: 100%;\n      min-width: 250px;\n      height: 100%;\n      max-height: 400px;\n      overflow: auto;\n      background-color: ", ";\n      border: ", " solid ", ";\n      padding: ", ";\n      margin: ", " 0;\n      box-shadow: 0px 0px 20px ", ";\n      border-radius: ", ";\n    "])), theme.colors.bg1, theme.border.width.sm, theme.colors.border2, theme.spacing.md, theme.spacing.sm, theme.colors.dropdownShadow, theme.spacing.xs)
    };
  });
  var styles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useStyles"])(getStyles);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideWrapper"], {
    onClick: onCancel,
    useCapture: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.filterContainer),
    onClick: stopPropagation
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["VerticalGroup"], {
    spacing: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, cat.categoriesValues[attr.name].values.map(function (key) {
    return renderFilterItemValue(key);
  })))));
};
var updateRunTimeFilter = function updateRunTimeFilter(cat, val, selected, options, categories, onChange) {
  if (!options.valueFilter[cat]) {
    options.valueFilter[cat] = [];
  }
  if (!options.categories) {
    options.categories = categories;
  }
  var index = options.valueFilter[cat].indexOf(val);
  if (!selected) {
    if (index === -1) {
      options.valueFilter[cat].push(val);
    }
  } else {
    if (index !== -1) {
      options.valueFilter[cat].splice(index, 1);
    }
  }
  // deleting options.data so that it doesn't get saved in json model.
  if (options.data) {
    delete options.data;
  }
  onChange(options);
};
var stopPropagation = function stopPropagation(event) {
  /* istanbul ignore next */
  event.stopPropagation();
};
var templateObject_1;

/***/ }),

/***/ "./styles.tsx":
/*!********************!*\
  !*** ./styles.tsx ***!
  \********************/
/*! exports provided: getLabelStyles, getTrashIconStyle, getButtonStyles, focusCss, getCategoryFilterStyles, getFieldStyle, getTableStyles, colorScaleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelStyles", function() { return getLabelStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrashIconStyle", function() { return getTrashIconStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonStyles", function() { return getButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusCss", function() { return focusCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryFilterStyles", function() { return getCategoryFilterStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldStyle", function() { return getFieldStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableStyles", function() { return getTableStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorScaleGenerator", function() { return colorScaleGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinycolor2 */ "../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./types.ts");





/*
 * Plugin Pivot categories settings editor styles
 */
/* istanbul ignore next */
var getLabelStyles = function getLabelStyles(theme) {
  return {
    label: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      label: Label;\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: 1.25;\n      margin: ", ";\n      padding: ", ";\n      color: ", ";\n      max-width: 480px;\n    "], ["\n      label: Label;\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: 1.25;\n      margin: ", ";\n      padding: ", ";\n      color: ", ";\n      max-width: 480px;\n    "])), theme.typography.size.sm, theme.typography.weight.semibold, theme.spacing.formLabelMargin, theme.spacing.formLabelPadding, theme.colors.formLabel),
    labelContent: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      align-items: center;\n    "], ["\n      display: flex;\n      align-items: center;\n    "]))),
    description: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      label: Label-description;\n      color: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      margin-top: ", ";\n      display: block;\n    "], ["\n      label: Label-description;\n      color: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      margin-top: ", ";\n      display: block;\n    "])), theme.colors.formDescription, theme.typography.size.sm, theme.typography.weight.regular, theme.spacing.xxs)
  };
};
/* istanbul ignore next */
var getTrashIconStyle = function getTrashIconStyle(theme) {
  return {
    trashIcon: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text)
  };
};
/* istanbul ignore next */
var getButtonStyles = function getButtonStyles(props) {
  var theme = props.theme;
  var _a = getPropertiesForButtonSize(props),
    padding = _a.padding,
    fontSize = _a.fontSize,
    height = _a.height;
  var _b = getPropertiesForVariant(theme),
    background = _b.background,
    borderColor = _b.borderColor;
  return {
    button: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        label: button;\n        display: inline-flex;\n        align-items: center;\n        color: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        padding: ", ";\n        height: ", "px;\n        // Deduct border from line-height for perfect vertical centering on windows and linux\n        line-height: ", "px;\n        vertical-align: middle;\n        cursor: default;\n        border: 1px solid ", ";\n        border-radius: ", ";\n        ", ";\n\n        &[disabled],\n        &:disabled {\n          cursor: not-allowed;\n          opacity: 0.65;\n          box-shadow: none;\n        }\n      "], ["\n        label: button;\n        display: inline-flex;\n        align-items: center;\n        color: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        padding: ", ";\n        height: ", "px;\n        // Deduct border from line-height for perfect vertical centering on windows and linux\n        line-height: ", "px;\n        vertical-align: middle;\n        cursor: default;\n        border: 1px solid ", ";\n        border-radius: ", ";\n        ", ";\n\n        &[disabled],\n        &:disabled {\n          cursor: not-allowed;\n          opacity: 0.65;\n          box-shadow: none;\n        }\n      "])), theme.colors.textBlue, theme.typography.weight.semibold, theme.typography.fontFamily.sansSerif, fontSize, padding, height, height - 2, borderColor, theme.border.radius.sm, background), getFocusStyle(theme))
  };
};
/* istanbul ignore next */
var getFocusStyle = function getFocusStyle(theme) {
  return Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  &:focus {\n    ", "\n  }\n"], ["\n  &:focus {\n    ", "\n  }\n"])), focusCss(theme));
};
/* istanbul ignore next */
var focusCss = function focusCss(theme) {
  return "\n  outline: 2px dotted transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px " + theme.colors.bodyBg + ", 0 0 0px 4px " + theme.colors.formFocusOutline + ";\n  transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n";
};
/* istanbul ignore next */
var buttonVariantStyles = function buttonVariantStyles(from, to, textColor) {
  return Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  background: linear-gradient(180deg, ", " 0%, ", " 100%);\n  color: ", ";\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    background: ", ";\n    outline: none;\n  }\n"], ["\n  background: linear-gradient(180deg, ", " 0%, ", " 100%);\n  color: ", ";\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    background: ", ";\n    outline: none;\n  }\n"])), from, to, textColor, from, textColor, from);
};
/* istanbul ignore next */
var getPropertiesForVariant = function getPropertiesForVariant(theme) {
  var from = theme.isLight ? theme.palette.gray7 : theme.palette.gray15;
  var to = theme.isLight ? tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(from).darken(5).toString() : tinycolor2__WEBPACK_IMPORTED_MODULE_3___default()(from).lighten(4).toString();
  return {
    borderColor: theme.isLight ? theme.palette.gray85 : theme.palette.gray25,
    background: buttonVariantStyles(from, to, theme.isLight ? theme.palette.gray33 : theme.palette.gray85)
  };
};
/* istanbul ignore next */
var getPropertiesForButtonSize = function getPropertiesForButtonSize(props) {
  var _a = props.theme,
    spacing = _a.spacing,
    typography = _a.typography,
    height = _a.height;
  return {
    padding: "0 " + spacing.sm,
    fontSize: typography.size.sm,
    height: height.sm
  };
};
/* istanbul ignore next */
var getCategoryFilterStyles = function getCategoryFilterStyles(theme) {
  return {
    collapse: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    label: collapse;\n    margin-top: ", ";\n  "], ["\n    label: collapse;\n    margin-top: ", ";\n  "])), theme.spacing.sm),
    collapseBody: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    label: collapse__body;\n    padding: ", " ", " ", " ", ";\n    max-height: 150px;\n    overflow-y: auto;\n  "], ["\n    label: collapse__body;\n    padding: ", " ", " ", " ", ";\n    max-height: 150px;\n    overflow-y: auto;\n  "])), theme.spacing.xxs, theme.spacing.sm, theme.spacing.sm, theme.spacing.md),
    header: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    label: collapse__header;\n    padding: ", " ", ";\n    display: flex;\n    cursor: inherit;\n    transition: all 0.1s linear;\n    cursor: pointer;\n  "], ["\n    label: collapse__header;\n    padding: ", " ", ";\n    display: flex;\n    cursor: inherit;\n    transition: all 0.1s linear;\n    cursor: pointer;\n  "])), theme.spacing.sm, theme.spacing.md),
    headerButtons: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    label: collapse__header-buttons;\n    margin-right: ", ";\n    margin-top: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    display: inherit;\n  "], ["\n    label: collapse__header-buttons;\n    margin-right: ", ";\n    margin-top: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    display: inherit;\n  "])), theme.spacing.sm, theme.spacing.xxs, theme.typography.size.lg, theme.typography.heading.h6),
    headerLabel: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    label: collapse__header-label;\n    font-weight: ", ";\n    margin-right: ", ";\n    font-size: ", ";\n  "], ["\n    label: collapse__header-label;\n    font-weight: ", ";\n    margin-right: ", ";\n    font-size: ", ";\n  "])), theme.typography.weight.semibold, theme.spacing.sm, theme.typography.heading.h6)
  };
};
var getFieldStyle = function getFieldStyle(field, theme, style) {
  if (field === 'column') {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style.column.textAlign && {
      textAlign: style.column.textAlign,
      textAlignLast: style.column.textAlign
    }), style.column.color && {
      color: style.column.color ? theme.visualization.getColorByName(style.column.color) : theme.v1.colors.textBlue
    }), style.column.background && {
      background: style.column.background ? theme.visualization.getColorByName(style.column.background) : theme.v1.colors.bg2
    });
  }
  if (field === 'row') {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style.row.textAlign && {
      textAlign: style.row.textAlign
    }), style.row.color && {
      color: style.row.color ? theme.visualization.getColorByName(style.row.color) : theme.v1.colors.textBlue
    }), style.row.background && {
      background: style.row.background ? theme.visualization.getColorByName(style.row.background) : theme.v1.colors.bg2
    });
  }
  if (field === 'value') {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style.value.textAlign && {
      textAlign: style.value.textAlign
    }), style.value.color && {
      color: style.value.color
    }), style.value.background && {
      background: style.value.background
    });
  }
  return {};
};
var getTableStyles = function getTableStyles(theme, colorOptions) {
  return {
    container: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      width: 100%;\n      height: 100%;\n      font-size: ", ";\n      font-family: ", ";\n      text-align: left;\n      border-collapse: collapse;\n    "], ["\n      width: 100%;\n      height: 100%;\n      font-size: ", ";\n      font-family: ", ";\n      text-align: left;\n      border-collapse: collapse;\n    "])), theme.typography.size.sm, theme.typography.fontFamily.sansSerif),
    headers: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      font-size: ", ";\n      padding: 5px;\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      font-size: ", ";\n      padding: 5px;\n    "])), colorOptions.headerBgColor ? theme.visualization.getColorByName(colorOptions.headerBgColor) : theme.colors.bg2, theme.colors.bg3, colorOptions.headerColor ? theme.visualization.getColorByName(colorOptions.headerColor) : theme.colors.textBlue, theme.typography.size.sm),
    filterItem: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: inline-block;\n      cursor: pointer;\n      color: rgb(159, 167, 179);\n    "], ["\n      display: inline-block;\n      cursor: pointer;\n      color: rgb(159, 167, 179);\n    "]))),
    headersCol: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      font-size: ", ";\n      padding: 5px;\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      font-size: ", ";\n      padding: 5px;\n    "])), colorOptions.headerBgColor ? theme.visualization.getColorByName(colorOptions.headerBgColor) : theme.colors.bg2, theme.colors.bg3, colorOptions.headerColor ? theme.visualization.getColorByName(colorOptions.headerColor) : theme.colors.textBlue, theme.typography.size.md),
    values: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      padding: 5px;\n      border: 1px solid ", ";\n      vertical-align: middle;\n    "], ["\n      padding: 5px;\n      border: 1px solid ", ";\n      vertical-align: middle;\n    "])), theme.colors.bg3),
    linkValues: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      text-decoration: underline;\n      &:hover {\n        text-decoration: none;\n        cursor: default;\n      }\n    "], ["\n      text-decoration: underline;\n      &:hover {\n        text-decoration: none;\n        cursor: default;\n      }\n    "]))),
    colLabel: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      text-align: center;\n    "], ["\n      text-align: center;\n    "]))),
    totalLabel: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_20 || (templateObject_20 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      text-align: right;\n    "], ["\n      text-align: right;\n    "]))),
    totalValue: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_21 || (templateObject_21 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      font-weight: ", ";\n    "], ["\n      font-weight: ", ";\n    "])), theme.typography.weight.bold)
  };
};
var colorScaleGenerator = function colorScaleGenerator(theme, cellDisplayMode, thresholds, value) {
  var styles = {};
  switch (cellDisplayMode) {
    case _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].None:
      {
        styles = {
          color: "" + theme.colors.text
        };
        break;
      }
    case _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].ColorText:
      {
        styles = {
          color: "" + getColorByThreshold(thresholds, value, theme.colors.text, theme)
        };
        break;
      }
    case _types__WEBPACK_IMPORTED_MODULE_4__["CellDisplayMode"].ColorBackground:
      {
        styles = {
          backgroundColor: "" + getColorByThreshold(thresholds, value, '', theme),
          color: "" + theme.colors.text
        };
        break;
      }
  }
  return styles;
};
var getColorByThreshold = function getColorByThreshold(thresholds, value, defaultColor, theme) {
  var e_1, _a;
  var color = defaultColor;
  var thresholdMode = thresholds.mode;
  var cellValue = thresholdMode === 'absolute' ? value : value * 100;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var theme2 = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme2"])();
  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(thresholds.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
      var entry = _c.value;
      if (cellValue >= entry.value) {
        color = theme2.visualization.getColorByName(entry.color);
      } else {
        return color;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return color;
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21;

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: SUB_TOTAL_KEY, AggregatorType, SortingOrders, CellDisplayMode, LIMITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_TOTAL_KEY", function() { return SUB_TOTAL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatorType", function() { return AggregatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingOrders", function() { return SortingOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellDisplayMode", function() { return CellDisplayMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMITS", function() { return LIMITS; });
var SUB_TOTAL_KEY = 'Subtotal';
var AggregatorType;
(function (AggregatorType) {
  AggregatorType["COUNT"] = "Count";
  AggregatorType["SUM"] = "Sum";
  AggregatorType["AVERAGE"] = "Average";
  AggregatorType["MEDIAN"] = "Median";
  AggregatorType["MIN"] = "Minimum";
  AggregatorType["MAX"] = "Maximum";
  AggregatorType["SUM_AS_FRANCTION_OF_TOTAL"] = "Sum as a fraction of Totals";
  AggregatorType["SUM_AS_FRANCTION_OF_ROWS"] = "Sum as a fraction of rows";
  AggregatorType["SUM_AS_FRANCTION_OF_COLUMNS"] = "Sum as a fraction of columns";
  AggregatorType["COUNT_AS_FRANCTION_OF_TOTAL"] = "Count as a fraction of Totals";
  AggregatorType["COUNT_AS_FRANCTION_OF_ROWS"] = "Count as a fraction of rows";
  AggregatorType["COUNT_AS_FRANCTION_OF_COLUMNS"] = "Count as a fraction of columns";
})(AggregatorType || (AggregatorType = {}));
var SortingOrders;
(function (SortingOrders) {
  SortingOrders["NONE"] = "none";
  SortingOrders["KEY_ASC"] = "key_a_to_z";
  SortingOrders["KEY_DESC"] = "key_z_to_a";
  SortingOrders["TOTAL_ASC"] = "value_a_to_z";
  SortingOrders["TOTAL_DESC"] = "value_z_to_a";
})(SortingOrders || (SortingOrders = {}));
var CellDisplayMode;
(function (CellDisplayMode) {
  CellDisplayMode["None"] = "none";
  CellDisplayMode["ColorText"] = "color-text";
  CellDisplayMode["ColorBackground"] = "color-background";
})(CellDisplayMode || (CellDisplayMode = {}));
var LIMITS = {
  DEFAULT_ROW_LIMIT: 100,
  DEFAULT_COL_LIMIT: 60,
  VIEW_MODE_ROW_LIMIT: 150,
  VIEW_MODE_COL_LIMIT: 150,
  VIEW_MODE_NODE_LIMIT: 20000
};

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_css__;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map