import i18next from 'i18next';
import React, { Component, ReactElement } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@freecodecamp/ui';

import {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  toggleVisibleEditor
} from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  visibleEditorsSelector
} from '../redux/selectors';
import { TOOL_PANEL_HEIGHT } from '../../../../config/misc';
import ToolPanel from '../components/tool-panel';
import { ChallengeFile } from '../../../redux/prop-types';
import EditorTabs from './editor-tabs';
import { VisibleEditors } from './multifile-editor';

interface MobileLayoutProps {
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  challengeFiles: ChallengeFile[];
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  notes: ReactElement;
  preview: JSX.Element;
  onPreviewResize: () => void;
  windowTitle: string;
  showPreviewPane: boolean;
  removePortalWindow: () => void;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  toggleVisibleEditor: (arg: unknown) => void;
  portalWindow: null | Window;
  updateUsingKeyboardInTablist: (arg0: boolean) => void;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
  visibleEditors: VisibleEditors;
}

const tabs = {
  editor: 'editor',
  preview: 'preview',
  console: 'console',
  notes: 'notes',
  instructions: 'instructions'
} as const;

type Tab = keyof typeof tabs;

interface MobileLayoutState {
  currentTab: Tab;
  currentFile: string;
}

const mapDispatchToProps = {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  toggleVisibleEditor
};

const mapStateToProps = createSelector(
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  portalWindowSelector,
  visibleEditorsSelector,
  (
    showPreviewPortal: boolean,
    showPreviewPane: boolean,
    portalWindow: null | Window,
    visibleEditors: VisibleEditors
  ) => ({
    showPreviewPortal,
    showPreviewPane,
    portalWindow,
    visibleEditors
  })
);

class MobileLayout extends Component<MobileLayoutProps, MobileLayoutState> {
  static displayName: string;

  #toolPanelGroup!: HTMLElement;

  state: MobileLayoutState = {
    currentTab: this.props.hasEditableBoundaries
      ? tabs.editor
      : tabs.instructions,
    currentFile:
      this.props.challengeFiles.find(
        file => (file.editableRegionBoundaries ?? []).length > 0
      )?.fileKey || this.props.challengeFiles[0].fileKey
  };

  switchTab = (tab: string): void => {
    this.setState({
      currentTab: tab as Tab
    });
  };

  // Keep the tool panel visible when mobile address bar and/or keyboard are in view.
  setToolPanelPosition = (): void => {
    // Detect the appearance of the mobile virtual keyboard.
    if (visualViewport?.height && window.innerHeight > visualViewport.height) {
      setTimeout(() => {
        if (visualViewport?.height !== undefined && this.#toolPanelGroup) {
          this.#toolPanelGroup.style.top =
            String(visualViewport.height - TOOL_PANEL_HEIGHT) + 'px';
        }
      }, 200);
    } else {
      if (visualViewport?.height !== undefined) {
        // restore the height of html element on Firefox.
        document.documentElement.style.height = '100%';
        if (this.#toolPanelGroup)
          this.#toolPanelGroup.style.top =
            String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
      }
    }
  };

  isMobileDevice = (): RegExpExecArray | null =>
    /iPhone|Android.+Mobile/.exec(navigator.userAgent);

  componentDidMount(): void {
    this.#toolPanelGroup = (
      document.getElementsByClassName(
        'tool-panel-group-mobile'
      ) as HTMLCollectionOf<HTMLElement>
    )[0];

    if (this.isMobileDevice()) {
      visualViewport?.addEventListener('resize', this.setToolPanelPosition);
      if (this.#toolPanelGroup)
        this.#toolPanelGroup.style.top =
          String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
    }
  }

  componentWillUnmount(): void {
    if (this.isMobileDevice()) {
      visualViewport?.removeEventListener('resize', this.setToolPanelPosition);
      document.documentElement.style.height = '100%';
    }
  }

  handleKeyDown = (): void => this.props.updateUsingKeyboardInTablist(true);

  handleClick = (): void => this.props.updateUsingKeyboardInTablist(false);

  render(): JSX.Element {
    const { currentTab, currentFile } = this.state;
    const {
      hasEditableBoundaries,
      challengeFiles,
      instructions,
      editor,
      testOutput,
      hasNotes,
      hasPreview,
      notes,
      preview,
      showPreviewPane,
      toggleVisibleEditor,
      guideUrl,
      videoUrl,
      usesMultifileEditor
    } = this.props;

    const displayPreviewPane = hasPreview && showPreviewPane;

    const setCurrentViewedFile = (file: string): void => {
      this.setState({ currentFile: file });
      toggleVisibleEditor({ editor: file });
    };

    // Unlike the desktop layout the mobile version does not have an ActionRow,
    // but still needs a way to switch between the different tabs.

    return (
      <>
        <Tabs
          id='mobile-layout'
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleClick}
          onTouchStart={this.handleClick}
          defaultValue={currentTab}
          onValueChange={this.switchTab}
          {...(hasPreview && { 'data-haspreview': 'true' })}
        >
          <TabsList className='nav-lists'>
            {!hasEditableBoundaries && (
              <TabsTrigger value={tabs.instructions}>
                {i18next.t('learn.editor-tabs.instructions')}
              </TabsTrigger>
            )}
            {challengeFiles.length <= 1 ? (
              <TabsTrigger value={tabs.editor}>
                {i18next.t('learn.editor-tabs.editor')}
              </TabsTrigger>
            ) : (
              <div
                className={`${currentTab == tabs.editor ? 'file-tab-active' : ''} file-tab`}
              >
                <select
                  value={currentFile}
                  onChange={e => setCurrentViewedFile(e.target.value)}
                  onClick={() => this.switchTab(tabs.editor)}
                  className='file-selector'
                >
                  {challengeFiles.map(file => (
                    <option key={file.name} value={file.fileKey}>
                      {file.name + '.' + file.ext}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {hasNotes && usesMultifileEditor && (
              <TabsTrigger value={tabs.notes}>
                {i18next.t('learn.editor-tabs.notes')}
              </TabsTrigger>
            )}
            <TabsTrigger value={tabs.console}>
              {i18next.t('learn.editor-tabs.console')}
            </TabsTrigger>
            {hasPreview && (
              <TabsTrigger value={tabs.preview}>
                {i18next.t('learn.editor-tabs.preview')}
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent
            tabIndex={-1}
            className='tab-content'
            value={tabs.editor}
          >
            {usesMultifileEditor && <EditorTabs />}
            {editor}
          </TabsContent>
          {!hasEditableBoundaries && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              value={tabs.instructions}
            >
              {instructions}
            </TabsContent>
          )}
          <TabsContent
            tabIndex={-1}
            className='tab-content'
            value={tabs.console}
          >
            {testOutput}
          </TabsContent>
          {hasNotes && usesMultifileEditor && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              value={tabs.notes}
            >
              {notes}
            </TabsContent>
          )}
          {hasPreview && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              data-playwright-test-label='preview-pane'
              value={tabs.preview}
              forceMount
              // forceMount causes the preview tabpanel to never be hidden,
              // so we need to manually add it when preview is not active.
              {...(this.state.currentTab === 'preview' ? {} : { hidden: true })}
            >
              {displayPreviewPane && preview}
            </TabsContent>
          )}
          {!hasEditableBoundaries && (
            <ToolPanel
              guideUrl={guideUrl}
              isMobile={true}
              videoUrl={videoUrl}
            />
          )}
        </Tabs>
      </>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
