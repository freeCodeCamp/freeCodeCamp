import {
  updateMyAbout,
  updateMySocials,
  updateMyClassroomMode
} from '../boot/settings';

export const mockReq = opts => {
  const req = {};
  return { ...req, ...opts };
};

export const mockRes = opts => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.redirect = jest.fn().mockReturnValue(res);
  res.set = jest.fn().mockReturnValue(res);
  res.clearCookie = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  return { ...res, ...opts };
};

describe('boot/settings', () => {
  describe('updateMyAbout', () => {
    it('allows empty string in any field', () => {
      let updateData;
      const req = mockReq({
        user: {
          updateAttributes: (update, cb) => {
            updateData = update;
            cb();
          }
        },
        body: {
          name: '',
          location: '',
          about: '',
          picture: ''
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMyAbout(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(updateData).toStrictEqual({
        name: '',
        location: '',
        about: '',
        picture: ''
      });
    });
  });

  describe('updateMySocials', () => {
    it('does not allow non-github domain in GitHub social', () => {
      const req = mockReq({
        user: {},
        body: {
          githubProfile: 'https://www.almost-github.com'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(403);
    });

    it('does not allow non-linkedin domain in LinkedIn social', () => {
      const req = mockReq({
        user: {},
        body: {
          linkedin: 'https://www.freecodecamp.org'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(403);
    });

    it('does not allow non-twitter domain in Twitter social', () => {
      const req = mockReq({
        user: {},
        body: {
          twitter: 'https://www.freecodecamp.org'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(403);
    });

    it('allows empty string in any social', () => {
      const req = mockReq({
        user: {
          updateAttributes: (_, cb) => cb()
        },
        body: {
          twitter: '',
          linkedin: '',
          githubProfile: '',
          website: ''
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('allows any valid link in website social', () => {
      const req = mockReq({
        user: {
          updateAttributes: (_, cb) => cb()
        },
        body: {
          website: 'https://www.freecodecamp.org'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('allows valid links with sub-domains to pass', () => {
      const req = mockReq({
        user: {
          updateAttributes: (_, cb) => cb()
        },
        body: {
          githubProfile: 'https://www.gist.github.com',
          linkedin: 'https://www.linkedin.com/freecodecamp',
          twitter: 'https://www.twitter.com/freecodecamp',
          website: 'https://www.example.freecodecamp.org'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMySocials(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('updateMyClassroomMode', () => {
    it('does not allow invalid classroomMode', () => {
      const req = mockReq({
        user: {},
        body: {
          isClassroomAccount: 'invalid'
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMyClassroomMode(req, res, next);
      expect(res.status).toHaveBeenCalledWith(403);
    });

    it('allows valid classroomMode', () => {
      const req = mockReq({
        user: {
          updateAttributes: (_, cb) => cb()
        },
        body: {
          isClassroomAccount: true
        }
      });
      const res = mockRes();
      const next = jest.fn();
      updateMyClassroomMode(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
