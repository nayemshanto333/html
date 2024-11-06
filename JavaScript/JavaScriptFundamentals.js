// 01. What are the different data types in JavaScript?
=> JavaScript এ বিভিন্ন ধরনের ডাটা টাইপ রয়েছে । ডাটা টাইপ প্রধানত ২ ধরনের। প্রিমিটিভ ডাটা টাইপ ও নন প্রিমিটিভ ডাটা টাইপ। 
প্রিমিটিভ ডাটা টাইপগুলো হলঃ
String, Number, Boolean , undefined, null, Symbol, BigInt
নন প্রিমিটিভ ডাটা টাইপ হলঃ
object

// 02. What is the difference between var, let, and const?
=> JavaScript এ var let const হচ্ছে variable declear করার ৩টি পদ্ধতি। var let const এদের মধ্যে পার্থক্য নিছে দেওয়া হলঃ
var: এটি function Scope । Hoisting প্রক্রিয়ায় Data ব্যাবহার করা যায় । variable পুনরায় declear করা যায়।
let: এটি Block Scope | Declear এর পূর্বে variable ব্যাবহার করা সম্ভব নয়। variable পুনরায় declear করা যায় না।
const: এটি Block Scope | Declear এর পূর্বে variable ব্যাবহার করা সম্ভব নয়। variable পুনরায় declear করা যায় না।

// 03. Explain JavaScript's == vs. === operators.
=> ==(loose Equality): দুটি variable বা value এর মান একই কি না check করে। 5 == "5" // true
=> ===(strict Equality): দুটি variable বা value এর মান ও টাইপ একই কি না check করে। 5 === "5" // false

// 04. What is type coercion in JavaScript? Give an example.
=> Type coercion বলতে বোঝায় কোন variable এর এক ধরনের মানকে অন্য এক ধরনের মানে পরিবর্তন করা। type coercion প্রধানত ২ ধরনেরঃ
Implicit: console.log(5 + "5") // 55
Explicit: let value = "10"
        let numValue = Number(value)
        console.log(numValue)

// 05. Explain the concept of scope in JavaScript.
=> কোন variable বা function program এর কোথায় ব্যাবহার করা হবে তা নির্ধারণ করার প্রক্রিয়াকে Scope বলে। JavaScript এ ৩ ধরনের scope রয়েছে।
golobal scope: যে variable একবার declear করে প্রোগ্রামের যে কোন জায়গায় অ্যাক্সেস নেওয়া যায় তাকে global scope বলে । 
let name ="karim"        
function greet(){
        console.log(name)
}greet();
local scope:  যে variable বা function শুধুমাত্র নির্দিষ্ট ফাংশনে বা কোডে ব্যাবহার করা যায় তাকে local scope বলে |
function showName(){
        let name = "rafiq";
        console.log(name)
}
block scope: block scope হলো { } চিহ্ন দিয়ে আবদ্ধ অংশের মধ্যে থাকা স্কোপ, যা let এবং const কীওয়ার্ড ব্যবহার করে তৈরি করা হয়।
if (true) {
        let message = "Hello"; 
        console.log(message); 
    }

// 06. What is hoisting in JavaScript?
=> variable বা function declear এর পূর্বে call করাকে hoisting বলে ।
console.log(pets);
let pets = "dog"    
    
// 07. What are template literals, and how are they used?
=> জাভাস্ক্রিপ্টে Template Literals হলো একটি নতুন ধরণের স্ট্রিং সিনট্যাক্স, যা ES6 থেকে চালু হয়েছে। এটি সাধারণ স্ট্রিং কনক্যাটেনেশনের চেয়ে আরও সহজে এবং সুন্দরভাবে স্ট্রিং তৈরি করার সুবিধা দেয়। টেমপ্লেট লিটারেল ব্যবহার করে ভেরিয়েবল এবং এক্সপ্রেশনের মান সরাসরি স্ট্রিংয়ের মধ্যে অন্তর্ভুক্ত করা যায়।
const name = "Rahim";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 

// 08. Explain what a higher-order function is in JavaScript.
=> জাভাস্ক্রিপ্টে Higher-Order Function হলো একটি ফাংশন যা  অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে, বা একটি ফাংশনকে রিটার্ন করে। অর্থাৎ, হায়ার-অর্ডার ফাংশন সেই ফাংশনগুলিকে বোঝায় যেগুলি অন্যান্য ফাংশন নিয়ে কাজ করতে পারে।
function calculate(a, b, operation) {
        return operation(a, b);
    }
    function add(x, y) {
        return x + y;
    }
    function multiply(x, y) {
        return x * y;
    }
    console.log(calculate(5, 10, add)); 
    console.log(calculate(5, 10, multiply)); 
// 09. What are arrow functions, and how are they different from regular functions?
=> জাভাস্ক্রিপ্টে Arrow Function হলো একটি বিশেষ ধরনের ফাংশন, যা =>  সিনট্যাক্স ব্যবহার করে তৈরি করা হয়।     
arrow function এবং regular function এর মধ্যে পার্থক্য হল-

arro function:
1. সিনট্যাক্স সংক্ষিপ্ত এবং => ব্যবহার করে ডিফাইন করা হয়
2. this ব্যবহার	Lexical, parent context অনুসরণ করে
3. arguments অবজেক্ট কাজ করে না
4. কনস্ট্রাক্টর হিসেবে ব্যবহার করা যায় না

regular function:
1. function কীওয়ার্ড দিয়ে ডিফাইন করা হয়
2. this ব্যবহার	Dynamic, runtime context অনুসরণ করে
3. arguments অবজেক্ট কাজ করে
4. কনস্ট্রাক্টর হিসেবে ব্যবহার করা যায়
    
// 10. What is an Immediately Invoked Function Expression (IIFE)?
=> IIFE হলো একটি JavaScript ফাংশন যা ডিক্লেয়ার করা মাত্রই সাথে সাথেই রান হয়, এটি স্কোপ তৈরি, গ্লোবাল স্কোপে কোন প্রভাব ফেলে না এবং নির্দিষ্ট সময়ে কোড চালানোর জন্য ব্যবহার করা হয়।

var message = "Global message";
(function() {
    var message = "Local message";
    console.log(message); // আউটপুট: Local message
})();
console.log(message); // আউটপুট: Global message

let message = "global message";
(function(){
        let message = "local message";
        console.log(message)
})();
console.log(message)