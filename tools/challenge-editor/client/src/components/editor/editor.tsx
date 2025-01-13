import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
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
import { superBlockNameMap } from '../../utils/block-name-translator';

const Editor = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState({
    name: '',
    fileData: ''
  });
  const [stepContent, setStepContent] = useState('');
  const { superblock, block, challenge } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `${API_LOCATION}/${superblock || ''}/${block || ''}/${challenge || ''}`
    )
      .then(res => res.json() as Promise<ChallengeContent>)
      .then(
        content => {
          setLoading(false);
          setItems(content);
          setStepContent(content.fileData);
        },
        (error: Error) => {
          setLoading(false);
          setError(error);
        }
      );
  };

  const handleChange = (instance: codemirror.Editor) => {
    const editedContent = instance.getValue();
    setStepContent(editedContent);
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
        {superblock || ''} / {block || ''}
      </span>
      <CodeMirror
        value={stepContent}
        onChange={handleChange}
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
        superblock={superblock || ''}
        block={block || ''}
        challenge={challenge}
        content={stepContent}
      />
      <p>
        <Link to={`/${superblock || ''}/${block || ''}`}>Return to Block</Link>
      </p>
      <p>
        <Link
          to={`${import.meta.env.CHALLENGE_EDITOR_LEARN_CLIENT_LOCATION}/learn/${superBlockNameMap[superblock || '']}/${block || ''}/${items.name.replace(/[\s]+/g, '-').toLowerCase() || ''}`}
          target='_blank'
        >
          View Live Version of the Challenge in your running development
          environment
        </Link>
      </p>
    </div>
  );
};

export default Editor;
