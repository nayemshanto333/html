// 01. What is event delegation, and how does it work?
=> ইভেন্ট ডেলিগেশন হল একটি কৌশল যেখানে  একটি প্যারেন্ট এলিমেন্টে ইভেন্ট লিসেনার যুক্ত করেন, এবং সেই প্যারেন্ট এলিমেন্টের মধ্যে উপস্থিত যেকোনো চাইল্ড এলিমেন্টের জন্য ইভেন্ট হ্যান্ডলিং এর কাজ করেন।
{/* <ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === "LI") {
      alert('You clicked on ' + event.target.textContent);
    }
  });
</script> */}


// 02. What are default parameters in JavaScript?
=> JavaScript-এ ডিফল্ট প্যারামিটার হলো এমন প্যারামিটার যা ফাংশনের আর্গুমেন্ট হিসেবে যখন কোনো মান সরবরাহ করা হয় না, তখন একটি ডিফল্ট মান নির্ধারিত থাকে।  যদি কোনো আর্গুমেন্ট না পাঠানো হয়  তবে ফাংশনটি তার ডিফল্ট মান ব্যবহার করবে।
function greet(name = "Guest") {
    console.log("Hello, " + name + " ");
  }
  greet(); // আউটপুট: Hello, Guest!
  greet("John"); // আউটপুট: Hello, John!
  

// 03. What is the difference between synchronous and asynchronous programming?
=> synchronous এবং asynchronous এর মধ্যে পার্থক্য হলঃ
synchronous:
1. একে একে কাজ হয়, একটি কাজ শেষ না হলে পরবর্তী কাজ শুরু হয় না।
2. কাজ চলার সময় পরবর্তী কাজ আটকে যায়।
3. সময়সাপেক্ষ কাজের জন্য ধীরগতি।	
4. সহজ কোড লেখা যায়, কিন্তু দীর্ঘমেয়াদী কাজের জন্য কম উপযোগী।
5. console.log(), সাধারণ লুপ ইত্যাদি ক্ষেত্রে প্রয়োগ করা হয়।

asynchronous:
1. একাধিক কাজ একসাথে চলতে পারে, এক কাজ শেষ না হলেও অন্য কাজ চলতে পারে।
2. এক কাজ চলাকালীন অন্য কাজ চলতে পারে, কাজ ব্লক হয় না।
3. দ্রুত কাজ করতে পারে, তবে কিছুটা জটিল।
4. বড় এবং সময়সাপেক্ষ কাজের জন্য উপযোগী (যেমনঃ ওয়েব API কল)।
5. setTimeout(), fetch(), Promises ইত্যাদি ক্ষেত্রে প্রয়োগ করা হয়।


// 04. How does the setTimeout function work, and what is its use?
=> setTimeout একটি বিল্ট-ইন JavaScript ফাংশন, যা নির্দিষ্ট সময় পরে একটি ফাংশন বা কোড এক্সিকিউট করার জন্য ব্যবহৃত হয়। এটি অ্যাসিঙ্ক্রোনাস (Asynchronous) উপায়ে কাজ করে |
setTimeout যখন কল করা হয়, এটি প্রথমে নির্দিষ্ট সময়ের জন্য অপেক্ষা করে।
সময় পার হলে, এটি যে ফাংশনটি পাস করা হয়েছে, সেটি অ্যাসিঙ্ক্রোনাসভাবে চালায়।
একবার setTimeout কল করা হলে, এটি কোডের অবশিষ্ট অংশের সাথে চলতে থাকে এবং নির্দিষ্ট সময়ের পরে প্রাপ্ত ফাংশনটি রান হয়।

setTimeout(function() {
    console.log("This message appears after 2 seconds.");
  }, 2000);

// 05. What is the purpose of JSON.stringify() and JSON.parse()?
=> JavaScript-এ JSON (JavaScript Object Notation) একটি জনপ্রিয় ডাটা ফরম্যাট যা সাধারনত ওয়েব অ্যাপ্লিকেশন এবং সার্ভার এর মধ্যে ডাটা এক্সচেঞ্জ করতে ব্যবহৃত হয়। JSON ডাটা সাধারণত স্ট্রিং আকারে থাকে, তাই JavaScript Object বা অন্য ডাটা টাইপগুলিকে JSON ফরম্যাটে রূপান্তর করতে এবং JSON স্ট্রিংকে আবার JavaScript অবজেক্টে রূপান্তর করতে দুটি গুরুত্বপূর্ণ ফাংশন ব্যবহার করা হয়:

