const { getApiUrlFromTrophy } = require('./ms-learn-utils');

const validApiUrl =
  'https://learn.microsoft.com/api/gamestatus/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01';
const validTrophyUrl =
  'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B';

describe('ms-learn-utils', () => {
  describe('getApiUrlFromTrophy', () => {
    it('should return null if the trophy url is empty', () => {
      expect(getApiUrlFromTrophy('')).toBeNull();
    });

    it('should return null if the protocol is wrong', () => {
      expect(getApiUrlFromTrophy('http://learn.microsoft.com')).toBeNull();
    });

    it('should return null if the domain is wrong', () => {
      expect(getApiUrlFromTrophy('https://learn.microsoft.co')).toBeNull();
    });

    it('should return null if the path is incomplete', () => {
      expect(getApiUrlFromTrophy('https://learn.microsoft.com')).toBeNull();
      expect(
        getApiUrlFromTrophy(
          'https://learn.microsoft.com/en-us/trainin/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01'
        )
      ).toBeNull();
    });

    it('should add the username as a query param', () => {
      const username = 'moT01';

      const url = new URL(getApiUrlFromTrophy(validTrophyUrl));

      expect(url.searchParams.get('username')).toBe(username);
    });

    it('should only add a single query param', () => {
      const url = new URL(getApiUrlFromTrophy(validTrophyUrl));

      // URLSearchParams.size is only supported in Node 19+
      expect([...url.searchParams.keys()].length).toBe(1);
    });

    it('should append the trophy path to the api url', () => {
      expect(getApiUrlFromTrophy(validTrophyUrl)).toBe(validApiUrl);
    });
  });
});
