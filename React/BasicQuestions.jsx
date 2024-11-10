// 01. What is React, and why is it used?
=> React হল একটি JavaScript লাইব্রেরি, যা UI তৈরি করতে ব্যবহৃত হয়। এটি Facebook কর্তৃক তৈরি এবং বর্তমানে এটি অত্যন্ত জনপ্রিয় কারণ এটি ওয়েব অ্যাপ্লিকেশন তৈরির ক্ষেত্রে ডেভেলপারদের জন্য অনেক সুবিধা প্রদান করে। 

React ব্যাবহারের কারণগুলো নিছে দেওয়া হল-
1. Reuseable কম্পোনেন্ট: React-এ কম্পোনেন্টগুলি পুনরায় ব্যবহার করা যায়, যা কোডের পুনঃব্যবহারযোগ্যতা বাড়ায় এবং উন্নয়নকে দ্রুত করে।
2. High পারফরম্যান্স: Virtual DOM-এর কারণে React অ্যাপ্লিকেশন দ্রুত এবং দক্ষভাবে কাজ করে।
3. প্রবণতা এবং সম্প্রদায়: React-এর একটি বড় এবং সক্রিয় সম্প্রদায় রয়েছে। ফলে প্রচুর টুলস, লাইব্রেরি, এবং ডকুমেন্টেশন সহজলভ্য যা ডেভেলপারদের জন্য শেখা ও উন্নয়ন সহজ করে।
4. Declarative Syntax: React declarative syntax ব্যবহার করে, যা অ্যাপ্লিকেশন লজিক ও ইউজার ইন্টারফেস সহজেই বোঝা যায়।
5. Data Binding: React-এর one-way data binding আছে, যা UI কম্পোনেন্টের মধ্যে ডেটা ফ্লোকে সহজ ও পূর্বাভাসযোগ্য করে।


// 02. What is JSX, and why is it preferred in React?
=> JSX  হল JavaScript-এর একটি এক্সটেনশন, যা দেখতে অনেকটা HTML এর মতো। এটি React-এ UI কম্পোনেন্ট তৈরির জন্য ব্যবহৃত হয়। সহজভাবে বলতে গেলে, JSX এমন একটি সিনট্যাক্স যা HTML-এর মতো দেখতে হলেও, এটি JavaScript কোডের মধ্যে ব্যবহার করা যায়।

JSX-এর সুবিধা এবং কেন এটি React-এ বেশি ব্যবহৃত হয়:
1. Declarative Syntax: JSX ব্যবহার করার মাধ্যমে React কম্পোনেন্টগুলির UI তৈরি করা আরও সহজ এবং স্বচ্ছ হয়। এটি ডেভেলপারদেরকে এটি কেমনভাবে দেখাবে, তার পরিবর্তে UI কীভাবে দেখতে হবে তা নিয়ে কাজ করতে সহায়তা করে।

2. UI তৈরিতে সহজতা: HTML কোড এবং JavaScript লজিক একত্রে ব্যবহার করা যেতে পারে। এর ফলে, UI কম্পোনেন্ট তৈরি করা দ্রুত হয় এবং কোড আরও পাঠযোগ্য হয়।

3. React কম্পোনেন্টের ক্ষমতাবৃদ্ধি: JSX-এ JavaScript এক্সপ্রেশন ব্যবহার করা যায় {} দিয়ে। 
const userName = "John Doe";
const greeting = <h1>Hello, {userName}!</h1>;

4. Debugging সহজতর: JSX ব্যবহার করার ফলে React Developer Tools ব্যবহার করে কোড ডিবাগিং করা সহজ হয়।  কোডের প্রতিটি কম্পোনেন্ট এবং তাদের আউটপুট সহজে পরীক্ষা করা যায়।

5. JavaScript শক্তি এবং HTML-এর সহজতা: JSX  JavaScript এর সব ক্ষমতাকে ব্যবহার করতে দেয়, যা HTML এর সাথে সংযুক্ত করে আরও বেশি কার্যকরী করে তোলে। এটি কন্ডিশনাল রেন্ডারিং, ইভেন্ট হ্যান্ডলিং, লুপিং, এবং অন্যান্য জটিল লজিক সহজ করে।


// 03. How does JSX differ from HTML?
=> JSX বনাম HTML: মূল পার্থক্যগুলো
Expressions ব্যবহার:
JSX: আপনি JSX-এ {} ব্র্যাকেটের মধ্যে JavaScript এক্সপ্রেশন ব্যবহার করতে পারেন।
const name = "John";
const element = <h1>Hello, {name}!</h1>; 
HTML: HTML-এ সরাসরি JavaScript এক্সপ্রেশন ব্যবহার করা যায় না। HTML শুধুমাত্র স্ট্যাটিক কন্টেন্ট প্রদর্শন করে।

