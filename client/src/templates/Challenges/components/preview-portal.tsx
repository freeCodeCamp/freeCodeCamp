import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  storePortalWindow,
  removePortalWindow,
  setIsAdvancing
} from '../redux/actions';
import {
  portalWindowSelector,
  isAdvancingToChallengeSelector
} from '../redux/selectors';

interface PreviewPortalProps {
  children: ReactElement | null;
  togglePane: (pane: string) => void;
  windowTitle: string;
  t: TFunction;
  storePortalWindow: (window: Window | null) => void;
  removePortalWindow: () => void;
  portalWindow: null | Window;
  setIsAdvancing: (arg: boolean) => void;
  isAdvancing: boolean;
}

const mapDispatchToProps = {
  storePortalWindow,
  removePortalWindow,
  setIsAdvancing
};

const mapStateToProps = createSelector(
  isAdvancingToChallengeSelector,
  portalWindowSelector,
  (isAdvancing: boolean, portalWindow: null | Window) => ({
    isAdvancing,
    portalWindow
  })
);

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  isAdvancing: boolean;
  containerEl;
  titleEl;
  styleEl;

  constructor(props: PreviewPortalProps) {
    super(props);
    this.mainWindow = window;
    this.externalWindow = this.props.portalWindow;
    this.isAdvancing = this.props.isAdvancing;
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
  }

  componentWillUnmount() {
    if (!this.props.isAdvancing) {
      this.externalWindow?.close();
    }
    this.props.removePortalWindow();
    this.props.setIsAdvancing(false);
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
