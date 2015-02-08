(function() {
    var allTestsGood = true;
    var expect = chai.expect;

    try {
        eval(parent.allTests);
    } catch (err) {
        console.log(err);
        allTestsGood = false;
    } finally {
        if (allTestsGood) {
            parent.postMessage('CompleteAwesomeSauce', parent.nodeEnv);
        }
    }
})();