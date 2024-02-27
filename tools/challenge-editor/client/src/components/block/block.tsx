import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChallengeData } from '../../../interfaces/challenge-data';
import { API_LOCATION } from '../../utils/handle-request';
import './block.css';

const stepBasedSuperblocks = [
  '07-scientific-computing-with-python',
  '14-responsive-web-design-22',
  '15-javascript-algorithms-and-data-structures-22',
  '20-upcoming-python'
];

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

  const isStepBasedSuperblock = stepBasedSuperblocks.includes(
    params.superblock
  );

  return (
    <div>
      <h1>{params.block}</h1>
      <span className='breadcrumb'>{params.superblock}</span>
      <ul className='step-grid'>
        {items.map((challenge, i) => (
          <li key={challenge.name}>
            {!isStepBasedSuperblock && <span>{`${i + 1}: `}</span>}
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
      {isStepBasedSuperblock ? (
        <p>
          Looking to add, remove, or edit steps?{' '}
          <Link to={`/${params.superblock}/${params.block}/_tools`}>
            Use the step tools.
          </Link>
        </p>
      ) : (
        <>
          <p>
            Looking to add or remove challenges? Navigate to <br />
            <code>
              freeCodeCamp/curriculum/challenges/english
              {`/${params.superblock}/${params.block}/`}
            </code>
            <br />
            in your terminal and run the following commands:
          </p>
          <ul>
            <li>
              <code>pnpm create-next-challenge</code>: Create a new challenge at
              the end of this block.
            </li>
            <li>
              <code>pnpm insert-challenge</code>: Create a new challenge in the
              middle of this block.
            </li>
            <li>
              <code>pnpm delete-challenge</code>: Delete a challenge in this
              block.
            </li>
          </ul>
          <p>
            Refresh the page after running a command to see the changes
            reflected.
          </p>
        </>
      )}
    </div>
  );
};

export default Block;
