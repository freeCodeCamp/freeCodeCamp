---
title: React Redux Basic Setup
localeTitle: رد فعل Redux الإعداد الأساسي
---## رد فعل Redux الإعداد الأساسي

في هذا الدليل ، سيعرض على القارئ كيفية إعداد تطبيق React و Redux بسيط.

وهو يعتمد على مبدأ إنشاء تطبيق [Node.js](https://nodejs.org/) بالفعل وتشغيله مع [Express](https://expressjs.com/) و [Webpack](https://webpack.github.io/) .

## التركيب

بافتراض أن كل شيء يتم إعداده ويعمل بشكل صحيح هناك بعض الحزم التي تحتاج إلى إضافة لكي يعمل Redux مع React.

افتح محطة طرفية داخل مجلد المشروع الذي تم إنشاؤه وقم بإصدار الأمر التالي

 `npm install --save react react react-dom react-redux react-router redux 
` 

ما يفعله الأمر أعلاه هو تثبيت الحزم محليًا وإضافة مرجع إلى ملف package.json تحت تبعيات.

أضف أيضًا إلى المتصفح الذي اخترته الأداة التالية [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) .

سيسمح هذا للمطور برؤية حالة التطبيق والتغييرات والإجراءات التي يتم تشغيلها أيضًا.

## هيكل المجلد

مع تثبيت جميع الاعتمادات ، ينصح بشدة بإنشاء بنية مجلدات داخل التطبيق الخاص بك تشبه إلى آخر رفع مستوى للتنظيم ورمز أفضل.

 `project_root 
 │   index.js 
 | 
 └───client 
 |   App.jsx 
 |   NotFound.jsx 
 | 
 └───common 
    │ 
    └───actions 
    |   │  appActions.js 
    | 
    └───constants 
    |   │  Actiontypes.js 
    | 
    └───reducers 
    |   │   appReducer.js 
    └───store 
        │   store.js 
` 

## وصف مكونات التطبيق وكيف يتفاعلون مع أنفسهم ومع redux

## تطبيق نقطة دخول التطبيق

*   /project\_root/index.js
    *   هل نقطة الإدخال الخاصة بالتطبيق ستحتوي على نقطة الإدخال لأي متجر ، وستعرض ملف App.jsx.

خوار هو مثال على الرمز الذي سيتم الإعلان عنه في الملف

 `import React from 'react'; 
 import {render} from 'react-dom'; 
 import {Router,Route,browserHistory} from 'react-router'; 
 import {Provider} from "react-redux"; 
 import store from "../common/store/store"; 
 import App from '../client/App'; 
 import NotFound from '../client/notFound'; 
 
 render( 
    <Provider store={store}> 
        <Router history={browserHistory}> 
            <Route path="/" component={App} /> 
            <Route path="*" component={NotFound}/> 
        </Router> 
    </Provider>, 
    document.getElementById('root') 
 ); 
` 

في هذا المثال ، تتم إضافة واردات ردود الفعل المعتادة إلى الملف ، ولكن أيضًا بعض الإضافات الجديدة ، مثل جهاز التوجيه ، والمسار ، والمتصفح.

هذه هي المسؤولة عن التعامل مع الطرق إذا كانت هناك حاجة إلى التطبيق.

وأيضا حيث يتم إضافة مخزن التطبيقات ويسمح للعمل في التطبيق.

## تطبيق مكون التطبيق

الملف التالي:

*   /client/App.jsx
*   هذا الملف هو ملف التطبيق الأساسي ، وحيثما يتفاعل كل من التفاعل والارتداد بين بعضهما البعض.

 ``import React, { Component } from 'react'; 
 import {connect} from 'react-redux'; 
 import PropTypes from 'prop-types'; 
 import {ActionA,ActionB,ActionC} from '../common/actions/appActions'; 
 class App extends Component{ 
 
    // example of triggering the action inside a component 
    foo=()=>{ 
        this.props.doStringMessage(`Hello World`); 
    } 
    //default render function of the component 
    render(){ 
        return( 
            // the base component 
        ); 
    } 
 } 
 /** 
 * es6 fat arrow function to get information from the application state 
 * @param {*} state current state of the application 
 */ 
 const mapStateToProps=state=>{ 
    return { 
        ArrayValue:state.example.exapleArray, 
        StringMessage:state.example.exampleString, 
        bookApploggedIn:state.example.exampleBool, 
        ObjectValue:state.example.exampleObject 
    }; 
 }; 
 /** 
 * es6 fat arrow function to connect the actions declared in the action file to the the component as if they were common react props 
 * @param {*} dispatch function send to action file to be later processed in the reducer 
 */ 
 const mapDispatchToProps=dispatch=>{ 
    return { 
        doStringMessage:(value)=>{ 
            dispatch(ActionA(value)); 
        }, 
        getArrayItems:()=>{ 
            dispatch(ActionB()); 
        }, 
        doBooleanChange:(value)=>{ 
            dispatch(ActionC(value)); 
        } 
    }; 
 }; 
 /** 
 * this function connects the application component to be possible to interact with the store 
 * @param {*} mapStateToProps allows the retrieval of information from the state of the application 
 * @param {*} mapDispatchToProps allows the state to change via the actions defined inside 
 */ 
 export default connect(mapStateToProps,mapDispatchToProps)(App); 
`` 

يوضح المثال أعلاه كيفية إعداد مكون التطبيق الأساسي وكيفية تفاعله مع بنية redux.

أيضا كيفية إرسال عمل محدد من المكون الذي سيتم تمريرها إلى المخزن وإجراء التغييرات على مخفض التطبيق.

## إعلان إجراءات التطبيق

الملف التالي:

*   /common/actions/appActions.js
    
*   هذا الملف هو المكان الذي ستتفاعل فيه كل من الإجراءات المحددة مع حالة التطبيق والمخفض.
    
*   وكذلك يجب أن يتم إجراء أي استدعاء واجهة مستخدم خارجي يحتاجه التطبيق هنا ثم تمريره إلى المخفض عبر استدعاء الإجراء.
    
    \`\` \`جافا سكريبت استيراد { APP _ACTION_ A ، APP _ACTION_ B ، APP _ACTION_ C } من "../constants/Action أنواع" ؛ / \*\*
    
*   es6 ثابت ل comunicate مع المخفض لأداء عمل معين
    
*   param {Object} يقوم بتقييم كائن أو أي نوع آخر ليتم تعيينه في المخفض **/ const const التصدير doActionA = value => ({ النوع: APP _ACTION_ A ، القيمة })؛ /**
    
*   es6 ثابت ل comunicate مع المخفض لأداء عمل معين
    
*   param {الكائن} كائن أو أي نوع آخر ليتم تعيينه في المخفض **/ const const التصدير doActionB = value => ({ النوع: APP _ACTION_ B ، القيمة })؛ /**
    
*   es6 ثابت ل comunicate مع المخفض لأداء عمل معين
    
*   param {الكائن} كائن أو أي نوع آخر ليتم تعيينه في المخفض **/ const export doActionC = value => ({ النوع: APP _ACTION_ C ، القيمة })؛ /**
    
*   es6 الثابت الذي سيكون على علم بالمكون بحيث يكون التفاعل ممكنًا بين المكون والدولة
    
*   param {Object} يقوم بتقييم كائن أو أي نوع آخر ليتم تعيينه في المخفض **/ const const للتصدير ActionA = value => dispatch => { الإرسال (doActionB (القيمة))؛ }؛ /**
    
*   es6 الثابت الذي سيكون على علم بالمكون بحيث يكون التفاعل ممكنًا بين المكون والدولة \*\* / const const للتصدير ActionB = () => dispatch => { الإرسال (doActionB (صحيح))؛ }؛ `In the example code provided above, the item` سيصبح `In the example code provided above, the item` ActionB\`\`\` متاحًا لمكون App.jsx وعندما يتم تشغيله بواسطة المكون عبر دعامة ، فإنه سيؤدي إلى الإجراء المناسب داخل هذا الملف ثم إلى المخفض وتغييره. وفقا لذلك.
    

## تنفيذ أنواع العمل

الملف التالي:

*   /common/constants/Actiontypes.js
*   سيحتوي هذا الملف على إعلان كل نوع من أنواع الإجراءات المتاحة للاستخدام من قبل التطبيق.
*   يجب أن تكون التصريحات التي يتم القيام بها هنا متوفرة على ملف الإجراءات حتى يتم التعامل معها في التطبيق.

 `export const APP_ACTION_A='MAKE_A'; 
 export const APP_ACTION_B='MAKE_B'; 
 export const APP_ACTION_C='MAKE_C'; 
` 

في المثال المذكور أعلاه ، يتم الإعلان عن ثلاثة أنواع من الإجراءات وتصديرها لكي تصبح متاحة للاستهلاك.

## تنفيذ المخفض

الملف التالي:

*   /common/reducers/appReducer.js
    *   إن المخفض في الجوهر ليس أكثر من وظيفة نقية لجافا سكريبت سوف تتحقق مما إذا كان أي من الشروط يفي بالإجراء الذي تم تشغيله وإجراء التغييرات على الحالة ، ولا يتم تحويره أبدًا.

 ` import { 
    APP_ACTION_A, 
    APP_ACTION_B, 
    APP_ACTION_C 
 } from '../constants/Actiontypes'; 
 
 /** 
 * es6 example of a declaration of the reducer 
 * @param {Object} state contains all the application's state properties needed 
 * @param {action} action the action that will trigger the state's changes 
 **/ 
 const ExampleAppReducer= (state = { 
    exampleBool:false, // boolean value 
    exampleString:'', // string value 
    exampleArray: [], // array value 
    onError:{ 
        A:'', 
        B:'', 
        C:'' 
    } // object with properties inside 
 }, action) => { 
    //switch statement that will test every case and make the necessary changes, never mutating the state as it's being preserved always 
    switch(action.type){ 
        case APP_ACTION_A:{ 
            return { 
                ...state, // es6 epread operator to make a copy of the existing state object 
                exampleBool:action.value // the state property changes accordingly to the value of the action triggered 
            }; 
        } 
        case APP_ACTION_B:{ 
            return { 
                ...state, 
                exampleString:action.value 
            }; 
        }, 
        case APP_ACTION_C:{ 
            return { 
                ...state, 
                exampleArray:action.value 
            }; 
        } 
        default:{ 
            return state; // if any of the actions triggered is not defined here it will return the default state 
        } 
    } 
 }; 
 export default ExampleAppReducer; 
` 

يوضح الكود أعلاه كيف يتم تعريف المخفض الأساسي ويحدث تغييرات على الحالة ، عن طريق اختبار شرط معين.

## تنفيذ المتجر

الملف:

*   /common/store/store.js
*   سيحتوي هذا الملف على تعريف شجرة الحالة الخاصة بالتطبيق ، من أجل تغيير الحالة داخل ، يجب إرسال أكتين إلى هنا.
*   إنه ليس أكثر من كائن به طرق معلن عنها ، أهمها إنشاء المتجر

\`\` \`جافا سكريبت import {createStore} من "redux" ؛ استيراد مثال من "../reducers/ExampleAppReducer" ؛

تصدير الافتراضية createStore ( مثال )؛ \`\` \` يوضح التعليمة البرمجية أعلاه كيفية تعريف مخزن تطبيقات بسيط.

هذا هو الإعداد الأساسي للمخفض ، يمكن توسيعه بشكل أكبر ويحتوي على مخازن متعددة على سبيل المثال وأيضا إضافة بعض الوسيطة إليها.

## قراءة متعمقة

بما أن هذا الدليل ليس أكثر من مجرد مقدمة لكيفية تفاعل وإعادة العمل معًا وكيفية تطبيق البنية. ينصح بشدة لقارئ هذا الدليل بقراءة الروابط التالية ليتم قراءتها واستنساخ repos وتجربتها.

[Redux Docs](http://redux.js.org/)

[Redux Api](http://redux.js.org/docs/api/)

[أمثلة Redux](https://github.com/reactjs/redux/tree/master/examples)