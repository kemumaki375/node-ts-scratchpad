// The goal of this exercise is to convert a string 
// to a new string where each character in the new 
// string is "(" if that character appears only once 
// in the original string, or ")" if that character 
// appears more than once in the original string. 
// Ignore capitalization when determining if a 
// character is a duplicate.
function duplicateEncode(word: string) {
  let counter: { [key: string]: number } = {};
  let lowStr = word.toLowerCase();

  for (let ch of lowStr) {
    if (ch in counter)
      counter[ch] += 1;
    else 
      counter[ch] = 1;
  }
  let result = "";
  for (let ch of lowStr) {
    if (counter[ch] == 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  console.log(counter)
  return result;
}

console.log(duplicateEncode("lvydlmIl)l( lOFcl@a"))
console.log("lvydlmIl)l( lOFcl@a")
console.log(")((()(()()(()((()((")

// alt solution
function duplicateEncodeV2(word: string){
  // ...
  return word
  .toLowerCase()
  .split('')
  .map((a, i, w) => {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
  .join('')
}