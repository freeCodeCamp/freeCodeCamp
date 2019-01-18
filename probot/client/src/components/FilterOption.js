import React from 'react';
const FilterOption = ({ group, children, value, selectedOption, onOptionChange }) => {
  return (
  <label>
    <input
      name={group}
      type="radio"
      value={value}
      checked={selectedOption === value}
      onChange={onOptionChange}
    />
    {children}
  </label>
  );
}
export default FilterOption;
