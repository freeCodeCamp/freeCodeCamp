import { isMicrosoftLearnLink } from './form-validators';

const baseUrl =
  'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy';
describe('form-validators', () => {
  describe('isMicrosoftLearnLink', () => {
    it('should reject links to domains other than learn.microsoft.com', () => {
      {
        expect(isMicrosoftLearnLink('https://lean.microsoft.com')).toBe(false);
        expect(isMicrosoftLearnLink('https://learn.microsft.com')).toBe(false);
      }
    });

    it('should reject links without a sharingId', () => {
      expect(isMicrosoftLearnLink(`${baseUrl}?username=moT01`)).toBe(false);

      expect(isMicrosoftLearnLink(`${baseUrl}?username=moT01&sharingId=`)).toBe(
        false
      );
    });

    it('should reject links without a username', () => {
      expect(isMicrosoftLearnLink(`${baseUrl}?sharingId=Whatever`)).toBe(false);
      expect(isMicrosoftLearnLink(`${baseUrl}?sharingId=123&username=`)).toBe(
        false
      );
    });

    it('should reject links without the /training/achievements/ subpath', () => {
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
    });

    it('should reject links with the wrong trophy subpath', () => {
      // missing .trophy
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
      // no number
      expect(
        isMicrosoftLearnLink(
          'https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-a.trophy?username=moT01&sharingId=E2EF453C1F9208B8'
        )
      ).toBe(false);
    });

    it.each(['en-us', 'fr-fr', 'lang-country'])(
      'should accept links with the %s locale',
      locale => {
        expect(
          isMicrosoftLearnLink(
            `https://learn.microsoft.com/${locale}/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8`
          )
        ).toBe(true);
      }
    );
  });
});
