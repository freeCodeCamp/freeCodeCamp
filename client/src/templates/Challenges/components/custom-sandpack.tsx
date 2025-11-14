import React from 'react';
import './custom-sandpack.css';

import type {
  CodeEditorProps,
  SandpackInternal,
  SandpackInternalOptions,
  TemplateFiles,
  SandpackFiles,
  SandpackPredefinedTemplate
} from '@codesandbox/sandpack-react';
import {
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
  SandpackLayout,
  SandpackStack,
  RoundedButton,
  ConsoleIcon,
  SandpackProvider,
  SANDBOX_TEMPLATES,
  useClassNames
} from '@codesandbox/sandpack-react';
import SandpackMonacoEditor from './sandpack-monaco-editor';

const THEME_PREFIX = 'sp';

export const CustomSandpack: SandpackInternal = ({
  options,
  template,
  customSetup,
  files,
  theme,
  ...props
}) => {
  options ??= {};
  options.resizablePanels ??= true;
  options.editorWidthPercentage ??= 50;
  options.showConsole ??= false;

  const rtlLayout = options?.rtl ?? false;
  const codeEditorOptions: CodeEditorProps = {
    showTabs: options.showTabs,
    showLineNumbers: options.showLineNumbers,
    showInlineErrors: options.showInlineErrors,
    wrapContent: options.wrapContent,
    closableTabs: options.closableTabs,
    initMode: options.initMode,
    extensions: options.codeEditor?.extensions,
    extensionsKeymap: options.codeEditor?.extensionsKeymap,
    readOnly: options.readOnly,
    showReadOnly: options.showReadOnly,
    additionalLanguages: options.codeEditor?.additionalLanguages
  };

  const providerOptions: SandpackInternalOptions<
    SandpackFiles,
    SandpackPredefinedTemplate
  > = {
    /**
     * TS-why: Type 'string | number | symbol' is not assignable to type 'string'
     */
    activeFile: options.activeFile as unknown as string,
    visibleFiles: options.visibleFiles as unknown as string[],
    recompileMode: options.recompileMode,
    recompileDelay: options.recompileDelay,
    autorun: options.autorun,
    autoReload: options.autoReload,
    bundlerURL: options.bundlerURL,
    startRoute: options.startRoute,
    skipEval: options.skipEval,
    fileResolver: options.fileResolver,
    initMode: options.initMode,
    initModeObserverOptions: options.initModeObserverOptions,
    externalResources: options.externalResources,
    logLevel: options.logLevel,
    classes: options.classes
    // experimental_enableServiceWorker: options.experimental_enableServiceWorker,
    // experimental_enableStableServiceWorkerId:
    //   options.experimental_enableStableServiceWorkerId,
  };

  /**
   * Console
   */
  const [consoleVisibility, setConsoleVisibility] = React.useState(
    options.showConsole
  );
  const [counter, setCounter] = React.useState(0);
  const hasRightColumn = options.showConsole || options.showConsoleButton;

  const templateFiles = SANDBOX_TEMPLATES[template!] ?? {};
  const mode = (
    options?.layout
      ? options?.layout
      : 'mode' in templateFiles
        ? templateFiles.mode
        : 'preview'
  ) as typeof options.layout;

  const actionsChildren = options.showConsoleButton ? (
    <ConsoleCounterButton
      counter={counter}
      onClick={(): void => setConsoleVisibility(prev => !prev)}
    />
  ) : undefined;

  /**
   * Resizable
   */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dragEventTargetRef = React.useRef<any>(null);

  const [horizontalSize, setHorizontalSize] = React.useState(
    options.editorWidthPercentage
  );
  const [verticalSize, setVerticalSize] = React.useState(70);

  const RightColumn = hasRightColumn ? SandpackStack : React.Fragment;
  const rightColumnStyle = {
    flexGrow: 100 - horizontalSize,
    flexShrink: 100 - horizontalSize,
    flexBasis: 0,
    width: 100 - horizontalSize + '%',
    gap: consoleVisibility ? 1 : 0,
    height: options.editorHeight // use the original editor height
  };

  const topRowStyle = hasRightColumn
    ? {
        flexGrow: verticalSize,
        flexShrink: verticalSize,
        flexBasis: 0,
        overflow: 'hidden'
      }
    : rightColumnStyle;

  const onDragMove = (event: MouseEvent): void => {
    if (!dragEventTargetRef.current) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const container = dragEventTargetRef.current.parentElement as
      | HTMLDivElement
      | undefined;

    if (!container) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const direction = dragEventTargetRef.current.dataset.direction as
      | 'horizontal'
      | 'vertical';
    const isHorizontal = direction === 'horizontal';

    const { left, top, height, width } = container.getBoundingClientRect();
    const offset = isHorizontal
      ? ((event.clientX - left) / width) * 100
      : ((event.clientY - top) / height) * 100;
    const boundaries = Math.min(Math.max(offset, 25), 75);

    if (isHorizontal) {
      setHorizontalSize(rtlLayout ? 100 - boundaries : boundaries);
    } else {
      setVerticalSize(boundaries);
    }

    container.querySelectorAll(`.${THEME_PREFIX}-stack`).forEach(item => {
      (item as HTMLDivElement).style.pointerEvents = 'none';
    });
  };

  const stopDragging = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const container = dragEventTargetRef.current?.parentElement as
      | HTMLDivElement
      | undefined;

    if (!container) return;

    container.querySelectorAll(`.${THEME_PREFIX}-stack`).forEach(item => {
      (item as HTMLDivElement).style.pointerEvents = '';
    });

    dragEventTargetRef.current = null;
  };

  React.useEffect(() => {
    if (!options?.resizablePanels) return;
    document.body.addEventListener('mousemove', onDragMove);
    document.body.addEventListener('mouseup', stopDragging);

    return (): void => {
      document.body.removeEventListener('mousemove', onDragMove);
      document.body.removeEventListener('mouseup', stopDragging);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  React.useEffect(() => {
    setConsoleVisibility(options?.showConsole ?? false);
  }, [options.showConsole]);

  const rightColumnProps = hasRightColumn
    ? { className: THEME_PREFIX + '-preset-column', style: rightColumnStyle }
    : {};

  const classNames = useClassNames();

  return (
    <SandpackProvider
      key={template}
      customSetup={customSetup}
      files={files as TemplateFiles<SandpackPredefinedTemplate>}
      options={providerOptions}
      template={template}
      theme={theme}
      {...props}
    >
      <SandpackLayout className={rtlLayout ? 'rtl-layout' : ''}>
        <SandpackMonacoEditor
          options={codeEditorOptions}
          style={{
            height: options.editorHeight, // use the original editor height
            flexGrow: horizontalSize,
            flexShrink: horizontalSize,
            flexBasis: 0,
            overflow: 'hidden'
          }}
        />

        {options.resizablePanels && (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className={classNames('resize-handler', [
              dragHandler({ direction: 'horizontal' })
            ])}
            data-direction='horizontal'
            onMouseDown={(event): void => {
              dragEventTargetRef.current = event.target;
            }}
            style={{
              left: `calc(${
                rtlLayout ? 100 - horizontalSize : horizontalSize
              }% - 5px)`
            }}
          />
        )}

        <RightColumn {...rightColumnProps}>
          {mode === 'preview' && (
            <SandpackPreview
              actionsChildren={actionsChildren}
              showNavigator={options.showNavigator}
              showRefreshButton={options.showRefreshButton}
              style={topRowStyle}
            />
          )}

          {mode === 'tests' && (
            <SandpackTests
              actionsChildren={actionsChildren}
              style={topRowStyle}
            />
          )}

          {mode === 'console' && (
            <SandpackConsole
              actionsChildren={actionsChildren}
              style={topRowStyle}
              standalone
            />
          )}

          {(options.showConsoleButton || consoleVisibility) && (
            <>
              {options.resizablePanels && consoleVisibility && (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  className={classNames('resize-handler', [
                    dragHandler({ direction: 'vertical' })
                  ])}
                  data-direction='vertical'
                  onMouseDown={(event): void => {
                    dragEventTargetRef.current = event.target;
                  }}
                  style={{ top: `calc(${verticalSize}% - 5px)` }}
                />
              )}

              <div
                className='console-wrapper'
                style={{
                  flexGrow: consoleVisibility ? 100 - verticalSize : 0,
                  flexShrink: consoleVisibility ? 100 - verticalSize : 0,
                  flexBasis: 0
                }}
              >
                <SandpackConsole
                  onLogsChange={(logs): void => setCounter(logs.length)}
                  showHeader={false}
                />
              </div>
            </>
          )}
        </RightColumn>
      </SandpackLayout>
    </SandpackProvider>
  );
};

const dragHandler = (props: {
  direction: 'vertical' | 'horizontal';
}): string => {
  const baseClasses = 'drag-handler';
  const variants = {
    vertical: 'drag-handler--vertical',
    horizontal: 'drag-handler--horizontal'
  };
  return `${baseClasses} ${variants[props.direction]}`;
};

const ConsoleCounterButton: React.FC<{
  onClick: () => void;
  counter: number;
}> = ({ onClick, counter }) => {
  return (
    <RoundedButton className='console-counter-button' onClick={onClick}>
      <ConsoleIcon />
      {counter > 0 && <strong>{counter}</strong>}
    </RoundedButton>
  );
};
