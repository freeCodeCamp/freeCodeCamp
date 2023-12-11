import {
  getFallbackFullStackDate,
  ifNoCertification404
} from '../boot/certificate';
import { fullStackChallenges } from './fixtures';

export const mockReq = opts => {
  const req = {};
  return { ...req, ...opts };
};

export const mockRes = opts => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.redirect = jest.fn().mockReturnValue(res);
  res.set = jest.fn().mockReturnValue(res);
  res.clearCookie = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  return { ...res, ...opts };
};

describe('boot/certificate', () => {
  describe('getFallbackFullStackDate', () => {
    it('should return the date of the latest completed challenge', () => {
      expect(getFallbackFullStackDate(fullStackChallenges)).toBe(1685210952511);
    });
  });

  describe('ifNoCertification404', () => {
    it('declares a 404 when there is no certSlug in the body', () => {
      const req = mockReq({
        body: {}
      });
      const res = mockRes();
      const next = jest.fn();

      ifNoCertification404(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(next).not.toHaveBeenCalled();
    });

    it('declares a 404 for an invalid certSlug in the body', () => {
      const req = mockReq({
        body: { certSlug: 'not-a-real-certSlug' }
      });
      const res = mockRes();
      const next = jest.fn();

      ifNoCertification404(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(next).not.toHaveBeenCalled();
    });

    it('calls next for a valid certSlug of a current certification', () => {
      const req = mockReq({
        body: { certSlug: 'responsive-web-design' }
      });
      const res = mockRes();
      const next = jest.fn();

      ifNoCertification404(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('calls next for a valid certSlug of a legacy certification', () => {
      const req = mockReq({
        body: { certSlug: 'legacy-front-end' }
      });
      const res = mockRes();
      const next = jest.fn();

      ifNoCertification404(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('calls next for a valid certSlug of the legacy full stack certification', () => {
      const req = mockReq({
        body: { certSlug: 'full-stack' }
      });
      const res = mockRes();
      const next = jest.fn();

      ifNoCertification404(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
