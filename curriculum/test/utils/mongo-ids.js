const Joi = require('joi');
const findIndex = require('lodash/findIndex');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.objectId();
const duplicatedProjectIds = [
  // I tried to keep these in the order of the new front end certification.

  /*** HTML ***/

  // Cat Photo App

  // Survey Form
  '587d78af367417b2b2512b03',

  /*** CSS ***/

  // Cafe Menu
  '5f33071498eb2472b87ddee4',
  '5f3313e74582ad9d063e3a38',
  '5f331e55dfab7a896e53c3a1',
  '5f3326b143638ee1a09ff1e3',
  '5f33294a6af5e9188dbdb8f3',
  '5f332a88dc25a0fd25c7687a',
  '5f332b23c2045fb843337579',
  '5f344fc1520b6719f2e35605',
  '5f344fbc22624a2976425065',
  '5f344fad8bf01691e71a30eb',
  '5f344f9c805cd193c33d829c',
  '5f3477ae9675db8bb7655b30',
  '5f3477ae34c1239cafe128be',
  '5f3477aefa51bfc29327200b',
  '5f3477ae8466a9a3d2cc953c',
  '5f3477cb2e27333b1ab2b955',
  '5f3477cbcb6ba47918c1da92',
  '5f3477cb303c5cb61b43aa9b',
  '5f34a1fd611d003edeafd681',
  '5f356ed6cf6eab5f15f5cfe6',
  '5f356ed63c7807a4f1e6d054',
  '5f356ed60a5decd94ab66986',
  '5f356ed63e0fa262326eef05',
  '5f356ed60785e1f3e9850b6e',
  '5f356ed656a336993abd9f7c',
  '5f356ed6199b0cdef1d2be8f',
  '5f356ed69db0a491745e2bb6',
  '5f35e5c44359872a137bd98f',
  '5f35e5c4321f818cdc4bed30',
  '5f3c866daec9a49519871816',
  '5f3c866d5414453fc2d7b480',
  '5f3c866d28d7ad0de6470505',
  '5f769541be494f25449b292f',
  '5f76967fad478126d6552b0d',
  '5f769702e6e33127d14aa120',
  '5f3c866de7a5b784048f94b1',
  '5f3c866dbf362f99b9a0c6d0',
  '5f3c866d0fc037f7311b4ac8',
  '5f3c866dd0d0275f01d4d847',
  '5f3cade9fa77275d9f4efe62',
  '5f3cade94c6576e7f7b7953f',
  '5f3cade9993019e26313fa8e',
  '5f7691dafd882520797cd2f0',
  '5f7692f7c5b3ce22a57788b6',
  '5f47633757ae3469f2d33d2e',
  '5f3cade99dda4e6071a85dfd',
  '5f3ef6e0e0c3feaebcf647ad',
  '5f3ef6e0819d4f23ca7285e6',
  '5f716ad029ee4053c7027a7a',
  '5f7b87422a560036fd03ccff',
  '5f7b88d37b1f98386f04edc0',
  '5f716bee5838c354c728a7c5',
  '5f3ef6e0eaa7da26e3d34d78',
  '5f3ef6e050279c7a4a7101d3',
  '5f3ef6e04559b939080db057',
  '5f3ef6e03d719d5ac4738993',
  '5f3ef6e05473f91f948724ab',
  '5f3ef6e056bdde6ae6892ba2',
  '5f3ef6e0e9629bad967cd71e',
  '5f3ef6e06d34faac0447fc44',
  '5f3ef6e087d56ed3ffdc36be',
  '5f3ef6e0f8c230bdd2349716',
  '5f3ef6e07276f782bb46b93d',
  '5f3ef6e0a81099d9a697b550',
  '5f3ef6e0b431cc215bb16f55',
  '5f3ef6e01f288a026d709587',
  '5f3f26fa39591db45e5cd7a0',
  '5f459225127805351a6ad057',
  '5f459a7ceb8b5c446656d88b',
  '5f459cf202c2a3472fae6a9f',
  '5f459fd48bdc98491ca6d1a3',
  '5f45a05977e2fa49d9119437',
  '5f45a276c093334f0f6e9df4',
  '5f45a5a7c49a8251f0bdb527',
  '5f46fc57528aa1c4b5ea7c2e',
  '5f4701b942c824109626c3d8',
  '5f46ede1ff8fec5ba656b44c',
  '5f45a66d4a2b0453301e5a26',
  '5f45b0731d39e15d54df4dfc',
  '5f45b25e7ec2405f166b9de1',
  '5f45b3c93c027860d9298dbd',
  '5f45b45d099f3e621fbbb256',
  '5f45b4c81cea7763550e40df',
  '5f45b715301bbf667badc04a',
  '5f46e270702a8456a664f0df',
  '5f46e36e745ead58487aabf2',
  '5f46e7a4750dd05b5a673920',
  '5f46e8284aae155c83015dee',
  '5f475bb508746c16c9431d42',
  '5f475e1c7f71a61d913836c6',
  '5f47fe7e31980053a8d4403b',
  // Colored Markers

  // Registration Form

  // Rothko Painting

  // Flexbox Photo Gallery

  // Nutrition Label

  // Accessibility Quiz

  // Tribute Page
  'bd7158d8c442eddfaeb5bd18',

  // Balance Sheet

  // Cat Painting

  // Responsive Piano

  // Technical Documentation Page
  '587d78b0367417b2b2512b05',

  // City Skyline

  // Magazine

  // Product Landing Page
  '587d78af367417b2b2512b04',

  // Ferris Wheel

  // Penguin
  '619665c9abd72906f3ad30f9',
  '61967e74a8e3690ab6292daa',
  '61968df2acd5550bf1616c34',
  '61a8fe15a6a31306e60d1e89',
  '61968e9243a4090cc805531c',
  '61968f8877c6720d6d61aaf5',
  '619691693bc14b0e528f5a20',
  '6196928658b6010f28c39484',
  '6197f667297bb30a552ce017',
  '619692ff79f5770fc6d8c0b4',
  '6196990f966e8f10a40094f6',
  '619699c10a0f6e11591d73c4',
  '61969aa6acef5b12200f672e',
  '61969c487ced6f12db8fef94',
  '61969d66cfcdba137d021558',
  '61969e7451455614217e901b',
  '6196adc17f77a714d51485f2',
  '6196aead7ac7bf1584b17a7f',
  '6196ce0415498d2463989e84',
  '6196cee94c6da1253809dff9',
  '6196d00a5d7292262bc02f4c',
  '6196d0cda039d026f7f78d1e',
  '6196d1ac33c68d27dcda5796',
  '6196d213d99f16287bff22ae',
  '6196d2c0f22ca0293107c048',
  '6196d32d1340d829f0f6f57d',
  '6196d41d40bf9b2aaea5d520',
  '6197cff995d03905b0cca8ad',
  '6197f40a16afea068c7e60c8',
  '61993b72e874e709b8dfd666',
  '61993cf26a8e0f0a553db223',
  '61993dbb35adf30b10d49e38',
  '61993e9adc9e9a0bb4d28fff',
  '6199409834ccaf0d10736596',
  '6199429802b7c10dc79ff871',
  '619943285a41720e6370d985',
  '619943876b706d0f35c01dbc',
  '6199442866286d0ff421a4fc',
  '619bcf239fc15905ecd66fce',
  '619be73b3c806006ccc00bb0',
  '619be7af7b0bf60770f5d2a4',
  '619be80062551a080e32c821',
  '619be8ce4ea49008c5bfbc30',
  '619be946958c6009844f1dee',
  '619c155df0063a0a3fec0e32',
  '619c16debd0c270b01c5ce38',
  '619cfdf2e63ddf05feab86ad',
  '619d019488f98c06acbbb71a',
  '619d022dc8400c0763829a17',
  '619d02c7bc95bf0827a5d296',
  '619d033915012509031f309a',
  '619d03dadadb6509a16f4f5f',
  '619d0503e03a790a4179d463',
  '619d05c54dabca0b10058235',
  '619d0882f54bf40bdc4671ed',
  '619d090cd8d6db0c93dc5087',
  '619d0b51ca42ed0d74582186',
  '619d0bc9cb05360e1bf549c3',
  '619d0c1594c38c0ebae75878',
  '619d0d18ca99870f884a7bff',
  '619d0daf214542102739b0da',
  '619d0e56f9ca9710fcb974e3',
  '619d0eec0ac40611b41e2ccc',
  '619d0fc9825c271253df28d4',
  '619d102d786c3d13124c37c6',
  '619d107edf7ddf13cc77106a',
  '619d10cc98145f14820399c5',
  '619d115e2adcd71538e82ebb',
  '619d11e6d5ef9515d2a16033',
  '619d129a417d0716a94de913',
  '619d1340361095175f4b5115',
  '619d15797b580c1828b05426',
  '619d15d955d9d418c4487bbc',
  '619d1629a8adc61960ca8b40',
  '619d1c5fc9f8941a400955da',
  '619d1dab9ff3421ae1976991',
  '619d1deb8b04811b8839ffe4',
  '619d1e7a8e81a61c5a819dc4',
  '619d1ed33c9a071cf657a0d6',
  '619d1fb5d244c31db8a7fdb7',
  '619d204bd73ae51e743b8e94',
  '619d20b12996101f430920fb',
  '619d21fe6a3f9b2016be9d9d',
  '619d229b0e542520cd91c685',
  '619d23089e787e216a7043d6',
  '619d237a107c10221ed743fa',
  '619d26b12e651022d80cd017',
  '619d2712853306238f41828e',
  '619d2b7a84e78b246f2d17a2',
  '619d2bd9c1d43c2526e96f1f',
  '619d2d4e80400325ff89664a',
  '619d2ebc81ba81271460850d',
  '619d2f0e9440bc27caee1cec',
  '619d2fd3ff4f772882e3d998',
  '619d30350883802921bfcccc',
  '619d324f5915c929f36ae91d',
  '619d32c7fa21f32aaa91d499',
  '619d333b738e3c2b5d58b095',
  '619d337765b9f02c10e93722',
  '619d33c51140292cc5a21742',
  '619d3482f505452d861d0f62',
  '619d3561a951bf2e41a24f10',
  '619d36103839c82efa95dd34',
  '619d3711d04d623000013e9e',
  // Personal Portfolio
  'bd7158d8c242eddfaeb5bd13',

  /*** JavaScript ***/

  // Rock, Paper, Scissors Game

  // Palindrome Checker
  '657bdc55a322aae1eac3838f',

  // Date Formatter

  // Decimal to Binary Converter

  // Number Sorter Project

  // Quick Sort Algorithm
  '587d825a367417b2b2512c89',

  // Roman Numeral Converter
  '657bdc8ba322aae1eac38390',

  // Dice Game Project

  // Telephone Number Validator
  '657bdcb9a322aae1eac38391',

  // Cash Register
  'aa2e6f85cab2ab736c9a9b24',

  // Shopping Cart

  // Stacks
  '587d8250367417b2b2512c5f',

  // Depth-first Search
  '587d825d367417b2b2512c96',

  // Nth Fibonacci Number

  // FCC Authors Page

  // Weather App

  // Forum Leaderboard

  // Pokemon Search
  '6555c1d3e11a1574434cf8b5',

  /*** Front End Libraries ***/

  // 25+5 Clock
  'bd7158d8c442eddfaeb5bd0f',

  /*** Relational Database ***/

  // Build a Boilerplate
  '5ea8adfab628f68d805bfc5e',

  // Mario Database
  '5f2c289f164c29556da632fd',

  // Celestial Bodies Database
  '5f1a4ef5d5d6b5ab580fc6ae',

  // Build Five Programs
  '5f5904ac738bc2fa9efecf5a',

  // Student Database: Part 1
  '602da0c222201c65d2a019f5',

  // Student Database: Part 2
  '618590adb0730ca724e37672',

  // World Cup Database
  '5f9771307d4d22b9d2b75a94',

  // Kitty Ipsum Translator
  '602da0de22201c65d2a019f6',

  // Bike Rental Shop
  '5f5b969a05380d2179fe6e18',

  // Salon Appointment Scheduler
  '5f87ac112ae598023a42df1a',

  // Nano Castle
  '5f32db63eb37f7e17323f459',

  // Git SQL Reference Object
  '5fa323cdaf6a73463d590659',

  // Periodic Table Database
  '602d9ff222201c65d2a019f2',

  // Number Guessing Game
  '602da04c22201c65d2a019f4',

  /*** Back End JavaScript ***/

  // Managing Packages with NPM
  '587d7fb3367417b2b2512bfb',
  '587d7fb3367417b2b2512bfc',
  '587d7fb4367417b2b2512bfd',
  '587d7fb4367417b2b2512bfe',
  '587d7fb4367417b2b2512bff',
  '587d7fb4367417b2b2512c00',
  '587d7fb5367417b2b2512c01',
  '587d7fb5367417b2b2512c02',
  '587d7fb5367417b2b2512c03',
  '587d7fb5367417b2b2512c04',

  // Basic Node and Express
  '5a8b073d06fa14fcfde687aa',
  '587d7fb0367417b2b2512bed',
  '587d7fb0367417b2b2512bee',
  '587d7fb0367417b2b2512bef',
  '587d7fb0367417b2b2512bf0',
  '587d7fb1367417b2b2512bf1',
  '587d7fb1367417b2b2512bf2',
  '587d7fb1367417b2b2512bf3',
  '587d7fb1367417b2b2512bf4',
  '587d7fb2367417b2b2512bf5',
  '587d7fb2367417b2b2512bf6',
  '587d7fb2367417b2b2512bf7',
  '587d7fb2367417b2b2512bf8',

  // Timestamp Microservice
  'bd7158d8c443edefaeb5bdef',

  // Request Header Parser Microservice
  'bd7158d8c443edefaeb5bdff',

  // URL Shortener Microservice
  'bd7158d8c443edefaeb5bd0e',

  // Exercise Tracker
  '5a8b073d06fa14fcfde687aa',

  // File Metadata Microservice
  'bd7158d8c443edefaeb5bd0f',

  /*** Legacy Only ***/

  // Caesars Cipher
  '56533eb9ac21ba0edf2244e2'
];

class MongoIds {
  constructor() {
    this.knownIds = [];
  }
  check(id, title) {
    try {
      schema.validate(id);
    } catch {
      return `Expected a valid ObjectId for ${title}, but got ${id}`;
    }

    const idIndex = findIndex(this.knownIds, existing => id === existing);
    if (idIndex !== -1 && !duplicatedProjectIds.includes(id)) {
      return `The id for challenge ${title} appears more than once. With the exception of duplicatedProjectIds this should not happen.`;
    }
    this.knownIds = [...this.knownIds, id];
    return null;
  }
}

module.exports = MongoIds;
