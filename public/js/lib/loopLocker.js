var lGR00001 = function(pattern, code){
  code = code.split('\n');
  code = code.map(function(c) {
    return c.replace(pattern, "var lG00001 = new lGPF00001();\n" + "$1" + "\n lG00001.increase();\n");
  });
  code = code.join('\n');
  return code
};

var G00001 = function(code){
  if(typeof code !== "string") {
    throw("Non-String passed to guard");
  }
  code = lGR00001(/(^\s*for\s*\(.*\)\s*\{\n*)/gi, code);
  code = lGR00001(/(^\s*while\s*\(.*\)\s*\{\n*)/gi, code);
  code = lGR00001(/(^\s*function\s*\w*\s*\(.*\)\s*\{\n*)/gi, code);
  code = lGR00001(/(^\s*do\s*\{)/gi, code);
  return code;
};