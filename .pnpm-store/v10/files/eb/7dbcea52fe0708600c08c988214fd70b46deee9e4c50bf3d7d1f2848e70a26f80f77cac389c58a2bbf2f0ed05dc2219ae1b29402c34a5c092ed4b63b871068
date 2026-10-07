"use strict";
if (process.env.PW_INSTRUMENT_MODULES) {
  const Module = require("module");
  const originalLoad = Module._load;
  const root = { name: "<root>", selfMs: 0, totalMs: 0, childrenMs: 0, children: [] };
  let current = root;
  const stack = [];
  Module._load = function(request, _parent, _isMain) {
    const node = { name: request, selfMs: 0, totalMs: 0, childrenMs: 0, children: [] };
    current.children.push(node);
    stack.push(current);
    current = node;
    const start = performance.now();
    let result;
    try {
      result = originalLoad.apply(this, arguments);
    } catch (e) {
      current = stack.pop();
      current.children.pop();
      throw e;
    }
    const duration = performance.now() - start;
    node.totalMs = duration;
    node.selfMs = Math.max(0, duration - node.childrenMs);
    current = stack.pop();
    current.childrenMs += duration;
    return result;
  };
  process.on("exit", () => {
    function printTree(node, prefix, isLast, lines2, depth) {
      if (node.totalMs < 1 && depth > 0)
        return;
      const connector = depth === 0 ? "" : isLast ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ";
      const time = `${node.totalMs.toFixed(1).padStart(8)}ms`;
      const self = node.children.length ? ` (self: ${node.selfMs.toFixed(1)}ms)` : "";
      lines2.push(`${time}  ${prefix}${connector}${node.name}${self}`);
      const childPrefix = prefix + (depth === 0 ? "" : isLast ? "    " : "\u2502   ");
      const sorted2 = node.children.slice().sort((a, b) => b.totalMs - a.totalMs);
      for (let i = 0; i < sorted2.length; i++)
        printTree(sorted2[i], childPrefix, i === sorted2.length - 1, lines2, depth + 1);
    }
    let totalModules = 0;
    function count(n) {
      totalModules++;
      n.children.forEach(count);
    }
    root.children.forEach(count);
    const lines = [];
    const sorted = root.children.slice().sort((a, b) => b.totalMs - a.totalMs);
    for (let i = 0; i < sorted.length; i++)
      printTree(sorted[i], "", i === sorted.length - 1, lines, 0);
    const totalMs = root.children.reduce((s, c) => s + c.totalMs, 0);
    process.stderr.write(`
--- Module load tree: ${totalModules} modules, ${totalMs.toFixed(0)}ms total ---
` + lines.join("\n") + "\n");
    const flat = /* @__PURE__ */ new Map();
    function gather(n) {
      const existing = flat.get(n.name);
      if (existing) {
        existing.selfMs += n.selfMs;
        existing.totalMs += n.totalMs;
        existing.count++;
      } else {
        flat.set(n.name, { selfMs: n.selfMs, totalMs: n.totalMs, count: 1 });
      }
      n.children.forEach(gather);
    }
    root.children.forEach(gather);
    const top50 = [...flat.entries()].sort((a, b) => b[1].selfMs - a[1].selfMs).slice(0, 50);
    const flatLines = top50.map(
      ([mod, { selfMs, totalMs: totalMs2, count: count2 }]) => `${selfMs.toFixed(1).padStart(8)}ms self ${totalMs2.toFixed(1).padStart(8)}ms total  (x${String(count2).padStart(3)})  ${mod}`
    );
    process.stderr.write(`
--- Top 50 modules by self time ---
` + flatLines.join("\n") + "\n");
  });
}
