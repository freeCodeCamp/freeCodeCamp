import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SuperBlock } from '../../../interfaces/super-block';
import { API_LOCATION } from '../../utils/handle-request';

const Landing = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as SuperBlock[]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(API_LOCATION)
      .then(res => res.json() as Promise<SuperBlock[]>)
      .then(
        superblocks => {
          setLoading(false);
          setItems(superblocks);
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
