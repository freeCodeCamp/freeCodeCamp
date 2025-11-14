import React from 'react';
import Editor from '@monaco-editor/react';
import {
  CodeEditorProps,
  FileTabs,
  SandpackStack,
  useActiveCode,
  useSandpack
} from '@codesandbox/sandpack-react';
import { EditorConstructionOptions, monaco } from 'react-monaco-editor';

import './sandpack-monaco-editor.css';
interface SandpackMonacoEditorProps {
  options: CodeEditorProps;
  style: React.CSSProperties;
}

const SandpackMonacoEditor = (props: SandpackMonacoEditorProps) => {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  // Mapping Sandpack props to Monaco options
  const monacoOptions: EditorConstructionOptions = {
    wordWrap: props.options.wrapContent ? 'on' : 'off',
    lineNumbers: props.options.showLineNumbers ? 'on' : 'off',
    lineNumbersMinChars: 2,
    readOnly: props.options.readOnly,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    automaticLayout: true
    // others can't direct eqivalent in Monaco
  };

  const getLanguage = (filePath: string): string => {
    const extension = filePath.split('.').pop();

    switch (extension) {
      case 'js':
      case 'jsx':
        return 'javascript';
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      default:
        return 'plaintext';
    }
  };
  // theme
  const FCC_DART_THEME_CONFIG: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '858591', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'dbb8ff' },
      { token: 'tag', foreground: 'f07178' },
      { token: 'punctuation', foreground: '99c9ff' },
      { token: 'definition', foreground: 'ffffff' },
      { token: 'property', foreground: '99c9ff' },
      { token: 'static', foreground: 'f78c6c' },
      { token: 'string', foreground: 'acd157' },
      { token: 'number', foreground: 'f78c6c' },
      { token: 'variable', foreground: 'ffffff' },
      { token: 'type', foreground: 'dbb8ff' },
      { token: 'function', foreground: 'ffffff' },
      { token: 'identifier', foreground: 'ffffff' },
      { token: 'regexp', foreground: 'acd157' },
      { token: 'delimiter', foreground: 'ffffff' },
      { token: 'attribute.name', foreground: '99c9ff' },
      { token: 'attribute.value', foreground: 'acd157' },
      { token: 'annotation', foreground: 'dbb8ff' },
      { token: 'constant', foreground: 'f78c6c' },
      { token: 'class', foreground: 'dbb8ff' },
      { token: 'interface', foreground: 'dbb9ff' },
      { token: 'namespace', foreground: 'dbb8ff' },
      { token: 'enum', foreground: 'dbb8ff' },
      { token: 'operator', foreground: 'ffffff' }
    ],
    colors: {
      'editor.background': '#0a0a23', // surface1
      'editor.foreground': '#ffffff', // base (plain syntax)
      'editorCursor.foreground': '#ffffff',
      'editor.selectionBackground': '#3b3b4f',
      'editor.lineHighlightBackground': '#3b3b4f', // surface3
      'editorBracketMatch.border': '#dbb8ff'
    }
  };

  const handleEditor = (monaco: typeof import('monaco-editor')) => {
    monaco.editor.defineTheme('fcc-dark', FCC_DART_THEME_CONFIG);
  };

  return (
    <SandpackStack style={props.style}>
      <FileTabs closableTabs={props.options.closableTabs} />
      <div style={{ flex: 1, paddingTop: 8 }}>
        <Editor
          width='100%'
          height='100%'
          language={getLanguage(sandpack.activeFile)}
          theme='fcc-dark'
          beforeMount={handleEditor}
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={value => {
            updateCode(value || '');
          }}
          options={monacoOptions}
        />
      </div>
    </SandpackStack>
  );
};

SandpackMonacoEditor.displayname = 'SandpackMonacoEditor';

export default SandpackMonacoEditor;
