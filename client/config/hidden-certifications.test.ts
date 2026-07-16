import { describe, expect, it, vi } from 'vitest';

// Pin an espanol locale (with upcoming certs enabled) to verify that
// certifications of superblocks hidden for the locale are not live.
vi.mock('./env.json', async importOriginal => {
  const actual = await importOriginal<typeof import('./env.json')>();
  return {
    ...actual,
    default: { ...actual, clientLocale: 'espanol', showUpcomingChanges: true }
  };
});

describe('cert-and-project-map with hidden certifications (espanol locale)', () => {
  it('excludes certifications of hidden superblocks from liveCerts', async () => {
    const { liveCerts } = await import('./cert-and-project-map');
    const liveSlugs = liveCerts.map(cert => String(cert.certSlug));

    expect(liveSlugs).not.toContain('a2-professional-spanish');
  });

  it('keeps certifications that are hidden in other locales only', async () => {
    const { liveCerts, allCerts } = await import('./cert-and-project-map');
    const liveSlugs = liveCerts.map(cert => String(cert.certSlug));

    expect(liveSlugs).toContain('a1-professional-chinese');
    expect(liveSlugs).toContain('a2-professional-chinese');
    expect(liveSlugs).toContain('a2-english-for-developers');

    // allCerts stays complete so earned certifications can still be looked up
    expect(allCerts.map(cert => String(cert.certSlug))).toContain(
      'a2-professional-spanish'
    );
  });
});
