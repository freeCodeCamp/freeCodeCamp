/*jshint white: true*/
(function (t) {
    var w = t;
    "use strict";

}(this));

function s1() {
    "use strict"
}

function s2() {
    /*everything ok here*/
    "fdfdsf";
    /* */
    "ddasfgggg";
    
    /*
    */
    /**///xsxsx
    "" //zeze
    ;
    "use strict";
}

function s3() {
    if (this) {
        "use strict";
        s2(1);
    } else {
        s2(2);
    }
}

function s4() {
    "use stict"; // typo
    // comments and other directives are allowed
    "xyz";
    "use strict";
        
    if (true) {
        s3(1);
    }
}

function s5() {
    "use stict"; // typo
    // comments and other directives are allowed
    "xyz";
    // here is no "use strict"...
        
    try {
        "use strict";
        s4(1);
    } catch (ex) {
        s4(2);
    }

}