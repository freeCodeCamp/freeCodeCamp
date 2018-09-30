import { navigate } from 'gatsby';

const RedirectHome = () => {
  if (typeof window !== 'undefined') {
    navigate('/');
  }
  return null;
};

export default RedirectHome;
