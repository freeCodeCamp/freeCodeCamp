import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Block } from '../../../interfaces/Block';

const SuperBlock = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as Block[]);
  const params = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:3200/${params.superblock}`)
      .then(res => res.json() as Promise<Block[]>)
      .then(
        blocks => {
          setLoading(false);
          setItems(blocks);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  };

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
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
        Want to create a new project? Open your terminal, point to the root
        directory for this repo, and run <code>npm run create-project</code>
      </p>
    </div>
  );
};

export default SuperBlock;
