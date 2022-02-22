import { useParams } from 'react-router-dom';
import CreateEmptySteps from '../buttons/CreateEmptySteps';
import CreateNextStep from '../buttons/CreateNextStep';
import CreateStepBetween from '../buttons/CreateStepBetween';
import DeleteStep from '../buttons/DeleteStep';
import ReorderSteps from '../buttons/ReorderSteps';

import './Tools.css';

const Tools = () => {
  const { block, superblock } = useParams();
  return (
    <div>
      <h1>Editing Steps for {block}</h1>
      <p>These tools will allow you to create, delete, and reorder steps.</p>
      <h2>Create Next Step</h2>
      <p>This tool creates a new step at the end of the project.</p>
      <CreateNextStep {...{ superblock, block }} />
      <h2>Create Empty Steps</h2>
      <p>
        This tool creates <code>n</code> number of empty steps at the provided
        start point.
      </p>
      <CreateEmptySteps {...{ superblock, block }} />
      <h2>Insert Step</h2>
      <p>
        This tool inserts a new step after the <code>nth</code> step.
      </p>
      <CreateStepBetween {...{ superblock, block }} />
      <h2>Delete Step</h2>
      <p>
        This tool deletes step <code>n</code>.
      </p>
      <DeleteStep {...{ superblock, block }} />
      <h2>Reorder Steps</h2>
      <p>
        This reorders the existing steps, updating the meta for the block. You
        should not need to use this one unless you've manually changed the file
        order.
      </p>
      <ReorderSteps {...{ superblock, block }} />
    </div>
  );
};

export default Tools;