Class Name:
HTML: HTML-এ class অ্যাট্রিবিউট ব্যবহার করা হয় CSS ক্লাস প্রয়োগ করতে।
<div class="container"></div>
JSX: JSX-এ className ব্যবহার করা হয় কারণ class হল একটি reserved keyword (নির্ধারিত শব্দ) JavaScript-এ।
<div className="container"></div>

JavaScript Function Calling:
JSX: JSX-এ ইভেন্ট হ্যান্ডলিং বা অ্যাট্রিবিউটে সরাসরি JavaScript ফাংশন কল করা যায় {} বেসিসে।
<button onClick={() => alert('Button clicked!')}>Click Me</button>
HTML: HTML-এ ইভেন্ট হ্যান্ডলিং সরাসরি ইনলাইন JS বা DOM ইভেন্টের মাধ্যমে করতে হয়।

Self-closing Tags:
HTML: কিছু HTML ট্যাগ সেলফ-ক্লোজিং হতে পারে (যেমন: <br>, <img>) তবে এটি বাধ্যতামূলক নয়।
JSX: JSX-এ সেলফ-ক্লোজিং ট্যাগগুলিকে অবশ্যই / দিয়ে ক্লোজ করতে হবে।
<img src="image.jpg" alt="An image" />
<input type="text" />

Conditional Rendering:
JSX: JSX-এ if-else, টার্নারি অপারেটর (? :) ইত্যাদি ব্যবহার করে কন্ডিশনাল রেন্ডারিং করা যায়।
const isLoggedIn = true;
return <div>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</div>;
HTML: HTML-এ সরাসরি এমন কন্ডিশনাল লজিক প্রয়োগ করা যায় না।

JSX কন্টেন্ট পার্সিং:
JSX: JSX একটি JavaScript কোডের মধ্যে মিক্সড টেমপ্লেটিং ল্যাঙ্গুয়েজ হিসাবে কাজ করে। এটি কম্পাইল হয় React.createElement()-এ।
HTML: HTML একটি স্ট্যাটিক মার্কআপ ল্যাঙ্গুয়েজ যা ব্রাউজারের DOM দ্বারা সরাসরি ব্যবহৃত হয়।


{/* 04. What are components in React? */}
=> কম্পোনেন্ট হল React-এর অন্যতম প্রধান ধারণা যা ইন্টারফেস তৈরি করার জন্য ছোট ছোট, স্বতন্ত্র কোডের টুকরা হিসেবে কাজ করে। প্রতিটি কম্পোনেন্টের নিজস্ব স্টেট এবং লজিক থাকতে পারে এবং এটি একটি নির্দিষ্ট অংশের UI (User Interface) রেন্ডার করতে পারে। React অ্যাপ্লিকেশনগুলি সাধারণত একাধিক ছোট কম্পোনেন্টকে একত্রিত করে বড় এবং জটিল UI গঠন করে।

function App() {
  return (
    <div>
      <Content />
    </div>
  );
}
function Content() {
  return <p>This is a simple React component example.</p>;
}


{/* 05. What is the difference between functional and class components? */}
=> React-এ ফাংশনাল কম্পোনেন্ট এবং ক্লাস কম্পোনেন্টের মধ্যে পার্থক্য
functional component:
1.  এটি হল একটি সাধারণ JavaScript ফাংশন যা একটি UI (JSX) রিটার্ন করে।
2. useState এবং useEffect ব্যবহার করে স্টেট এবং লাইফসাইকেল কার্যক্রম পরিচালনা করা যায়।
3. সাধারণ ফাংশনের মতো কাজ করে বলে এটি লেখায় অনেক সরল এবং সংক্ষিপ্ত।
4. সাধারণত, ফাংশনাল কম্পোনেন্টগুলির পারফরম্যান্স একটু ভালো হতে পারে কারণ সেগুলি React-এ সহজতর ভাবে কাজ করে। Hooks যুক্ত করার পর এটি আরও বেশি শক্তিশালী হয়ে উঠেছে।
5. Hooks ব্যবহার করে স্টেট এবং লাইফসাইকেল কার্যক্রম পরিচালনা করা যায় 

