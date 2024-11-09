// 01. What are arrow functions in ES6, and how are they different from regular functions?
=> Arrow Functions হলো ES6 এ প্রবর্তিত একটি নতুন ধরনের ফাংশন syntax যা কোডকে আরও সংক্ষিপ্ত  করে |
const functionName = (parameter1, parameter2) => {
    // Function body
  };
Arrow function এবং Regular function এর মধ্যে পার্থক্য হলো-

Arrow function:
1. সিনট্যাক্স সংক্ষিপ্ত (=>) সিম্বল ব্যবহার করা হয়।  
2. প্যারেন্ট স্কোপ থেকে this নেয়।
3. arguments অবজেক্ট থাকে না।
4. কনস্ট্রাকটর new দিয়ে ব্যবহার করা যায় না।

Regular function:
1. সিনট্যাক্স	function কীওয়ার্ড সহ লিখতে হয়।
2. this	নিজস্ব স্কোপে this ধারণ করে।
3. arguments	arguments অবজেক্ট থাকে।
4. কনস্ট্রাকটর	new দিয়ে ব্যবহার করা যায়।


// 2. **What is destructuring assignment in ES6, and how does it work with arrays and objects?**
=> ES6  এ destructuring assignment একটি গুরুত্বপূর্ণ বৈশিষ্ট্য যা অ্যারে এবং অবজেক্ট থেকে সহজে মান আলাদা করে ভেরিয়েবলে রাখতে সাহায্য করে।
Destructuring in Arrays:
অ্যারের মধ্যে ডেসট্রাকচারিং করে অ্যারের নির্দিষ্ট পজিশনের ভ্যালুগুলো সরাসরি ভেরিয়েবলে নেওয়া যায়।
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);  // Output: "red"
console.log(second); // Output: "green"
console.log(third);  // Output: "blue"

Destructuring in Objects:
অবজেক্টে ডেসট্রাকচারিং ব্যবহার করে অবজেক্টের নির্দিষ্ট প্রোপার্টির মানগুলো আলাদা ভেরিয়েবলে রাখা যায়।
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, age, city } = person;
console.log(name); // Output: "Alice"
console.log(age);  // Output: 25
console.log(city); // Output: "Paris"

// **Project**: Write a function that takes an object with properties and logs each property individually.
function MyObject(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
const person = {
    name : "JhonDoe",
    age : 32,
    city : "London"
};
MyObject(person);


// 03. Explain let, const, and var keywords. When should you use each?
=> var:
স্কোপ: var দ্বারা ডিক্লেয়ার করা ভেরিয়েবল ফাংশন-স্কোপড হয়, অর্থাৎ, এটি শুধুমাত্র ফাংশনের মধ্যে সীমাবদ্ধ। যদি এটি একটি ফাংশনের বাইরে ডিক্লেয়ার করা হয়, তবে এটি গ্লোবাল স্কোপে থাকে।
হোইস্টিং: var ভেরিয়েবল হোইস্টেড হয়, অর্থাৎ ডিক্লারেশনটি ফাংশনের বা স্কোপের উপরে চলে যায়, কিন্তু ডিফাইন করা মানটি থাকে না।
পুনঃডিক্লেয়ারেশন: var দ্বারা একই স্কোপে বারবার ভেরিয়েবল ডিক্লেয়ার করা যায়।

let
স্কোপ: let দ্বারা ডিক্লেয়ার করা ভেরিয়েবল ব্লক-স্কোপড হয়, অর্থাৎ এটি শুধুমাত্র তার ব্লক {} এর মধ্যে থাকে।
হোইস্টিং: let ভেরিয়েবলও হোইস্টেড হয়, কিন্তু এটি টেম্পোরাল ডেড জোন এ থাকে, যার ফলে ডিক্লেয়ারেশনের আগে এটিতে অ্যাক্সেস করা যায় না।
পুনঃডিক্লেয়ারেশন: একই স্কোপে let ভেরিয়েবল পুনরায় ডিক্লেয়ার করা যায় না।

const
স্কোপ: const দ্বারা ডিক্লেয়ার করা ভেরিয়েবল ব্লক-স্কোপড হয়, অর্থাৎ এটি শুধুমাত্র তার ব্লক {} এর মধ্যে থাকে।
হোইস্টিং: const হোইস্টেড হয় এবং এটি টেম্পোরাল ডেড জোন এ থাকে।
পুনঃডিক্লেয়ারেশন এবং পুনঃনির্ধারণ: const দ্বারা ডিক্লেয়ার করা ভেরিয়েবল পুনরায় ডিক্লেয়ার বা পুনঃনির্ধারণ করা যায় না। 

কখন কোনটি ব্যবহার করতে হবে-
var: ইদানিংকালে var ব্যবহার করার প্রয়োজন নেই। কারণ এটি অনেক সময় স্কোপ সংক্রান্ত বিভ্রান্তি তৈরি করতে পারে।
let: যখন ভেরিয়েবল পরিবর্তনশীল মান ধারণ করবে এবং ব্লকের মধ্যে সীমাবদ্ধ রাখতে হবে ।
const: যখন মান স্থির থাকবে, পরিবর্তন হবে না, যেমন কনফিগারেশন সেটিংস, কনস্ট্যান্ট ভ্যালু।


// 04. What is the spread operator, and how can it be used with arrays and objects?
=> স্প্রেড অপারেটর হলো JavaScript-এর একটি শক্তিশালী বৈশিষ্ট্য যা ... (তিনটি ডট) চিহ্ন দিয়ে ব্যবহার করা হয়। এটি মূলত অ্যারে এবং অবজেক্টের উপাদানগুলিকে আলাদা আলাদা করে ছড়িয়ে দেওয়ার কাজ করে। এটি নতুন অ্যারে বা অবজেক্ট তৈরি করতে, বিদ্যমান ডেটা কপি করতে, একাধিক ডেটাকে একত্রিত করতে বা ডেটাকে প্রসারিত করতে ব্যবহার করা হয়।

অ্যারের ক্ষেত্রে স্প্রেড অপারেটরের ব্যবহার:
স্প্রেড অপারেটর ব্যবহার করে একটি অ্যারে থেকে নতুন অ্যারে তৈরি করা যায়, যা মূল অ্যারের রেফারেন্স কপি না করে আসল ডেটা কপি করে।
const numbers = [1, 2, 3];
const newNumbers = [...numbers]; 
console.log(newNumbers); 

অবজেক্টের ক্ষেত্রে স্প্রেড অপারেটরের ব্যবহার:
স্প্রেড অপারেটরের মাধ্যমে একটি অবজেক্টকে নতুন অবজেক্ট হিসেবে কপি করা যায়।
const person = { name: "John", age: 30 };
const copiedPerson = { ...person };
console.log(copiedPerson); 

// Project: Merge two arrays using the spread operator.
const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]
const mergeArray = [...array1, ...array2]
console.log(mergeArray)


