import React from 'react';
import { useSandpackConsole } from '@codesandbox/sandpack-react';

type LogEntry = {
  id: string;
  method: string;
  data: unknown[];
};

interface InteractiveConsoleProps {
  'data-playwright-test-label'?: string;
  style?: React.CSSProperties;
}

function formatPrimitive(value: unknown): string {
  if (value === null || value === undefined) return String(value);
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean')
    return String(value);
  if (Array.isArray(value)) return `[Array(${value.length})]`;
  if (typeof value === 'object') return '{…}';
  return JSON.stringify(value);
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return String(value);
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean')
    return String(value);

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const ctorName =
      (obj as { constructor?: { name?: string } }).constructor?.name ??
      'Object';

    const entries = Object.entries(obj).filter(
      ([key]) => key !== 'constructor' && key !== '__proto__'
    );

    const inner = entries
      .map(([key, v]) => `${key}: ${formatPrimitive(v)}`)
      .join(', ');

    if (ctorName && ctorName !== 'Object') {
      return `${ctorName} { ${inner} }`;
    }

    return `{ ${inner} }`;
  }

  return JSON.stringify(value);
}

const InteractiveConsole: React.FC<InteractiveConsoleProps> = props => {
  const { logs } = useSandpackConsole({
    resetOnPreviewRestart: true
  });

  const castLogs = (logs as unknown as LogEntry[]) ?? [];

  return (
    <div
      data-playwright-test-label={props['data-playwright-test-label']}
      style={{
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        backgroundColor: '#0a0a23',
        color: '#ffffff',
        padding: '0.5rem',
        overflow: 'auto',
        ...props.style
      }}
    >
      {castLogs.map(log => (
        <div key={log.id}>
          {log.data.map((item, index) => (
            <span key={index}>
              {index > 0 ? ' ' : ''}
              {formatValue(item)}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

InteractiveConsole.displayName = 'InteractiveConsole';

export default InteractiveConsole;
