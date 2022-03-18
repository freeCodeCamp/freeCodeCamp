import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SuperBlock } from '../../../interfaces/SuperBlock';

const Landing = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as SuperBlock[]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch('http://localhost:3200/')
      .then(res => res.json() as Promise<SuperBlock[]>)
      .then(
        superblocks => {
          setLoading(false);
          setItems(superblocks);
        },
        error => {
          setLoading(false);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
      <h1>Superblocks</h1>
      <ul>
        {items.map(superblock => (
          <li key={superblock.name}>
            <Link to={`/${superblock.path}`}>{superblock.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Landing;
