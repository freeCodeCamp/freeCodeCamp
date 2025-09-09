import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_LOCATION } from '../../utils/handle-request';
import { Block, BlocksWithModule } from '../../../interfaces/block';

const ModuleLanding = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as Block[]);
  const [moduleName, setModuleName] = useState('');
  const [chapterName, setChapterName] = useState('');
  const params = useParams() as {
    superblock: string;
    chapter: string;
    module: string;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `${API_LOCATION}/${params.superblock}/chapters/${params.chapter}/modules/${params.module}`
    )
      .then(res => res.json() as Promise<BlocksWithModule>)
      .then(
        moduleData => {
          setLoading(false);
          setItems(moduleData.blocks);
          setModuleName(moduleData.currentModule);
          setChapterName(moduleData.currentChapter);
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
      <h1>{moduleName}</h1>
      <ul>
        {items.map(block => (
          <li key={block.path}>
            <Link to={`/${params.superblock}/${block.path}`}>{block.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to={`/${params.superblock}/chapters/${params.chapter}`}>
          Return to {chapterName}
        </Link>
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

export default ModuleLanding;
