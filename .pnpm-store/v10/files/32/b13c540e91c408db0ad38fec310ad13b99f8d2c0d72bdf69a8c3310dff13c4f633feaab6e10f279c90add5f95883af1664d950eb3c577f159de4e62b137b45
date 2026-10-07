import * as Entry from "./entry.js";
/** @internal */
export const JournalAnalysisInvalid = "Invalid";
/** @internal */
export const JournalAnalysisReadWrite = "ReadWrite";
/** @internal */
export const JournalAnalysisReadOnly = "ReadOnly";
/** @internal */
export const commitJournal = journal => {
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
export const analyzeJournal = journal => {
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
export const prepareResetJournal = journal => {
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
export const collectTodos = journal => {
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
export const execTodos = todos => {
  const todosSorted = Array.from(todos.entries()).sort((x, y) => x[0] - y[0]);
  for (const [_, todo] of todosSorted) {
    todo();
  }
};
/** @internal */
export const addTodo = (txnId, journal, todoEffect) => {
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
export const isValid = journal => {
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
export const isInvalid = journal => {
  return !isValid(journal);
};
//# sourceMappingURL=journal.js.map