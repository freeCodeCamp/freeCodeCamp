const pageId = '392cb44d-742a-4cb2-ac1a-69322910ad3a';

// We need the ids to be hardcoded for future use. Once the client can
// handle pageIds this kind of hackery should not be necessary.
export function patchHref(superBlock: string) {
  return superBlock === '2022/responsive-web-design'
    ? `/learn/${superBlock}/${pageId}/`
    : `/learn/${superBlock}/`;
}
