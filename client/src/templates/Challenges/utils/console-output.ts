import { ElementType, parseDocument } from 'htmlparser2';

const allowedTags = ['b', 'code', 'em', 'i', 'strong', 'wbr'] as const;

export type ConsoleOutputTag = (typeof allowedTags)[number];

export type ConsoleOutputNode =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'element';
      tag: ConsoleOutputTag;
      children: ConsoleOutputNode[];
    };

export type ConsoleOutput =
  | {
      type: 'text';
      value: string;
    }
  | {
      type: 'formatted';
      nodes: ConsoleOutputNode[];
    };

const allowedTagSet = new Set<string>(allowedTags);

export function createTextOutput(value: unknown): ConsoleOutput {
  return { type: 'text', value: stringifyConsoleValue(value) };
}

export function createFormattedOutput(value: unknown): ConsoleOutput {
  const document = parseDocument(String(value), { decodeEntities: true });

  return {
    type: 'formatted',
    nodes: toConsoleOutputNodes(document.children)
  };
}

export function getConsoleOutputText(output: ConsoleOutput): string {
  return output.type === 'text' ? output.value : getNodeText(output.nodes);
}

export function truncateConsoleOutput(
  output: ConsoleOutput[],
  maxLength: number,
  suffix: string
): ConsoleOutput[] {
  let remaining = maxLength;
  const truncated: ConsoleOutput[] = [];

  for (const entry of output) {
    const separatorLength = truncated.length ? 1 : 0;
    const text = getConsoleOutputText(entry);

    if (separatorLength + text.length <= remaining) {
      truncated.push(entry);
      remaining -= separatorLength + text.length;
      continue;
    }

    const available = Math.max(remaining - separatorLength, 0);
    if (available) {
      truncated.push(createTextOutput(text.slice(0, available) + suffix));
    } else {
      const lastEntry = truncated.at(-1);
      if (lastEntry?.type === 'text') {
        lastEntry.value += suffix;
      } else {
        truncated.push(createTextOutput(suffix));
      }
    }
    return truncated;
  }

  return truncated;
}

function toConsoleOutputNodes(
  nodes: ReturnType<typeof parseDocument>['children']
): ConsoleOutputNode[] {
  return nodes.flatMap(node => {
    if (node.type === ElementType.Text) {
      return [{ type: 'text' as const, value: node.data }];
    }

    if (node.type !== ElementType.Tag) {
      return [];
    }

    const children = toConsoleOutputNodes(node.children);

    if (!allowedTagSet.has(node.name)) {
      return children;
    }

    return [
      {
        type: 'element' as const,
        tag: node.name as ConsoleOutputTag,
        children
      }
    ];
  });
}

function getNodeText(nodes: ConsoleOutputNode[]): string {
  return nodes
    .map(node =>
      node.type === 'text' ? node.value : getNodeText(node.children)
    )
    .join('');
}

function stringifyConsoleValue(value: unknown): string {
  if (value == null) return '';
  if (value instanceof Error) return value.toString();
  if (Array.isArray(value)) return value.map(stringifyConsoleValue).join(',');
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return Object.prototype.toString.call(value);
    }
  }
  if (typeof value === 'symbol') return value.toString();
  if (typeof value === 'function') return value.toString();
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return '';
}
