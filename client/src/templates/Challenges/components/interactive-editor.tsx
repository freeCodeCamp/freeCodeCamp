import React, { useMemo } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackThemeProvider
} from '@codesandbox/sandpack-react';
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
      else if (ext === 'js' || ext === 'ts') path = `/script.${ext}`;
      else if (ext === 'py')
        return; // python not supported in sandpack vanilla template
      else if (ext === 'jsx') path = '/App.jsx';
      else path = `/index.${ext}`;
      obj[path] = { code: file.contents, active: path === '/index.html' };
    });
    // Ensure there's an index.html if missing
    if (!obj['/index.html']) {
      obj['/index.html'] = {
        code: '<!DOCTYPE html>\n<html><head></head><body></body></html>',
        active: true
      };
    }

    // Add empty index.js for JS/TS entry point
    obj['/index.js'] = {
      code: `
          import './styles.css';
          import './script.js';`,
      hidden: true
    };

    return obj;
  }, [files]);

  return (
    <div className='interactive-editor-wrapper'>
      <SandpackProvider
        template='vanilla'
        files={spFiles}
        style={{ width: '100%' }}
      >
        <SandpackThemeProvider theme={'dark'}>
          <SandpackLayout>
            <SandpackCodeEditor
              style={{ minHeight: 300 }}
              showTabs={true}
              showLineNumbers={true}
            />
            <SandpackPreview style={{ height: 300 }} />
          </SandpackLayout>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
};

InteractiveEditor.displayName = 'InteractiveEditor';
export default InteractiveEditor;
