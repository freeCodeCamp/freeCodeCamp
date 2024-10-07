import { createHeader } from './client/src/templates/Challenges/utils/frame';

describe('createHeader', () => {
  it('should inject CSS to hide head elements and scripts', () => {
    const headerContent = createHeader('test-frame-id');

    expect(headerContent).toContain('<style>');
    expect(headerContent).toContain('head *, title, meta, link, script {');
    expect(headerContent).toContain('display: none !important;');
    expect(headerContent).toContain('</style>');
  });
});
