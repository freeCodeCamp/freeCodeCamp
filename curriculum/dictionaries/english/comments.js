/* eslint-disable max-len */
// NOTE: updates to translations will not appear until the client is restarted
// i.e. close it and run npm run develop

// Only translate the text that is not surround by single backticks
const COMMENTS_TO_TRANSLATE = [
  {
    id: 'hyek8f',
    text: '24.44 in Celsius'
  },
  {
    id: 'rscjup',
    text: '26 in Celsius'
  },
  {
    id: 'am2xch',
    text: 'A list of strings representing tasks to do:'
  },
  {
    id: '6rztdg',
    text: 'Add a record here'
  },
  {
    id: 'to1vwe',
    text: 'Add handleChange() and submitMessage() methods here'
  },
  {
    id: '31b7ey',
    text: 'Add your code above this line'
  },
  {
    id: 'c24by8',
    text: 'Add your code below this line'
  },
  {
    id: 'jbrt8k',
    text: 'Adds the m-th row into newArray'
  },
  {
    id: 'zkh12d',
    text:
      'After passing the challenge experiment with myString and see how the grouping works'
  },
  {
    id: 'mobihi',
    text: 'Assign 5 to oopsGlobal Here'
  },
  {
    id: 'v3ups9',
    text: 'Call scale with an argument here'
  },
  {
    id: 'iw4a3a',
    text: 'Case 1: Target has no children'
  },
  {
    id: '463xp8',
    text: 'Case 2: Target has one child'
  },
  {
    id: 'u3inrm',
    text: 'Case 3: Target has two children'
  },
  {
    id: 'axnbgg',
    text: 'Change code above this line'
  },
  {
    id: 'i2kck7',
    text: 'Change code below this line'
  },
  {
    id: 'dlbobn',
    text: 'Change this line'
  },
  {
    id: 'v127zb',
    text:
      'Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, once for each test of this challenge. The browser console should only print the variable once because you cleared it first.'
  },
  {
    id: 'ejm0ql',
    text: 'Close third tab in video window, and join'
  },
  {
    id: 'iwch6t',
    text: 'Complete the method below and implement the others similarly'
  },
  {
    id: 'hihhyz',
    text: 'Complete the return statement:'
  },
  {
    id: 'sdxti5',
    text: 'Count the children of the target to delete'
  },
  {
    id: 'wfw6sc',
    text: 'Create an x and y scale'
  },
  {
    id: 'sjw6f4',
    text: 'Create the scale here'
  },
  {
    id: 'nupsh2',
    text: 'Creates a 2-D array with m rows and n columns of zeroes'
  },
  {
    id: 'xfjb3s',
    text: 'Declare the myGlobal variable below this line'
  },
  {
    id: 'htpjk7',
    text: 'Define a constant for decrement action types'
  },
  {
    id: 'tfzdsp',
    text: 'Define a constant for increment action types'
  },
  {
    id: 'zh20mi',
    text: 'Define ADD, addMessage(), messageReducer(), and store here:'
  },
  {
    id: '43qs4c',
    text: 'Define an action creator for decrementing'
  },
  {
    id: 'nen3qo',
    text: 'Define an action creator for incrementing'
  },
  {
    id: '0cwyam',
    text: 'Define an action creator here:'
  },
  {
    id: 'fq0wsg',
    text: 'Define an action here:'
  },
  {
    id: 'tegkqa',
    text: 'Define the Container component here:'
  },
  {
    id: 'b5oihn',
    text:
      'Define the counter reducer which will increment or decrement the state based on the action it receives'
  },
  {
    id: '91y4pd',
    text: 'Define the Redux store here, passing in your reducers'
  },
  {
    id: 'eie1vk',
    text: 'Define the root reducer here'
  },
  {
    id: '5s7nnl',
    text: 'Define the store here:'
  },
  {
    id: '34qe2q',
    text: 'Dictionary will hold the items of our set'
  },
  {
    id: '2c1wra',
    text: 'Dispatch received data action here'
  },
  {
    id: '923cpg',
    text: 'Dispatch request action here'
  },
  {
    id: 'picsyf',
    text: 'Dispatch the action here:'
  },
  {
    id: 'ysjr1s',
    text: 'Display code'
  },
  {
    id: 'kjd1am',
    text: "Don't mutate state here or the tests will fail"
  },
  {
    id: '5tx4ow',
    text: 'Entertainment sites'
  },
  {
    id: '9yu58b',
    text: 'Example inventory lists'
  },
  {
    id: 'ciddtb',
    text: 'Find the target value and its parent'
  },
  {
    id: 'ixx548',
    text: 'Fix the code below so that it evaluates to true'
  },
  {
    id: '6mbhjj',
    text: 'For example: Redux.createStore()'
  },
  {
    id: 'jshtzq',
    text: 'Function that returns a string representing a cup of black tea'
  },
  {
    id: 'cw1ghf',
    text: 'Function that returns a string representing a cup of green tea'
  },
  {
    id: 'iuccln',
    text: 'Generate a randomly filled array'
  },
  {
    id: 'bm2mop',
    text: 'Get the tabs after the tab'
  },
  {
    id: 'kchz5k',
    text: 'Get the tabs before the tab'
  },
  {
    id: 'bfd23c',
    text: `Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).`
  },
  {
    id: 'ead98i',
    text: 'Global count variable:'
  },
  {
    id: '7zf0i2',
    text: 'Join them together'
  },
  {
    id: '5j2l88',
    text: "Let's create three browser windows"
  },
  {
    id: 'e843r9',
    text: "Let's open a new tab for now"
  },
  {
    id: '5fvehh',
    text: 'myVar is not defined outside of myLocalScope'
  },
  {
    id: 'qn720a',
    text:
      'Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.'
  },
  {
    id: 'j86mef',
    text: 'Now perform the tab opening, closing, and other operations'
  },
  {
    id: 'mk7rvy',
    text: 'Now remove the console log line to pass the test'
  },
  {
    id: 'n7vm1s',
    text: 'Only change code above this line'
  },
  {
    id: 'cvh4x7',
    text: 'Only change code below this line'
  },
  {
    id: 'lvmnm7',
    text: 'Open a new tab for cat memes'
  },
  {
    id: 'avpx79',
    text: 'Open your browser console.'
  },
  {
    id: '0b5ps6',
    text: 'Padding between the SVG canvas boundary and the plot'
  },
  {
    id: 'uemoej',
    text: 'Pushes n zeroes into the current row to create the columns'
  },
  {
    id: 'lm86nf',
    text: 'Pushes the current row, which now has n zeroes in it, to the array'
  },
  {
    id: 'qscelx',
    text: 'Redux methods are available from a Redux object'
  },
  {
    id: 'atqiig',
    text: 'Render an input, button, and ul below this line'
  },
  {
    id: 'yq81wg',
    text: 'Render the Provider below this line'
  },
  {
    id: 'kxio9j',
    text:
      'responseFromServer is set to false to represent an unsuccessful response from a server'
  },
  {
    id: 'alh6pw',
    text:
      'responseFromServer is set to true to represent a successful response from a server'
  },
  {
    id: '1cfidd',
    text: 'responseFromServer represents a response from a server'
  },
  {
    id: '96tntk',
    text: 'Returns 30'
  },
  {
    id: '58a5g7',
    text: 'Run and check the console'
  },
  {
    id: '71bus9',
    text: 'Run the tests to see the difference between the two consoles.'
  },
  {
    id: '7wp46n',
    text: 'Setting in Fahrenheit scale'
  },
  {
    id: 'oefvg5',
    text: 'Setup'
  },
  {
    id: 'mnt4d3',
    text: "Should display 'carrot'"
  },
  {
    id: 'fhe9m4',
    text: 'Social sites'
  },
  {
    id: 'za434b',
    text: 'Stacked bar chart of weekly training'
  },
  {
    id: '7c1fv9',
    text: 'Stacked bar chart will go here'
  },
  {
    id: 'r44ovx',
    text: 'tabs is an array of titles of each site open within the window'
  },
  {
    id: 'cl8peb',
    text: 'test array:'
  },
  {
    id: '1xi3cv',
    text: 'The global variable'
  },
  {
    id: '3gc01a',
    text: 'The main.scss file'
  },
  {
    id: '14kfog',
    text: 'This is our intersection method'
  },
  {
    id: 'd1shtt',
    text: 'This is our union method'
  },
  {
    id: 'pqq6sy',
    text: 'This method will add an element to the set'
  },
  {
    id: 'nd2oxy',
    text:
      'This method will check for the presence of an element and return true or false'
  },
  {
    id: 'ocm81t',
    text: 'This method will remove an element from a set'
  },
  {
    id: 'or9p5p',
    text: 'This method will return all the values in the set'
  },
  {
    id: 'g1608f',
    text: 'This method will return the size of the set'
  },
  {
    id: 'bheu99',
    text: 'This will hold the set'
  },
  {
    id: 'x1djjr',
    text: 'Use console.clear() on the next line to clear the browser console.'
  },
  {
    id: '22ta95',
    text: 'Use console.log() to print the output variable.'
  },
  {
    id: 'w43c7l',
    text: 'Using s = [2, 5, 7] would be invalid'
  },
  {
    id: 'pgckoj',
    text: 'Variable assignments'
  },
  {
    id: '2xiqvv',
    text: 'Variable declarations'
  },
  {
    id: '2sx8zg',
    text: 'We keep a record of the array inside the object'
  },
  {
    id: 'xmjfd8',
    text: 'When you close a tab'
  },
  {
    id: 'es69h6',
    text: 'When you join two windows into one window'
  },
  {
    id: 'fho5t5',
    text: 'When you open a new tab at the end'
  },
  {
    id: '00kcrm',
    text: 'yields true'
  },
  {
    id: 'sxpg2a',
    text: 'Your mailbox, drive, and other work sites'
  }
];

// Do not translate any of the following text
const COMMENTS_TO_NOT_TRANSLATE = [
  {
    id: 'rms15q',
    text: 'React-Redux:'
  },
  {
    id: '78gz3i',
    text: 'React:'
  },
  {
    id: '7e3lpb',
    text: 'Redux:'
  },
  {
    id: 'b0atz9',
    text: `<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`
  },
  {
    id: 'b1x7w0',
    text: `import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);`
  }
];

exports.COMMENTS_TO_TRANSLATE = COMMENTS_TO_TRANSLATE;
exports.COMMENTS_TO_NOT_TRANSLATE = COMMENTS_TO_NOT_TRANSLATE;