class component:
1. এটি একটি ES6 ক্লাস যা React.Component থেকে extend করে তৈরি করা হয়।
2. ক্লাস কম্পোনেন্টে স্টেট ব্যবহার করা যায় এবং React-এর বিভিন্ন লাইফসাইকেল মেথড যেমন componentDidMount(), componentDidUpdate(), componentWillUnmount() ইত্যাদি ব্যবহার করা যায়।
3. একটু জটিল কারণ এটি একটি constructor() মেথড এবং this কীওয়ার্ডের ব্যবহারের প্রয়োজন হয়।
4. ক্লাস কম্পোনেন্ট তুলনামূলকভাবে একটু বেশি মেমোরি ব্যবহার করতে পারে এবং কিছু ক্ষেত্রে পারফরম্যান্স কম হতে পারে।
5. লাইফসাইকেল মেথডের মাধ্যমে বিভিন্ন অপারেশন পরিচালনা করতে হয়।

{/* 06. What is a single-page application (SPA), and how does React enable it? */}
=> Single-Page Application (SPA) হলো একটি ওয়েব অ্যাপ্লিকেশন বা ওয়েবসাইট যা একটি মাত্র HTML পেজ লোড করে এবং ব্যবহারকারীর বিভিন্ন ইন্টারঅ্যাকশনের জন্য সেই পেজটি ডায়নামিকালি আপডেট করে। এর ফলে পেজ রিফ্রেশ বা নতুন পেজ লোড করার প্রয়োজন হয় না।

React যেভাবে SPA তৈরিতে সাহায্য করে:

1. কম্পোনেন্ট-ভিত্তিক আর্কিটেকচার:
React অ্যাপ্লিকেশনটি ছোট ছোট কম্পোনেন্টে ভাগ করা হয়। প্রতিটি কম্পোনেন্ট একটি নির্দিষ্ট কাজ বা UI অংশ পরিচালনা করে। এটি SPA-এ UI আপডেট করার জন্য প্রয়োজনীয় গতি ও কর্মক্ষমতা নিশ্চিত করে।
2. Virtual DOM:
React-এ ব্যবহৃত Virtual DOM-এর মাধ্যমে HTML ডমের পরিবর্তন খুব দ্রুত ঘটে। এটি শুধু পরিবর্তিত অংশটুকুই আপডেট করে, পুরো পেজ পুনরায় লোড করার প্রয়োজন পড়ে না। ফলে ব্যবহারকারীর কাছে পেজ দ্রুত প্রতিক্রিয়া দেয়।
3. Client-Side Routing:
React Router ব্যবহার করে Client-Side Routing সম্ভব হয়। যখন ব্যবহারকারী কোনো লিঙ্কে ক্লিক করে, তখন ব্রাউজার পেজ রিফ্রেশ না করেই UI আপডেট করে। এর ফলে ব্যবহারকারীরা SPA-এ নিরবিচ্ছিন্নভাবে নেভিগেট করতে পারেন।
4. State Management:
React অ্যাপ্লিকেশনটি বিভিন্ন স্টেট পরিচালনা করতে পারে, যা UI আপডেট করার জন্য গুরুত্বপূর্ণ। এই স্টেট পরিবর্তনের মাধ্যমে ডেটার উপর ভিত্তি করে ডাইনামিক কনটেন্ট পরিবর্তন সম্ভব হয়।
5. AJAX কল:
React SPA-এ সহজেই AJAX এবং API কল ব্যবহার করা যায়, যাতে ডেটা সার্ভার থেকে লোড করে UI-তে প্রদর্শিত হয়। প্রতিবার নতুন HTML লোড করার প্রয়োজন হয় না।


{/* 07. What are props in React? */}
=> Props শব্দটি এসেছে "Properties" থেকে। React-এ props হলো এমন একটি মেকানিজম যার মাধ্যমে কম্পোনেন্টের মধ্যে ডেটা পাস করা যায়। কম্পোনেন্টগুলোকে আরও পুনঃব্যবহারযোগ্য এবং ডাইনামিক করতে props ব্যবহৃত হয়।
React-এ একটি প্যারেন্ট কম্পোনেন্ট তার চাইল্ড কম্পোনেন্টে ডেটা বা তথ্য পাঠাতে props ব্যবহার করতে পারে। এর মাধ্যমে চাইল্ড কম্পোনেন্টগুলো প্যারেন্ট থেকে ডেটা গ্রহণ করে কাজ করতে পারে। props হল read-only এবং চাইল্ড কম্পোনেন্টের মাধ্যমে পরিবর্তন করা যায় না।

import React from 'react';
function ChildComponent(props) {
  return (
    <div>
      <h1>Props Value: {props.name}</h1>
    </div>
  );
}
export default ChildComponent;


