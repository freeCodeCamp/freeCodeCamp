// Ideally, we would use
// https://html.spec.whatwg.org/multipage/rendering.html#the-css-user-agent-style-sheet-and-presentational-hints
// but for now, just use the version from blink. This file is copied from
// https://chromium.googlesource.com/chromium/blink/+/96aa3a280ab7d67178c8f122a04949ce5f8579e0/Source/core/css/html.css
// (removed a line which had octal literals inside since octal literals are not allowed in template strings)

// We use a .js file because otherwise we can't browserify this. (brfs is unusable due to lack of ES2015 support)

module.exports = `
/*
 * The default style sheet used to render HTML.
 *
 * Copyright (C) 2000 Lars Knoll (knoll@kde.org)
 * Copyright (C) 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 Apple Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public License
 * along with this library; see the file COPYING.LIB.  If not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301, USA.
 *
 */

@namespace "http://www.w3.org/1999/xhtml";

html {
    display: block
}

:root {
    scroll-blocks-on: start-touch wheel-event
}

/* children of the <head> element all have display:none */
head {
    display: none
}

meta {
    display: none
}

title {
    display: none
}

link {
    display: none
}

style {
    display: none
}

script {
    display: none
}

/* generic block-level elements */

body {
    display: block;
    margin: 8px
}

p {
    display: block;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1__qem;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}

div {
    display: block
}

layer {
    display: block
}

article, aside, footer, header, hgroup, main, nav, section {
    display: block
}

marquee {
    display: inline-block;
}

address {
    display: block
}

blockquote {
    display: block;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

figcaption {
    display: block
}

figure {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

q {
    display: inline
}

/* nwmatcher does not support ::before and ::after, so we can't render q
correctly: https://html.spec.whatwg.org/multipage/rendering.html#phrasing-content-3
TODO: add q::before and q::after selectors
*/

center {
    display: block;
    /* special centering to be able to emulate the html4/netscape behaviour */
    text-align: -webkit-center
}

hr {
    display: block;
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    border-style: inset;
    border-width: 1px;
    box-sizing: border-box
}

map {
    display: inline
}

video {
    object-fit: contain;
}

/* heading elements */

h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67__qem;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

article h1,
aside h1,
nav h1,
section h1 {
    font-size: 1.5em;
    -webkit-margin-before: 0.83__qem;
    -webkit-margin-after: 0.83em;
}

article article h1,
article aside h1,
article nav h1,
article section h1,
aside article h1,
aside aside h1,
aside nav h1,
aside section h1,
nav article h1,
nav aside h1,
nav nav h1,
nav section h1,
section article h1,
section aside h1,
section nav h1,
section section h1 {
    font-size: 1.17em;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
}

/* Remaining selectors are deleted because nwmatcher does not support
:matches() and expanding the selectors manually would be far too verbose.
Also see https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings
TODO: rewrite to use :matches() when nwmatcher supports it.
*/

h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83__qem;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h4 {
    display: block;
    -webkit-margin-before: 1.33__qem;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h5 {
    display: block;
    font-size: .83em;
    -webkit-margin-before: 1.67__qem;
    -webkit-margin-after: 1.67em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h6 {
    display: block;
    font-size: .67em;
    -webkit-margin-before: 2.33__qem;
    -webkit-margin-after: 2.33em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

/* tables */

table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray
}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit
}

tfoot {
    display: table-footer-group;
    vertical-align: middle;
    border-color: inherit
}

/* for tables without table section elements (can happen with XHTML or dynamically created tables) */
table > tr {
    vertical-align: middle;
}

col {
    display: table-column
}

colgroup {
    display: table-column-group
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit
}

td, th {
    display: table-cell;
    vertical-align: inherit
}

th {
    font-weight: bold
}

caption {
    display: table-caption;
    text-align: -webkit-center
}

/* lists */

ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 40px
}

ol {
    display: block;
    list-style-type: decimal;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 40px
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

ul ul, ol ul {
    list-style-type: circle
}

ol ol ul, ol ul ul, ul ol ul, ul ul ul {
    list-style-type: square
}

dd {
    display: block;
    -webkit-margin-start: 40px
}

dl {
    display: block;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}

dt {
    display: block
}

ol ul, ul ol, ul ul, ol ol {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0
}

/* form elements */

form {
    display: block;
    margin-top: 0__qem;
}

label {
    cursor: default;
}

legend {
    display: block;
    -webkit-padding-start: 2px;
    -webkit-padding-end: 2px;
    border: none
}

fieldset {
    display: block;
    -webkit-margin-start: 2px;
    -webkit-margin-end: 2px;
    -webkit-padding-before: 0.35em;
    -webkit-padding-start: 0.75em;
    -webkit-padding-end: 0.75em;
    -webkit-padding-after: 0.625em;
    border: 2px groove ThreeDFace;
    min-width: -webkit-min-content;
}

button {
    -webkit-appearance: button;
}

/* Form controls don't go vertical. */
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb !important;
}

input, textarea, select, button {
    margin: 0__qem;
    font: -webkit-small-control;
    text-rendering: auto; /* FIXME: Remove when tabs work with optimizeLegibility. */
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
}

/* TODO: Add " i" to attribute matchers to support case-insensitive matching */
input[type="hidden"] {
    display: none
}

input {
    -webkit-appearance: textfield;
    padding: 1px;
    background-color: white;
    border: 2px inset;
    -webkit-rtl-ordering: logical;
    -webkit-user-select: text;
    cursor: auto;
}

input[type="search"] {
    -webkit-appearance: searchfield;
    box-sizing: border-box;
}

select {
    border-radius: 5px;
}

textarea {
    -webkit-appearance: textarea;
    background-color: white;
    border: 1px solid;
    -webkit-rtl-ordering: logical;
    -webkit-user-select: text;
    flex-direction: column;
    resize: auto;
    cursor: auto;
    padding: 2px;
    white-space: pre-wrap;
    word-wrap: break-word;
}

input[type="password"] {
    -webkit-text-security: disc !important;
}

input[type="hidden"], input[type="image"], input[type="file"] {
    -webkit-appearance: initial;
    padding: initial;
    background-color: initial;
    border: initial;
}

input[type="file"] {
    align-items: baseline;
    color: inherit;
    text-align: start !important;
}

input[type="radio"], input[type="checkbox"] {
    margin: 3px 0.5ex;
    padding: initial;
    background-color: initial;
    border: initial;
}

input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: push-button;
    -webkit-user-select: none;
    white-space: pre
}

input[type="button"], input[type="submit"], input[type="reset"], button {
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: ButtonText;
    padding: 2px 6px 3px 6px;
    border: 2px outset ButtonFace;
    background-color: ButtonFace;
    box-sizing: border-box
}

input[type="range"] {
    -webkit-appearance: slider-horizontal;
    padding: initial;
    border: initial;
    margin: 2px;
    color: #909090;
}

input[type="button"]:disabled, input[type="submit"]:disabled, input[type="reset"]:disabled,
button:disabled, select:disabled, optgroup:disabled, option:disabled,
select[disabled]>option {
    color: GrayText
}

input[type="button"]:active, input[type="submit"]:active, input[type="reset"]:active, button:active {
    border-style: inset
}

input[type="button"]:active:disabled, input[type="submit"]:active:disabled, input[type="reset"]:active:disabled, button:active:disabled {
    border-style: outset
}

datalist {
    display: none
}

area {
    display: inline;
    cursor: pointer;
}

param {
    display: none
}

input[type="checkbox"] {
    -webkit-appearance: checkbox;
    box-sizing: border-box;
}

input[type="radio"] {
    -webkit-appearance: radio;
    box-sizing: border-box;
}

input[type="color"] {
    -webkit-appearance: square-button;
    width: 44px;
    height: 23px;
    background-color: ButtonFace;
    /* Same as native_theme_base. */
    border: 1px #a9a9a9 solid;
    padding: 1px 2px;
}

input[type="color"][list] {
    -webkit-appearance: menulist;
    width: 88px;
    height: 23px
}

select {
    -webkit-appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    border: 1px solid;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    color: black;
    background-color: white;
    cursor: default;
}

optgroup {
    font-weight: bolder;
    display: block;
}

option {
    font-weight: normal;
    display: block;
    padding: 0 2px 1px 2px;
    white-space: pre;
    min-height: 1.2em;
}

output {
    display: inline;
}

/* meter */

meter {
    -webkit-appearance: meter;
    box-sizing: border-box;
    display: inline-block;
    height: 1em;
    width: 5em;
    vertical-align: -0.2em;
}

/* progress */

progress {
    -webkit-appearance: progress-bar;
    box-sizing: border-box;
    display: inline-block;
    height: 1em;
    width: 10em;
    vertical-align: -0.2em;
}

/* inline elements */

u, ins {
    text-decoration: underline
}

strong, b {
    font-weight: bold
}

i, cite, em, var, address, dfn {
    font-style: italic
}

tt, code, kbd, samp {
    font-family: monospace
}

pre, xmp, plaintext, listing {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1__qem 0
}

mark {
    background-color: yellow;
    color: black
}

big {
    font-size: larger
}

small {
    font-size: smaller
}

s, strike, del {
    text-decoration: line-through
}

sub {
    vertical-align: sub;
    font-size: smaller
}

sup {
    vertical-align: super;
    font-size: smaller
}

nobr {
    white-space: nowrap
}

/* states */

:focus {
    outline: auto 5px -webkit-focus-ring-color
}

/* Read-only text fields do not show a focus ring but do still receive focus */
html:focus, body:focus, input[readonly]:focus {
    outline: none
}

embed:focus, iframe:focus, object:focus {
    outline: none
}

input:focus, textarea:focus, select:focus {
    outline-offset: -2px
}

input[type="button"]:focus,
input[type="checkbox"]:focus,
input[type="file"]:focus,
input[type="hidden"]:focus,
input[type="image"]:focus,
input[type="radio"]:focus,
input[type="reset"]:focus,
input[type="search"]:focus,
input[type="submit"]:focus {
    outline-offset: 0
}

/* HTML5 ruby elements */

ruby, rt {
    text-indent: 0; /* blocks used for ruby rendering should not trigger this */
}

rt {
    line-height: normal;
    -webkit-text-emphasis: none;
}

ruby > rt {
    display: block;
    font-size: 50%;
    text-align: start;
}

ruby > rp {
    display: none;
}

/* other elements */

noframes {
    display: none
}

frameset, frame {
    display: block
}

frameset {
    border-color: inherit
}

iframe {
    border: 2px inset
}

details {
    display: block
}

summary {
    display: block
}

template {
    display: none
}

bdi, output {
    unicode-bidi: -webkit-isolate;
}

bdo {
    unicode-bidi: bidi-override;
}

textarea[dir=auto] {
    unicode-bidi: -webkit-plaintext;
}

dialog:not([open]) {
    display: none
}

dialog {
    position: absolute;
    left: 0;
    right: 0;
    width: -webkit-fit-content;
    height: -webkit-fit-content;
    margin: auto;
    border: solid;
    padding: 1em;
    background: white;
    color: black
}

/* noscript is handled internally, as it depends on settings. */

`;
