function functionWithNestedBlockDepth3() {
    var dummy = 10;
    if (dummy < 20) {
        // here we should get a warning for max depth 1
        while (dummy > 0) {
            dummy -= 1;
            // here we should get a warning for max depth 2
            // but not for max depth 1, as we already got one above
            if (dummy > 5) {
                dummy -= 1;
            }
        }
        // here we should get a warning for max depth 1
        if (dummy === 0) {
            dummy = 1;
        }
    }
}