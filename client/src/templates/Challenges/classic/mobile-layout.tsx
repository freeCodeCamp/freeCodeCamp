import { TabPane, Tabs } from '@freecodecamp/react-bootstrap';
import i18next from 'i18next';
import React, { Component, ReactElement } from 'react';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane
} from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector
} from '../redux/selectors';
import { TOOL_PANEL_HEIGHT } from '../../../../../config/misc';
import ToolPanel from '../components/tool-panel';
import PreviewPortal from '../components/preview-portal';
import EditorTabs from './editor-tabs';

interface MobileLayoutProps {
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  notes: ReactElement;
  preview: JSX.Element;
  windowTitle: string;
  showPreviewPortal: boolean;
  showPreviewPane: boolean;
  removePortalWindow: () => void;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  portalWindow: null | Window;
  updateUsingKeyboardInTablist: (arg0: boolean) => void;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
}

enum Tab {
  Editor = 'editor',
  Preview = 'preview',
  Console = 'console',
  Notes = 'notes',
  Instructions = 'instructions'
}

interface MobileLayoutState {
  currentTab: Tab;
}

const mapDispatchToProps = {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane
};

const mapStateToProps = createSelector(
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  portalWindowSelector,

  (
    showPreviewPortal: boolean,
    showPreviewPane: boolean,
    portalWindow: null | Window
  ) => ({
    showPreviewPortal,
    showPreviewPane,
    portalWindow
  })
);

class MobileLayout extends Component<MobileLayoutProps, MobileLayoutState> {
  static displayName: string;

  #toolPanelGroup!: HTMLElement;

  state: MobileLayoutState = {
    currentTab: this.props.hasEditableBoundaries ? Tab.Editor : Tab.Instructions
  };

  switchTab = (tab: Tab): void => {
    this.setState({
      currentTab: tab
    });
  };

  // Keep the tool panel visible when mobile address bar and/or keyboard are in view.
  setToolPanelPosition = (): void => {
    if (!this.#toolPanelGroup) return;
    // Detect the appearance of the mobile virtual keyboard.
    if (visualViewport?.height && window.innerHeight > visualViewport.height) {
      setTimeout(() => {
        if (visualViewport?.height !== undefined) {
          this.#toolPanelGroup.style.top =
            String(visualViewport.height - TOOL_PANEL_HEIGHT) + 'px';
        }
      }, 200);
    } else {
      if (visualViewport?.height !== undefined) {
        this.#toolPanelGroup.style.top =
          String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
      }
    }
  };

  isMobileDeviceWithToolPanel = (): RegExpExecArray | null =>
    this.#toolPanelGroup && /iPhone|Android.+Mobile/.exec(navigator.userAgent);

  componentDidMount(): void {
    this.#toolPanelGroup = (
      document.getElementsByClassName(
        'tool-panel-group-mobile'
      ) as HTMLCollectionOf<HTMLElement>
    )[0];

    if (this.isMobileDeviceWithToolPanel()) {
      visualViewport?.addEventListener('resize', this.setToolPanelPosition);
      this.#toolPanelGroup.style.top =
        String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
    }
  }

  componentWillUnmount(): void {
    if (this.isMobileDeviceWithToolPanel()) {
      visualViewport?.removeEventListener('resize', this.setToolPanelPosition);
      document.documentElement.style.height = '100%';
    }
  }

  handleKeyDown = (): void => this.props.updateUsingKeyboardInTablist(true);

  handleClick = (): void => this.props.updateUsingKeyboardInTablist(false);

