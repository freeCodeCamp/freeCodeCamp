const guideBase = 'https://guide.freecodecamp.org/certifications';

export function createGuideUrl(slug = '') {
  return guideBase + slug;
}
