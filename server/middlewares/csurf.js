import csurf from 'csurf';

export default function() {
  return csurf({ cookie: true });
}
