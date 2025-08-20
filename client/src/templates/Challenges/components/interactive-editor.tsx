import React, { useMemo } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import './interactive-editor.css';

export interface InteractiveFile {
  ext: string;
  name: string;
  contents: string;
  fileKey?: string;
}

interface Props {
  files: InteractiveFile[];
}

const InteractiveEditor = ({ files }: Props) => {
  // Build Sandpack files object
  // https://github.com/codesandbox/sandpack/tree/main/sandpack-react/src/templates
  const spFiles = useMemo(() => {
    const obj = {} as Record<
      string,
      { code: string; active?: boolean; hidden?: boolean }
    >;
    files.forEach(file => {
      const ext = file.ext;
      let path = '';
      if (ext === 'html') path = '/index.html';
      else if (ext === 'css') path = '/styles.css';
      else if (ext === 'js' || ext === 'ts') path = `/index.${ext}`;
      else if (ext === 'py')
        return; // python not supported in sandpack vanilla template
      else if (ext === 'jsx') path = '/App.jsx';
      else if (ext === 'tsx') path = '/App.tsx';
      else path = `/index.${ext}`;
      // TODO: Consider making active file first file in markdown
      obj[path] = { code: file.contents, active: path === '/index.html' };
    });
    return obj;
  }, [files]);

  function got(ext: string) {
    return files.some(f => f.ext === ext);
  }

  const showConsole = got('js') || got('ts');

  return (
    <div className='interactive-editor-wrapper'>
      <Sandpack
        template={
          got('tsx')
            ? 'react-ts'
            : got('jsx')
              ? 'react'
              : got('ts')
                ? 'vanilla-ts'
                : got('html')
                  ? 'static'
                  : 'vanilla'
        }
        files={spFiles}
        theme={'dark'}
        options={{
          showConsole: showConsole,
          showConsoleButton: showConsole,
          layout: got('html') ? 'preview' : 'console',
          showLineNumbers: true
        }}
      />
    </div>
  );
};

InteractiveEditor.displayName = 'InteractiveEditor';
export default InteractiveEditor;
