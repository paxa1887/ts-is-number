# ts-is-number

![Workflow](https://github.com/paxa1887/typescript-npm-package-boilerplate/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/paxa1887/typescript-npm-package-boilerplate/graph/badge.svg?token=5GMOQM4EZP)](https://codecov.io/gh/paxa1887/typescript-npm-package-boilerplate)

The ts-is-number a utility npm package that checks if a given input is a valid finite number or a string that can be converted to a valid finite number.

# Usage:

Here's how you can import and use the isValidNumber function in your TypeScript or JavaScript project:

```JavaScript
import isValidNumber from 'is-valid-number';
console.log(isValidNumber(123));
```

# Overview

## Method:

isValidNumber(num: string | number | boolean | object | null | undefined): boolean

### Parameters

- `num`: The input parameter which can be a string, number, boolean, object, null, or undefined.

### Returns

Returns true if the input is a valid finite number or a string that can successfully be converted to a valid finite number, otherwise returns false.

### Examples

```JavaScript
console.log(isValidNumber(123)); // returns true
console.log(isValidNumber('123')); // returns true
console.log(isValidNumber('123a')); // returns false
console.log(isValidNumber(NaN)); // returns false
console.log(isValidNumber(undefined)); // returns false
```