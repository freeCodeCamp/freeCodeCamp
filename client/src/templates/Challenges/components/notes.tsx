import React from 'react';
import PrismFormatted from './prism-formatted';

interface NotesProps {
  notes?: string;
}

function Notes({ notes }: NotesProps): JSX.Element {
  return <>{notes && <PrismFormatted text={notes} />}</>;
}

Notes.displayName = 'Notes';

export default Notes;
