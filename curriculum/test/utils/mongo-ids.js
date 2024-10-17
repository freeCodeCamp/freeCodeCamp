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
  '61fd5a93fd62bb35968adeab',
  '61fd6343fb42013d99bcd7f3',
  '61fd66c687e610436494c6f1',
  '61fd67a656743144844941cb',
  '61fd6ab779390f49148773bb',
  '61fd6b7c83dbf54a08cf0498',
  '61fd6cc9475a784b7776233e',
  '61fd70336ebb3e4f62ee81ba',
  '61fd719788899952e67692b9',
  '61fd71d596e8f253b9408b39',
  '61fd75ea7f663457612dba02',
  '61fd7648a7ba2e5882436831',
  '61fd778081276b59d59abad6',
  '61fd77f7ad2aeb5ae34d07d6',
  '61fd78621573aa5e8b512f5e',
  '61fd7a160ed17960e971f28b',
  '61fd7b3fcaa5406257abc5d1',
  '61fd8e491324ce717da97ffe',
  '61fd8fd08af43372f02952d0',
  '61fd9126aa72a474301fc49f',
  '61fd933ba685de776a94997e',
  '61fd94056e0355785fbba4d3',
  '61fd986ddbcbd47ba8fbc5ec',
  '61fd990577d8227dd93fbeeb',
  '61fd9a4ff2fc4481b9157bd7',
  '61fd9ad665a4a282c8106be3',
  '61fd9b7285bde783ad5b8aac',
  '61fd9d9fbdfe078800317055',
  '61fda307bde0b091cf7d884a',
  '61fda339eadcfd92a6812bed',
  '61fdac1e31692f9a9ad97295',
  '61fdaea3999cb19d76ce717b',
  '61fdaf9ff894b6a084ecdc1b',
  '61fdafe6f07fd7a1c6785bc2',
  '61fdb04d9939f0a26ca51c2b',
  '620159cd5431aa34bc6a4c9c',
  '62015a5da1c95c358f079ebb',
  '62015cd2654a1139321a89d2',
  '62015d8942384c3aed48329e',
  '620167374bb8b4455cd11125',
  '620174ed519dd7506c1a4b61',
  '620175b3710a0951cfa86edf',
  '64076bbeba941114b0027b6a',
  '6201782cc420715562f36271',
  '620179bc0a6a2358c72b90ad',
  '62017b6f47454059bf2d3bd1',
  '62017f47c87be96457c49f46',
  '62017fa5bbef406580ceb44f',
  '62018243f046a368fab8ffb6',
  '6201830cb0c74b69f1b41635',
  '620186f4b6b8356d2def576b',
  '62018ba1aa263770c953be66',
  '62018c3e94434a71af1d5eaa',
  '62018ec29b3ae674f40bef31',
  '62019093fe30e278e797d2f6',
  '620191707bc65579ddd3ce15',
  '620192a767533a7ad19d96d7',
  '6201995d9ab88e80f1989dce',
  '620199c7a7a32c81d4db3410',
  '6201a1a7af32c287bd6b8183',
  '6201a1cc668a34888f5b2f52',
  '6201a20d742f5c89736c8cfb',
  '6201a42e39bf3b95b6a33bf3',
  '6201a4adcc6414968b391592',
  '6201a5258af7b398b030bfaf',
  '6201a59be346d399c21d10b1',
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
