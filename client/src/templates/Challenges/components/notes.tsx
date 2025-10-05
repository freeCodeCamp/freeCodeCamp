import React from 'react';
import PrismFormatted from './prism-formatted';

interface NotesProps {
  notes?: string;
}

function Notes({ notes }: NotesProps): JSX.Element | null {
  return notes ? <PrismFormatted text={notes} /> : null;
}

Notes.displayName = 'Notes';

export default Notes;
