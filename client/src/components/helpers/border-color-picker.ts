export default function borderColorPicker(
  isDonating?: boolean,
  isTopContributor?: boolean
): string {
  if (isDonating && isTopContributor) return 'purple-border';
  else if (isTopContributor) return 'blue-border';
  else if (isDonating) return 'gold-border';
  else return 'default-border';
}
