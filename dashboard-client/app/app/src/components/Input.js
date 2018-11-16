import React from 'react';

const Input = ({ onInputChange, value, test }) => (
  <input
    type="text"
    placeholder="PR #"
    onChange={onInputChange}
    value={value}
    ref={test}
  />
);

export default Input;
