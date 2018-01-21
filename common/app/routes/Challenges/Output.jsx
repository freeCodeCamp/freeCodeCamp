import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';

import ns from './ns.json';
import CodeMirrorSkeleton from './Code-Mirror-Skeleton.jsx';
import { themeSelector } from '../../redux';

const defaultOptions = {
  lineNumbers: false,
  lineWrapping: true,
  mode: 'javascript',
  readOnly: 'nocursor'
};

const mapStateToProps = state => ({ theme: themeSelector(state) });

const propTypes = {
  defaultOutput: PropTypes.string,
  output: PropTypes.string,
  theme: PropTypes.string
};

export class Output extends PureComponent {
  render() {
    const { output, defaultOutput } = this.props;
    const cmTheme = this.props.theme === 'default' ? 'default' : 'dracula';
    return (
      <div className={ `${ns}-log` }>
        <NoSSR onSSR={ <CodeMirrorSkeleton content={ output } /> }>
          <Codemirror
            options={{ ...defaultOptions, theme: cmTheme }}
            value={ output || defaultOutput }
          />
        </NoSSR>
      </div>
    );
  }
}

Output.displayName = 'Output';
Output.propTypes = propTypes;

export default connect(mapStateToProps)(Output);