// 05. How does template literals work in ES6, and how does it make string interpolation easier?
=> টেমপ্লেট লিটারেল হলো ES6-এ প্রবর্তিত একটি বৈশিষ্ট্য যা স্ট্রিং ইন্টারপোলেশন এবং মাল্টি-লাইন স্ট্রিং তৈরি করা সহজ করে তোলে। এটি সাধারণ স্ট্রিং কোটেশনের পরিবর্তে ব্যাকটিক (``) চিহ্ন ব্যবহার করে।
const name = 'Rahim';
const age = 25;
const greeting = `my name is ${name} & i'm ${age} years old`;
console.log(greeting);


// 06. What are default parameters in ES6, and how do they improve function flexibility?
=> ডিফল্ট প্যারামিটার হলো ES6-এ প্রবর্তিত একটি বৈশিষ্ট্য, যা ফাংশনের প্যারামিটারে ডিফল্ট মান সেট করার সুযোগ দেয়। অর্থাৎ, যদি কোনো প্যারামিটারে মান পাস করা না হয়, তাহলে ডিফল্টভাবে পূর্বনির্ধারিত মান ব্যবহার করা হবে।

ফাংশনের ভিতরে শর্ত ব্যবহার না করেও প্যারামিটার চেকিং এড়ানো: আগে কোডে ডিফল্ট মান ব্যবহারের জন্য if বা || অপারেটর ব্যবহার করতে হতো, যা ডিফল্ট প্যারামিটার দিয়ে সহজেই সমাধান করা যায়।

function calculateArea(length = 1, width = 1) {
    return length * width;
}
console.log(calculateArea()); 
console.log(calculateArea(5)); 
console.log(calculateArea(5, 3)); 


// 07. Explain what Map and Set are in ES6 and how they differ from objects and arrays.
=> ES6-এ Map এবং Set হল দুটি নতুন ডেটা স্ট্রাকচার, যা অবজেক্ট এবং অ্যারের কাজকে সম্পূরক করে 

অবজেক্টের সাথে তুলনাঃ
ডেটা টাইপ কী হিসাবে: অবজেক্টের মতো নয়, Map যেকোনো ডেটা টাইপের কী সমর্থন করে।
অর্ডার: Map ইনসারশন অর্ডার ধরে রাখে, যেখানে অবজেক্টের ক্ষেত্রে এটি গ্যারান্টি দেওয়া যায় না।
ইটারেশন: Map এ বিল্ট-ইন ইটারেশন পদ্ধতিগুলি সহজ করে তুলেছে।

