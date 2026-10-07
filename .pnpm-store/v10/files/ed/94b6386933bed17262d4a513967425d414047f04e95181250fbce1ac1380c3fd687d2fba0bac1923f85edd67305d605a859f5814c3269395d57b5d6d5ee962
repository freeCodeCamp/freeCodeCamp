import katex from "katex";

let scripts = document.body.getElementsByTagName("script");
scripts = Array.prototype.slice.call(scripts);
scripts.forEach(function(script) {
    if (!script.type || !script.type.match(/math\/tex/i)) {
        return -1;
    }
    const display =
          (script.type.match(/mode\s*=\s*display(;|\s|\n|$)/) != null);

    const katexElement = document.createElement(display ? "div" : "span");
    katexElement.setAttribute("class",
                              display ? "equation" : "inline-equation");
    try {
        katex.render(script.text, katexElement, {displayMode: display});
    } catch (err) {
        //console.error(err); linter doesn't like this
        katexElement.textContent = script.text;
    }
    script.parentNode.replaceChild(katexElement, script);
});
