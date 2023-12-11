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

export function modifyInputStatements(line) {
  // Use a regular expression to match input statements with chained methods
  const inputRegex = /(.*=\s*)input\((["'].*?["']\))(\.\w+\([^)]*\))*/;
  const match = line.match(inputRegex);
  if (match) {
    const inputStatement = match[0];
    const varAssignment = match[1];
    const inputCall =
      'input' +
      inputStatement
        .slice(varAssignment.length)
        .split('input')[1]
        .split('.')[0];
    const methods = inputStatement
      .slice(varAssignment.length + inputCall.length)
      .split('.')
      .slice(1);
    const tempVar = '_temp_input_var';
    const newStatements = [
      `${tempVar} = ${inputCall}`,
      ...methods.map(method => `${tempVar} = ${tempVar}.${method}`),
      `${varAssignment.trim()} ${tempVar}`
    ];
    // Get the indentation of the original line
    const indentation = line.match(/^\s*/)[0];
    // Apply the same indentation to each new statement
    const indentedStatements = newStatements.map(stmt => indentation + stmt);
    // Replace the original input statement in the line with the temporary variable
    const updatedLine = line.replace(
      inputStatement,
      indentedStatements.join('\n')
    );
    return updatedLine.split('\n');
  }
  return [line];
}

export function makeInputAwaitable(code) {
  const lines = code.split('\n');
  const asyncFunctions = new Set();
  const modifiedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Modify input statements with chained methods
    const updatedLines = modifyInputStatements(line);

    // If the line contains an input statement, update it to use "await"
    if (updatedLines.some(updatedLine => updatedLine.includes('input('))) {
      updatedLines.forEach((updatedLine, index) => {
        if (updatedLine.includes('input(')) {
          updatedLines[index] = updatedLine.replace('input(', 'await input(');
        }
      });

      // Find the outer function definition and make it async
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].includes('def ')) {
          if (!modifiedLines[j].includes('async def ')) {
            const functionName = lines[j].match(
              /def\s+([a-zA-Z_][a-zA-Z_0-9]*)/
            )[1];
            asyncFunctions.add(functionName);
            modifiedLines[j] = modifiedLines[j].replace('def ', 'async def ');
          }
          break;
        }
      }
    }

    // Update function calls to include 'await' for async functions
    asyncFunctions.forEach(funcName => {
      updatedLines.forEach((updatedLine, index) => {
        if (
          updatedLine.includes(` ${funcName}(`) &&
          !updatedLine.includes(`await ${funcName}(`)
        ) {
          updatedLines[index] = updatedLine.replace(
            `${funcName}(`,
            `await ${funcName}(`
          );
        }
      });
    });

    modifiedLines.push(...updatedLines);
  }

  return modifiedLines.join('\n');
}