  render(): JSX.Element {
    const { currentTab } = this.state;
    const {
      hasEditableBoundaries,
      instructions,
      editor,
      testOutput,
      hasNotes,
      hasPreview,
      notes,
      preview,
      showPreviewPane,
      showPreviewPortal,
      removePortalWindow,
      setShowPreviewPane,
      setShowPreviewPortal,
      portalWindow,
      windowTitle,
      guideUrl,
      videoUrl,
      usesMultifileEditor
    } = this.props;

    const editorTabPaneProps = {
      mountOnEnter: true,
      unmountOnExit: true
    };

    const displayPreviewPane = hasPreview && showPreviewPane;
    const displayPreviewPortal = hasPreview && showPreviewPortal;

    const togglePane = (pane: string): void => {
      if (pane === 'showPreviewPane') {
        if (!showPreviewPane && showPreviewPortal) {
          setShowPreviewPortal(false);
        }
        setShowPreviewPane(!showPreviewPane);
        portalWindow?.close();
        removePortalWindow();
      } else if (pane === 'showPreviewPortal') {
        if (!showPreviewPortal && showPreviewPane) {
          setShowPreviewPane(false);
        }
        setShowPreviewPortal(!showPreviewPortal);
        if (showPreviewPortal) {
          portalWindow?.close();
          removePortalWindow();
        }
      } else {
        setShowPreviewPane(true);
        setShowPreviewPortal(false);
      }
    };

    // sets screen reader text for the portal button
    function getPortalBtnSrText() {
      // preview open in main window
      let portalBtnSrText = i18next.t('aria.move-preview-to-new-window');

      // preview open in external window
      if (showPreviewPortal && !showPreviewPane) {
        portalBtnSrText = i18next.t('aria.close-external-preview-window');
      }

      return portalBtnSrText;
    }

    // Unlike the desktop layout the mobile version does not have an ActionRow,
    // but still needs a way to switch between the different tabs.

    return (
      <>
        <Tabs
          activeKey={currentTab}
          animation={false}
          defaultActiveKey={currentTab}
          id='mobile-layout'
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleClick}
          onSelect={this.switchTab}
          onTouchStart={this.handleClick}
          {...(hasPreview && { 'data-haspreview': 'true' })}
        >
          {!hasEditableBoundaries && (
            <TabPane
              eventKey={Tab.Instructions}
              title={i18next.t('learn.editor-tabs.instructions')}
              tabIndex={0}
            >
              {instructions}
            </TabPane>
          )}
          <TabPane
            eventKey={Tab.Editor}
            title={i18next.t('learn.editor-tabs.code')}
            {...editorTabPaneProps}
          >
            {usesMultifileEditor && <EditorTabs />}
            {editor}
          </TabPane>
          <TabPane
            eventKey={Tab.Console}
            title={i18next.t('learn.editor-tabs.console')}
            {...editorTabPaneProps}
          >
            {testOutput}
          </TabPane>
          {hasNotes && usesMultifileEditor && (
            <TabPane
              eventKey={Tab.Notes}
              title={i18next.t('learn.editor-tabs.notes')}
            >
              {notes}
            </TabPane>
          )}
          {hasPreview && (
            <TabPane
              eventKey={Tab.Preview}
              title={i18next.t('learn.editor-tabs.preview')}
            >
              <button
                className='portal-button'
                aria-expanded={!!showPreviewPortal}
                onClick={() => togglePane('showPreviewPortal')}
              >
                <span className='sr-only'>{getPortalBtnSrText()}</span>
                <FontAwesomeIcon icon={faWindowRestore} />
              </button>
              {displayPreviewPane && preview}
              {showPreviewPortal && (
                <p className='preview-external-window'>
                  {i18next.t('learn.preview-external-window')}
                </p>
              )}
            </TabPane>
          )}
          {!hasEditableBoundaries && (
            <ToolPanel
              guideUrl={guideUrl}
              isMobile={true}
              videoUrl={videoUrl}
            />
          )}
          {hasPreview && this.state.currentTab !== 'preview' && (
            <button
              className='portal-button'
              aria-expanded={!!showPreviewPortal}
              onClick={() => togglePane('showPreviewPortal')}
            >
              <span className='sr-only'>{getPortalBtnSrText()}</span>
              <FontAwesomeIcon icon={faWindowRestore} />
            </button>
          )}
        </Tabs>
        {displayPreviewPortal && (
          <PreviewPortal windowTitle={windowTitle}>{preview}</PreviewPortal>
        )}
      </>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
