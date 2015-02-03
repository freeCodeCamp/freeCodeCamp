window.onload=function(){
    if (!window.waitToLoad) {
        load();
    }
};

function load() {
    if (window.loaded) {
        return;
    }
    window.loaded = true;

    var myTextArea = document.getElementById("editor");
    var textareaEditor = document.getElementById('textarea-editor');
    var clonedTextArea = document.getElementById('editor2');

    textareaEditor.value = clonedTextArea.value = myTextArea.value;

    document.getElementById("original-demo").appendChild(clonedTextArea);
    var myScreenreader = document.getElementById("editor-screenreader");

    var myContentEditable = document.getElementById("content-editable");
    var button = document.getElementById("toggle-textarea-visibility");


    var editor = window.editor = CodeMirror.fromTextArea(myTextArea, {
            lineNumbers: true,
            matchBrackets: true,
            continueComments: "Enter",
            extraKeys: {"Ctrl-Q": "toggleComment"}
    });

    var editor2 = window.editor2 = CodeMirrorOriginal.fromTextArea(clonedTextArea, {
            lineNumbers: true,
            matchBrackets: true,
            continueComments: "Enter",
            extraKeys: {"Ctrl-Q": "toggleComment"}
    });


    var textareaVisible = false;
    function toggleTextareaDisplay() {

        if (!editor.display.input.getAttribute("backup-style")) {
            editor.display.input.setAttribute("backup-style", editor.display.input.getAttribute("style"));
            editor.display.input.parentNode.setAttribute("backup-style", editor.display.input.parentNode.getAttribute("style"));
        }

        if (textareaVisible) {
            editor.display.input.setAttribute("style", editor.display.input.getAttribute("backup-style"));
            editor.display.input.parentNode.setAttribute("style", editor.display.input.parentNode.getAttribute("backup-style"));
            editor2.display.input.setAttribute("style", editor.display.input.getAttribute("backup-style"));
            editor2.display.input.parentNode.setAttribute("style", editor.display.input.parentNode.getAttribute("backup-style"));
        }
        else {
            editor.display.input.setAttribute("style", "height: 100px; width: 95%; margin-left: 3%; ");
            editor.display.input.parentNode.setAttribute("style", "");
            editor2.display.input.setAttribute("style", "height: 100px; width: 95%; margin-left: 3%; ");
            editor2.display.input.parentNode.setAttribute("style", "");
        }

        textareaVisible = !textareaVisible;

        if (window.localStorage) {
            if (textareaVisible) {
                window.localStorage["toggleTextareaDisplay"] = "1";
            }
            else {
                window.localStorage.removeKey("toggleTextareaDisplay");
            }
        }
    }

    button.onclick = toggleTextareaDisplay;

    if (window.localStorage && window.localStorage["toggleTextareaDisplay"]) {
        toggleTextareaDisplay();
    }

}