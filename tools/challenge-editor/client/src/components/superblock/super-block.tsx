import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Block } from '../../../interfaces/block';
import { API_LOCATION } from '../../utils/handle-request';

const SuperBlock = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as Block[]);
  const params = useParams() as { superblock: string; block: string };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`${API_LOCATION}/${params.superblock}`)
      .then(res => res.json() as Promise<Block[]>)
      .then(
        blocks => {
          setLoading(false);
          setItems(blocks);
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
      <h1>{params.superblock}</h1>
      <ul>
        {items.map(block => (
          <li key={block.name}>
            <Link to={`/${params.superblock}/${block.path}`}>{block.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to={'/'}>Return to Superblocks</Link>
      </p>
      <hr />
      <h2>Create New Project</h2>
      <p>
        Want to create a new project? Open your terminal, point to the{' '}
        <code>tools/challenge-helper-scripts</code> directory, and run{' '}
        <code>pnpm run create-project</code>
      </p>
    </div>
  );
};

export default SuperBlock;
