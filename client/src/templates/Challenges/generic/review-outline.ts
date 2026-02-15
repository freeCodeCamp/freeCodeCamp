export interface ReviewOutlineItem {
  id: string;
  level: 1 | 2 | 3;
  text: string;
}

export const reviewHeadingSelector = 'h2, h3';

export const createAnchorId = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

export const buildReviewOutlineItems = (
  headingElements: HTMLHeadingElement[]
): ReviewOutlineItem[] => {
  const idCounts = new Map<string, number>();

  return headingElements
    .map((heading, index) => {
      const text = heading.textContent?.trim() ?? '';
      if (!text) {
        return null;
      }

      const baseId = heading.id || createAnchorId(text);
      const normalizedBaseId = baseId || `review-section-${index + 1}`;
      const count = (idCounts.get(normalizedBaseId) ?? 0) + 1;
      idCounts.set(normalizedBaseId, count);
      const id = count > 1 ? `${normalizedBaseId}-${count}` : normalizedBaseId;

      if (heading.id !== id) {
        heading.id = id;
      }

      return {
        id,
        level: heading.tagName === 'H3' ? 3 : 2,
        text
      };
    })
    .filter((item): item is ReviewOutlineItem => item !== null);
};