অ্যারের সাথে তুলনা:
ইউনিক ভ্যালু: অ্যারের মত নয়, Set স্বয়ংক্রিয়ভাবে ডুপ্লিকেট উপাদান উপেক্ষা করে।
পারফরমেন্স: বড় ডেটার ক্ষেত্রে Set দ্রুত ভ্যালু খুঁজে পাওয়ার জন্য ভালো পারফর্ম করে।

// Project: Create a simple dictionary with Map to store key-value pairs.
const dictionary = new Map();

dictionary.set('Apple', 'This is a fruit');
dictionary.set('Potato', 'This is a vagitable');
dictionary.set('Rose', 'This is a flower');

dictionary.forEach((value, key)=>{
    console.log(`${key}: ${value}`)
})


// 08. What is the purpose of the for...of loop, and how is it different from for...in?
=> for...of লুপ ইটারেবল অবজেক্ট (যেমন অ্যারে, স্ট্রিং, ম্যাপ, সেট ইত্যাদি) এর এলিমেন্টের উপর ইটারেশন করতে ব্যবহৃত হয়।
const fruits = ['apple', 'banana', 'mango'];
for (const fruit of fruits) {
  console.log(fruit);
}
মূল পার্থক্য:
for...of লুপ: for...of ব্যবহার করা হয় যখন অ্যারের মান বা অন্যান্য ইটারেবলগুলোর উপর কাজ করতে হয়।
for...in লুপ: for...in ব্যবহার করা হয় যখন অবজেক্টের প্রপার্টি বা ইনডেক্সের উপর কাজ করতে হয়।


// 09. Explain the concept of Promise in JavaScript. How do you use .then() and .catch()?
=> JavaScript-এ Promise হল একটি অবজেক্ট যা অ্যাসিনক্রোনাস অপারেশনের শেষ হওয়ার (সফলতা বা ব্যর্থতার) ভবিষ্যত মান বা রেজাল্টকে উপস্থাপন করে। এটি অ্যাসিনক্রোনাস কোডের সাথে কাজ করার জন্য একটি কার্যকর উপায় প্রদান করে এবং "callback hell" বা nested callbacks-এর সমস্যা এড়াতে সাহায্য করে।

const fetchData = new Promise((resolve, reject) => {
    let dataReceived = true; 
    if (dataReceived) {
      resolve('Data fetched successfully!');
    } else {
      reject('Failed to fetch data.');
    }
  });
  fetchData
    .then((successMessage) => {
      console.log(successMessage); 
    })
    .catch((errorMessage) => {
      console.log(errorMessage); 
    });
  

// Create a promise that resolves after 2 seconds and logs a message.
const myPromise = new Promise((accept , reject)=> {
  setTimeout(() => {
      accept ('message successful')
  }, 2000);
})
myPromise.then((message)=>{
  console.log(message)
})
.catch((message)=>{
  console.log(message)
})


// 10. What is async/await, and how does it work with Promises?
=> async/await হলো ES8 (ECMAScript 2017) তে যুক্ত একটি ফিচার যা অ্যাসিনক্রোনাস কোড লিখতে সহজ করে এবং কোডকে আরও পাঠযোগ্য করে। এটি প্রমিজের সাথে কাজ করে এবং অ্যাসিনক্রোনাস অপারেশনগুলিকে সিঙ্ক্রোনাস কোডের মতো দেখতে ও কাজ করতে দেয়। এতে অ্যাসিনক্রোনাস অপারেশন পরিচালনা করতে .then() এবং .catch() এর প্রয়োজন হয় না।

async কীওয়ার্ড:
একটি ফাংশনের সামনে async লিখলে ফাংশনটি অ্যাসিনক্রোনাস হয়ে যায় এবং স্বয়ংক্রিয়ভাবে একটি Promise রিটার্ন করে।
await কীওয়ার্ড:
await ব্যবহার করলে এটি Promise-কে রিজল্ভ হওয়া পর্যন্ত অপেক্ষা করে। তবে, এটি শুধুমাত্র async ফাংশনের ভিতরে কাজ করে। await ব্যবহার করলে অ্যাসিনক্রোনাস কোড ব্লকটি সম্পন্ন না হওয়া পর্যন্ত পরবর্তী লাইনের কোডটি চলবে না।
async function fetchData() {
  try{
      console.log('Loading...');
      const data = await new Promise ((accept , reject)=>{
      setTimeout(() => {
          accept('Data fetching Successful')
      }, 2000);
      });
      console.log(data)
  }catch(error){
      console.error(error)
  }
  
}fetchData();