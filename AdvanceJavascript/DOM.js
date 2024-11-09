// 01. What is the DOM, and how does JavaScript interact with it?
=> DOM  হলো একটি ব্রাউজারের মাধ্যমে ওয়েব পৃষ্ঠার কাঠামো এবং উপাদানগুলি উপস্থাপন করার একটি কাঠামো। এটি একটি ব্রাউজারের API বা ইন্টারফেস যা HTML এবং XML ডকুমেন্টের উপাদানগুলিকে একটি ট্রি (গাছ)-এর মতো কাঠামোতে উপস্থাপন করে। DOM-এর মাধ্যমে একটি ওয়েব পৃষ্ঠা বা ডকুমেন্টকে পদ্ধতিগতভাবে প্রবেশ, পরিচালনা এবং আপডেট করা যায়।

জাভাস্ক্রিপ্ট DOM-এর মাধ্যমে বিভিন্ন উপাদানগুলি অ্যাক্সেস করতে পারে এবং সেগুলিকে পরিবর্তন করতে পারে।  উদাহরণ:

document.getElementById('id') - নির্দিষ্ট id এর উপাদান নির্বাচন করে।
document.querySelector('.class') - নির্দিষ্ট ক্লাস বা সিলেক্টরের প্রথম মেলানো উপাদান নির্বাচন করে।
document.getElementsByTagName('tag') - নির্দিষ্ট ট্যাগের সব উপাদান নির্বাচন করে।
element.innerHTML - একটি উপাদানের HTML কন্টেন্ট পরিবর্তন করতে ব্যবহার হয়।
element.textContent - একটি উপাদানের টেক্সট কন্টেন্ট পরিবর্তন করতে ব্যবহার হয়।
element.style - CSS স্টাইল পরিবর্তনের জন্য ব্যবহার হয়।
জাভাস্ক্রিপ্ট DOM উপাদানগুলিতে ইভেন্ট যোগ করতে পারে। যেমন: ক্লিক, হোভার, সাবমিট  ইত্যাদি।
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('clicked button');
});


// 02. Explain how to select elements in the DOM using methods like getElementById, querySelector, and querySelectorAll.
=> getElementById(): শুধুমাত্র একটি id দিয়ে সিলেক্ট করা হয় এবং একটি মাত্র উপাদান রিটার্ন করে।
<!DOCTYPE html>
<html>
  <body>
    <h1 id="heading">Hello, World!</h1>
    <script>
      const headingElement = document.getElementById('heading');
      console.log(headingElement.textContent);
    </script>
  </body>
</html>

querySelector(): যেকোনো সিলেক্টর ব্যবহার করে প্রথম মিলিত উপাদান রিটার্ন করে।
<!DOCTYPE html>
<html>
  <body>
    <p class="text">First paragraph</p>
    <p class="text">Second paragraph</p>
    <script>
      const firstParagraph = document.querySelector('.text');
      console.log(firstParagraph.textContent);
    </script>
  </body>
</html>

querySelectorAll(): সমস্ত মিলিত উপাদান একটি NodeList হিসাবে রিটার্ন করে।
<!DOCTYPE html>
<html>
  <body>
    <p class="text">First paragraph</p>
    <p class="text">Second paragraph</p>
    <p class="text">Third paragraph</p>
    <script>
      const allParagraphs = document.querySelectorAll('.text');
      allParagraphs.forEach(paragraph => {
        console.log(paragraph.textContent);
      });
    </script>
  </body>
</html>


    // Project: Create a webpage with a button that changes the color of a div when clicked.    
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>Color Changer</title>
    //   <style>
    //     #colorBox {
    //       width: 100%;
    //       height: 100vh;
    //       background-color: green;
    //       text-align: center;
    //     }
    //     button {
    //       display: block;
    //       margin: 10px auto;
    //       padding: 10px 20px;
    //       font-size: 16px;
    //     }
    //   </style>
    // </head>
    // <body>
    //   <div id="colorBox">Color Box</div>
    //   <button id="changeColorButton">Change Color</button>
    //   <script>
    //     const button = document.getElementById('changeColorButton');
    //     const colorBox = document.getElementById('colorBox');
    
    //     button.addEventListener('click', function() {
    //       const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    //       colorBox.style.backgroundColor = randomColor;
    //     });
    //   </script>
    // </body>
    // </html>
    


// 03. How do event listeners work in JavaScript? Explain addEventListener.
=>  ইভেন্ট লিসেনার হলো এমন একটি মেকানিজম যা ব্যবহারকারী একটি নির্দিষ্ট ইভেন্ট ঘটালে একটি নির্দিষ্ট কোড চালায়। যেমন ক্লিক করা, কী-বোর্ডে চাপ দেওয়া, স্ক্রল করা ইত্যাদি |

