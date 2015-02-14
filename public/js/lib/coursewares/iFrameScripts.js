(function() {
    var allTestsGood = true;
    var expect = chai.expect;
    var tests = parent.tests;

    for (var i = 0; i < tests.length; i++) {

        try {
            eval(tests[i]);
        } catch (err) {
            allTestsGood = false;
            console.log('All tests are good?', allTestsGood);
            parent.postError(err);

        } finally {
            if (allTestsGood) {
                console.log('You should not be able to see me if there are errors on teh screen!', allTestsGood);
                parent.postSuccess();
            }
        }
    }
})();