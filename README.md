# ts-is-number

![Workflow](https://github.com/paxa1887/ts-is-number/actions/workflows/main.yml/badge.svg)
[![Codecov](https://codecov.io/gh/paxa1887/ts-is-number/graph/badge.svg?token=S6U22KXOKW)](https://codecov.io/gh/paxa1887/ts-is-number) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/ts-is-number.svg?style=flat)](https://www.npmjs.com/package/ts-is-number)
[![Install Size](https://packagephobia.com/badge?p=ts-is-number)](https://packagephobia.com/result?p=ts-is-number) [![Known Vulnerabilities](https://snyk.io/test/github/paxa1887/ts-is-number/badge.svg)](https://snyk.io/test/github/paxa1887/ts-is-number)

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
