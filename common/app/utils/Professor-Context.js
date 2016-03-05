import React, { Children, PropTypes } from 'react';

class ProfessorContext extends React.Component {
  constructor(props) {
    super(props);
    this.professor = props.professor;
  }
  static displayName = 'ProfessorContext';

  static propTypes = {
    professor: PropTypes.object,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    professor: PropTypes.object
  };

  getChildContext() {
    return { professor: this.professor };
  }

  render() {
    return Children.only(this.props.children);
  }
}

/* eslint-disable react/display-name,  react/prop-types */
ProfessorContext.wrap = function wrap(Component, professor) {
  const props = {};
  if (professor) {
    props.professor = professor;
  }

  return React.createElement(
    ProfessorContext,
    props,
    Component
  );
};

export default ProfessorContext;
