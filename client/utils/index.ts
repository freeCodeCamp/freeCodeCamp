const idToPath = new Map(
  Object.entries({
    '561add10cb82ac38a17523bc': 'back-end-development-and-apis',
    '5a553ca864b52e1d8bceea14': 'data-visualization',
    '561acd10cb82ac38a17513bc': 'front-end-development-libraries',
    '5e611829481575a52dc59c0e': 'quality-assurance-v7',
    '5e6021435ac9d0ecd8b94b00': 'information-security-v7',
    '561abd10cb81ac38a17513bc': 'javascript-algorithms-and-data-structures',
    '561add10cb82ac38a17513bc': 'responsive-web-design',
    '660add10cb82ac38a17513be': 'legacy-back-end',
    '561add10cb82ac39a17513bc': 'legacy-data-visualization',
    '561add10cb82ac38a17513be': 'legacy-front-end',
    '561add10cb82ac38a17213bc': 'information-security-and-quality-assurance',
    '561add10cb82ac38a17213bd': 'full-stack',
    '5e44431b903586ffb414c951': 'scientific-computing-with-python-v7',
    '5e46fc95ac417301a38fb934': 'data-analysis-with-python-v7',
    '5e46fc95ac417301a38fb935': 'machine-learning-with-python-v7'
  })
);

export const getCertIds = (): IterableIterator<string> => idToPath.keys();
export const getPathFromID = (id: string): string | undefined =>
  idToPath.get(id);

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
