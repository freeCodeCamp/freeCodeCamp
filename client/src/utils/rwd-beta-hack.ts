const pageId = 'fskG';

// We need the ids to be hardcoded for future use. Once the client can
// handle pageIds this kind of hackery should not be necessary.
export function patchHref(superBlock: string) {
  return superBlock === '2022/responsive-web-design'
    ? `/learn/${superBlock}/${pageId}/`
    : `/learn/${superBlock}/`;
}
