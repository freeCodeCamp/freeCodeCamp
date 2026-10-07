import type * as TRef from "../../TRef.js"
import * as Entry from "./entry.js"
import type * as TxnId from "./txnId.js"

/** @internal */
export type Journal = Map<TRef.TRef<any>, Entry.Entry>

/** @internal */
export type Todo = () => unknown

/** @internal */
export type JournalAnalysis = JournalAnalysisInvalid | JournalAnalysisReadWrite | JournalAnalysisReadOnly

/** @internal */
export const JournalAnalysisInvalid = "Invalid" as const

/** @internal */
export type JournalAnalysisInvalid = typeof JournalAnalysisInvalid

/** @internal */
export const JournalAnalysisReadWrite = "ReadWrite" as const

/** @internal */
export type JournalAnalysisReadWrite = typeof JournalAnalysisReadWrite

/** @internal */
export const JournalAnalysisReadOnly = "ReadOnly" as const

/** @internal */
export type JournalAnalysisReadOnly = typeof JournalAnalysisReadOnly

/** @internal */
export const commitJournal = (journal: Journal) => {
  for (const entry of journal) {
    Entry.commit(entry[1])
  }
}

/**
 * Analyzes the journal, determining whether it is valid and whether it is
 * read only in a single pass. Note that information on whether the
 * journal is read only will only be accurate if the journal is valid, due
 * to short-circuiting that occurs on an invalid journal.
 *
 * @internal
 */
export const analyzeJournal = (journal: Journal): JournalAnalysis => {
  let val: JournalAnalysis = JournalAnalysisReadOnly
  for (const [, entry] of journal) {
    val = Entry.isInvalid(entry) ? JournalAnalysisInvalid : Entry.isChanged(entry) ? JournalAnalysisReadWrite : val
    if (val === JournalAnalysisInvalid) {
      return val
    }
  }
  return val
}

/** @internal */
export const prepareResetJournal = (journal: Journal): () => void => {
  const saved: Journal = new Map<TRef.TRef<unknown>, Entry.Entry>()
  for (const entry of journal) {
    saved.set(entry[0], Entry.copy(entry[1]))
  }
  return () => {
    journal.clear()
    for (const entry of saved) {
      journal.set(entry[0], entry[1])
    }
  }
}

/** @internal */
export const collectTodos = (journal: Journal): Map<TxnId.TxnId, Todo> => {
  const allTodos: Map<TxnId.TxnId, Todo> = new Map()
  for (const [, entry] of journal) {
    for (const todo of entry.ref.todos) {
      allTodos.set(todo[0], todo[1])
    }
    entry.ref.todos = new Map()
  }
  return allTodos
}

/** @internal */
export const execTodos = (todos: Map<TxnId.TxnId, Todo>) => {
  const todosSorted = Array.from(todos.entries()).sort((x, y) => x[0] - y[0])
  for (const [_, todo] of todosSorted) {
    todo()
  }
}

/** @internal */
export const addTodo = (
  txnId: TxnId.TxnId,
  journal: Journal,
  todoEffect: Todo
): boolean => {
  let added = false
  for (const [, entry] of journal) {
    if (!entry.ref.todos.has(txnId)) {
      entry.ref.todos.set(txnId, todoEffect)
      added = true
    }
  }
  return added
}

/** @internal */
export const isValid = (journal: Journal): boolean => {
  let valid = true
  for (const [, entry] of journal) {
    valid = Entry.isValid(entry)
    if (!valid) {
      return valid
    }
  }
  return valid
}

/** @internal */
export const isInvalid = (journal: Journal): boolean => {
  return !isValid(journal)
}
