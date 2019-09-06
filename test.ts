/* eslint-disable no-magic-numbers, no-undefined */
import isArray from "./index.ts";

test(() => {
  expect(isArray(null)).toBeFalsy();
});

test(() => {
  expect(isArray(undefined)).toBeFalsy();
});

test(() => {
  expect(isArray("b")).toBeFalsy();
});

test(() => {
  expect(isArray({})).toBeFalsy();
});

test(() => {
  expect(isArray([])).toBeTruthy();
});

test(() => {
  expect(isArray(1)).toBeFalsy();
});

test(() => {
  expect(isArray(new Buffer("x"))).toBeFalsy();
});
