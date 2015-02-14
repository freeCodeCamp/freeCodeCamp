(function() {
    var expect = chai.expect;
    var tests = parent.tests;

    for (var i = 0; i < tests.length; i++) {
        var thisTest = true;
        try {
            eval(parent.tests[i]);
        } catch (err) {
            allTestsGood = false;
            thisTest = false;
            parent.postError(JSON.stringify(tests[i]));
        } finally {
            if (thisTest) {
                parent.postSuccess(JSON.stringify(tests[i]));
            }
        }
    }
})();