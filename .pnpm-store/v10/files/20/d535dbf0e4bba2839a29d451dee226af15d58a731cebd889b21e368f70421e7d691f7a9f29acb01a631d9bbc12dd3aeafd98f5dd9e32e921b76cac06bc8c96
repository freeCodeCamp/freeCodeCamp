const SinglePinyinVowelDict = Object.freeze({
    // Light tone dictionary, includes different tones of vowels
    a: 'a',    // Light tone 'a'
    a0: 'a',   // Light tone 'a'
    a1: 'ā',   // First tone 'ā'
    a2: 'á',   // Second tone 'á'
    a3: 'ǎ',   // Third tone 'ǎ'
    a4: 'à',   // Fourth tone 'à',

    o: 'o',    // Light tone 'o'
    o0: 'o',   // Light tone 'o'
    o1: 'ō',   // First tone 'ō'
    o2: 'ó',   // Second tone 'ó'
    o3: 'ǒ',   // Third tone 'ǒ'
    o4: 'ò',   // Fourth tone 'ò',

    e: 'e',    // Light tone 'e'
    e0: 'e',   // Light tone 'e'
    e1: 'ē',   // First tone 'ē'
    e2: 'é',   // Second tone 'é'
    // e3: 'ĕ', // Commented out sound
    e3: 'ě',   // Third tone 'ě'
    e4: 'è',   // Fourth tone 'è'
    // e5: 'ê',  // Rising tone 'ê'

    i: 'i',    // Light tone 'i'
    i0: 'i',   // Light tone 'i'
    i1: 'ī',   // First tone 'ī'
    i2: 'í',   // Second tone 'í'
    i3: 'ǐ',   // Third tone 'ǐ'
    i4: 'ì',   // Fourth tone 'ì',

    u: 'u',    // Light tone 'u'
    u0: 'u',   // Light tone 'u'
    u1: 'ū',   // First tone 'ū'
    u2: 'ú',   // Second tone 'ú'
    u3: 'ǔ',   // Third tone 'ǔ'
    u4: 'ù',   // Fourth tone 'ù',

    v: 'ü',    // Light tone 'ü'
    v0: 'ü',   // Light tone 'ü'
    v1: 'ǖ',   // First tone 'ǖ'
    v2: 'ǘ',   // Second tone 'ǘ'
    v3: 'ǚ',   // Third tone 'ǚ'
    v4: 'ǜ',   // Fourth tone 'ǜ'
})

/**
 * Mark the vowel
 * @param {string} vowelChar - Input vowel
 * @returns {string} - Returns the corresponding marked vowel or the original vowel
 */
function markSinglePinyinVowel(vowelChar) {
    return SinglePinyinVowelDict[vowelChar] || vowelChar // Return the vowel from the dictionary or the original vowel
}

export default markSinglePinyinVowel; // 导出函数