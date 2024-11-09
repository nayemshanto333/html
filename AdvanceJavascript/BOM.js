// 01. What is the Browser Object Model (BOM) in JavaScript?
=>  ব্রাউজার অবজেক্ট মডেল (BOM) জাভাস্ক্রিপ্টের একটি অংশ যা ব্রাউজার উইন্ডো বা ট্যাবের সঙ্গে কাজ করার জন্য বিভিন্ন অবজেক্ট এবং ফাংশন প্রদান করে। এটি ডকুমেন্ট অবজেক্ট মডেলের (DOM) বাইরে, পুরো ব্রাউজারকে নিয়ন্ত্রণ ও ইন্টারঅ্যাক্ট করার সুবিধা দেয়।

// 02. How does window differ from document?
=> Window:
1. window অবজেক্টটি পুরো ব্রাউজার উইন্ডোকে প্রতিনিধিত্ব করে
2. window থেকে ব্রাউজারের বৈশিষ্ট্য  অ্যাক্সেস করা যায়।  
3. window হল মূল অবজেক্ট, এবং document এর উপরে তৈরি। তাই window.document বলতে document অবজেক্টকে বোঝায়।

Document:
1. document অবজেক্টটি কেবলমাত্র সেই উইন্ডোতে লোড করা HTML পৃষ্ঠার বিষয়বস্তু এবং গঠনকে প্রতিনিধিত্ব করে।
2. document থেকে HTML উপাদান নির্বাচন এবং তাদের পরিবর্তন বা প্রভাবিত করা যায়।
3. document  window এর উপরে তৈরি। তাই window.document বলতে document অবজেক্টকে বোঝায়।



// 03. Explain how localStorage, sessionStorage, and cookies work and their differences.
=> localStorage:
localStorage হল ব্রাউজারের একটি API যা ক্লায়েন্ট-সাইডে ডেটা সংরক্ষণ করতে ব্যবহৃত হয় এবং ডেটা কোনো এক্সপায়ারি তারিখ ছাড়াই 

localStorage.setItem('username', 'JohnDoe');
const user = localStorage.getItem('username');
console.log(user); // Output: JohnDoe
localStorage.removeItem('username');

sessionStorage:
sessionStorage হল localStorage-এর মতোই একটি API যা ডেটা ব্রাউজারে স্টোর করে, কিন্তু এর প্রধান পার্থক্য হলো ডেটা শুধুমাত্র ব্রাউজার সেশনের সময় পর্যন্ত সংরক্ষিত থাকে। অর্থাৎ, ব্রাউজার ট্যাব বা উইন্ডো বন্ধ করলে ডেটা মুছে যায়।

sessionStorage.setItem('userId', '12345');
const id = sessionStorage.getItem('userId');
console.log(id); 
sessionStorage.removeItem('userId');

Cookies:
cookies হল ছোট আকারের ডেটা যেটি ক্লায়েন্ট-সাইডে সংরক্ষণ করা হয় এবং সাধারণত সার্ভারের সাথে HTTP অনুরোধের সাথে পাঠানো হয়। cookies-এর বৈধতা বা মেয়াদ শেষ হওয়ার সময় নির্ধারণ করা যায়।

document.cookie = "username=JaneDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
console.log(document.cookie);

// Store and retrieve user preferences (like theme) using localStorage.
<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> store theme using LocalStorage </title>
    <style>
      body.light-theme {
        background-color: white;
        color: darkblue;
      }
      body.dark-theme {
        background-color: red;
        color: white;
      }
      .theme-toggle {
        margin: 20px;
        padding: 10px 20px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Theme</h1>
    <button class="theme-toggle">change theme</button>

    <script>
      function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.body.className = savedTheme + "-theme";
      }

      function toggleTheme() {
        let currentTheme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
        let newTheme = currentTheme === "light" ? "dark" : "light";

        document.body.className = newTheme + "-theme";

        localStorage.setItem("theme", newTheme);
      }

      loadTheme();
      document
        .querySelector(".theme-toggle")
        .addEventListener("click", toggleTheme);
    </script>
  </body>
</html>


// 04. What is the purpose of the navigator object, and what properties does it have?
=> navigator অবজেক্ট হলো ব্রাউজারের এক বিল্ট-ইন অবজেক্ট, যা ওয়েব পেজ এবং ব্যবহারকারীর ব্রাউজার সম্পর্কিত তথ্য প্রদান করে। এটি মূলত ব্রাউজারের অবস্থান এবং সেটিংস সম্পর্কিত তথ্য সরবরাহ করতে ব্যবহৃত হয় এবং বিভিন্ন ব্রাউজার বৈশিষ্ট্য চেক করার জন্য উপযোগী।

navigator অবজেক্টের প্রপার্টিগুলি:
1. navigator.userAgent:
ব্রাউজার সম্পর্কিত তথ্য এবং অপারেটিং সিস্টেমের বিবরণ প্রদান করে।
উদাহরণ: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36

2. navigator.language:
ব্রাউজারের সেট করা ভাষা প্রদান করে।
উদাহরণ: 'en-US', 'bn-BD' ইত্যাদি।

3. navigator.cookieEnabled:
ব্রাউজারে কুকি সক্রিয় আছে কিনা তা যাচাই করতে ব্যবহৃত হয়। এটি একটি true বা false মান প্রদান করে।

4. navigator.platform:
এটি ব্যবহারকারীর প্ল্যাটফর্ম সম্পর্কিত তথ্য দেয় (যেমনঃ 'Win32', 'Linux', 'MacIntel')।

