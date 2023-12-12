import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  setIsAdvancing,
  setChapterSlug
} from '../redux/actions';
import {
  showPreviewPortalSelector,
  portalWindowSelector,
  isAdvancingToChallengeSelector,
  chapterSlugSelector
} from '../redux/selectors';
import { MAX_MOBILE_WIDTH } from '../../../../config/misc';

interface PreviewPortalProps {
  children: ReactElement | null;
  windowTitle: string;
  t: TFunction;
  storePortalWindow: (window: Window | null) => void;
  removePortalWindow: () => void;
  showPreviewPortal: boolean;
  portalWindow: null | Window;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  setIsAdvancing: (arg: boolean) => void;
  isAdvancing: boolean;
  setChapterSlug: (arg: string) => void;
  chapterSlug: string;
  onResize: () => void;
}

const mapDispatchToProps = {
  storePortalWindow,
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane,
  setIsAdvancing,
  setChapterSlug
};

const mapStateToProps = createSelector(
  isAdvancingToChallengeSelector,
  chapterSlugSelector,
  showPreviewPortalSelector,
  portalWindowSelector,
  (
    isAdvancing: boolean,
    chapterSlug: string,
    showPreviewPortal: boolean,
    portalWindow: null | Window
  ) => ({
    isAdvancing,
    chapterSlug,
    showPreviewPortal,
    portalWindow
  })
);

const getChapterSlug = (w: Window): string => {
  const urlSegments = w.location.href.split('/');
  // minus two to account for starting at zero and skipping the "step" number segment
  return urlSegments[urlSegments.length - 2];
};

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  mainWindow: Window;
  externalWindow: Window | null = null;
  isAdvancing: boolean;
  chapterSlug: string;
  containerEl;
  titleEl;
  styleEl;

  constructor(props: PreviewPortalProps) {
    super(props);
    this.mainWindow = window;
    this.externalWindow = this.props.portalWindow;
    this.isAdvancing = this.props.isAdvancing;
    this.chapterSlug = this.props.chapterSlug;
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
      this.props.setChapterSlug(getChapterSlug(this.mainWindow));
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
      this.props.setShowPreviewPortal(false);
      if (this.mainWindow.innerWidth < MAX_MOBILE_WIDTH) {
        this.props.setShowPreviewPane(true);
      }
      this.props.removePortalWindow();
    });

    this.externalWindow?.addEventListener('resize', () => {
      this.props.onResize();
    });

    this.props.storePortalWindow(this.externalWindow);

    // close the portal if the main window closes
    this.mainWindow?.addEventListener('beforeunload', () => {
      this.externalWindow?.close();
    });
  }

  componentWillUnmount() {
    const currentSlug = getChapterSlug(this.mainWindow);

    // if not moving between pages in chapters and chapter slug changes
    if (!this.props.isAdvancing && currentSlug !== this.props.chapterSlug) {
      // means we navigated away from current chapter so close preview window
      this.props.setChapterSlug('');
      this.externalWindow?.close();
      this.props.removePortalWindow();
      // else if moving between pages in chapters
    } else if (this.props.isAdvancing) {
      // if moving from one chapter to the next
      if (currentSlug !== this.props.chapterSlug) {
        // update chapter slug
        this.props.setChapterSlug(currentSlug);
      }

      // set moving chapter state to false now
      this.props.setIsAdvancing(false);
    }
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
