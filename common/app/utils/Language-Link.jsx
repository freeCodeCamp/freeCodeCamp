import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addLang } from './add-lang';

const mapStateToProps = state => ({ lang: state.app.lang });

export class LangLink extends React.Component {
  static displayName = 'LangLink';
  static propTypes = {
    to: PropTypes.string,
    lang: PropTypes.string
  };

  render() {
    const {
      to,
      lang,
      ...props
    } = this.props;
    return (
      <Link
        to={ addLang(to, lang) }
        { ...props }
      />
    );
  }
}

export default connect(mapStateToProps)(LangLink);
