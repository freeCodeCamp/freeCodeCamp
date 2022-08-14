import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { storePortalDocument, removePortalDocument } from '../redux';

interface PreviewPortalProps {
  children: ReactElement | null;
  togglePane: (pane: string) => void;
  windowTitle: string;
  t: TFunction;
  storePortalDocument: (document: Document | undefined) => void;
  removePortalDocument: () => void;
}

const mapDispatchToProps = {
  storePortalDocument,
  removePortalDocument
};

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  containerEl;
  titleEl;
  styleEl;

  constructor(props: PreviewPortalProps) {
    super(props);

    this.mainWindow = window;
    this.externalWindow = null;
    this.containerEl = document.createElement('div');
    this.titleEl = document.createElement('title');
    this.styleEl = document.createElement('style');
  }

  componentDidMount() {
    const { t, windowTitle } = this.props;

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

    this.externalWindow = window.open(
      '',
      '',
      'width=960,height=540,left=100,top=100'
    );

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

    this.props.storePortalDocument(this.externalWindow?.document);

    this.mainWindow?.addEventListener('beforeunload', () => {
      this.externalWindow?.close();
    });
  }

  componentWillUnmount() {
    this.externalWindow?.close();
    this.props.removePortalDocument();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

PreviewPortal.displayName = 'PreviewPortal';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(PreviewPortal));
