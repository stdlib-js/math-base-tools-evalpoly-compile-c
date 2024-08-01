/** @license Apache-2.0 */

'use strict';

/**
* Compile a C function for evaluating a polynomial.
*
* @module @stdlib/math-base-tools-evalpoly-compile-c
*
* @example
* var compile = require( '@stdlib/math-base-tools-evalpoly-compile-c' );
*
* var str = compile( [3.0,2.0,1.0] ); // 3*10^0 + 2*10^1 + 1*10^2
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
