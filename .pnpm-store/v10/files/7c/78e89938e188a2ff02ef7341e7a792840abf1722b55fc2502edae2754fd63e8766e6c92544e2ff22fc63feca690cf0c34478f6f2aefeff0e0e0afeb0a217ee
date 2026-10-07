import { flow } from '../../src/transforms/index.js';
import { seedBlock } from '../../src/util.js';
import { Block } from '../../src/primitives.js';

const t0 = (b: Block): Block => ({ ...b, description: b.description + ' t0' });
const t1 = (b: Block): Block => ({ ...b, description: b.description + ' t1' });

test('multiple', () => {
  const block = seedBlock({ description: 'test' });
  expect(flow(t0, t1)(block).description).toBe('test t0 t1');
});

test('one', () => {
  const block = seedBlock({ description: 'test' });
  expect(flow(t0)(block).description).toBe('test t0');
});

test('none', () => {
  const block = seedBlock({ description: 'test' });
  expect(flow()(block).description).toBe('test');
});
