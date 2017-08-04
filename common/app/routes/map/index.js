export default function mapRoute() {
  return [{
    path: 'map',
    onEnter: (_, replace) => replace('/challenges/current-challenge')
  }];
}
