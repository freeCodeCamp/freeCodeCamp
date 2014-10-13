console.log('\nIN script2.js');

console.log('this: \t\t', this);
console.log('window: \t', window);
this.g && console.log('g(): \t\t', g());

test(a === 101, 'a === 101');
test(window.a === 101, 'window.a === 101');
test(this.a === 101, 'this.a === 101');

test(b === 102, 'b === 102');
test(window.b === 102, 'window.b === 102');
test(this.b === 102, 'this.b === 102');

test(c === 103, 'c === 103');
test(window.c === 103, 'window.c === 103');
test(this.c === 103, 'this.c === 103');
test('c' in this, '"c" in this');

test(d === 104, 'd === 104');
test(window.d === 104, 'window.d === 104');
test(this.d === 104, 'this.d === 104');

test({}.e === 1, '{}.e === 1');
