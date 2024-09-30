import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Button, ControlLabel, FormControl, FormGroup } from '@freecodecamp/ui';
import { TFunction } from 'i18next';
import { FullWidthRow } from '../../helpers';
import SectionHeader from '../../settings/section-header';
import './career-timeline.css';
import { Career } from '../../../redux/prop-types';
import { parseDate } from './utils';

const EditCareerTimeline = ({
  myCareer,
  index,
  editIndex,
  setEditingIndex,
  updateMyCareer,
  setIsEditing,
  t
}: {
  myCareer: Career[];
  index: number;
  editIndex: number;
  setEditingIndex: (value: number) => void;
  setIsEditing: (value: boolean) => void;
  updateMyCareer: (value: { career: Career[] }) => void;
  t: TFunction;
}) => {
  const handleSubmit = (formEvent: React.FormEvent) => {
    formEvent.preventDefault();

    const form = formEvent.target as HTMLFormElement;
    const formData = new FormData(form);

    const newCareer = myCareer.map((job, i) => {
      if (i === index) {
        return {
          title: (formData.get('title') as string) || '',
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
        <FormGroup controlId='title'>
          <ControlLabel htmlFor='title'>{t('profile.job-title')}</ControlLabel>
          <FormControl
            placeholder='title'
            name='title'
            defaultValue={job.title}
            required
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='company'>
          <ControlLabel htmlFor='company'>
            {t('profile.job-company')}
          </ControlLabel>
          <FormControl
            placeholder='Company'
            name='company'
            defaultValue={job.company}
            required
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='location'>
          <ControlLabel htmlFor='location'>
            {t('profile.job-location')}
          </ControlLabel>
          <FormControl
            placeholder='Location'
            name='location'
            defaultValue={job.location}
            required
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='start_date'>
          <ControlLabel htmlFor='start_date'>
            {t('profile.job-start-date')}
          </ControlLabel>
          <FormControl
            type='date'
            name='start_date'
            defaultValue={new Date(job.start_date).toDateString()}
            required
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='end_date'>
          <ControlLabel htmlFor='end_date'>
            {t('profile.job-end-date')}
          </ControlLabel>
          <FormControl
            type='date'
            name='end_date'
            defaultValue={new Date(job.start_date).toDateString()}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='description'>
          <ControlLabel htmlFor='description'>
            {t('profile.job-description')}
          </ControlLabel>
          <FormControl
            placeholder='Description'
            name='description'
            defaultValue={job.description}
            required
          ></FormControl>
        </FormGroup>
        <Button block={true} type='submit'>
          {t('buttons.save')}
        </Button>
      </form>
      <Button block={true} onClick={() => setIsEditing(false)}>
        {t('buttons.cancel')}
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

  const { t } = useTranslation();

  return (
    <>
      <SectionHeader>{t('profile.your-exp')}</SectionHeader>
      <FullWidthRow>
        {myCareer.map((job: Career, index) => {
          const start = parseDate(
            new Date(job.start_date).toDateString(),
            t,
            'short'
          );
          let end = t('profile.present');

          const present = new Date();

          let total_time_in_years =
            present.getFullYear() - new Date(job.start_date).getFullYear();

          if (job.end_date) {
            end = parseDate(new Date(job.end_date).toDateString(), t, 'short');

            total_time_in_years =
              new Date(job.end_date).getFullYear() -
              new Date(job.start_date).getFullYear();
          }

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
                  t={t}
                />
              ) : (
                <div className='card'>
                  <div className='header'>
                    <h3>
                      {t('profile.job-at', {
                        company: job.company,
                        title: job.title
                      })}
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
                    {t('profile.start-end-years', {
                      start: start,
                      end: end,
                      years: total_time_in_years
                    })}
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
