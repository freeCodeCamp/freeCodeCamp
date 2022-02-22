import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2-react-17';
import * as codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';
import { Link, useParams } from 'react-router-dom';
import { ChallengeContent } from '../../../interfaces/ChallengeContent';
import SaveChallenge from '../buttons/SaveChallenge';
import './Editor.css';

const Editor = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState({} as ChallengeContent);
  const [input, setInput] = useState('');
  const params = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `http://localhost:3200/${params.superblock}/${params.block}/${params.challenge}`
    )
      .then(res => res.json() as Promise<ChallengeContent>)
      .then(
        content => {
          setLoading(false);
          setItems(content);
          setInput(content.fileData);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  };

  const changeHandle = (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string
  ) => {
    setInput(value);
  };

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{items.name}</h1>
      <CodeMirror
        value={input}
        onBeforeChange={changeHandle}
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
        superblock={params.superblock as string}
        block={params.block as string}
        challenge={params.challenge as string}
        content={input}
      />
      <p>
        <Link to={`/${params.superblock}/${params.block}`}>
          Return to Block
        </Link>
      </p>
    </div>
  );
};

export default Editor;
