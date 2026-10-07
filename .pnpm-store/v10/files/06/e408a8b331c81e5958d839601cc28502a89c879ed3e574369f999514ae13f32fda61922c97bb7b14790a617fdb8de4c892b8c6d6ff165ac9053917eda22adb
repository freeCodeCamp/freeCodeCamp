// @ts-ignore TS6133
import { expect, test } from "vitest";

import * as z from "zod/v3";

const gtFive = z.number().gt(5);
const gteFive = z.number().gte(-5).gte(5);
const minFive = z.number().min(0).min(5);
const ltFive = z.number().lte(10).lt(5);
const lteFive = z.number().lte(5);
const maxFive = z.number().max(10).max(5);
const intNum = z.number().int();
const positive = z.number().positive();
const negative = z.number().negative();
const nonpositive = z.number().nonpositive();
const nonnegative = z.number().nonnegative();
const multipleOfFive = z.number().multipleOf(5);
const multipleOfNegativeFive = z.number().multipleOf(-5);
const finite = z.number().finite();
const safe = z.number().safe();
const stepPointOne = z.number().step(0.1);
const stepPointZeroZeroZeroOne = z.number().step(0.0001);
const stepSixPointFour = z.number().step(6.4);

test("passing validations", () => {
  z.number().parse(1);
  z.number().parse(1.5);
  z.number().parse(0);
  z.number().parse(-1.5);
  z.number().parse(-1);
  z.number().parse(Number.POSITIVE_INFINITY);
  z.number().parse(Number.NEGATIVE_INFINITY);
  gtFive.parse(6);
  gtFive.parse(Number.POSITIVE_INFINITY);
  gteFive.parse(5);
  gteFive.parse(Number.POSITIVE_INFINITY);
  minFive.parse(5);
  minFive.parse(Number.POSITIVE_INFINITY);
  ltFive.parse(4);
  ltFive.parse(Number.NEGATIVE_INFINITY);
  lteFive.parse(5);
  lteFive.parse(Number.NEGATIVE_INFINITY);
  maxFive.parse(5);
  maxFive.parse(Number.NEGATIVE_INFINITY);
  intNum.parse(4);
  positive.parse(1);
  positive.parse(Number.POSITIVE_INFINITY);
  negative.parse(-1);
  negative.parse(Number.NEGATIVE_INFINITY);
  nonpositive.parse(0);
  nonpositive.parse(-1);
  nonpositive.parse(Number.NEGATIVE_INFINITY);
  nonnegative.parse(0);
  nonnegative.parse(1);
  nonnegative.parse(Number.POSITIVE_INFINITY);
  multipleOfFive.parse(15);
  multipleOfFive.parse(-15);
  multipleOfNegativeFive.parse(-15);
  multipleOfNegativeFive.parse(15);
  finite.parse(123);
  safe.parse(Number.MIN_SAFE_INTEGER);
  safe.parse(Number.MAX_SAFE_INTEGER);
  stepPointOne.parse(6);
  stepPointOne.parse(6.1);
  stepPointOne.parse(6.1);
  stepSixPointFour.parse(12.8);
  stepPointZeroZeroZeroOne.parse(3.01);
});

test("failing validations", () => {
  expect(() => ltFive.parse(5)).toThrow();
  expect(() => lteFive.parse(6)).toThrow();
  expect(() => maxFive.parse(6)).toThrow();
  expect(() => gtFive.parse(5)).toThrow();
  expect(() => gteFive.parse(4)).toThrow();
  expect(() => minFive.parse(4)).toThrow();
  expect(() => intNum.parse(3.14)).toThrow();
  expect(() => positive.parse(0)).toThrow();
  expect(() => positive.parse(-1)).toThrow();
  expect(() => negative.parse(0)).toThrow();
  expect(() => negative.parse(1)).toThrow();
  expect(() => nonpositive.parse(1)).toThrow();
  expect(() => nonnegative.parse(-1)).toThrow();
  expect(() => multipleOfFive.parse(7.5)).toThrow();
  expect(() => multipleOfFive.parse(-7.5)).toThrow();
  expect(() => multipleOfNegativeFive.parse(-7.5)).toThrow();
  expect(() => multipleOfNegativeFive.parse(7.5)).toThrow();
  expect(() => finite.parse(Number.POSITIVE_INFINITY)).toThrow();
  expect(() => finite.parse(Number.NEGATIVE_INFINITY)).toThrow();
  expect(() => safe.parse(Number.MIN_SAFE_INTEGER - 1)).toThrow();
  expect(() => safe.parse(Number.MAX_SAFE_INTEGER + 1)).toThrow();

  expect(() => stepPointOne.parse(6.11)).toThrow();
  expect(() => stepPointOne.parse(6.1000000001)).toThrow();
  expect(() => stepSixPointFour.parse(6.41)).toThrow();
});

