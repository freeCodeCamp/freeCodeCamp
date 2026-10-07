import test from 'tape';

import cleanSet from '../lib';

let data = {
  a: { b: [], c: true },
  d: [{ m: [{ n: 2 }] }],
  e: {
    f: { g: 'hello' },
    h: { i: 0, j: [] },
  },
};

test('clean-set: basic functionality', tap => {
  let next = cleanSet(data, 'e.h.i', 1);

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.assert(next.e.h.i === 1, 'value was updated');
  tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
  tap.assert(next.e !== data.e, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(next.d === data.d, 'untouched node kept their reference');
  tap.assert(
    next.d[0].m === data.d[0].m,
    'untouched node kept their reference'
  );
  tap.assert(
    next.d[0].m[0] === data.d[0].m[0],
    'untouched node kept their reference'
  );
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
  tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: update value as a function', tap => {
  let next = cleanSet(data, 'e.h.j', j => j.concat('some-item'));

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.assert(next.e.h.j[0] === 'some-item', 'value was updated');
  tap.assert(next.e.h.j !== data.e.h.j, 'touched node has a new reference');
  tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
  tap.assert(next.e !== data.e, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(next.d === data.d, 'untouched node kept their reference');
  tap.assert(
    next.d[0].m === data.d[0].m,
    'untouched node kept their reference'
  );
  tap.assert(
    next.d[0].m[0] === data.d[0].m[0],
    'untouched node kept their reference'
  );
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: array key', tap => {
  let next = cleanSet(data, ['e', 'h', 'i'], i => i + 1);

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.assert(next.e.h.i === 1, 'value was updated');
  tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
  tap.assert(next.e !== data.e, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(next.d === data.d, 'untouched node kept their reference');
  tap.assert(
    next.d[0].m === data.d[0].m,
    'untouched node kept their reference'
  );
  tap.assert(
    next.d[0].m[0] === data.d[0].m[0],
    'untouched node kept their reference'
  );
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
  tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: creates an object if none exists', tap => {
  let next = cleanSet(data, 'e.h.k.l', true);

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.same(next.e.h.k, { l: true }, 'object was created and value was added');
  tap.assert(next.e.h !== data.e.h, 'touched node has a new reference');
  tap.assert(next.e !== data.e, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(next.d === data.d, 'untouched node kept their reference');
  tap.assert(
    next.d[0].m === data.d[0].m,
    'untouched node kept their reference'
  );
  tap.assert(
    next.d[0].m[0] === data.d[0].m[0],
    'untouched node kept their reference'
  );
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
  tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: supports accessing an index of an array', tap => {
  // let next = cleanSet(data, 'd.0.m.0.n', n => n + 1); // either will work for this scenario
  let next = cleanSet(data, ['d', 0, 'm', 0, 'n'], n => n + 1);

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.assert(next.d[0].m[0].n === 3, 'value was updated');
  tap.assert(
    next.d[0].m[0] !== data.d[0].m[0],
    'touched node has a new reference'
  );
  tap.assert(next.d[0].m !== data.d[0].m, 'touched node has a new reference');
  tap.assert(next.d[0] !== data.d[0], 'touched node has a new reference');
  tap.assert(next.d !== data.d, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
  tap.assert(next.e.h.i === data.e.h.i, 'untouched node kept their reference');
  tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: creates a record at the index if none exists', tap => {
  let next = cleanSet(data, ['d', 2, 'o'], { p: 'creates at index' });

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');
  tap.same(next.d[2].o, { p: 'creates at index' }, 'value was created');
  tap.assert(next.d !== data.d, 'touched node has a new reference');

  tap.assert(next.a === data.a, 'untouched node kept their reference');
  tap.assert(next.a.b === data.a.b, 'untouched node kept their reference');
  tap.assert(
    next.d[0].m === data.d[0].m,
    'untouched node kept their reference'
  );
  tap.assert(
    next.d[0].m[0] === data.d[0].m[0],
    'untouched node kept their reference'
  );
  tap.assert(next.e.f === data.e.f, 'untouched node kept their reference');
  tap.assert(next.e.h.i === data.e.h.i, 'untouched node kept their reference');
  tap.assert(next.e.h.j === data.e.h.j, 'untouched node kept their reference');

  tap.end();
});

test('clean-set: allows setting to null', tap => {
  let next = cleanSet(data, 'q.r', null);

  tap.assert(next != null, 'next has a value');
  tap.assert(next !== data, 'next has a new reference');

  tap.same(next.q, { r: null } , 'object was created and value set to null');

  tap.end();
});


test('clean-set: performance benchmark', tap => {
  let cData = data,
    n = 0,
    start = +Date.now();
  for (; n < 100000; n++) {
    cData = cleanSet(cData, 'e.h.i', i => i + 1);
  }
  let timeTaken = +Date.now() - start;

  tap.assert(timeTaken < 300, `cleanSet benchmark ran in ${timeTaken}ms`);
  tap.end();
});

test('Object.assign: performance benchmark', tap => {
  let cData = data,
    n = 0,
    start = +Date.now();

  for (; n < 100000; n++) {
    cData = Object.assign({}, cData, {
      e: Object.assign({}, cData.e, {
        h: Object.assign({}, cData.e.h, { i: cData.e.h.i + 1 }),
      }),
    });
  }
  let timeTaken = +Date.now() - start;

  tap.assert(timeTaken < 300, `Object.assign benchmark ran in ${timeTaken}ms`);

  tap.end();
});

test('Object spread: performance benchmark', tap => {
  let cData = data,
    n = 0,
    start = +Date.now();

  for (; n < 100000; n++) {
    cData = {
      ...cData,
      e: { ...cData.e, h: { ...cData.e.h, i: cData.e.h.i + 1 } },
    };
  }
  let timeTaken = +Date.now() - start;

  tap.assert(timeTaken < 300, `Object spread benchmark ran in ${timeTaken}ms`);

  tap.end();
});
