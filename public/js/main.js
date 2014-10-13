$(document).ready(function() {

    function init() {
        var firepadRef = getExampleRef();
        var ref = new Firebase('scorching-heat-2873.firebaseIO.com');
        var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
            lineNumbers: true,
            mode: 'javascript'
        });
        var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
            defaultText: '// JavaScript Editing with Firepad!\\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
        });
    }
    function getExampleRef() {
        var ref = new Firebase('https://firepad.firebaseio-demo.com');
        var hash = window.location.hash.replace(/#/g, '');
        if (hash) {
            ref = ref.child(hash);
        } else {
            ref = ref.push(); // generate unique location.
            window.location = window.location + '#' + ref.name(); // add it as a hash to the URL.
        }
        if (typeof console !== 'undefined')
            console.log('Firebase data: ', ref.toString());
        return ref;
    }
    init();
    var chatRef = new Firebase('https://scorching-heat-2873.firebaseio.com/chat');
    var auth = new FirebaseSimpleLogin(chatRef, function(err, user) {
        console.log("HEY!")
        if (user) {
            var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
            chat.setUser(user.uid, user.displayName);
        }
    });

});

