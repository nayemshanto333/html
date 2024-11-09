// 01. What is the Fetch API, and how does it work with Promises?
=> Fetch API হল একটি ব্রাউজার-নেটিভ ইন্টারফেস যা  সহজেই HTTP requests করার সুবিধা দেয়, যেমন- ডেটা fetching data বা সার্ভারে ডেটা পাঠানো। এটি অনেকটা পুরনো XMLHttpRequest-এর মতো কাজ করে, তবে এটি অনেক বেশি আধুনিক, সহজ, এবং Promise-ভিত্তিক, যা এ্যাসিনক্রোনাস কোড লেখাকে আরও সহজ ও পাঠযোগ্য করে তোলে।

Fetch API যেভাবে কাজ করে-
1. Fetch API একটি Promise রিটার্ন করে, যা সফলভাবে ডেটা ফেরত আসলে resolve হয় এবং কোনো ত্রুটি থাকলে reject হয়।
2. fetch() মেথড ব্যবহার করে সার্ভারে একটি অনুরোধ পাঠানো হয়। এটি একটি URL প্যারামিটার নেয় এবং একটি Promise রিটার্ন করে যা Response অবজেক্টের সাথে সমাপ্ত হয়।
3. then() এবং catch() মেথড ব্যবহার করে এই Promise-কে হ্যান্ডেল করা হয়।

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Project: Fetch data from a public API (e.g., JSONPlaceholder) and display it on the page.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch API Example</title>
  </head>
  <body>
    <h1>Data fetching from Api</h1>
    <div id="posts-container"></div>

    <script>
      async function fetchAndDisplayPosts() {
        try {
         
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          if (!response.ok) {
            throw new Error("something error");
          }
          const posts = await response.json(); 

          const postsContainer = document.getElementById("posts-container");

          
          posts.forEach((post) => {
         
            const postDiv = document.createElement("div");
            postDiv.style.border = "1px solid #ccc";
            postDiv.style.margin = "10px 0";
            postDiv.style.padding = "10px";
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postDiv);
          });
        } catch (error) {
          console.error("error:", error);
          const postsContainer = document.getElementById("posts-container");
          postsContainer.innerHTML = "<p>something error</p>";
        }
      }
      fetchAndDisplayPosts();
    </script>
  </body>
</html>


// 02. How does XMLHttpRequest differ from the Fetch API?
=> XMLHttpRequest:
1. XHR একটি পুরনো পদ্ধতি এবং এটি কলব্যাক ফাংশনের মাধ্যমে কাজ করে।
2. XHR Promise সমর্থন করে না।
3.  XHR-এ ত্রুটি হ্যান্ডলিং তুলনামূলকভাবে জটিল।
4.  JSON ডেটা পাওয়ার পরে JSON.parse() এর মাধ্যমে ডেটা পার্স করতে হয়।
5. XHR ফাইল আপলোড বা ডাউনলোডের সময় অগ্রগতি ট্র্যাক করতে পারে এবং এর জন্য progress ইভেন্ট ব্যবহার করা যায়।
6. CORS সমস্যা হ্যান্ডল করা কখনও কখনও কঠিন হতে পারে।

Fetch API:
1. Fetch API এর ইন্টারফেসটি বেশ সহজ এবং এটি Promise এর উপর ভিত্তি করে তৈরি।
2.  Fetch API Promise ভিত্তিক 
3.  Fetch API ত্রুটি সহজে .catch() ব্লক ব্যবহার করে হ্যান্ডেল করা যায়। 
4.  Fetch API-তে সহজে response.json() মেথড ব্যবহার করে JSON ডেটা পার্স করা যায়।
5.  Fetch API সরাসরি progress ইভেন্ট সমর্থন করে না।
6.  Fetch API CORS সমর্থন করে এবং সাধারণত ক্রস-অরিজিন অনুরোধ হ্যান্ডল করতে সহজ।


// 03. Explain what JSON is and how it’s used in JavaScript.
=> JSON হলো JavaScript Object Notation-এর সংক্ষিপ্ত রূপ। এটি একটি ডেটা বিন্যাস যা সাধারণত ওয়েব সার্ভার এবং ক্লায়েন্টের মধ্যে ডেটা বিনিময়ের জন্য ব্যবহৃত হয়। JSON মূলত একটি টেক্সট-ভিত্তিক ফরম্যাট যা সহজেই পড়া এবং লেখা যায়। এটি অনেকটা জাভাস্ক্রিপ্ট অবজেক্টের মতো, তবে কিছু নির্দিষ্ট নিয়ম অনুসরণ করে।

