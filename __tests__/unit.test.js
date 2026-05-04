// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('(123)456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('12345 is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('abc is not a valid phone number', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

// isEmail
test('test@gmail.com is a valid email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});
test('emn008@ucsd.edu is a valid email', () => {
  expect(isEmail('emn008@ucsd.edu')).toBe(true);
});
test('not@email is not a valid email', () => {
  expect(isEmail('not@email')).toBe(false);
});
test('test@dotcom is not a valid email', () => {
  expect(isEmail('test@dotcom')).toBe(false);
});

// isStrongPassword
test('aespa123 is a strong password', () => {
  expect(isStrongPassword('aespa123')).toBe(true);
});
test('CSE110_Lab5 is a strong password', () => {
  expect(isStrongPassword('CSE110_Lab5')).toBe(true);
});
test('abc is not a strong password (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
test('1invalid is not a strong password (starts with number)', () => {
  expect(isStrongPassword('1invalid')).toBe(false);
});

// isDate
test('12/22/2005 is a valid date', () => {
  expect(isDate('12/22/2005')).toBe(true);
});
test('1/1/2001 is a valid date', () => {
  expect(isDate('1/1/2001')).toBe(true);
});
test('24/2008 is not a valid date', () => {
  expect(isDate('24/2008')).toBe(false);
});
test('mm/dd/yyyy is not a valid date', () => {
  expect(isDate('mm/dd/yyyy')).toBe(false);
});

// isHexColor
test('#FFF is a valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('#1a2b3c is a valid hex color', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('#GGGGGG is not a valid hex color', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('123456789 is not a valid hex color (too long)', () => {
  expect(isHexColor('123456789')).toBe(false);
});
