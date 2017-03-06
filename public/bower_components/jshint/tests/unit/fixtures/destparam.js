var foo;

// array
foo = ([a, b]) => { return a + b; };
foo = ([a, ((b))]) => { return a + b; };
foo = ([a, b], [c, d]) => { return a + b + c + d; };
foo = ([[[a, b], c], d]) => { return a + b + c + d; };

// array elision
foo = ([, a, b]) => { return a, b; };
foo = ([, a, , , b]) => { return a, b; };

// object
foo = ({a}) => { return a; };
foo = ({a, b}) => { return a + b; };
foo = ({a, b: y}, {c}) => { return a + y + c; };
foo = ({a: x, b: y}) => { return x + y; };
foo = ({a: (x), b: y}) => { return x + y; };

// array in object
foo = ({a: [x, y]}) => { return x + y; };
foo = ({a: [x, y], b: z}) => { return x + y + z; };
foo = ({a: [x, y], b: z, c}) => { return x + y + z + c; };
foo = ({a: ([x, y]), b: z, c}) => { return x + y + z + c; };

// object in array
foo = ([{a}]) => { return a; };
foo = ([{a, b}]) => { return a + b; };
foo = ([{a, b: y}]) => { return a + y; };
foo = ([{a: x, b: y}]) => { return x + y; };
foo = ([{a: (x), b: y}]) => { return x + y; };