JavaScript-এ JSON যেভাবে ব্যবহৃত হয়-
JavaScript-এ JSON ডেটা প্রায়শই সার্ভার থেকে ক্লায়েন্টে বা ক্লায়েন্ট থেকে সার্ভারে ডেটা আদান-প্রদানের জন্য ব্যবহৃত হয়। এটি জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তরিত করা যায় এবং এর বিপরীতও করা যায়। JSON ডেটা পার্স এবং স্ট্রিংয়ে রূপান্তর করতে JavaScript-এ দুটি মেথড ব্যবহৃত হয়:

JSON.parse(): একটি JSON স্ট্রিংকে JavaScript অবজেক্টে রূপান্তরিত করার জন্য ব্যবহার করা হয়।
const jsonString = '{"name": "Rahim", "age": 25}';
const jsObject = JSON.parse(jsonString);
console.log(jsObject.name); // Output: Rahim

JSON.stringify(): একটি JavaScript অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তরিত করার জন্য ব্যবহৃত হয়।
const jsObject = { name: "Karim", age: 30 };
const jsonString = JSON.stringify(jsObject);
console.log(jsonString); // Output: {"name":"Karim","age":30}


// 04. How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects?
=> JSON.parse(): একটি JSON স্ট্রিংকে JavaScript অবজেক্টে রূপান্তরিত করার জন্য ব্যবহার করা হয়।
const jsonString = '{"name": "Rahim", "age": 25}';
const jsObject = JSON.parse(jsonString);
console.log(jsObject.name); // Output: Rahim

JSON.stringify(): একটি JavaScript অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তরিত করার জন্য ব্যবহৃত হয়।
const jsObject = { name: "Karim", age: 30 };
const jsonString = JSON.stringify(jsObject);
console.log(jsonString); // Output: {"name":"Karim","age":30}

// Project: Create a function that converts an object to JSON and back to an object.
<script>
function objectToJsonAndBack(obj) {
  const jsonString = JSON.stringify(obj);
  console.log("Converted to JSON:", jsonString);
  const parsedObject = JSON.parse(jsonString);
  console.log("Converted back to Object:", parsedObject);
  return parsedObject;
}
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
const newObject = objectToJsonAndBack(person);
console.log("Name in new object:", newObject.name);
</script>


// 05. What is CORS, and why do we need it when making API requests?
=> CORS বা Cross-Origin Resource Sharing হলো একটি সিকিউরিটি ফিচার যা ওয়েব ব্রাউজারে ব্যবহৃত হয় এবং এটি একটি ওয়েব পেজকে অন্য একটি ডোমেইনের  উপর থেকে রিসোর্স অ্যাক্সেস করতে দেয়, যা সাধারণত নিষিদ্ধ।


// 06. Explain how the FormData API works and when you’d use it.
=> FormData API হলো একটি ওয়েব API যা HTML form-এর ডেটা সংগ্রহ করতে এবং সেই ডেটা সহজভাবে সার্ভারে পাঠাতে ব্যবহৃত হয়। এটি সাধারণত XMLHttpRequest বা fetch API-এর সাথে ফর্মের ডেটা প্রেরণের সময় ব্যবহার করা হয়। FormData API স্বয়ংক্রিয়ভাবে ফর্মের ইনপুট ফিল্ড থেকে ডেটা সংগ্রহ করে, যার ফলে ম্যানুয়ালি input বা textarea থেকে ডেটা সংগ্রহ করার প্রয়োজন হয় না।

FormData API যেভাবে কাজ করে-

1. FormData  ইনস্ট্যান্স তৈরি করতে new FormData() ব্যবহার করা হয়।
const form = document.querySelector('form');
const formData = new FormData(form);

2. formData.append() মেথড ব্যবহার করে ফর্মে নতুন কী-ভ্যালু জোড়া অ্যাড করা যায়।
formData.append('username', 'exampleUser');
formData.append('age', 25);


// 07. What is the purpose of the History API, and how do pushState and replaceState work?
=> History API হলো একটি ব্রাউজার ফিচার যা ডেভেলপারদেরকে ব্যবহারকারীর ব্রাউজিং ইতিহাস ম্যানিপুলেট করতে দেয়। এটি URL পরিবর্তন করে বা ব্রাউজার হিস্টোরি পরিবর্তন করে, কোনো পেজ রিলোড ছাড়াই ব্যবহারকারীর ইন্টারঅ্যাকশন পরিবর্তন করতে সহায়ক। সাধারণত, SPA (Single Page Application) বা ডাইনামিক পেজের ব্যবহারের সময় এটি বেশ কার্যকর।

pushState():
1. pushState() একটি নতুন এন্ট্রি তৈরি করে এবং সেটি ব্রাউজারের হিস্টোরিতে যোগ করে।
2. এটি তিনটি আর্গুমেন্ট গ্রহণ করে: stateObject, title, এবং url
stateObject: একটি জাভাস্ক্রিপ্ট অবজেক্ট যা নতুন হিস্টোরি এন্ট্রির সাথে যুক্ত হয়।
title: সাধারণত বেশিরভাগ ব্রাউজার এটিকে উপেক্ষা করে, কিন্তু এটি একটি শিরোনাম সংক্রান্ত মান দিতে পারে।
url: নতুন URL সেট করে। এটি origin  এর মধ্যে থাকা URL হওয়া উচিত।
উদাহরণ:
history.pushState({ page: 'about' }, 'About Page', '/about');

