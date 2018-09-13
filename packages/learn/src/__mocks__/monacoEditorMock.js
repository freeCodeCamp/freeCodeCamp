/* eslint-disable */
import React from 'react';

export default props => {
  const { width = '100%', height = '100%' } = props;
  const fixedWidth =
    width.toString().indexOf('%') !== -1 ? width : `${width}px`;
  const fixedHeight =
    height.toString().indexOf('%') !== -1 ? height : `${height}px`;
  const style = {
    width: fixedWidth,
    height: fixedHeight
  };
  return <div style={style} className="react-monaco-editor-container" />;
};
