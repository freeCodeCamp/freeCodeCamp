(function () {
    if (a == b)
        return;

    if (a != b)
        return;

    if (a == null) // This should fail even when eqeqeq is true
        return;
}());