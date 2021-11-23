import React from 'react';
// import { withTranslation } from 'react-i18next';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';

// import PrismFormatted from './prism-formatted';
// import './notes.css';

// const mainId = 'fcc-main-frame';

/* const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      previewMounted
    },
    dispatch
  );*/

interface NotesProps {
  notes?: string;
}

function Notes({ notes }: NotesProps): JSX.Element {
  return <>{notes && <div dangerouslySetInnerHTML={{ __html: notes }} />}</>;
}

Notes.displayName = 'Notes';

export default Notes;