{/* 08. How is state different from props? */}
=> State এবং Props-এর মধ্যে মূল পার্থক্য:
1. Mutable vs Immutable: State পরিবর্তনযোগ্য (mutable), তবে props পরিবর্তনযোগ্য নয় (immutable)।
2. Ownership: State একটি কম্পোনেন্টের নিজস্ব, props ব্যবহার করা হয় প্যারেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাস করার জন্য।
3. ডেটা পরিবর্তন: State পরিবর্তন করলে কম্পোনেন্ট রি-রেন্ডার হয়, তবে props পরিবর্তন হলে শুধুমাত্র প্রয়োজনীয় কম্পোনেন্টগুলিই রি-রেন্ডার হয়।
4. Usage: State সাধারণত কম্পোনেন্টের অভ্যন্তরীণ অবস্থা ট্র্যাক করতে ব্যবহৃত হয়, এবং props ব্যবহার করা হয় ডেটা বা ফাংশন প্যারেন্ট থেকে চাইল্ডে পাস করার জন্য।


{/* 09. How can you pass data from one component to another in React? */}
=> 1. Parent to Child :
React-এ parent-to-child ডেটা পাস করার জন্য  props ব্যবহার করতে হয় । Parent কম্পোনেন্ট Child কম্পোনেন্টে ডেটা পাঠায় এবং Child কম্পোনেন্ট সেই ডেটা props হিসেবে গ্রহণ করে।
import React from 'react';

// Child কম্পোনেন্ট
function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
}
// Parent কম্পোনেন্ট
function ParentComponent() {
  const message = "Hello from Parent!";
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
}
export default ParentComponent;

2. Child to Parent :
React-এ child-to-parent ডেটা পাস করার জন্য, Parent কম্পোনেন্টে একটি ফাংশন পাস করতে হয় এবং সেই ফাংশনটি Child কম্পোনেন্টে কল করা হয়। Child কম্পোনেন্ট তার ডেটা সেই ফাংশনকে পাঠিয়ে Parent কম্পোনেন্টে আপডেট করে।

import React, { useState } from 'react';
// Child কম্পোনেন্ট
function ChildComponent(props) {
  const handleClick = () => {
  props.onMessageChange("Hello from Child!");
  };
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}
// Parent কম্পোনেন্ট
function ParentComponent() {
  const [message, setMessage] = useState("");
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>{message}</p>
      <ChildComponent onMessageChange={handleMessageChange} />
    </div>
  );
}
export default ParentComponent;

3. Context API (Global Data Sharing)
যখন অনেক গুলো কম্পোনেন্টের মধ্যে একই ডেটা শেয়ার করতে হয়, তখন Context API ব্যবহার করা হয়। Context API  props drilling ছাড়াই ডেটা শেয়ার করতে সাহায্য করে।
import React, { useContext, useState } from 'react';
const MessageContext = React.createContext();
function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent");
  return (
    <MessageContext.Provider value={message}>
      <ChildComponent />
    </MessageContext.Provider>
  );
}
function ChildComponent() {
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}
export default ParentComponent;


{/* 10. What is the significance of the key prop in lists? */}
=> key prop-এর গুরুত্ব:
1. React-কে তালিকা আপডেট করার জন্য সাহায্য করা: যখন তালিকায় উপাদানগুলো পরিবর্তিত হয় , তখন key React-কে দ্রুত এবং কার্যকরভাবে বুঝতে দেয় কোন উপাদানটি পরিবর্তিত হয়েছে। এটি DOM ম্যানিপুলেশন এবং পুনঃরেন্ডারিং অপ্টিমাইজ করে।

2. কর্মক্ষমতা উন্নত করা: সঠিক key ব্যবহার করলে React ডিফ  অ্যালগরিদমের মাধ্যমে DOM পরিবর্তনগুলো দ্রুত নির্ধারণ করতে পারে। এটি কর্মক্ষমতাকে উন্নত করে এবং রেন্ডারিং এর সময় কমিয়ে আনে।

3. কোড পূর্বাভাসযোগ্য করা: প্রতিটি উপাদানের অনন্য key থাকলে React তালিকা উপাদানগুলির পুনঃস্থাপন বা পুনর্গঠন করার সময়ও সঠিকভাবে উপাদানগুলির ক্রম এবং আচরণ বজায় রাখে।


{/* 11. How do you handle events in React? */}
=> onClick, onChange, onSubmit, onMouseOver, onFocus / onBlur এই event গুলোর মাধ্যমে সাধারনত event handle করা হয়। 

import React from 'react';
function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <button onClick={handleClick}>Click me</button>
  );
}
export default App;


