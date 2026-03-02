export function replaceAppleQuotes(text: string): string {
  return typeof text !== 'string'
    ? text
    : text.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}
