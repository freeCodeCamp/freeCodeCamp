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
  '616968c2c94c8071b349c146',
  '61696ef7ac756c829f9e4048',
  '616971b3cd990186b66c99a1',
  '616d3a67ccf800ad94ec89ae',
  '616d47bc9eedc4bc7f621bec',
  '616d4a84b756d9c4b8255093',
  '616d50b93ba424d6282c99cf',
  '616d525007b8c5d8b3308b1c',
  '616d55bd160a95e22453a081',
  '616d595270d902f0e7086e18',
  '61764c602bee6974e7790f35',
  '61764f23ea21477b76f3b80f',
  '61764f7e5240eb7ccc7f6a0a',
  '61764fdda535587e1fefb3aa',
  '6176519636a76b810ab1219a',
  '617b65579ce424bf5f02ca73',
  '617b8b38f32bf2080a140675',
  '617b8e0d93a8d10d9a90e720',
  '617b92b9de349513466f6156',
  '617b954d9f4f6217a749380e',
  '617b97abd9f3f61d1590b815',
  '617b9ad735109e217284e095',
  '617bb5624a75e86463b7e638',
  '617bb77353188166af43f3ac',
  '617bb9fdef27bc6aa0470ac2',
  '617bbb6b97a83f6d1f7d6e38',
  '617bc3386dc7d07d6469bf20',
  '617bc4824e233180553a8069',
  '617bd6ec666b1da2587e4e37',
  '618a00ed1ca871a2b3aca0cb',
  '618a0927005553b74bfa05ae',
  '618a0b2befb143baefab632b',
  '618a1275e873dcc803c2d1aa',
  '618a132676346ac9f7fd59dd',
  '618a16873520a8d088ffdf44',
  '618a16d21bd3dad1bb3aa8ef',
  '619b72a0db211f1c29afb906',
  '619b7396e57b771f903be90d',
  '619b7424f43ec9215e538afe',
  '619b74fa777a2b2473c94f82',
  '619b761916dac02643940022',
  '619b7c3c83de403126b69c1e',
  '619b7fd56aa2253778bcf5f7',
  '61a489b8579e87364b2d2cdb',
  '61a493ead935c148d2b76312',
  '61b095989e7fc020b43b1bb9',
  '61b095a79e7fc020b43b1bba',
  '61a498399534644f59cff05e',
  '61a49d15bdbb5e57cc6fd280',
  '61a4a53c4459446dc134a1c6',
  '61a4a6e908bc34725b4c25ac',
  '61a4a7877da33a73a1c1723e',
  '61a4ac092eb21e7dbfe61c33',
  '61a4acbb5587197f68544d00',
  '61a4ada3aabeec822b2975d9',
  '61a4ae5f29eb5584187201c3',
  '61b095c79e7fc020b43b1bbb',
  '61a5be9833e7dc178de2af10',
  '61a5bfe091060f1d6a629dd0',
  '61a5c906ab73313316e342f0',
  '61a5ca57f50ded36d33eef96',
  '61a5d594b887335228ee6533',
  '61a5d6701ee08953ca375243',
  '61a5d79c858bef560e26c685',
  '61a5d7ef1cfcf45764df07a2',
  '61adc60b69cd4b87739d2174',
  '61b092eb9e7fc020b43b1bb2',
  '61b093179e7fc020b43b1bb3',
  '61b093219e7fc020b43b1bb4',
  '61b093329e7fc020b43b1bb5',
  '61b093429e7fc020b43b1bb6',
  '61b0934c9e7fc020b43b1bb7',
  '61b0936d9e7fc020b43b1bb8',
  '61adc91467b5d59328b9f781',
  '61add79e739a5faee9d96080',
  '61add929e41980b1edbdba7e',
  '61addaf7e83988b59a7d18ff',
  '61ade49b2dad60c076cbd32d',
  '61b09f739aa6572d2064f9b8',
  '61b0a1b2af494934b7ec1a72',
  '61b0a44a6b865738ba49b9fb',
  '61b306305810f1c9040ce5a2',
  '61b30995968123ceb6b76167',
  '61b30a286c228bd0c493c09a',
  '61b31287fb580ae75a486047',
  '61b315e76a63b3ecbbb11b75',
  '61b3183655ec10efd8c0bb07',
  '61b31a451057fff645ec09be',
  '61b31cd7b0c76bfc076b4719',

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
