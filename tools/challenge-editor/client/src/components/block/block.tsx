import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChallengeData } from '../../../interfaces/challenge-data';
import { API_LOCATION } from '../../utils/handle-request';
import './block.css';

const Block = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as ChallengeData[]);
  const params = useParams() as { superblock: string; block: string };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(`${API_LOCATION}/${params.superblock}/${params.block}`)
      .then(res => res.json() as Promise<ChallengeData[]>)
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
      <h1>{params.block}</h1>
      <span className='breadcrumb'>{params.superblock}</span>
      <ul className='step-grid'>
        {items.map(challenge => (
          <li key={challenge.name}>
            <Link
              to={`/${params.superblock}/${params.block}/${challenge.path}`}
            >
              {challenge.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to={`/${params.superblock}`}>Return to Blocks</Link>
      </p>
      <hr />
      <h2>Project Controls</h2>
      <p>
        Looking to add, remove, or edit steps?{' '}
        <Link to={`/${params.superblock}/${params.block}/_tools`}>
          Use the step tools.
        </Link>
      </p>
    </div>
  );
};

export default Block;
