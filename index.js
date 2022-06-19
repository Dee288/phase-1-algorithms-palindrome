
  // Write your algorithm here
  const str =("Hannah")
  const isPalindrome =(newStr) => {
    newStr= newStr.toLowerCase()
    for (let i = 0; i < newStr.length / 2; i++){
      if (newStr[i] !== newStr[newStr.length - 1 - i]){
        return false;
      }
    }
    return true
  }

console.log(isPalindrome(str))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('hannah'))

console.log(' ')
  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
