// 01. How does JavaScript handle implicit type conversion?
=> জাভাস্ক্রিপ্টে ইম্প্লিসিট টাইপ কনভার্সন বা স্বয়ংক্রিয় টাইপ রূপান্তর তখন ঘটে যখন বিভিন্ন ডেটা টাইপের মধ্যে অপারেশন হয় এবং জাভাস্ক্রিপ্ট নিজেই ডেটা টাইপ পরিবর্তন করে। এটিকে টাইপ Type Coercion বলা হয়। Type Coercion বিশেষ করে তখন ঘটে যখন জাভাস্ক্রিপ্ট বিভিন্ন টাইপের মানকে একত্রে ব্যবহার করে একটি একক টাইপে রূপান্তর করতে চায়।

সংখ্যা এবং স্ট্রিং কনভার্সন:
let result = 5 + "5";
console.log(result); // আউটপুট: "55" (স্ট্রিং)

বিয়োগ, গুন, ভাগে টাইপ কোরসান:
let result = "10" - 5;
console.log(result); // আউটপুট: 5 (সংখ্যা)

result = "10" * 2;
console.log(result); // আউটপুট: 20 (সংখ্যা)

বুলিয়ান কনভার্সন:
if ("") {
    console.log("This will not execute.");
  } else {
    console.log("Falsy value detected.");
  }

সমতুল্যতা (==) বনাম কড়াকড়ি সমতুল্যতা (===):
console.log(5 == "5");  // আউটপুট: true 
console.log(5 === "5"); // আউটপুট: false 


// 02. What does typeof return for different data types?
=> JavaScript-এ typeof অপারেটরটি কোনো ভেরিয়েবল বা ভ্যালুর ডেটা টাইপ পরীক্ষা করতে ব্যবহৃত হয়। এটি একটি স্ট্রিং হিসেবে ডেটা টাইপ রিটার্ন করে, যা ভেরিয়েবলটির টাইপ নির্দেশ করে। 

প্রিমিটিভ ডেটা টাইপস:
42, 3.14, NaN	"number"
"hello", 'world'	"string"
true, false	"boolean"
undefined	"undefined"
123n, BigInt(123)	"bigint"

নন-প্রিমিটিভ ডেটা টাইপস:
{}, new Object()	"object"
[], new Array()	"object"
function() {}	"function"


// 03. What is NaN, and how can you check if a value is NaN?
=> NaN (Not-a-Number) হল একটি বিশেষ মান যা JavaScript-এ ব্যবহার করা হয় যখন কোন অপারেশন বা গণনা সংখ্যার সাথে সম্পর্কিত না হয়। উদাহরণস্বরূপ, কোনো অযৌক্তিক গাণিতিক ফলাফল বা সংখ্যার বাইরে কিছু কাজ করলে NaN রিটার্ন হয়। NaN এর ডেটা টাইপ number হলেও এটি একটি বিশেষ মান, যার সাথে অন্য কোনো সংখ্যার তুলনা করা সম্ভব নয়।

isNaN() ফাংশন:
console.log(isNaN(42));        // false, কারণ এটি একটি সংখ্যা
console.log(isNaN("hello"));   // true, কারণ এটি একটি স্ট্রিং
console.log(isNaN(NaN));       // true, কারণ এটি NaN

Number.isNaN() ফাংশন:
console.log(Number.isNaN(42));        // false
console.log(Number.isNaN("hello"));   // false (এটি স্ট্রিং, NaN নয়)
console.log(Number.isNaN(NaN));       // true

Object.is() পদ্ধতি:
console.log(Object.is(NaN, NaN));     // true
console.log(Object.is(42, NaN));      // false