test("parse NaN", () => {
  expect(() => z.number().parse(Number.NaN)).toThrow();
});

test("min max getters", () => {
  expect(z.number().minValue).toBeNull;
  expect(ltFive.minValue).toBeNull;
  expect(lteFive.minValue).toBeNull;
  expect(maxFive.minValue).toBeNull;
  expect(negative.minValue).toBeNull;
  expect(nonpositive.minValue).toBeNull;
  expect(intNum.minValue).toBeNull;
  expect(multipleOfFive.minValue).toBeNull;
  expect(finite.minValue).toBeNull;
  expect(gtFive.minValue).toEqual(5);
  expect(gteFive.minValue).toEqual(5);
  expect(minFive.minValue).toEqual(5);
  expect(minFive.min(10).minValue).toEqual(10);
  expect(positive.minValue).toEqual(0);
  expect(nonnegative.minValue).toEqual(0);
  expect(safe.minValue).toEqual(Number.MIN_SAFE_INTEGER);

  expect(z.number().maxValue).toBeNull;
  expect(gtFive.maxValue).toBeNull;
  expect(gteFive.maxValue).toBeNull;
  expect(minFive.maxValue).toBeNull;
  expect(positive.maxValue).toBeNull;
  expect(nonnegative.maxValue).toBeNull;
  expect(intNum.minValue).toBeNull;
  expect(multipleOfFive.minValue).toBeNull;
  expect(finite.minValue).toBeNull;
  expect(ltFive.maxValue).toEqual(5);
  expect(lteFive.maxValue).toEqual(5);
  expect(maxFive.maxValue).toEqual(5);
  expect(maxFive.max(1).maxValue).toEqual(1);
  expect(negative.maxValue).toEqual(0);
  expect(nonpositive.maxValue).toEqual(0);
  expect(safe.maxValue).toEqual(Number.MAX_SAFE_INTEGER);
});

test("int getter", () => {
  expect(z.number().isInt).toEqual(false);
  expect(z.number().multipleOf(1.5).isInt).toEqual(false);
  expect(gtFive.isInt).toEqual(false);
  expect(gteFive.isInt).toEqual(false);
  expect(minFive.isInt).toEqual(false);
  expect(positive.isInt).toEqual(false);
  expect(nonnegative.isInt).toEqual(false);
  expect(finite.isInt).toEqual(false);
  expect(ltFive.isInt).toEqual(false);
  expect(lteFive.isInt).toEqual(false);
  expect(maxFive.isInt).toEqual(false);
  expect(negative.isInt).toEqual(false);
  expect(nonpositive.isInt).toEqual(false);
  expect(safe.isInt).toEqual(false);

  expect(intNum.isInt).toEqual(true);
  expect(multipleOfFive.isInt).toEqual(true);
});

test("finite getter", () => {
  expect(z.number().isFinite).toEqual(false);
  expect(gtFive.isFinite).toEqual(false);
  expect(gteFive.isFinite).toEqual(false);
  expect(minFive.isFinite).toEqual(false);
  expect(positive.isFinite).toEqual(false);
  expect(nonnegative.isFinite).toEqual(false);
  expect(ltFive.isFinite).toEqual(false);
  expect(lteFive.isFinite).toEqual(false);
  expect(maxFive.isFinite).toEqual(false);
  expect(negative.isFinite).toEqual(false);
  expect(nonpositive.isFinite).toEqual(false);

  expect(finite.isFinite).toEqual(true);
  expect(intNum.isFinite).toEqual(true);
  expect(multipleOfFive.isFinite).toEqual(true);
  expect(z.number().min(5).max(10).isFinite).toEqual(true);
  expect(safe.isFinite).toEqual(true);
});
