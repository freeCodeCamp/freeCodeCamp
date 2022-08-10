import { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface PreviewPortalProps {
  children: ReactElement | null;
  togglePane: (pane: string) => void;
  windowTitle: string;
}

class PreviewPortal extends Component<PreviewPortalProps> {
  static displayName = 'PreviewPortal';
  externalWindow: Window | null = null;
  containerEl;
  titleEl;

  constructor(props: PreviewPortalProps) {
    super(props);

    this.externalWindow = null;
    this.containerEl = document.createElement('div');
    this.titleEl = document.createElement('title');
  }

  componentDidMount() {
    this.titleEl.innerText = this.props.windowTitle;
    this.externalWindow = window.open(
      '',
      '',
      'width=600,height=400,left=200,top=200'
    );
    this.externalWindow?.document.head.appendChild(this.titleEl);
    this.externalWindow?.document.body.setAttribute(
      'style',
      'margin:0px;padding:0px;overflow:hidden;'
    );
    this.externalWindow?.document.body.appendChild(this.containerEl);
    this.externalWindow?.addEventListener('beforeunload', () => {
      this.props.togglePane('showPreviewPortal');
    });
  }

  componentWillUnmount() {
    this.externalWindow?.close();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

PreviewPortal.displayName = 'PreviewPortal';

export default PreviewPortal;
