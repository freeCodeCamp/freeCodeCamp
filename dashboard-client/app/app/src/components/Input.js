import React from 'react';

const Input = React.forwardRef((props, ref) => (
  <input
    type="text"
    placeholder="PR #"
    onChange={props.onInputEvent}
    onKeyPress={props.onInputEvent}
    value={props.value}
    ref={ref}
  />
));

export default Input;