5. navigator.onLine:
ডিভাইসটি ইন্টারনেটে সংযুক্ত কিনা তা যাচাই করতে ব্যবহৃত হয়। এটি true (অনলাইন) বা false (অফলাইন) মান প্রদান করে।

6. navigator.geolocation:
এটি ব্যবহারকারীর জিওগ্রাফিক অবস্থান পাওয়ার জন্য ব্যবহৃত হয়। এটির মাধ্যমে আপনি জিপিএস, IP অ্যাড্রেস বা ওয়াইফাই থেকে অবস্থান সংক্রান্ত তথ্য পেতে পারেন।

7. navigator.mediaDevices:
এটি ক্যামেরা, মাইক্রোফোন এবং অন্যান্য মিডিয়া ডিভাইসের অ্যাক্সেস প্রদান করে।

8. navigator.credentials:
ব্যবহারকারীর ক্রেডেনশিয়াল পরিচালনার জন্য ব্যবহৃত হয়।

9. navigator.clipboard:
এটি ক্লিপবোর্ড অ্যাক্সেস করতে ব্যবহৃত হয়, যেমন: টেক্সট কপি বা পেস্ট করা।


// 05. How do window.open and window.close methods work in JavaScript?
=> window.open() মেথড:
window.open() মেথড একটি নতুন ব্রাউজার উইন্ডো বা ট্যাব খুলতে ব্যবহৃত হয়। এটি নতুন URL লোড করতে পারে এবং  নতুন উইন্ডো বা ট্যাবের আকার বা বৈশিষ্ট্য নিয়ন্ত্রণও করতে পারে।
window.open("https://www.example.com", "_blank", "width=600,height=400");

window.close() মেথড:
window.close() মেথডটি এক্সিস্টিং উইন্ডো বা ট্যাব বন্ধ করতে ব্যবহৃত হয়। এটি শুধুমাত্র তখন কাজ করে যখন উইন্ডোটি স্ক্রিপ্ট দ্বারা খোলা হয়, অর্থাৎ  যদি ব্যবহারকারীর মাধ্যমে কোনও উইন্ডো খুলেন না, তবে এই মেথডটি কাজ নাও করতে পারে।
window.close();

// 06. Explain how to get the viewport width and height of a browser window using JavaScript.
=> window.innerWidth
window.innerWidth ব্রাউজার উইন্ডোর ভিউপোর্টের প্রস্থ (width) প্রদান করে, যেটি পিক্সেল (px) আকারে থাকে। এটি পেজের স্ক্রোলবারের অংশও অন্তর্ভুক্ত করে।
let viewportWidth = window.innerWidth;
console.log("Viewport Width: " + viewportWidth + "px");

window.innerHeight
window.innerHeight ব্রাউজার উইন্ডোর ভিউপোর্টের উচ্চতা (height) প্রদান করে, যেটি পিক্সেল (px) আকারে থাকে। এটিতে স্ক্রোলবারের অংশও অন্তর্ভুক্ত থাকে।
let viewportHeight = window.innerHeight;
console.log("Viewport Height: " + viewportHeight + "px");

// Project: Create a function that logs the window’s size whenever it’s resized.

function logWindowSize() {
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log("Window Width: " + width + "px, Window Height: " + height + "px");
}
window.addEventListener('resize', logWindowSize);



// 07. What is the purpose of the setTimeout and setInterval functions?
=>  setTimeout ফাংশন:
setTimeout ফাংশনটি ব্যবহৃত হয় নির্দিষ্ট সময় পরে একটি কোড ব্লক বা ফাংশন কার্যকর করার জন্য। এটি একবারই কোডটি কার্যকর করে।
setTimeout(() => {
  console.log("Hello, 2 seconds later!");
}, 2000);

setInterval ফাংশন:
setInterval একটি নির্দিষ্ট সময় অন্তর ফাংশন বা কোড ব্লককে বারবার কার্যকর করতে ব্যবহৃত হয়। এটি বারবার কোডটি কার্যকর করে যতক্ষণ না এটি বন্ধ করা হয়।
const intervalId = setInterval(() => {
  console.log("This message appears every second!");
}, 1000); 

// Project: Create a clock that updates every second using setInterval.
// <!DOCTYPE html>
// <html lang="bn">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Clock updates every second</title>
// </head>
// <body>
//     <div id="clock" style="text-align: center; font-size: 30px; font-weight: bold;"></div>
//     <script>
//       function updateClock (){
//         const now = new Date();
//         const hours = String(now.getHours())
//         const seconds = String(now.getSeconds())
//         const minutes = String(now.getMinutes())

//         const timeString = `${hours}:${minutes}:${seconds}`
//         document.getElementById('clock').textContent = timeString;
//       }
//       setInterval(updateClock , 1000)
//       updateClock();
//     </script>
// </body>
// </html>




// 08. How can you detect if a user is online or offline using the BOM?
=> <!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>online / offline status</title>
  </head>
  <body>
    <div id="status"></div>
    <script>
      function updateOnlineStatus() {
        const statusDiv = document.getElementById("status");
        if (navigator.onLine) {
          statusDiv.textContent = "you'r currently Online";
          statusDiv.style.color = "green";
        } else {
          statusDiv.textContent = " You'r currently Offline";
          statusDiv.style.color = "red";
        }
      }
      updateOnlineStatus();
    </script>
  </body>
</html>