2. replaceState()
replaceState() একটি নতুন হিস্টোরি এন্ট্রি যোগ না করে, বর্তমান এন্ট্রিকে পরিবর্তন করে।
এটি একই ধরনের আর্গুমেন্ট গ্রহণ করে: stateObject, title, এবং url।
উদাহরণ:
history.replaceState({ page: 'contact' }, 'Contact Page', '/contact');

// Project: Create a simple single-page navigation system with pushState.
// <!DOCTYPE html>
// <html lang="bn">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Simple SPA with pushState</title>
//   <style>
//     .content {
//       padding: 20px;
//       font-size: 18px;
//     }
//     .nav-button {
//       margin: 5px;
//       padding: 10px 15px;
//       cursor: pointer;
//       background-color: #4CAF50;
//       color: white;
//       border: none;
//       border-radius: 5px;
//     }
//   </style>
// </head>
// <body>
//   <nav>
//     <button class="nav-button" data-page="home">Home</button>
//     <button class="nav-button" data-page="about">About</button>
//     <button class="nav-button" data-page="contact">Contact</button>
//   </nav>
//   <div id="content" class="content">Welcome to the Home Page!</div>

//   <script>
//     function updateContent(page) {
//       const contentDiv = document.getElementById('content');
//       let contentText;

//       switch(page) {
//         case 'home':
//           contentText = 'Welcome to the Home Page!';
//           break;
//         case 'about':
//           contentText = 'This is the About Page.';
//           break;
//         case 'contact':
//           contentText = 'Contact us at contact@example.com.';
//           break;
//         default:
//           contentText = 'Page not found!';
//       }

//       contentDiv.textContent = contentText;
//     }

//     document.querySelectorAll('.nav-button').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const page = e.target.getAttribute('data-page');

//         history.pushState({ page }, `${page} Page`, `/${page}`);
        
//         updateContent(page);
//       });
//     });

//     window.onpopstate = (event) => {
//       if (event.state && event.state.page) {
//         updateContent(event.state.page);
//       } else {
//         updateContent('home'); 
//       }
//     };
//   </script>
// </body>
// </html>



// 08. How can you handle errors in API requests with try/catch blocks and the .catch() method?
=> JavaScript-এ যখন আমরা API request করি , তখন সেই request এ ত্রুটি  ঘটতে পারে । যেমন সার্ভার সমস্যা, অনুপস্থিত ডেটা, বা request ব্যর্থতা। এই ত্রুটিগুলি পরিচালনা করার জন্য আমরা try/catch ব্লক এবং .catch() পদ্ধতি ব্যবহার করতে পারি।

১. try/catch ব্লক ব্যবহার করে ত্রুটি পরিচালনা করা:
try/catch ব্লক ব্যবহার করলে আমরা async/await সিনট্যাক্স ব্যবহার করতে পারি এবং যে কোনো ত্রুটির জন্য প্রোগ্রামকে একটি বিশেষ অংশে নিয়ে যেতে পারি।

উদাহরণ:
javascript
Copy code
async function fetchData() {
  try {
    // API থেকে ডেটা রিটার্ন করার জন্য অনুরোধ করা হচ্ছে
    let response = await fetch('https://api.example.com/data');
    
    // সার্ভার থেকে ২০০ না থাকলে ত্রুটি নিক্ষেপ করা হচ্ছে
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json(); // JSON-এ রূপান্তর করা হচ্ছে
    console.log('Data fetched successfully:', data);
  } catch (error) {
    // ত্রুটি থাকলে এখানে ধরা হবে
    console.error('There was a problem fetching the data:', error);
  }
}

fetchData();


API অনুরোধে ত্রুটি পরিচালনা করার জন্য try/catch ব্লক এবং .catch() পদ্ধতির ব্যবহার
JavaScript-এ যখন আমরা API অনুরোধ করি (বিশেষ করে fetch ব্যবহার করে), তখন সেই অনুরোধে ত্রুটি (error) ঘটতে পারে, যেমন সার্ভার সমস্যা, অনুপস্থিত ডেটা, বা অনুরোধ ব্যর্থতা। এই ত্রুটিগুলি পরিচালনা করার জন্য আমরা try/catch ব্লক এবং .catch() পদ্ধতি ব্যবহার করতে পারি।

