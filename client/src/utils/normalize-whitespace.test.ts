import { normalizeWhitespace, getNormalizedText } from './normalize-whitespace';

describe('normalizeWhitespace', () => {
  it('should normalize multiple spaces to single space', () => {
    expect(normalizeWhitespace('  multiple    spaces  ')).toBe(
      'multiple spaces'
    );
  });

  it('should normalize newlines to single space', () => {
    expect(normalizeWhitespace('line1\nline2\nline3')).toBe(
      'line1 line2 line3'
    );
  });

  it('should normalize tabs to single space', () => {
    expect(normalizeWhitespace('tab1\ttab2\ttab3')).toBe('tab1 tab2 tab3');
  });

  it('should normalize mixed whitespace', () => {
    expect(normalizeWhitespace('  mixed\n\twhitespace  ')).toBe(
      'mixed whitespace'
    );
  });

  it('should handle null and undefined', () => {
    expect(normalizeWhitespace(null)).toBe('');
    expect(normalizeWhitespace(undefined)).toBe('');
  });

  it('should handle empty string', () => {
    expect(normalizeWhitespace('')).toBe('');
  });

  it('should handle string with only whitespace', () => {
    expect(normalizeWhitespace('   \n\t   ')).toBe('');
  });
});

describe('getNormalizedText', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = document.createElement('span');
  });

  it('should normalize innerText by default', () => {
    mockElement.innerText = '  test\ncontent  ';
    expect(getNormalizedText(mockElement)).toBe('test content');
  });

  it('should normalize textContent when specified', () => {
    mockElement.textContent = '  test\ncontent  ';
    expect(getNormalizedText(mockElement, 'textContent')).toBe('test content');
  });

  it('should handle null element', () => {
    expect(getNormalizedText(null)).toBe('');
  });

  it('should handle undefined element', () => {
    expect(getNormalizedText(undefined)).toBe('');
  });

  it('should handle element with empty text', () => {
    mockElement.innerText = '';
    expect(getNormalizedText(mockElement)).toBe('');
  });

  it('should handle element with only whitespace', () => {
    mockElement.innerText = '   \n\t   ';
    expect(getNormalizedText(mockElement)).toBe('');
  });
});
