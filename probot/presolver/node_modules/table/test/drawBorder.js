/* eslint-disable sort-keys */

import {
    expect
} from 'chai';
import {
    drawBorder,
    drawBorderTop,
    drawBorderJoin,
    drawBorderBottom
} from './../src/drawBorder';

describe('drawBorder', () => {
  it('draws a border using parts', () => {
    const parts = {
      left: '╔',
      right: '╗',
      body: '═',
      join: '╤'
    };

    expect(drawBorder([1], parts)).to.equal('╔═╗\n');
    expect(drawBorder([1, 1], parts)).to.equal('╔═╤═╗\n');
    expect(drawBorder([5, 10], parts)).to.equal('╔═════╤══════════╗\n');
  });
});

describe('drawBorderTop', () => {
  it('draws a border using parts', () => {
    const parts = {
      topLeft: '╔',
      topRight: '╗',
      topBody: '═',
      topJoin: '╤'
    };

    expect(drawBorderTop([1], parts)).to.equal('╔═╗\n');
    expect(drawBorderTop([1, 1], parts)).to.equal('╔═╤═╗\n');
    expect(drawBorderTop([5, 10], parts)).to.equal('╔═════╤══════════╗\n');
  });
});

describe('drawBorderJoin', () => {
  it('draws a border using parts', () => {
    const parts = {
      joinBody: '─',
      joinLeft: '╟',
      joinRight: '╢',
      joinJoin: '┼'
    };

    expect(drawBorderJoin([1], parts)).to.equal('╟─╢\n');
    expect(drawBorderJoin([1, 1], parts)).to.equal('╟─┼─╢\n');
    expect(drawBorderJoin([5, 10], parts)).to.equal('╟─────┼──────────╢\n');
  });
});

describe('drawBorderBottom', () => {
  it('draws a border using parts', () => {
    const parts = {
      bottomBody: '═',
      bottomJoin: '╧',
      bottomLeft: '╚',
      bottomRight: '╝'
    };

    expect(drawBorderBottom([1], parts)).to.equal('╚═╝\n');
    expect(drawBorderBottom([1, 1], parts)).to.equal('╚═╧═╝\n');
    expect(drawBorderBottom([5, 10], parts)).to.equal('╚═════╧══════════╝\n');
  });
});
