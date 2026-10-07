import{constants}from"node:os";

import{SIGNALS}from"./core.js";
import{getRealtimeSignals}from"./realtime.js";



export const getSignals=()=>{
const realtimeSignals=getRealtimeSignals();
const signals=[...SIGNALS,...realtimeSignals].map(normalizeSignal);
return signals
};







const normalizeSignal=({
name,
number:defaultNumber,
description,
action,
forced=false,
standard
})=>{
const{
signals:{[name]:constantSignal}
}=constants;
const supported=constantSignal!==undefined;
const number=supported?constantSignal:defaultNumber;
return{name,number,description,supported,action,forced,standard}
};