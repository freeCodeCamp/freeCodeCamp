/* jshint undef:true */

import $ from "jquery";
import { get as emGet, set } from "ember";
import { one } from "foo";
import { default as _ } from "underscore";
import {} from "ember";
import "ember";
import * as ember2 from "ember";
import _2, * as ember3 from "ember";
import _3, { default as ember } from "ember";

$.ajax();
emGet("foo");
set("bar");
_.map();

var foo = "foo";
var bar = "bar";
function foobar() {}

export default foobar;

// at some point doing a double export default should error, but for now,
// makes testing a hell of a lot easier
export default function() {
  return "foobar";
}

export { foo };
export { foo, bar } from "source";
export { foo, bar as biz } from "source";

// gettin' fancy

export function a() {
  return "a";
}

export var b = function() {
  return "b";
};

export var c = "c";

export class Foo {}
export class List extends Array {}
export default class Bar {}

// imports are const's and cannot be re-assigned
$ = null;
emGet = null;
one = null;
_ = null;
ember2 = null;
// they also cannot be imported twice
import $ from "jquery";
import { get as emGet, set } from "ember";
import { default as _ } from "underscore";
import * as ember2 from "ember";
// or used before definition
if (newImport) {
  $();
}
import newImport from 'newImport';

export function* gen() { yield 1; }