1. JSON.stringify():
JSON.stringify() একটি JavaScript অবজেক্ট বা ভ্যালুকে JSON স্ট্রিং আকারে রূপান্তর করে।
const obj = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(obj, null, 2);  // 2 স্পেস ব্যবহার করা হয়েছে
console.log(jsonString);

2. JSON.parse()
JSON.parse() একটি JSON স্ট্রিংকে JavaScript অবজেক্টে রূপান্তর করে।
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj);


// 06. How can you handle asynchronous code in JavaScript?
=> JavaScript-এ Asynchronous code পরিচালনা করা খুবই গুরুত্বপূর্ণ, কারণ ওয়েব পেজের ইন্টারঅ্যাকশন ও ইউজারের অভিজ্ঞতা নির্ভর করে কোডের সঠিক সময়ে কার্যকরী হওয়া এবং সঠিকভাবে প্রতিক্রিয়া দেওয়ার উপর। অ্যাসিনক্রোনাস কোড সাধারণত তখনই প্রয়োজন হয় যখন কোনো সময় নেবার কাজ (যেমন API কল, ডাটাবেস থেকে ডাটা নিয়ে আসা বা ফাইল রিডিং) করতে হয়, এবং  একসাথে অন্যান্য কাজ চলতে থাকবে, যেন পেজ হ্যাং না করে বা দীর্ঘ সময় লোড না হয়।

JavaScript-এ অ্যাসিনক্রোনাস কোড পরিচালনা করার প্রধান তিনটি পদ্ধতি:
1. Callbacks:
কলব্যাক হল এমন একটি ফাংশন যা অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয়, এবং প্রথম ফাংশনটি সম্পন্ন হলে কলব্যাক ফাংশনটি চালানো হয়।
function fetchData(callback) {
    setTimeout(function() {
      const data = "Data fetched";
      callback(data); 
    }, 2000);
  }
  function displayData(data) {
    console.log(data);
  }
  fetchData(displayData); 

2. Promises:
  প্রমিস হল একটি অপারেশন যেটি ভবিষ্যতে সফলভাবে বা ব্যর্থভাবে সম্পন্ন হতে পারে। এটি একটি অবজেক্ট যা শেষ পর্যন্ত সফলতা বা ব্যর্থতা অবস্থা  এর উপর ভিত্তি করে কাজ করবে। 
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  }
  fetchData()
    .then(data => {
      console.log(data);  // প্রমিস সফল হলে এটি কল হবে
    })
    .catch(error => {
      console.log(error); // প্রমিস ব্যর্থ হলে এটি কল হবে
    });

3. Async/Await:
    async এবং await JavaScript-এর আধুনিক সিনট্যাক্স যা প্রমিসের উপর ভিত্তি করে কাজ করে, কিন্তু কোডটিকে সিঙ্ক্রোনাস ভাবে লেখার সুযোগ দেয়। এটি প্রমিসের চেয়ে বেশি পড়তে এবং বুঝতে সহজ।
    async function fetchData() {
        const result = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = true;
            if (success) {
              resolve("Data fetched successfully");
            } else {
              reject("Error fetching data");
            }
          }, 2000);
        });
        console.log(result); // প্রমিসের সফল ফলাফল
      }
      
      fetchData();


// 07. Explain the concept of the Event Loop in JavaScript.
=> Event Loop হল একটি জাভাস্ক্রিপ্টের অত্যন্ত গুরুত্বপূর্ণ ধারণা যা অ্যাসিনক্রোনাস কোড এবং নন-ব্লকিং অপারেশন পরিচালনা করতে সাহায্য করে। এটি মূলত ব্রাউজারের বা Node.js এর রানটাইমের অংশ, যা নিশ্চিত করে যে সিঙ্ক্রোনাস এবং অ্যাসিনক্রোনাস কোডগুলি সঠিকভাবে এবং সঠিক সময়ের মধ্যে এক্সিকিউট হবে।

ইভেন্ট লুপের কাজের ধাপ:
1. Call Stack-এ যদি কোনো সিঙ্ক্রোনাস কাজ থাকে, তা প্রথমে এক্সিকিউট হয়।
2. একবার Call Stack খালি হলে, তখন Event Queue থেকে একটি কলব্যাক ফাংশন Call Stack-এ চলে আসে এবং এক্সিকিউট হয়।
3. যদি আরও অ্যাসিনক্রোনাস কাজ থাকে, সেগুলির কলব্যাকও Event Queue-এ চলে যায় এবং ইভেন্ট লুপ সেগুলি Call Stack-এ একে একে নিয়ে আসে যতক্ষণ না Call Stack আবার খালি হয়।

console.log("Start");

setTimeout(function() {
  console.log("Inside timeout");
}, 0);

console.log("End");







