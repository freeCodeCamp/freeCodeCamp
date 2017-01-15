import Wiki from './components/Wiki.jsx';

export function wikiRoute() {
  return {
    path: 'wiki/:wikiBlock/:wikiDashedName',
    component: Wiki
  };
}
