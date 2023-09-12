import { describe, expect } from '@jest/globals';
import isValidNumber from '../src/index';

describe('is a number', () => {
  const fixtures: (string | number | boolean | object | null | undefined)[] = [
    0xff,
    5e3,
    0,
    0.1,
    -0.1,
    -1.1,
    37,
    3.14,

    1,
    1.1,
    10,
    10.1,
    100,
    -100,

    '0.1',
    '-0.1',
    '-1.1',
    '0',
    '012',
    '0xff',
    '1',
    '1.1',
    '10',
    '10.10',
    '100',
    '5e3',
    '   56\r\n  ', // issue#3

    Math.LN2,

    // 012, Octal literal not allowed in strict mode
    parseInt('012'),
    parseFloat('012'),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,

    '0.0',
    '0x0',
    '0e+5',
    '000',
    '0.0e-5',
    '0.0E5',
  ];

  fixtures.forEach((num) => {
    test(JSON.stringify(num) + ' should be a number', () => {
      expect(isValidNumber(num)).toBeTruthy();
    });
  });
});

describe('is not a number', () => {
  const fixtures: (string | number | boolean | object | null | undefined)[] = [
    '   ', // issue#3
    '\r\n\t', // issue#3
    '',
    '',
    '3a',
    'abc',
    'false',
    'null',
    'true',
    'undefined',
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () {},
    function () {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {},
  ];

  fixtures.forEach((num) => {
    test(JSON.stringify(num) + ' should not be a number', () => {
      expect(isValidNumber(num)).toBeFalsy();
    });
  });
});
