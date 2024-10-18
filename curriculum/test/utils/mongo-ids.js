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
  '614385513d91ae5c251c2052',
  '6143862a5e54455d262c212e',
  '6143869bb45bd85e3b1926aa',
  '6165d3b702a5d92ad970b30c',
  '614e0e588f0e8a772a8a81a6',
  '614387cbefeeba5f3654a291',
  '6169cd8a558aa8434e0ad7f6',
  '614389f601bb4f611db98563',
  '61438b5b66d76a6264430f2a',
  '61438ec09438696391076d6a',
  '61439dc084fa5f659cf75d7c',
  '61439dfc811e12666b04be6f',
  '61439e33e4fb7967609e0c83',
  '6143a1a228f7d068ab16a130',
  '6143a73279ce6369de4b9bcc',
  '6143a778bffc206ac6b1dbe3',
  '6143a83fcc32c26bcfae3efa',
  '6143b97c06c3306d23d5da47',
  '6143b9e1f5035c6e5f2a8231',
  '6143bb50e8e48c6f5ef9d8d5',
  '6143c2a363865c715f1a3f72',
  '6143cd08fe927072ca3a371d',
  '6143cdf48b634a747de42104',
  '6143d003ad9e9d76766293ec',
  '6143d2842b497779bad947de',
  '6144d66a5358db0c80628757',
  '6144d7dbdd3e580da730ff45',
  '6144de308591ec10e27d5383',
  '6144e1ba93e435127a7f516d',
  '6144ee46a9d6e614c598cc05',
  '6144ee790af79815ad15a832',
  '6144f1410990ea17187a722b',
  '6144f3818bfbc51844152e36',
  '6144f42204c8c8195f1f3345',
  '6144f47b7c631e1a6f304dd5',
  '6148b07081759c2c691166a9',
  '6148b0d764e4192e5712ed92',
  '6148b185ef37522f688316b0',
  '6148b30464daf630848c21d4',
  '6148b4b150434734143db6f2',
  '6148b5623efa8f369f2c3643',
  '614e0e503b110f76d3ac2ff6',
  '6148b59ef318e03875f35c4a',
  '6148bd62bbb8c83a5f1fc1b3',
  '6148be3d605d6b3ca9425d11',
  '6148be82ca63c63daa8cca49',
  '6148bf49fcc7913f05dbf9b7',
  '6148bfc43df3bc40fe0e6405',
  '6148c004ffc8434252940dc3',
  '6148c224ecb157439bc5247c',
  '6148c434bd731d45617a76c6',
  '6148c5036ddad94692a66230',
  '6148c58bace368497fb11bcf',
  '6148c6aa9981d74af202125e',
  '6148c721e74ecd4c619ae51c',
  '6148ceaf5d897d4d8b3554b3',
  '6148cf094b3f2b4e8a032c63',
  '6148d0b863d10d50544ace0e',
  '6148d1bdf39c5b5186f5974b',
  '6148d1f9eb63c252e1f8acc4',
  '6148d2444d01ab541e64a1e4',
  '6148d33e31fccf558696c745',
  '6148d3fff5186b57123d97e2',
  '6148d4d57b965358c9fa38bf',
  '6148d7720f0db36775db868a',
  '6148d94fdf6a5d6899f8ff15',
  '6148d9825b50a3698aeee644',
  '6148e162e255676ae0da6a76',
  '6148e19c3e26436be0155690',
  '6148e246146b646cf4255f0c',
  '6148e2dcdd60306dd77d41cc',
  '6148e4d6861a486f60681f36',
  '6148e5a204d99e70343a63e4',
  '6148e62a6f768f71c4f04828',
  '6148e789329dc9736ce59b85',
  '6148f34ebedc2274bceeb99c',
  '6148f600cde42b7670c2611f',
  '6148f693e0728f77c87f3020',
  '6148f6f7d8914c78e93136ca',
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
