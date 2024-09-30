import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, ControlLabel, FormControl, FormGroup } from '@freecodecamp/ui';
import { FullWidthRow } from '../../helpers';
import SectionHeader from '../../settings/section-header';
import './career-timeline.css';
import { Career } from '../../../redux/prop-types';

const EditCareerTimeline = ({
  myCareer,
  index,
  editIndex,
  setEditingIndex,
  updateMyCareer,
  setIsEditing
}: {
  myCareer: Career[];
  index: number;
  editIndex: number;
  setEditingIndex: (value: number) => void;
  setIsEditing: (value: boolean) => void;
  updateMyCareer: (value: { career: Career[] }) => void;
}) => {
  const handleSubmit = (formEvent: React.FormEvent) => {
    formEvent.preventDefault();

    const form = formEvent.target as HTMLFormElement;
    const formData = new FormData(form);

    const newCareer = myCareer.map((job, i) => {
      if (i === index) {
        return {
          title: (formData.get('function') as string) || '',
          company: (formData.get('company') as string) || '',
          location: (formData.get('location') as string) || '',
          start_date: (formData.get('start_date') as string) || '',
          end_date: (formData.get('end_date') as string) || '',
          description: (formData.get('description') as string) || ''
        };
      }

      return job;
    });

    setIsEditing(false);
    setEditingIndex(-1);

    updateMyCareer({ career: newCareer });

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
            defaultValue={job.title}
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

const CareerTimeline = ({
  career,
  updateMyCareer
}: {
  career: Career[];
  updateMyCareer: (value: { career: Career[] }) => void;
}) => {
  const [myCareer, _setMyCareer] = useState<Career[]>([...career]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  return (
    <>
      <SectionHeader>Your Experience</SectionHeader>
      <FullWidthRow>
        {myCareer.map((job: Career, index) => {
          const start = job.start_date.split(',')[0];
          const end = job.end_date.split(',')[0];

          const debug_time = new Date('December 17, 2002 03:24:00');

          const start_date = new Date(job.start_date);

          const total_time = start_date.getTime() - debug_time.getTime();
          const total_time_in_days = total_time / (1000 * 3600 * 24);
          const total_time_in_years = Math.floor(total_time_in_days / 365);

          return (
            <Fragment key={index}>
              {isEditing ? (
                <EditCareerTimeline
                  myCareer={myCareer}
                  index={index}
                  setIsEditing={setIsEditing}
                  setEditingIndex={setEditingIndex}
                  updateMyCareer={updateMyCareer}
                  editIndex={editingIndex}
                />
              ) : (
                <div className='card'>
                  <div className='header'>
                    <h3>
                      {job.title} at {job.company}
                    </h3>
                    <div className='action-container'>
                      <Button className='edit-btn'>
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
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
