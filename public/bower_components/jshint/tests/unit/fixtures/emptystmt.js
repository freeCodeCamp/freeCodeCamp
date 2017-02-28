var;

var i = 0;
while (++i < 10);

foo;

function foo() {
    return;
};

if (true);

for (var i = 0; i < 10; i += 1);

for (var i = 0; i < 10; i += 1) {
    foo();;
    break;
}

for (var i = 0; i < 10; i += 1) {
    continue;
}