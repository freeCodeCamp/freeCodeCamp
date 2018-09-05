import { navigate } from 'gatsby';

const Redirecthome = () => {
  if (typeof window !== 'undefined') {
    navigate('/');
  }
  return null;
};

export default Redirecthome;
