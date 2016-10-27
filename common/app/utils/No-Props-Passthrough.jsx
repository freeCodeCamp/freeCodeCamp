import { PropTypes } from 'react';

// use when passing a react primitive element as a child to a
// react-boostrap component that will inject props
// using cloneElement
export default function NoPropsPassthrough({ children }) {
  return children;
}

NoPropsPassthrough.propTypes = {
  children: PropTypes.element
};
