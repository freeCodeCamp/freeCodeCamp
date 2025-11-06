import {
  SandpackStack,
  useActiveCode,
  useSandpack
} from '@codesandbox/sandpack-react';
import Editor from '@monaco-editor/react';
import React from 'react';

const MonacoEditor = () => {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  return (
    <SandpackStack>
      <Editor
        language={sandpack.activeFile.split('.').pop()}
        theme='vs-dark'
        key={sandpack.activeFile}
        defaultValue={code}
        onChange={value => updateCode(value || '')}
        options={{
          minimap: { enabled: false },
          lineNumbers: 'on'
        }}
      />
    </SandpackStack>
  );
};

MonacoEditor.displayName = 'MonacoEditor';
export default MonacoEditor;
