export default function(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map
