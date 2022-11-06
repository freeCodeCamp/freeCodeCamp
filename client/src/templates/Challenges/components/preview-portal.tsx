import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  storeportalDocument,
  removeportalDocument,
  storePortalWindow
} from '../redux/actions';
import {
  portalDocumentSelector,
  showPreviewPortalSelector,
  portalWindowSelector
} from '../redux/selectors';

const mapStateToProps = createSelector(
  showPreviewPortalSelector,
  portalWindowSelector,
  portalDocumentSelector,
  (
    showPreviewPortal: false,
    portalWindow: Window | null,
    portalDocument: Document | null
  ) => ({
    showPreviewPortal,
    portalWindow,
    portalDocument
  })
);

interface PreviewPortalProps {
  children: ReactElement | null;
  togglePane: (pane: string) => void;
  windowTitle: string;
  t: TFunction;
  storeportalDocument: (document: Document | undefined) => void;
  removeportalDocument: () => void;
  storePortalWindow: (window: Window | null) => void;
  portalWindow: Window;
  showPreviewPortal: boolean;
  portalDocument: Document | boolean;
}

const mapDispatchToProps = {
  storeportalDocument,
  removeportalDocument,
  storePortalWindow
};

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  containerEl;
  titleEl;
  styleEl;
  existingExternalWindow: Window;

  constructor(props: PreviewPortalProps) {
    super(props);
    const { portalWindow } = this.props;
    this.mainWindow = window;
    this.externalWindow = null;
    this.containerEl = document.createElement('div');
    this.titleEl = document.createElement('title');
    this.styleEl = document.createElement('style');
    this.existingExternalWindow = portalWindow;
  }

  componentDidMount() {
    const {
      t,
      windowTitle,
      showPreviewPortal,
      portalDocument,
      storePortalWindow,
      storeportalDocument,
      portalWindow
    } = this.props;

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

    const processWindowAndDocuments = (
      title: HTMLElement,
      style: HTMLElement,
      containerEl: HTMLElement,
      externalWindow: Window | null,
      clientDocument: Document | undefined
    ) => {
      externalWindow?.document.head.appendChild(title);
      externalWindow?.document.head.appendChild(style);
      externalWindow?.document.body.setAttribute(
        'style',
        `
        margin: 0px;
        padding: 0px;
        overflow: hidden;
      `
      );
      externalWindow?.document.body.appendChild(containerEl);
      storePortalWindow(externalWindow);
      storeportalDocument(clientDocument);
    };

    if (portalWindow && showPreviewPortal && portalDocument) {
      this.existingExternalWindow.document.head.innerHTML = '';
      this.existingExternalWindow.document.body.innerHTML = '';
      processWindowAndDocuments(
        this.titleEl,
        this.styleEl,
        this.containerEl,
        this.existingExternalWindow,
        this.existingExternalWindow?.document
      );
    } else {
      this.externalWindow = window.open(
        '',
        '',
        'width=960,height=540,left=100,top=100'
      );
      processWindowAndDocuments(
        this.titleEl,
        this.styleEl,
        this.containerEl,
        this.externalWindow,
        this.externalWindow?.document
      );
    }

    this.externalWindow?.addEventListener('beforeunload', () => {
      this.props.togglePane('showPreviewPortal');
    });
    this.mainWindow?.addEventListener('beforeunload', () => {
      this.externalWindow?.close();
    });
  }

  componentWillUnmount() {
    this.props.removeportalDocument();
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
