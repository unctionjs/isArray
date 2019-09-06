/* eslint-disable no-magic-numbers, no-undefined */
import isArray from "./index";

test("works", () => {
  expect(isArray(null)).toBeFalsy();
});

test("works", () => {
  expect(isArray(undefined)).toBeFalsy();
});

test("works", () => {
  expect(isArray("b")).toBeFalsy();
});

test("works", () => {
  expect(isArray({})).toBeFalsy();
});

test("works", () => {
  expect(isArray([])).toBeTruthy();
});

test("works", () => {
  expect(isArray(1)).toBeFalsy();
});

test("works", () => {
  expect(isArray(new Buffer("x"))).toBeFalsy();
});
