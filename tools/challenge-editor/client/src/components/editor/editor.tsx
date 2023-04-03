import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import * as codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';
// we need to import this mode to get the fenced codeblock highlighting
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import { Link, useParams } from 'react-router-dom';
import { ChallengeContent } from '../../../interfaces/challenge-content';
import SaveChallenge from '../buttons/save-challenge';
import './editor.css';
import { API_LOCATION } from '../../utils/handle-request';

const Editor = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState({
    name: '',
    fileData: ''
  });
  const [input, setInput] = useState('');
  const { superblock, block, challenge } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`${API_LOCATION}/${superblock}/${block}/${challenge}`)
      .then(res => res.json() as Promise<ChallengeContent>)
      .then(
        content => {
          setLoading(false);
          setItems(content);
          setInput(content.fileData);
        },
        (error: Error) => {
          setLoading(false);
          setError(error);
        }
      );
  };

  const handleChange = (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string
  ) => {
    setInput(value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{items.name}</h1>
      <span className='breadcrumb'>
        {superblock} / {block}
      </span>
      <CodeMirror
        value={input}
        onBeforeChange={handleChange}
        options={{
          mode: {
            name: 'markdown',
            highlightFormatting: true
          },
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true
        }}
      />
      <SaveChallenge
        superblock={superblock}
        block={block}
        challenge={challenge}
        content={input}
      />
      <p>
        <Link to={`/${superblock}/${block}`}>Return to Block</Link>
      </p>
    </div>
  );
};

export default Editor;
