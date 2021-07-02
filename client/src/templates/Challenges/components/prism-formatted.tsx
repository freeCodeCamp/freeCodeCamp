import React, { Component } from 'react';
import Prism from 'prismjs';

interface PrismFormattedProps {
  className?: string;
  text: string;
}

class PrismFormatted extends Component<PrismFormattedProps> {
  static displayName: string;
  instructionsRef: React.RefObject<HTMLInputElement>;
  componentDidMount(): void {
    // Just in case 'current' has not been created, though it should have been.
    if (this.instructionsRef.current) {
      Prism.highlightAllUnder(this.instructionsRef.current);
    }
  }

  constructor(props: PrismFormattedProps | Readonly<PrismFormattedProps>) {
    super(props);
    this.instructionsRef = React.createRef();
  }

  render(): JSX.Element {
    const { text, className } = this.props;
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: text }}
        ref={this.instructionsRef}
      />
    );
  }
}

PrismFormatted.displayName = 'PrismFormatted';

export default PrismFormatted;
