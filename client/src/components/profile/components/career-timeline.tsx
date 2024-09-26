import React, { useState } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from '@freecodecamp/ui';
import { FullWidthRow } from '../../helpers';
import SectionHeader from '../../settings/section-header';

interface Career {
  function: string;
  company: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

const EditCareerTimeline = ({
  myCareer,
  setIsEditing
}: {
  myCareer: Career[];
  setIsEditing: (value: boolean) => void;
}) => {
  const handleSubmit = (formEvent: React.FormEvent) => {
    return formEvent;
  };

  return (
    <>
      {myCareer.map(career => {
        return (
          <>
            <form key={career.company} onSubmit={handleSubmit}>
              <FormGroup controlId='function'>
                <ControlLabel htmlFor='function'>Function</ControlLabel>
                <FormControl
                  placeholder='Function'
                  value={career.function}
                ></FormControl>
              </FormGroup>
              <FormGroup controlId='company'>
                <ControlLabel htmlFor='company'>Company</ControlLabel>
                <FormControl
                  placeholder='Company'
                  value={career.company}
                ></FormControl>
              </FormGroup>
              <FormGroup controlId='start_date'>
                <ControlLabel htmlFor='start_date'>Start Date</ControlLabel>
                <FormControl placeholder='Start Date'></FormControl>
              </FormGroup>
              <FormGroup controlId='end_date'>
                <ControlLabel htmlFor='end_date'>End Date</ControlLabel>
                <FormControl
                  placeholder='Description'
                  type='date'
                ></FormControl>
              </FormGroup>
              <FormGroup controlId='description'>
                <ControlLabel htmlFor='description'>Description</ControlLabel>
                <FormControl
                  placeholder='Description'
                  value={career.description}
                ></FormControl>
              </FormGroup>
              <Button block={true} type='submit'>
                Save
              </Button>
            </form>
          </>
        );
      })}
      <Button block={true} onClick={() => setIsEditing(false)}>
        Cancel
      </Button>
    </>
  );
};

const CareerTimeline = () => {
  const [myCareer, _setMyCareer] = useState<Career[]>([
    {
      function: 'Full Stack Developer',
      company: 'freeCodeCamo',
      start_date: new Date(),
      end_date: new Date(),
      description: 'I do things'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <SectionHeader>Your Career Timeline</SectionHeader>
      <FullWidthRow>
        {isEditing ? (
          <EditCareerTimeline myCareer={myCareer} setIsEditing={setIsEditing} />
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
        <hr />
      </FullWidthRow>
    </>
  );
};

export default CareerTimeline;
