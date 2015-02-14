(function() {
    var allTestsGood = true;
    var expect = chai.expect;
    var tests = parent.tests;

    for (var i = 0; i < tests.length; i++) {

        try {
            eval(tests[i]);
        } catch (err) {
            parent.postError(err);
            allTestsGood = false;
        } finally {
            if (allTestsGood) {
                parent.postMessage('CompleteAwesomeSauce', parent.nodeEnv);
            }
        }
    }
})();