addEventListener() হলো একটি মেথড, যা একটি নির্দিষ্ট HTML উপাদানের সাথে যুক্ত করে এবং একটি নির্দিষ্ট ইভেন্টের জন্য একটি ফাংশন চালায়। এটি ইভেন্ট-চালিত প্রোগ্রামিং এর ক্ষেত্রে খুবই কার্যকর।
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Listener Example</title>
// </head>
// <body>
//   <button id="myButton">Click Me!</button>

//   <script>
//     // উপাদান নির্বাচন করা
//     const button = document.getElementById('myButton');

//     // `addEventListener` ব্যবহার করা
//     button.addEventListener('click', function() {
//       alert('Button clicked!');
//     });
//   </script>
// </body>
// </html>


// 04. What is event delegation, and why is it useful?
=>  ইভেন্ট ডেলিগেশন হলো একটি কৌশল যেখানে একটি প্যারেন্ট এলিমেন্টে ইভেন্ট লিসেনার যোগ করা হয় এবং এটি তার চাইল্ড এলিমেন্টগুলির ইভেন্ট পরিচালনা করে। এটি DOM ট্রাভার্সাল ব্যবহার করে কাজ করে এবং ইভেন্ট বুবলিং ধারণার উপর ভিত্তি করে তৈরি করা হয়েছে। ইভেন্ট বুবলিং বলতে বোঝায় যে একটি নির্দিষ্ট ইভেন্ট প্রথমে চাইল্ড এলিমেন্টে ট্রিগার হয় এবং পরে ক্রমান্বয়ে উপরের দিকে চলে যায়।

// Create a list where clicking on each list item logs its content. Use event delegation.

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Event Delegation Example</title>
//   </head>
//   <body>
//     <ul id="myList">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>

//     <script>
//       const list = document.getElementById("myList");
//       list.addEventListener("click", function (event) {
//         if (event.target.tagName === "LI") {
//           alert(`You clicked on ${event.target.textContent}`);
//         }
//       });
//     </script>
//   </body>
// </html>


// 05. What is the difference between innerHTML, textContent, and innerText?
=> innerHTML:
1. এটি একটি এলিমেন্টের মধ্যে থাকা HTML কন্টেন্টসহ সম্পূর্ণ কন্টেন্ট ফেরত দেয় এবং সেট করতেও সক্ষম।
2. innerHTML এলিমেন্টের ভেতরের সমস্ত HTML স্ট্রাকচারকে  সরাসরি পড়তে এবং পরিবর্তন করতে পারে।
3. যখন  কোনো এলিমেন্টের HTML স্ট্রাকচার পরিবর্তন করতে হয় তখন এটি ব্যবহার করতে হয়

textContent:
1. এটি শুধুমাত্র শুধু টেক্সট কনটেন্ট ফেরত দেয় এবং সেট করে। এলিমেন্টে থাকা HTML ট্যাগগুলোকে ইগনোর করে 
2. এটি HTML ট্যাগগুলোকে ইন্টারপ্রেট না করেই শুধুমাত্র এলিমেন্টের টেক্সট পাঠ্য প্রদর্শন করে। এটি সাধারণত পারফরম্যান্সের দিক থেকে innerHTML থেকে দ্রুততর।
3. যখন  কোনো এলিমেন্টের ভেতরে থাকা শুধুমাত্র টেক্সটটি পরিবর্তন করতে বা পড়তে হয়, তখন এটি ব্যবহার করতে হয়।

innerText:
1. এটি একটি এলিমেন্টের টেক্সট কনটেন্ট ফেরত দেয় বা সেট করে, তবে এটি CSS দ্বারা প্রভাবিত হয় । এটি ডাইনামিকভাবে দেখা যায় এমন টেক্সটটি রেন্ডার করে।
2. innerText CSS স্টাইলের উপর নির্ভর করে টেক্সট ফেরত দেয় যা পৃষ্ঠাতে দৃশ্যমান হয়।
3. যখন  দৃশ্যমান টেক্সটটিকে পড়তে বা পরিবর্তন করতে হয়, তখন এটি উপযোগী।


// 06. Explain how you can manipulate CSS styles of an element using JavaScript.
=> style প্রপার্টি ব্যবহার করে ইনলাইন স্টাইল সেট করা:
<div id="myDiv">Hello, World!</div>
const div = document.getElementById('myDiv');
div.style.color = 'red';          
div.style.backgroundColor = 'yellow'; 
div.style.fontSize = '20px';     

