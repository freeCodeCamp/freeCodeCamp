import{constants}from"node:os";

import{SIGRTMAX}from"./realtime.js";
import{getSignals}from"./signals.js";



const getSignalsByName=()=>{
const signals=getSignals();
return Object.fromEntries(signals.map(getSignalByName))
};

const getSignalByName=({
name,
number,
description,
supported,
action,
forced,
standard
})=>[name,{name,number,description,supported,action,forced,standard}];

export const signalsByName=getSignalsByName();




const getSignalsByNumber=()=>{
const signals=getSignals();
const length=SIGRTMAX+1;
const signalsA=Array.from({length},(value,number)=>
getSignalByNumber(number,signals)
);
return Object.assign({},...signalsA)
};

const getSignalByNumber=(number,signals)=>{
const signal=findSignalByNumber(number,signals);

if(signal===undefined){
return{}
}

const{name,description,supported,action,forced,standard}=signal;
return{
[number]:{
name,
number,
description,
supported,
action,
forced,
standard
}
}
};



const findSignalByNumber=(number,signals)=>{
const signal=signals.find(({name})=>constants.signals[name]===number);

if(signal!==undefined){
return signal
}

return signals.find((signalA)=>signalA.number===number)
};

export const signalsByNumber=getSignalsByNumber();