import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Button, ControlLabel, FormControl, FormGroup } from '@freecodecamp/ui';
import { FullWidthRow } from '../../helpers';
import SectionHeader from '../../settings/section-header';
import './career-timeline.css';

interface Job {
  function: string;
  company: string;
  location: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

const EditCareerTimeline = ({
  myCareer,
  index,
  editIndex,
  setEditingIndex,
  setIsEditing
}: {
  myCareer: Job[];
  index: number;
  editIndex: number;
  setEditingIndex: (value: number) => void;
  setIsEditing: (value: boolean) => void;
}) => {
  const handleSubmit = (formEvent: React.FormEvent) => {
    formEvent.preventDefault();

    const form = formEvent.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    setIsEditing(false);
    setEditingIndex(-1);

    return formEvent;
  };

  const job = myCareer[index];

  if (index !== editIndex) {
    return <></>;
  }

  return (
    <>
      <form key={job.company} onSubmit={handleSubmit}>
        <FormGroup controlId='function'>
          <ControlLabel htmlFor='function'>Function</ControlLabel>
          <FormControl
            placeholder='Function'
            name='function'
            defaultValue={job.function}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='company'>
          <ControlLabel htmlFor='company'>Company</ControlLabel>
          <FormControl
            placeholder='Company'
            name='company'
            defaultValue={job.company}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='location'>
          <ControlLabel htmlFor='location'>Location</ControlLabel>
          <FormControl
            placeholder='Location'
            name='location'
            defaultValue={job.location}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='start_date'>
          <ControlLabel htmlFor='start_date'>Start Date</ControlLabel>
          <FormControl
            type='date'
            name='start_date'
            defaultValue={job.start_date.toLocaleString()}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='end_date'>
          <ControlLabel htmlFor='end_date'>End Date</ControlLabel>
          <FormControl
            type='date'
            name='end_date'
            defaultValue={job.end_date.toLocaleString()}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='description'>
          <ControlLabel htmlFor='description'>Description</ControlLabel>
          <FormControl
            placeholder='Description'
            name='description'
            defaultValue={job.description}
          ></FormControl>
        </FormGroup>
        <Button block={true} type='submit'>
          Save
        </Button>
      </form>
      <Button block={true} onClick={() => setIsEditing(false)}>
        Cancel
      </Button>
    </>
  );
};

const CareerTimeline = () => {
  const [myCareer, _setMyCareer] = useState<Job[]>([
    {
      function: 'Full Stack Developer',
      company: 'freeCodeCamp',
      location: 'San Francisco, CA',
      start_date: new Date(),
      end_date: new Date(),
      description:
        'freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.'
    },
    {
      function: 'Full Stack Developer',
      company: 'Microsoft',
      location: 'Redmond, WA',
      start_date: new Date(),
      end_date: new Date(),
      description:
        'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.'
    },
    {
      function: 'Full Stack Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      start_date: new Date(),
      end_date: new Date(),
      description:
        'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  return (
    <>
      <SectionHeader>Your Experience</SectionHeader>
      <FullWidthRow>
        {myCareer.map((job: Job, index) => {
          const start = job.start_date.toLocaleString().split(',')[0];
          const end = job.end_date.toLocaleString().split(',')[0];

          const debug_time = new Date('December 17, 2002 03:24:00');

          const total_time = job.start_date.getTime() - debug_time.getTime();
          const total_time_in_days = total_time / (1000 * 3600 * 24);
          const total_time_in_years = Math.floor(total_time_in_days / 365);
          console.log(0 / 365);
          return (
            <Fragment key={index}>
              {isEditing ? (
                <EditCareerTimeline
                  myCareer={myCareer}
                  index={index}
                  setIsEditing={setIsEditing}
                  setEditingIndex={setEditingIndex}
                  editIndex={editingIndex}
                />
              ) : (
                <div className='card'>
                  <div className='header'>
                    <h3>
                      {job.function} at {job.company}
                    </h3>
                    <Button
                      className='edit-btn'
                      onClick={() => {
                        setIsEditing(true);
                        setEditingIndex(index);
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </Button>
                  </div>
                  <p className='date'>
                    {start} - {end} - {total_time_in_years} years
                  </p>
                  <p>{job.location}</p>
                  <p>{job.description}</p>
                </div>
              )}
            </Fragment>
          );
        })}
        <hr />
      </FullWidthRow>
    </>
  );
};

export default CareerTimeline;
