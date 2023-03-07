import React, { Link, useParams } from 'react-router-dom';
import CreateEmptySteps from '../buttons/create-empty-steps';
import CreateNextStep from '../buttons/create-next-step';
import DeleteStep from '../buttons/delete-step';
import InsertStep from '../buttons/insert-step';
import UpdateStepTitles from '../buttons/update-step-titles';

import './tools.css';

const Tools = () => {
  const { block, superblock } = useParams() as {
    block: string;
    superblock: string;
  };
  return (
    <div>
      <h1>Editing Steps for {block}</h1>
      <p>These tools will allow you to create, delete, and reorder steps.</p>
      <h2>Create Next Step</h2>
      <p>This tool creates a new step at the end of the project.</p>
      <CreateNextStep {...{ superblock, block }} />
      <h2>Create Empty Steps</h2>
      <p>
        This tool creates <code>n</code> number of empty steps at the end of the
        project.
      </p>
      <CreateEmptySteps {...{ superblock, block }} />
      <h2>Insert Step</h2>
      <p>
        This tool inserts a new step as the <code>nth</code> step.
      </p>
      <InsertStep {...{ superblock, block }} />
      <h2>Delete Step</h2>
      <p>
        This tool deletes step <code>n</code>.
      </p>
      <DeleteStep {...{ superblock, block }} />
      <h2>Update Step Titles</h2>
      <p>
        This reorders the existing steps, updating the meta for the block. You
        should not need to use this one unless you&apos;ve manually changed the
        file order.
      </p>
      <UpdateStepTitles {...{ superblock, block }} />
      <hr />
      <Link to={`/${superblock}/${block}`}>Return to Block</Link>
    </div>
  );
};

export default Tools;
