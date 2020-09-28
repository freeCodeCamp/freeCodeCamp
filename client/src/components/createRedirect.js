import { navigate } from 'gatsby';

const createRedirect = (to = '/') => () => {
  if (typeof window !== 'undefined') {
    navigate(to);
  }
  return null;
};

export default createRedirect;
