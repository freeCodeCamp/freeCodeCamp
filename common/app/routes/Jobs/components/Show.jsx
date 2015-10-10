import { contain } from 'thundercats-react';
import ShowJob from './ShowJob.jsx';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJob',
    map({ currentJob }) {
      return { job: currentJob };
    },
    getPayload({ params: { id }, job = {} }) {
      return {
        id,
        isPrimed: job.id === id
      };
    },
    // using es6 destructuring
    shouldContainerFetch({ job = {} }, { params: { id } }
    ) {
      return job.id !== id;
    }
  },
  ShowJob
);
