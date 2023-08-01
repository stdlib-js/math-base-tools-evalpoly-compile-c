<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# evalpoly

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compile a C function for evaluating a [polynomial][@stdlib/math/base/tools/evalpoly].

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-tools-evalpoly-compile-c
```

</section>

<section class="usage">

## Usage

```javascript
var compile = require( '@stdlib/math-base-tools-evalpoly-compile-c' );
```

#### compile( c\[, options] )

Compiles a C function for evaluating a [polynomial][@stdlib/math/base/tools/evalpoly] having coefficients `c`.

```javascript
var str = compile( [ 3.0, 2.0, 1.0 ] );
// returns <string>
```

The function supports the following `options`:

-   **dtype**: input argument floating-point data type (e.g., `double` or `float`). Default: `'double'`.
-   **name**: function name. Default: `'evalpoly'`.

In the example above, the output string would correspond to the following function:

```c
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x   value at which to evaluate the polynomial
* @return    evaluated polynomial
*/
static double evalpoly( const double x ) {
    return 3.0 + (x * (2.0 + (x * 1.0)));
}
```

To generate a function having a custom name and supporting single-precision floating-point numbers, provide the corresponding options.

```javascript
var opts = {
    'dtype': 'float',
    'name': 'polyval123'
};
var str = compile( [ 3.0, 2.0, 1.0 ], opts );
// returns <string>
```

For the previous example, the output string would correspond to the following function:

```c
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x   value at which to evaluate the polynomial
* @return    evaluated polynomial
*/
static float polyval123( const float x ) {
    return 3.0f + (x * (2.0f + (x * 1.0f)));
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The coefficients should be ordered in **ascending** degree, thus matching summation notation.
-   The function is intended for **non-browser** environments for the purpose of generating functions for inclusion in source files.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float64Array = require( '@stdlib/array-float64' );
var compile = require( '@stdlib/math-base-tools-evalpoly-compile-c' );

var coef;
var sign;
var str;
var i;

// Create an array of random coefficients...
coef = new Float64Array( 10 );
for ( i = 0; i < coef.length; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    coef[ i ] = sign * round( randu()*100.0 );
}

// Compile a function for evaluating a polynomial:
str = compile( coef );
console.log( str );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-evalpoly-compile-c.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-evalpoly-compile-c

[test-image]: https://github.com/stdlib-js/math-base-tools-evalpoly-compile-c/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-evalpoly-compile-c/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-evalpoly-compile-c/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-evalpoly-compile-c?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-evalpoly-compile-c.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-evalpoly-compile-c/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly

</section>

<!-- /.links -->
