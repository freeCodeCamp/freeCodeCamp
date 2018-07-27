const guideBase = 'https://guide.freecodecamp.org/certifications';

export function createGuideUrl(slug = '') {
  return guideBase + slug;
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return statusInt >= 200 && statusInt < 400;
}
