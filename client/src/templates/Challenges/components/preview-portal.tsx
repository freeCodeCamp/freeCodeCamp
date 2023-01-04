import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPane,
  setShowPreviewPortal
} from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPaneSelector,
  showPreviewPortalSelector
} from '../redux/selectors';

interface PreviewPortalProps {
  children: ReactElement | null;
  togglePane: (pane: string) => void;
  windowTitle: string;
  t: TFunction;
  storePortalWindow: (window: Window | null) => void;
  removePortalWindow: () => void;
  portalWindow: null | Window;
  setShowPreviewPane: (arg: boolean) => void;
  setShowPreviewPortal: (arg: boolean) => void;
  showPreviewPane: boolean;
  showPreviewPortal: boolean;
}

const mapDispatchToProps = {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPane,
  setShowPreviewPortal
};

const mapStateToProps = createSelector(
  showPreviewPaneSelector,
  showPreviewPortalSelector,
  portalWindowSelector,
  (
    showPreviewPane: boolean,
    showPreviewPortal: boolean,
    portalWindow: null | Window
  ) => ({
    showPreviewPane,
    showPreviewPortal,
    portalWindow
  })
);

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  showPreviewPane: boolean;
  showPreviewPortal: boolean;
  containerEl;
  titleEl;
  styleEl;

  constructor(props: PreviewPortalProps) {
    super(props);
    this.mainWindow = window;
    this.externalWindow = this.props.portalWindow;
    this.showPreviewPane = this.props.showPreviewPane;
    this.showPreviewPortal = this.props.showPreviewPortal;
    this.containerEl = document.createElement('div');
    this.titleEl = document.createElement('title');
    this.styleEl = document.createElement('style');
  }

  componentDidMount() {
    const { t, windowTitle } = this.props;

    if (!this.externalWindow) {
      this.externalWindow = window.open(
        '',
        '',
        'width=960,height=540,left=100,top=100'
      );
    } else {
      this.externalWindow.document.head.innerHTML = '';
      this.externalWindow.document.body.innerHTML = '';
    }

    this.titleEl.innerText = `${t(
      'learn.editor-tabs.preview'
    )} | ${windowTitle}`;

    this.styleEl.innerHTML = `
      #fcc-main-frame {
        width: 100%;
        height: 100%;
        border: none;
      }
    `;

    this.externalWindow?.document.head.appendChild(this.titleEl);
    this.externalWindow?.document.head.appendChild(this.styleEl);
    this.externalWindow?.document.body.setAttribute(
      'style',
      `
        margin: 0px;
        padding: 0px;
        overflow: hidden;
      `
    );
    this.externalWindow?.document.body.appendChild(this.containerEl);
    this.externalWindow?.addEventListener('beforeunload', () => {
      this.props.togglePane('showPreviewPortal');
    });

    this.props.storePortalWindow(this.externalWindow);

    // close the portal if the main window closes
    this.mainWindow?.addEventListener('beforeunload', () => {
      this.externalWindow?.close();
    });
  }

  componentWillUnmount() {
    this.externalWindow?.close();
    this.props.removePortalWindow();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

PreviewPortal.displayName = 'PreviewPortal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PreviewPortal));
