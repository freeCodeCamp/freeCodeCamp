import { describe, it, expect } from 'vitest';
import { validateDate } from './experience';

describe('validateDate', () => {
  it('should return error for required empty date', () => {
    const result = validateDate({
      date: '',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'validation.start-date-required'
    });
  });

  it('should return success for optional empty date', () => {
    const result = validateDate({
      date: '',
      isRequired: false,
      fieldName: 'end-date'
    });
    expect(result).toEqual({
      state: 'success',
      messageKey: ''
    });
  });

  it('should return error for invalid format', () => {
    const result = validateDate({
      date: '01/01',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'profile.experience.date-format-error'
    });
  });

  it('should return error for invalid date', () => {
    const result = validateDate({
      date: '13/2023',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'profile.experience.date-invalid'
    });
  });

  it('should return success for valid date', () => {
    const result = validateDate({
      date: '12/2023',
      isRequired: true,
      fieldName: 'start-date'
    });
    expect(result).toEqual({
      state: 'success',
      messageKey: ''
    });
  });

  it('should return error for required empty date with end-date', () => {
    const result = validateDate({
      date: '',
      isRequired: true,
      fieldName: 'end-date'
    });
    expect(result).toEqual({
      state: 'error',
      messageKey: 'validation.end-date-required'
    });
  });
});
