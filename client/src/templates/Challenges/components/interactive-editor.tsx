import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { freeCodeCampDark } from '@codesandbox/sandpack-themes';
import './interactive-editor.css';

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
      else if (ext === 'py') return;
      else if (ext === 'jsx') path = '/App.jsx';
      else if (ext === 'tsx') path = '/App.tsx';
      else path = `/index.${ext}`;
      obj[path] = { code: file.contents, active: path === '/index.html' };
    });
    return obj;
  }, [files]);

  function got(ext: string) {
    return files.some(f => f.ext === ext);
  }

  const showConsole = got('js') || got('ts');
  const freeCodeCampDarkSyntax = {
    ...freeCodeCampDark.syntax,
    punctuation: '#ffff00',
    definition: '#e2777a',
    keyword: '#569cd6'
  };

  const [runToggle, setRunToggle] = useState(false);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    if (
      (isMac && e.metaKey && e.key === 'Enter') ||
      (!isMac && e.ctrlKey && e.key === 'Enter')
    ) {
      e.preventDefault();
      setRunToggle(prev => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const handleRunClick = useCallback(() => {
    setRunToggle(prev => !prev);
  }, []);

  return (
    <div
      className='interactive-editor-wrapper'
      data-playwright-test-label='sp-interactive-editor'
    >
      <div
        className='interactive-editor-toolbar'
        aria-hidden={false}
        style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}
      >
        <button
          type='button'
          className='sp-run-button'
          onClick={handleRunClick}
          title='Run code (Ctrl/Cmd + Enter)'
        >
          Run
        </button>
      </div>

      <Sandpack
        key={String(runToggle)}
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
        autorun={false}
        recompileMode='delayed'
        options={{
          editorHeight: 450,
          editorWidthPercentage: 60,
          showConsole: showConsole,
          showConsoleButton: showConsole,
          layout: got('html') ? 'preview' : 'console',
          showLineNumbers: true,
          recompileDelay: 800
        }}
      />
    </div>
  );
};

InteractiveEditor.displayName = 'InteractiveEditor';
export default InteractiveEditor;
