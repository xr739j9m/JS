console.log('hello shit') ;

var num_1=2
var num_2=3

console.log(num_1+num_2)

let total = 0, count = 1
while (count <= 10) {
total += count;
count += 1;
}
console.log(total);

console.log('lessgoo')
console.log((1-2)+1)

//Special numbers:
//1. Infinity, -Infinity
//2. Infinity - 1
console.log(0/0)
//-> NaN -- not a number , doesnt yield meaningful result

console.log(`yo\nsup`) //newline
console.log(`yo\tsup`) //tab
console.log("con" + "cat" + "e" + "nate") //concat
console.log(`half of 100 is ${100 / 2}`) // ${} converts numbers to string

//type of function identifies type
console.log(typeof 4.5, typeof "x") 
// → number
console.log(typeof "x")
// → string
console.log('-----------------------Boolean--------------------------')
//Boolean values: 
console.log(67 > 2)
// → true
console.log(100 < 2)
// → false
console.log('-------------------------------------------------')
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
console.log(NaN == NaN)
// → false
console.log('-----------------------Logical Operators--------------------------')
//Logical Operators
console.log('\nAnd Operator:')
//AND Operator
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log('\nOr Operator:')
//OR operator
console.log(false || true)
// → true
console.log(false || false)
// → false

console.log('\nNot Operator:')
console.log(!false)
// → true
console.log(!true)
// → false

console.log('\nTernary Operator')
//Ternary Operator
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//condition ? exprIfTrue : exprIfFalse
//condition ? true : false 
function getFee(currency) {
    return (currency ? '$2.00' : '$10.00');
  }
  
  console.log('value for true:'+getFee(true));
  // expected output: "$2.00"
  
  console.log('value for false:'+getFee(false));
  // expected output: "$10.00"
  
  console.log('value for null:'+getFee(null));
  // expected output: "$10.00"
  
const age=22;
const voter = age > 18 ? "allowed to vote":"not allowed to vote";
console.log('dudes age is '+age+' therefore he/she is '+voter)

//left evaluate true
//right evaluate false

const greeting = (kid) => {
    const name = kid ? kid.name : "nope not my nephew";
    return `heyyy ${name}`;
  }
  
  console.log(greeting({ name: "Z" }));  // "heyyy Z"
  console.log(greeting(null));             // "not my nephew"
  
  console.log('-----------------------Automatic Type Conversion-------------------------')
  // type coercion - operator is applied to the “wrong” type of value, JavaScript will
  // quietly convert that value to the type it needs, using a set of rules that often
  // aren’t what you want or expect.
  console.log(8 * null)
  // → 0
  console.log("5" - 1)
  // → 4
  console.log("5" + 1)
  // → 51
  console.log("five" * 2)
  //→ NaN (undefined or "five" or anything that doesnt map to a number)
  console.log(false == 0)
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
console.log('-----------------------No Automatic Type Conversion-------------------------')
// === or !==

console.log("" === false)
console.log("" !== false)

console.log('-----------------------Short-circuiting of logical operators-------------------------')

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
console.log(null && "user")