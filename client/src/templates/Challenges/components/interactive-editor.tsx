import React, { useMemo } from 'react';
import {
  FileTabs,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackStack
} from '@codesandbox/sandpack-react';
import { freeCodeCampDark } from '@codesandbox/sandpack-themes';
import './interactive-editor.css';
import CustomMonacoEditor from './custom-monaco-editor';

export interface InteractiveFile {
  ext: string;
  name: string;
  contents: string;
  contentsHtml: string;
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

  const hasHTML = got('html');
  const hasJavaScript = got('js') || got('ts') || got('jsx') || got('tsx');

  const showConsole = hasJavaScript && hasHTML;
  const layout = hasHTML ? 'preview' : 'console';
  const freeCodeCampDarkSyntax = {
    ...freeCodeCampDark.syntax,
    punctuation: '#ffff00',
    definition: '#e2777a',
    keyword: '#569cd6'
  };

  return (
    <div
      className='interactive-editor-wrapper'
      data-playwright-test-label='sp-interactive-editor'
    >
      <SandpackProvider
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
        theme={{
          colors: {
            surface1: '#0a0a23',
            surface2: '#3b3b4f',
            surface3: '#2a2a40',
            hover: '#3b3b4f'
          },
          syntax: freeCodeCampDarkSyntax
        }}
      >
        <SandpackLayout className='interactive-layout'>
          <SandpackStack className='interactive-editor-column'>
            {files.length > 1 && <FileTabs />}
            <CustomMonacoEditor />
          </SandpackStack>

          <SandpackStack className='interactive-preview-column'>
            {layout === 'preview' ? (
              showConsole ? (
                <>
                  <SandpackPreview style={{ flex: 1.5 }} />
                  <SandpackConsole
                    style={{
                      flex: 1,
                      overflow: 'scroll'
                    }}
                  />
                </>
              ) : (
                <SandpackPreview />
              )
            ) : (
              <SandpackConsole standalone={true} />
            )}
          </SandpackStack>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

InteractiveEditor.displayName = 'InteractiveEditor';
export default InteractiveEditor;
