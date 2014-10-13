var test = function (v, n) {
   try {
   assert.ok(v, n);
   }
   catch (e) {
   console.log(e.name + ': ' + e.message);
   return;
   }
   console.log('OK: ' + n);
};

console.log('\nIN script.js');

console.log('this: \t\t', this);
console.log('window: \t', window);
this.g && console.log('g(): \t\t', g());

test('a' in this, '"a" in this');
test('a' in window, '"a" in window');
test(a === 1, 'a === 1');
test(window.a === 1, 'window.a === 1');
test(this.a === 1, 'this.a === 1');


a = 101;
test(window.a === 101, 'window.a === 101');
test(this.a === 101, 'this.a === 101')


window.b = 102;
test(b === 102, 'b === 102');
test(this.b === 102, 'this.b === 102');


var c = 103;
test(window.c === 103, 'window.c === 103');
test(this.c === 103, 'this.c === 103');


this.d = 104;
test(d === 104, 'd === 104');
test(window.d === 104, 'window.d === 104');


Object.prototype.e = 1;
test({}.e === 1, '{}.e === 1');
