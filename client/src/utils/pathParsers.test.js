// /* global describe it expect */

// import { isSuperBlock, isLanding } from './pathParsers';

// describe('isLanding', () => {
//   it('returns a string', () => {
//     expect(typeof isLanding('/').toBe('string'));
//   });

//   // it('returns a string with no single or multi-line comments', () => {
//   //   expect(removeJSComments(jsCodeWithSingleAndMultLineComments)).toBe(
//   //     jsCodeWithSingleAndMultLineCommentsRemoved
//   //   );
//   // });
// });

// describe('isSuperBlock', () => {
//   it('returns a string', () => {
//     expect(typeof isSuperBlock('/').toBe('string'));
//   });

//   it('returns true for espanol super block pathname', () => {
//     expect(isSuperBlock('/espanol/learn/responsive-web-design/')).toBe(true);
//   });

//   it('returns false for espanol super block pathname', () => {
//     expect(
//       isSuperBlock(
//         '/espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
//       )
//     ).toBe(true);
//   });
// });
