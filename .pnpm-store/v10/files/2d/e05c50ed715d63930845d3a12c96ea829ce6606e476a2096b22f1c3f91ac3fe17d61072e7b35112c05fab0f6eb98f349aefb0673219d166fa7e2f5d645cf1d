/*
Given the ratio a : b : c = 2 : 3 : 4 
What is c, given a = 40?

A general ratio chain is a_1 : a_2 : a_3 : ... : a_n = r_1 : r2 : r_3 : ... : r_n.
Now each term can be expressed as a_i = r_i * x for some unknown proportional constant x.
If a_k is known it follows that x = a_k / r_k. Substituting x into the first equation yields
a_i = r_i / r_k * a_k.

Given an array r and a given value a_k, the following function calculates all a_i:
*/

function calculateRatios(r, a_k, k) {    
    const x = Fraction(a_k).div(r[k]);
    return r.map(r_i => x.mul(r_i));
}

// Example usage:
const r = [2, 3, 4]; // Ratio array representing a : b : c = 2 : 3 : 4
const a_k = 40; // Given value of a (corresponding to r[0])
const k = 0; // Index of the known value (a corresponds to r[0])

const result = calculateRatios(r, a_k, k);
console.log(result); // Output: [40, 60, 80]
