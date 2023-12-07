export const indent = (code, spaces) => {
  const lines = code.split('\n');
  return lines.map(line => `${' '.repeat(spaces)}${line}`).join('\n');
};

// Requirements:
// - run in a single instance of pyodide (because loadPyodide is slow)
// - be able to stop execution of learner code
//
// This wrapper lets us meet the second requirement, since tasks are
// cancellable. This creates a second issue: the learner code no longer modifies
// the global scope, so we need to copy the locals to globals.
//
// Finally, we have to await the task, or there's no way for the JavaScript
// context to know when the task is complete.
export const makeCancellable = code => `import asyncio
async def cancellable_coroutine():
    try:
${indent(code, 8)}
        globals()['__locals'] = locals()
    except asyncio.CancelledError:
        pass

__task = asyncio.create_task(cancellable_coroutine())

def __cancel():
    __task.cancel()
await __task`;