{/* 12. What are controlled and uncontrolled components in React? */}
=> Controlled Components : 
 Controlled Components হল সেই উপাদান যেগুলোর মান যেগুলো React স্টেট দ্বারা নিয়ন্ত্রিত হয়। এটি React-কে ইনপুটের মান সম্পর্কে "কন্ট্রোল" দেয় এবং উপাদানের মান আপডেট করতে স্টেট ব্যবহার করে।
import React, { useState } from 'react';
function ControlledComponent() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Current Value: {value}</p>
    </div>
  );
}
export default ControlledComponent;

Uncontrolled Components :
Uncontrolled Components হল সেই উপাদান যেগুলোর মান React স্টেটের পরিবর্তে DOM নিজেই নিয়ন্ত্রণ করে। React স্টেটের মাধ্যমে এই ধরনের ইনপুট উপাদান নিয়ন্ত্রিত হয় না; পরিবর্তে, সরাসরি রেফারেন্স  ব্যবহার করে ডেটা অ্যাক্সেস করা হয়।
import React, { useRef } from 'react';
function UncontrolledComponent() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledComponent;


{/* 13. What is a React fragment, and why would you use it? */}
=>  React Fragment হলো একটি বিশেষ ধরণের কম্পোনেন্ট যা একাধিক চাইল্ড এলিমেন্টকে একটি গ্রুপে আবদ্ধ করতে ব্যবহৃত হয়, কিন্তু DOM-এ কোনো অতিরিক্ত নোড তৈরি করে না। সাধারণত JSX কোডে একাধিক এলিমেন্ট ব্যবহার করতে গেলে এগুলোকে একটি  parent এলিমেন্টে আবৃত করতে হয়, কিন্তু অনেক সময় DOM স্ট্রাকচার পরিস্কার রাখতে বা অতিরিক্ত HTML নোড এড়ানোর জন্য React.Fragment ব্যবহার করা হয়।

React Fragment  ব্যবহার করার কারন-
1. DOM স্ট্রাকচার ক্লিন রাখতে: Fragment ব্যবহার করে অপ্রয়োজনীয় wrapper <div> এড়িয়ে DOM স্ট্রাকচার পরিস্কার রাখা যায়, যা ডেভেলপমেন্ট এবং ডিবাগিংয়ের সময় সুবিধাজনক।
2. স্টাইলিং সমস্যা এড়াতে: অতিরিক্ত <div> ব্যবহার করলে CSS স্টাইলিং বা Flexbox/Grid এর মতো কন্টেইনার ভিত্তিক স্টাইলিংয়ে সমস্যা হতে পারে। Fragment এই সমস্যাগুলি এড়াতে সাহায্য করে।
3. পারফরম্যান্স উন্নত করতে: কম DOM নোডের মানে হল ব্রাউজারকে কম কাজ করতে হয়, যা পারফরম্যান্সের জন্য ভালো হতে পারে।


{/* 14. How do you conditionally render elements in React? */}
=> If-else statement ব্যবহার করে ঃ
import React from 'react';
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
export default Greeting;

2.  Ternary Operator ব্যবহার করে: 
import React from 'react';

function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
    </h1>
  );
}
export default Greeting;

3.  Logical AND (&&) অপারেটর ব্যবহার করে:
import React from 'react';

function Notification({ hasUnreadMessages }) {
  return (
    <div>
      {hasUnreadMessages && <p>You have new messages!</p>}
    </div>
  );
}
export default Notification;

4.  Switch Case ব্যবহার করে:
import React from 'react';

function UserStatus({ status }) {
  let message;
  switch (status) {
    case 'online':
      message = <p>User is online</p>;
      break;
    case 'offline':
      message = <p>User is offline</p>;
      break;
    case 'away':
      message = <p>User is away</p>;
      break;
    default:
      message = <p>Status unknown</p>;
  }
  return <div>{message}</div>;
}
export default UserStatus;



{/* 15. What are React Hooks? Name a few commonly used hooks. */}
=> React Hooks হলো একটি নতুন বৈশিষ্ট্য, যা React 16.8 সংস্করণে অন্তর্ভুক্ত করা হয়েছে। এগুলি ফাংশনাল কম্পোনেন্টে স্টেট, লাইফসাইকেল মেথড, এবং অন্যান্য React বৈশিষ্ট্য ব্যবহারের ক্ষমতা প্রদান করে। আগে, স্টেট বা লাইফসাইকেল মেথড শুধুমাত্র ক্লাস কম্পোনেন্টের জন্য ছিল, তবে hooks ব্যবহার করে এখন ফাংশনাল কম্পোনেন্টেও একই কাজ করা যায়।

কয়েকটি common hooks হল-
1. useState()
2. useEffect()
3. useContext()
4. useRef()
5. useReducer()