// PALINDROME TESTER USING REGEX
  function palindrome(str) {
    let onlyLetters = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    onlyLetters = onlyLetters.toLowerCase().split("");
    for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
      if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      return false;
      break;
    }
  }
  return true;
}



// TEST CASES

palindrome("eye");
//should return true.

palindrome("_eye") 
//should return true.

palindrome("race car") 
//should return true.

palindrome("not a palindrome") 
//should return false.

palindrome("A man, a plan, a canal. Panama") 
//should return true.

palindrome("never odd or even") 
//should return true.

palindrome("nope") 
//should return false.

palindrome("almostomla") 
//should return false.

palindrome("My age is 0, 0 si ega ym.") 
//should return true.

palindrome("1 eye for of 1 eye.") 
//should return false.

palindrome("0_0 (: /-\ :) 0-0") 
//should return true.

palindrome("five|\_/|four")
//should return false.
