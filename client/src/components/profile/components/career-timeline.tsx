import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal,
  Spacer
} from '@freecodecamp/ui';
import { TFunction } from 'i18next';
import { FullWidthRow } from '../../helpers';
import SectionHeader from '../../settings/section-header';
import './career-timeline.css';
import { Career } from '../../../redux/prop-types';
import { parseDate } from './utils';

const DeleteModal = ({
  isDeleting,
  selectedIndex,
  setSelectedIndex,
  setIsDeleting,
  setMyCareer,
  updateMyCareer,
  myCareer,
  t
}: {
  isDeleting: boolean;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
  setIsDeleting: (value: boolean) => void;
  setMyCareer: (value: Career[]) => void;
  updateMyCareer: (value: { career: Career[] }) => void;
  myCareer: Career[];
  t: TFunction;
}) => {
  const handleDelete = (selectedIndex: number) => {
    const updatedCareer = myCareer.filter((_job, index) => {
      return index !== selectedIndex;
    });

    updateMyCareer({ career: updatedCareer });
    setMyCareer(updatedCareer);

    setIsDeleting(false);
    setSelectedIndex(-1);
  };

  return (
    <>
      <Modal
        onClose={() => {
          setIsDeleting(false);
          setSelectedIndex(-1);
        }}
        variant='danger'
        open={isDeleting}
      >
        <Modal.Header>{t('profile.job-delete-heading')}</Modal.Header>
        <Modal.Body>
          <p>{t('profile.job-delete')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setIsDeleting(false);
            }}
          >
            {t('buttons.cancel')}
          </Button>

          <Spacer size='s' />
          <Button
            variant='danger'
            onClick={() => {
              handleDelete(selectedIndex);
            }}
          >
            {t('buttons.delete')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const EditCareerTimeline = ({
  myCareer,
  index,
  selectedIndex,
  setSelectedIndex,
  updateMyCareer,
  setIsEditing,
  t
}: {
  myCareer: Career[];
  index: number;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
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
    setSelectedIndex(-1);

    updateMyCareer({ career: newCareer });

    return formEvent;
  };

  const job = myCareer[index];

  if (index !== selectedIndex) {
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
  const [myCareer, setMyCareer] = useState<Career[]>([...career]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [isDeleting, setIsDeleting] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <DeleteModal
        isDeleting={isDeleting}
        setSelectedIndex={setSelectedIndex}
        setIsDeleting={setIsDeleting}
        setMyCareer={setMyCareer}
        updateMyCareer={updateMyCareer}
        myCareer={myCareer}
        selectedIndex={selectedIndex}
        t={t}
      />
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
                  setSelectedIndex={setSelectedIndex}
                  updateMyCareer={updateMyCareer}
                  selectedIndex={selectedIndex}
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
                      <Button
                        className='edit-btn'
                        onClick={() => {
                          setIsDeleting(true);
                          setSelectedIndex(index);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      <Button
                        className='edit-btn'
                        onClick={() => {
                          setIsEditing(true);
                          setSelectedIndex(index);
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
