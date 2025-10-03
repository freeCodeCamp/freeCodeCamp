import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_LOCATION } from '../../utils/handle-request';
import { Module, ChaptersWithLocation } from '../../../interfaces/chapter';

const ChapterLanding = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as Module[]);
  const [chapterName, setChapterName] = useState('');
  const [superBlockName, setSuperBlockName] = useState('');
  const params = useParams() as { superblock: string; chapter: string };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`${API_LOCATION}/${params.superblock}/chapters/${params.chapter}`)
      .then(res => res.json() as Promise<ChaptersWithLocation>)
      .then(
        blockData => {
          setLoading(false);
          setItems(blockData.modules);
          setChapterName(blockData.currentChapter);
          setSuperBlockName(blockData.currentSuperBlock);
        },
        (error: Error) => {
          setLoading(false);
          setError(error);
        }
      );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{chapterName}</h1>
      <ul>
        {items.map(chapter => (
          <li key={chapter.name}>
            <Link
              to={`/${params.superblock}/chapters/${params.chapter}/${chapter.path}`}
            >
              {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to={`/${params.superblock}`}>Return to {superBlockName}</Link>
      </p>
      <hr />
      <h2>Create New Project</h2>
      <p>
        Want to create a new project? Open your terminal and run{' '}
        <code>pnpm run create-new-project</code>
      </p>
    </div>
  );
};

export default ChapterLanding;
