import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  challengeFiles: PropTypes.object.isRequired,
  toggleTab: PropTypes.func.isRequired,
  visibleEditors: PropTypes.shape({
    indexjs: PropTypes.bool,
    indexjsx: PropTypes.bool,
    indexcss: PropTypes.bool,
    indexhtml: PropTypes.bool
  })
};

const EditorTabs = ({ challengeFiles, toggleTab, visibleEditors }) => (
  <div className='monaco-editor-tabs'>
    {challengeFiles['indexjsx'] && (
      <button
        aria-selected={visibleEditors.indexjsx}
        className='monaco-editor-tab'
        onClick={() => toggleTab('indexjsx')}
        role='tab'
      >
        script.jsx
      </button>
    )}
    {challengeFiles['indexhtml'] && (
      <button
        aria-selected={visibleEditors.indexhtml}
        className='monaco-editor-tab'
        onClick={() => toggleTab('indexhtml')}
        role='tab'
      >
        index.html
      </button>
    )}
    {challengeFiles['indexcss'] && (
      <button
        aria-selected={visibleEditors.indexcss}
        className='monaco-editor-tab'
        onClick={() => toggleTab('indexcss')}
        role='tab'
      >
        styles.css
      </button>
    )}
    {challengeFiles['indexjs'] && (
      <button
        aria-selected={visibleEditors.indexjs}
        className='monaco-editor-tab'
        onClick={() => toggleTab('indexjs')}
        role='tab'
      >
        script.js
      </button>
    )}
  </div>
);

EditorTabs.displayName = 'EditorTabs';
EditorTabs.propTypes = propTypes;

export default EditorTabs;
