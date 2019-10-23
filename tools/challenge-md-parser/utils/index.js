exports.sectionFilter = (
  { type, tagName, properties: { id = '' } },
  sectionId
) => {
  return type === 'element' && tagName === 'section' && id === sectionId;
};
