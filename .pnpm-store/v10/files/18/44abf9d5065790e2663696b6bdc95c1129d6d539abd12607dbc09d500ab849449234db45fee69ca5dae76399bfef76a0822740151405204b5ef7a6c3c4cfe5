"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareResetJournal = exports.isValid = exports.isInvalid = exports.execTodos = exports.commitJournal = exports.collectTodos = exports.analyzeJournal = exports.addTodo = exports.JournalAnalysisReadWrite = exports.JournalAnalysisReadOnly = exports.JournalAnalysisInvalid = void 0;
var Entry = _interopRequireWildcard(require("./entry.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const JournalAnalysisInvalid = exports.JournalAnalysisInvalid = "Invalid";
/** @internal */
const JournalAnalysisReadWrite = exports.JournalAnalysisReadWrite = "ReadWrite";
/** @internal */
const JournalAnalysisReadOnly = exports.JournalAnalysisReadOnly = "ReadOnly";
/** @internal */
const commitJournal = journal => {
  for (const entry of journal) {
    Entry.commit(entry[1]);
  }
};
/**
 * Analyzes the journal, determining whether it is valid and whether it is
 * read only in a single pass. Note that information on whether the
 * journal is read only will only be accurate if the journal is valid, due
 * to short-circuiting that occurs on an invalid journal.
 *
 * @internal
 */
exports.commitJournal = commitJournal;
const analyzeJournal = journal => {
  let val = JournalAnalysisReadOnly;
  for (const [, entry] of journal) {
    val = Entry.isInvalid(entry) ? JournalAnalysisInvalid : Entry.isChanged(entry) ? JournalAnalysisReadWrite : val;
    if (val === JournalAnalysisInvalid) {
      return val;
    }
  }
  return val;
};
/** @internal */
exports.analyzeJournal = analyzeJournal;
const prepareResetJournal = journal => {
  const saved = new Map();
  for (const entry of journal) {
    saved.set(entry[0], Entry.copy(entry[1]));
  }
  return () => {
    journal.clear();
    for (const entry of saved) {
      journal.set(entry[0], entry[1]);
    }
  };
};
/** @internal */
exports.prepareResetJournal = prepareResetJournal;
const collectTodos = journal => {
  const allTodos = new Map();
  for (const [, entry] of journal) {
    for (const todo of entry.ref.todos) {
      allTodos.set(todo[0], todo[1]);
    }
    entry.ref.todos = new Map();
  }
  return allTodos;
};
/** @internal */
exports.collectTodos = collectTodos;
const execTodos = todos => {
  const todosSorted = Array.from(todos.entries()).sort((x, y) => x[0] - y[0]);
  for (const [_, todo] of todosSorted) {
    todo();
  }
};
/** @internal */
exports.execTodos = execTodos;
const addTodo = (txnId, journal, todoEffect) => {
  let added = false;
  for (const [, entry] of journal) {
    if (!entry.ref.todos.has(txnId)) {
      entry.ref.todos.set(txnId, todoEffect);
      added = true;
    }
  }
  return added;
};
/** @internal */
exports.addTodo = addTodo;
const isValid = journal => {
  let valid = true;
  for (const [, entry] of journal) {
    valid = Entry.isValid(entry);
    if (!valid) {
      return valid;
    }
  }
  return valid;
};
/** @internal */
exports.isValid = isValid;
const isInvalid = journal => {
  return !isValid(journal);
};
exports.isInvalid = isInvalid;
//# sourceMappingURL=journal.js.map