১. try/catch ব্লক ব্যবহার করে ত্রুটি পরিচালনা করা:
try/catch ব্লক ব্যবহার করলে আমরা async/await সিনট্যাক্স ব্যবহার করতে পারি এবং যে কোনো ত্রুটির জন্য প্রোগ্রামকে একটি বিশেষ অংশে নিয়ে যেতে পারি।
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}fetchData();

২. .catch() পদ্ধতি ব্যবহার করা:
.catch() পদ্ধতিটি Promise-এর সাথে কাজ করার সময় ত্রুটি পরিচালনার জন্য ব্যবহার করা হয়। এটি then() চেইনের সাথে সংযুক্ত করা যায়।
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
}fetchData();


// 09. What are WebSockets, and how do they differ from HTTP requests?
=> WebSockets হল একটি যোগাযোগ প্রোটোকল যা ক্লায়েন্ট এবং সার্ভারের মধ্যে পূর্ণ-দুপক্ষীয়  যোগাযোগ স্থাপন করতে ব্যবহৃত হয়। এটি TCP কানেকশনের উপরে কাজ করে এবং রিয়েল-টাইম ডেটা আদান-প্রদানের জন্য উপযোগী।

WebSockets এবং HTTP এর মধ্যে পার্থক্য:

যোগাযোগ প্রকারভেদ:
HTTP: একমুখী, অর্থাৎ ক্লায়েন্ট অনুরোধ পাঠায় এবং সার্ভার শুধুমাত্র প্রতিক্রিয়া দেয়।
WebSockets: দ্বিমুখী  অর্থাৎ উভয় ক্লায়েন্ট এবং সার্ভার একে অপরকে বার্তা পাঠাতে পারে।

সংযোগ অবস্থা:
HTTP: প্রতিটি অনুরোধ-প্রতিক্রিয়ার পর সংযোগ বন্ধ হয়ে যায়।
WebSockets: সংযোগ একবার স্থাপন হয়ে গেলে, এটি সক্রিয় থাকে এবং বারবার খোলার দরকার নেই।

ব্যবহারযোগ্যতা:
HTTP: স্থির কন্টেন্ট পরিবেশন এবং সাধারণ ওয়েব পৃষ্ঠার অনুরোধের জন্য উপযোগী।
WebSockets: রিয়েল-টাইম অ্যাপ্লিকেশন, যেমন চ্যাট সিস্টেম, গেমস এবং লাইভ আপডেট প্রয়োজন এমন অ্যাপ্লিকেশনগুলির জন্য আদর্শ।

ডেটা আদান-প্রদান:
HTTP: HTTP হেডার এবং অন্যান্য ওভারহেড সহ প্রতিটি অনুরোধে কিছু বাড়তি তথ্য থাকে, যা ডেটা ট্রান্সফারকে তুলনামূলক ধীর করে তুলতে পারে।
WebSockets: একবার সংযোগ স্থাপন হলে হেডারসহ ওভারহেড কম থাকে, যা দ্রুত এবং কার্যকরী ডেটা আদান-প্রদান করতে সহায়ক।

প্রোটোকল ধরণ:
HTTP: স্ট্যাটলেস প্রোটোকল; প্রতিটি অনুরোধ স্বাধীন এবং পূর্ববর্তী অনুরোধ সম্পর্কে জ্ঞান রাখে না।
WebSockets: স্টেটফুল  সংযোগ; সংযোগ স্থাপন করে একাধিক বার্তা আদান-প্রদান হতে পারে।


// 10. Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs).
=>   Service Worker একটি বিশেষ ধরণের স্ক্রিপ্ট যা ব্রাউজার ব্যাকগ্রাউন্ডে চালায় এবং ওয়েব অ্যাপ্লিকেশনগুলিকে উন্নত কার্যকারিতা প্রদান করে। এটি বিশেষভাবে অফলাইন সাপোর্ট, পুশ নোটিফিকেশন এবং ব্যাকগ্রাউন্ড ডেটা সিঙ্কিংয়ের মতো বৈশিষ্ট্যগুলি প্রদান করতে ব্যবহৃত হয়।

Service Worker-এ ব্যবহারের ধাপ:
1. Service Worker রেজিস্ট্রেশন: প্রথমে আপনার ওয়েব অ্যাপে একটি Service Worker ফাইল তৈরি করতে হয় এবং এটি নিবন্ধন করতে হয়।
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.error('Service Worker registration failed:', error);
    });
}

2. ইনস্টল এবং অ্যাক্টিভেট ইভেন্ট: Service Worker ইনস্টল এবং অ্যাক্টিভেট ইভেন্ট পরিচালনা করে ক্যাশিং কাজ পরিচালনা করতে পারে।
self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open('my-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/image.png'
      ]);
    })
  );
});
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});

3. Fetch ইভেন্ট হ্যান্ডলিং: Service Worker কাস্টম ডেটা রেসপন্স দিতে পারে | যেমন ক্যাশ থেকে ডেটা ফেরত দেয়া।
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});