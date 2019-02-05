/* eslint-disable */
//non return of arrow function

import keyboardOperations from './keyboardOperations';

const initState = {
    timeOn: false,
    capsOnOff: false,
    shiftOnOff: false,
    currentClass: '',
    classChange: 'keyStruck',
    currentKey: null,
    testString: '',
    stringLength: 0,
    fetchText: true,
    letterCorrect: false,
    usedString: ' ',
    displayLessonsMenu: false,
    activeLesson: [],
    lessonKeys: [],
    intervalId: [],
    mistakes: [],
    mistakesLength: 0,
    mistakesTemp: 0,
    timevalue: '00:00',
    stringEnd: false,
    wpm: 0,
    finishShow: false,
    flagSelect1: 'usLayout flagHighlighted',
    flagSelect2: 'ukLayout',
    keyboardIsOn: true,
	firstKeyPress: true

}


const rootReducer = (state = initState, action) => {

    switch (action.type) {


        //handles general key presses
        case 'PRESSED':
		
            keyboardOperations.keyboardKeyPress(state, action);

            return {
                ...state
            }


        case 'RELEASED':

            keyboardOperations.keyboardKeyRelease(state, action);

            return {
                ...state
            }



            //handles initial string data set
        case 'SENDSTRING':

            keyboardOperations.randomStringReceived(state, action)

            return {
                ...state
            }


        case 'LESSONSMENU':
          
            keyboardOperations.openCloseLessonmenu(state);

            return {
                ...state
            }

        case 'STARTLESSON':

            keyboardOperations.lessonBegin(state, action);

            return {
                ...state
            }

        case 'INTERVALID':
            keyboardOperations.intervalIdReceived(state, action);

            return {
                ...state
            }

        case 'SENDTIMEVALUE':

            keyboardOperations.timeValueReceived(state, action);

            return {
                ...state
            }

        case 'SENDEND':

            keyboardOperations.endOfString(state);
            return {
                ...state
            }
        case 'SENDWPM':

            keyboardOperations.wordsPerMinute(state, action);

            return {
                ...state
            }

        case 'PANELOFF':

            keyboardOperations.turnPanelOff(state);

            return {
                ...state
            }

        case 'FLAGCLICK':
         
            keyboardOperations.changeKeyboard(state, action)

            return {
                timeOn: false,
                capsOnOff: state.capsOnOff,
                shiftOnOff: false,
                currentClass: '',
                classChange: 'keyStruck',
                currentKey: null,
                testString: '',
                stringLength: 0,
                fetchText: true,
                letterCorrect: false,
                usedString: ' ',
                displayLessonsMenu: false,
                activeLesson: [],
                lessonKeys: [],
                intervalId: [],
                mistakes: [],
                mistakesLength: 0,
                mistakesTemp: 0,
                timevalue: '00:00',
                stringEnd: false,
                wpm: 0,
                finishShow: false,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
                keyboardIsOn: state.keyboardIsOn,
				firstKeyPress: state.firstKeyPress
            }

        case 'KEYBOARDONOFF':

            keyboardOperations.switchKeyboardOnOff(state);

            return {
                ...state
            }
			
		

        default:
            break;

    }



    return state;
}

export default rootReducer;
