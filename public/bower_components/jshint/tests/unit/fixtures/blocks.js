var a, b, c;
a = 1;
{
    b = 2;
    {
        c = 7;
    }
    set_to_three: {
        a = 3;
    }
    count:
    for (var i = 1; i <= 3; ++i) {
        a += i;
    }
    switchStmt:
    switch (a) {
        case 0: b = 1; break;
        case 1: b = 0; break;
        default: b = 2; break;
    }
}

c = 3;

labeledBlock: {
    c += a + b;
}

badBlock: {
    a = 0;
    {