classList ব্যবহার করে CSS ক্লাস যোগ করা, মুছে ফেলা, বা টগল করা:

const div = document.getElementById('myDiv');
div.classList.add('highlight');
div.classList.remove('default');
div.classList.toggle('highlight');

getComputedStyle ব্যবহার করে বর্তমান স্টাইল পড়া:
const div = document.getElementById('myDiv');
const computedStyle = window.getComputedStyle(div);
console.log(computedStyle.color);

স্টাইল পরিবর্তনের জন্য setAttribute ব্যবহার করা:
const div = document.getElementById('myDiv');
div.setAttribute('style', 'color: green; background-color: pink;');


// 07. How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.
=> DOM (Document Object Model) ট্র্যাভার্সাল বলতে HTML ডকুমেন্টের বিভিন্ন নোড বা এলিমেন্টের মধ্যে ভ্রমণ করা বোঝায়। এটি ডকুমেন্টের বিভিন্ন অংশে প্রবেশ করতে এবং তাদের নিয়ে কাজ করতে সাহায্য করে। JavaScript দিয়ে DOM ট্র্যাভার্সাল বিভিন্ন প্রপার্টি এবং মেথড ব্যবহার করে করা যায়।

parentNode প্রপার্টি:
এটি কোনো DOM নোডের প্যারেন্ট নোডকে নির্দেশ করে।  যদি কোনো এলিমেন্টের parent এলিমেন্টের সাথে যোগাযোগ করতে চায়, তাহলে parentNode ব্যবহার করতে হয়
<div id="parent">
  <p id="child">Hello!</p>
</div>
const child = document.getElementById('child');
console.log(child.parentNode); 

childNodes প্রপার্টি:
এটি একটি নোডের সব চাইল্ড নোডের একটি NodeList প্রদান করে। এই তালিকায় টেক্সট, কমেন্ট এবং এলিমেন্ট নোড সবই অন্তর্ভুক্ত থাকে।    
const parent = document.getElementById('parent');
console.log(parent.childNodes); 

firstChild প্রপার্টি:
এটি একটি নোডের প্রথম চাইল্ড নোডকে নির্দেশ করে। এটি টেক্সট বা এলিমেন্ট যেকোনো ধরনের নোড হতে পারে।
console.log(parent.firstChild); 

lastChild প্রপার্টি:
এটি একটি নোডের সর্বশেষ চাইল্ড নোডকে নির্দেশ করে
console.log(parent.lastChild);

previousSibling প্রপার্টি:
এটি বর্তমান নোডের আগের সিবলিং নোডকে নির্দেশ করে।
const secondParagraph = document.getElementById('second');
console.log(secondParagraph.previousSibling); 
console.log(secondParagraph.previousElementSibling); 

nextSibling প্রপার্টি:
এটি বর্তমান নোডের পরবর্তী সিবলিং নোডকে নির্দেশ করে।
<p id="first">First Paragraph</p>
<p id="second">Second Paragraph</p>


// 08. What is the purpose of preventDefault() and stopPropagation() in event handling?
=> preventDefault() মেথডটি ইভেন্টের ডিফল্ট আচরণ প্রতিরোধ করতে ব্যবহৃত হয়। অর্থাৎ, কোনো ইভেন্ট ডিফল্টভাবে যা করার কথা, সেটি এই মেথড ব্যবহার করে বন্ধ করা যায়।
<a href="https://example.com" id="myLink">Click me</a>
<script>
  const link = document.getElementById('myLink');
  link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link click prevented!');
  });
</script>

topPropagation() মেথডটি ইভেন্টের বাবলিং  বন্ধ করতে ব্যবহৃত হয়। এটি ইভেন্টটি একটি নির্দিষ্ট এলিমেন্টে থামিয়ে দেয় এবং প্যারেন্ট বা ঊর্ধ্বতন এলিমেন্টে ইভেন্ট ছড়িয়ে যেতে দেয় না।
<div id="myDiv">
      <button id="myButton">Click me</button>
    </div>
    <script>
      const div = document.getElementById('myDiv');
      const button = document.getElementById('myButton');
    
      div.addEventListener('click', function() {
        alert('Div clicked!');
      });
    
      button.addEventListener('click', function(event) {
        event.stopPropagation(); 
      alert('Button clicked!');
      });
    </script>

// Project: Create a form that prevents submission and logs a message instead.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prevent Form Submission</title>
</head>
<body>
  <h2> Form </h2>
  
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Submit</button>
  </form>

  <script>
    
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      console.log('Form submission prevented!'); 
    });
  </script>
</body>
</html>







    