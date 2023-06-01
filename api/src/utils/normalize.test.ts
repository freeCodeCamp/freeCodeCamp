import { normalizeTwitter, normalizeProfileUI } from './normalize';

describe('normalize', () => {
  describe('normalizeTwitter', () => {
    it('returns the input if it is a url', () => {
      const url = 'https://twitter.com/a_generic_user';
      expect(normalizeTwitter(url)).toEqual(url);
    });
    it('adds the handle to twitter.com if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeTwitter(handle)).toEqual(
        'https://twitter.com/a_generic_user'
      );
    });
    it('returns undefined  if that is the input', () => {
      expect(normalizeTwitter('')).toBeUndefined();
    });
  });

  const profileUIInput = {
    isLocked: true,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showTimeLine: true
  };

  const defaultProfileUI = {
    isLocked: true,
    showAbout: false,
    showCerts: false,
    showDonation: false,
    showHeatMap: false,
    showLocation: false,
    showName: false,
    showPoints: false,
    showPortfolio: false,
    showTimeLine: false
  };

  describe('normalizeProfileUI', () => {
    it('should return the input if it is not null', () => {
      expect(normalizeProfileUI(profileUIInput)).toEqual(profileUIInput);
    });

    it('should return the default profileUI if the input is null', () => {
      const input = null;
      expect(normalizeProfileUI(input)).toEqual(defaultProfileUI);
    });

    it('should convert all "null" values to "undefined"', () => {
      const input = {
        isLocked: null,
        showAbout: false,
        showCerts: null,
        showDonation: null,
        showHeatMap: null,
        showLocation: null,
        showName: null,
        showPoints: null,
        showPortfolio: null,
        showTimeLine: null
      };
      expect(normalizeProfileUI(input)).toEqual({
        isLocked: undefined,
        showAbout: false,
        showCerts: undefined,
        showDonation: undefined,
        showHeatMap: undefined,
        showLocation: undefined,
        showName: undefined,
        showPoints: undefined,
        showPortfolio: undefined,
        showTimeLine: undefined
      });
    });
  });
});
