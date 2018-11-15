import React from 'react';

const Input = ({ onInputChange }) => (
  <input
    type="text"
    placeholder="PR #"
    onChange={onInputChange}
  />
);

export default Input;
