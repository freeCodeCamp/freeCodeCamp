'use strict';
const block = 'block';
const flex = 'flex';
const flow = 'flow';
const flowRoot = 'flow-root';
const grid = 'grid';
const inline = 'inline';
const inlineBlock = 'inline-block';
const inlineFlex = 'inline-flex';
const inlineGrid = 'inline-grid';
const inlineTable = 'inline-table';
const listItem = 'list-item';
const ruby = 'ruby';
const rubyBase = 'ruby-base';
const rubyText = 'ruby-text';
const runIn = 'run-in';
const table = 'table';
const tableCell = 'table-cell';
const tableCaption = 'table-caption';

/**
 * Specification: https://drafts.csswg.org/css-display/#the-display-properties
 */

module.exports = new Map([
  [[block, flow].toString(), block],
  [[block, flowRoot].toString(), flowRoot],
  [[inline, flow].toString(), inline],
  [[inline, flowRoot].toString(), inlineBlock],
  [[runIn, flow].toString(), runIn],
  [[listItem, block, flow].toString(), listItem],
  [[inline, flow, listItem].toString(), inline + ' ' + listItem],
  [[block, flex].toString(), flex],
  [[inline, flex].toString(), inlineFlex],
  [[block, grid].toString(), grid],
  [[inline, grid].toString(), inlineGrid],
  [[inline, ruby].toString(), ruby],
  // `block ruby` is same
  [[block, table].toString(), table],
  [[inline, table].toString(), inlineTable],
  [[tableCell, flow].toString(), tableCell],
  [[tableCaption, flow].toString(), tableCaption],
  [[rubyBase, flow].toString(), rubyBase],
  [[rubyText, flow].toString(), rubyText],
]);
