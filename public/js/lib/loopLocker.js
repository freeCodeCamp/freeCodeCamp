var __watcherInjector = function(pattern, code){
  code = code.split('\n');
  code = code.map(function(c) {
    return c.replace(pattern, "var __loopGuardInstance = new __loopLockerGuardPrefab();\n" + "$1" + "\n __loopGuardInstance.increase();\n");
  });
  code = code.join('\n');
  return code
};

var __initGuard = function(code){
  if(typeof code !== "string") {
    throw("Non-String passed to guard");
  }
  code = __watcherInjector(/(^\s*for\s*\(.*\)\s*\{\n*)/gi, code);
  code = __watcherInjector(/(^\s*while\s*\(.*\)\s*\{\n*)/gi, code);
  code = __watcherInjector(/(^\s*function\s*\w*\s*\(.*\)\s*\{\n*)/gi, code);
  code = __watcherInjector(/(^\s*do\s*\{)/gi, code);
  return code;
};