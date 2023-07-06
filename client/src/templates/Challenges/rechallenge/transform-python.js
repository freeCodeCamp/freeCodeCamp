export const indent = (code, spaces) => {
  const lines = code.split('\n');
  return lines.map(line => `${' '.repeat(spaces)}${line}`).join('\n');
};

export const wrapInCoroutine = code => `import asyncio
async def cancellable_coroutine():
    try:
${indent(code, 8)}
    except asyncio.CancelledError:
        raise

__task = asyncio.create_task(cancellable_coroutine())

def __cancel():
    __task.cancel()`;
