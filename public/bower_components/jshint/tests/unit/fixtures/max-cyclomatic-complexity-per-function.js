function functionWithCyclomaticComplexity_1() {
}

function functionWithCyclomaticComplexity_1_2() {
    var dummy = 1;
}

function functionWithCyclomaticComplexity_2() {
    var dummy = 10;
    if (dummy < 20) {
        dummy = 2;
    }
}

function functionWithCyclomaticComplexity_2() {
    var dummy = 10;
    if (dummy < 20) {
        dummy = 2;
    } else {
        // else does not count for cyclomatic complexity
        dummy = 2;
    }
}

function functionWithCyclomaticComplexity_2_try_catch() {
    var dummy = 0;
    try {
        dummy = dummy / 0;
    } catch (exception) {
        dummy = 10;
    } finally {
        // finally does no count
        dummy = 10;
    }
}

function functionWithCyclomaticComplexity_1_try_finally() {
    var dummy = 0;
    try {
        dummy = dummy / 0;
    } finally {
        // finally does no count
        dummy = 10;
    }
}

function functionWithCyclomaticComplexity_8() {
    var dummy = 10;
    if (dummy < 20) {
        while (dummy > 0) {
            dummy -= 1;
        }
        for (dummy = 1; dummy < 10; dummy++) {
            dummy += 1;
        }
    } else if (dummy<100) {
        dummy = 2;
    } else {
        // else does not count for cyclomatic complexity
        dummy = 2;
    }

    do {
        dummy++;
    } while (dummy < 1000);

    switch (dummy) {
        case 1:
            break;
        case 2: break;
        // default does not count
        default :
    }
}

function functionWithCyclomaticComplexityDueToTernaryStatements_2(a) {
  var b = a ? true : false;
}

function functionWithCyclomaticComplexityDueToOrOperators_2(a) {
  var b = a || {};
}
