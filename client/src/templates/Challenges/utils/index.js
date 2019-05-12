const guideBase = '/guide/certifications';

export function createGuideUrl(slug = '') {
  return guideBase + slug.replace(/^\/learn\//, '/');
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}
