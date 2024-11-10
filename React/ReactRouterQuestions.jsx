// 01. What is React Router, and why is it used?
=> React Router হলো একটি স্ট্যান্ডার্ড লাইব্রেরি যা React অ্যাপ্লিকেশনে রাউটিং  ব্যবস্থাপনা সহজ করে। এটি ব্যবহারকারীদের single-page অ্যাপ্লিকেশন তৈরি করতে সহায়তা করে, যেখানে বিভিন্ন URL এ বিভিন্ন ভিউ বা কম্পোনেন্ট প্রদর্শন করা যায়। React Router ব্যবহার করার মাধ্যমে,  এমন একটি ওয়েব অ্যাপ্লিকেশন তৈরি করা যায় যা নেভিগেশন করে URL পরিবর্তন করে কিন্তু পুরো পৃষ্ঠা রিলোড না করে।
React Router  ব্যবহৃত করার কারন-
1. SPAs (Single Page Applications) এর জন্য উপযুক্ত: React Router অ্যাপ্লিকেশনকে একটি traditional single-page অ্যাপ্লিকেশনের মতো কাজ করার সুযোগ দেয়, যেখানে ভিন্ন ভিউ বা পেজ রেন্ডার করার জন্য URL পরিবর্তন হয় কিন্তু পুরো পৃষ্ঠাটি রিলোড হয় না।
2. ডাইনামিক রাউটিং সাপোর্ট: এটি route parameters এবং path variables সহ ডাইনামিক রাউটিং সমর্থন করে, যা flexible এবং শক্তিশালী routing তৈরি করতে সহায়ক।
3. Component-Based Routing System: প্রতিটি route একটি কম্পোনেন্টের সাথে সম্পর্কিত হয়, যা React এর কম্পোনেন্ট ভিত্তিক আর্কিটেকচারের সাথে ভালভাবে কাজ করে।
4. Nested Routes: React Router nested বা children routes সমর্থন করে, যা parent এবং child components-কে রেন্ডার করতে দেয়।
URL Parameters & Query Strings: React Router ব্যবহার করে URL প্যারামিটার ও কুয়েরি স্ট্রিং সহজে ব্যবস্থাপনা করা যায়।


// 02. Explain the difference between BrowserRouter, HashRouter, and MemoryRouter.
=> সংক্ষেপে পার্থক্য হল:
BrowserRouter: Clean URLs, server-side routing support, SEO-friendly।
HashRouter: URLs with hash fragments (#), client-side only routing, no server configuration required।
MemoryRouter: No URL changes, in-memory history management, suitable for testing or SSR।
কখন কোনটি ব্যবহার করবেন


// 03. How do you handle navigation in React?
=> 1. BrowserRouter (বা HashRouter)
এটি পুরো অ্যাপ্লিকেশনকে একটি রাউটিং কনটেইনার হিসেবে ব্যবহৃত হয়। এটি URL এর ভিত্তিতে নেভিগেশন পরিচালনা করে। BrowserRouter সাধারণত সাধারণ ওয়েব অ্যাপ্লিকেশনে ব্যবহৃত হয়, যেখানে URL-এ পরিষ্কার রুট থাকে।
// import { BrowserRouter } from 'react-router-dom';
// function App() {
//   return (
//     <BrowserRouter>
//       {/* আপনার রাউটগুলি এখানে */}
//     </BrowserRouter>
//   );
// }

2. Route
Route কম্পোনেন্টটি URL পাথের সাথে মিলিয়ে নির্দিষ্ট কম্পোনেন্টটি রেন্ডার করতে ব্যবহৃত হয়। এটি URL-এ যে পাথটি আছে, সেই পাথ অনুযায়ী নির্দিষ্ট কম্পোনেন্টটি রেন্ডার করে।
// import { Route } from 'react-router-dom';
// function App() {
//   return (
//     <Route path="/about" component={About} />
//   );
// }

3. Link
React Router-এর Link কম্পোনেন্টটি ব্যবহার করে আপনি নেভিগেশন লিঙ্ক তৈরি করতে পারেন। এটি সাধারণত অ্যাঙ্কর ট্যাগের মতো কাজ করে, কিন্তু এটি পেজ রিফ্রেশ না করে অ্যাপ্লিকেশনে পেজ পরিবর্তন করে।
// import { Link } from 'react-router-dom';
// function App() {
//   return (
//     <nav>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

4. Switch
Switch কম্পোনেন্টটি রাউটার পাথগুলোর মধ্যে যেকোন একটি পাথ মিলে গেলে শুধু সেই রুটের কম্পোনেন্টটিই রেন্ডার করবে। এটি একটি একক রুটের জন্য ব্যবহৃত হয়, যা মেলানো যায় এমন প্রথম রাউটটি রেন্ডার করে।
// import { Switch, Route } from 'react-router-dom';
// function App() {
//   return (
//     <Switch>
//       <Route path="/home" component={Home} />
//       <Route path="/about" component={About} />
//     </Switch>
//   );
// }

5. Redirect
Redirect কম্পোনেন্টটি ব্যবহার করা হয় যদি আপনি কোন পাথ থেকে অন্য পাথের জন্য নেভিগেট করতে চান। এটি সাধারণত URL রিডাইরেকশন করার জন্য ব্যবহৃত হয়।
// import { Redirect } from 'react-router-dom';
// function App() {
//   return <Redirect to="/home" />;
// }


// 04. What is the use of Switch and Route in React Router?
=> 1. Route:
Route কম্পোনেন্টটি ব্যবহৃত হয় একটি নির্দিষ্ট URL পাথে কোন কম্পোনেন্ট রেন্ডার করতে। যখন URL এর পাথ সেই রুটের সাথে মিলে যাবে, তখন সংশ্লিষ্ট কম্পোনেন্টটি রেন্ডার হবে। Route কম্পোনেন্টের মধ্যে path প্রপ (prop) সেট করা হয়, যেটি URL পাথ নির্দেশ করে এবং component বা render প্রপে সেট করা হয় কম্পোনেন্ট বা ফাংশন যা রেন্ডার হবে।
// import { Route } from 'react-router-dom';
// function App() {
//   return (
//     <div>
//       <Route path="/home" component={Home} />
//       <Route path="/about" component={About} />
//     </div>
//   );
// }

2. Switch:
Switch কম্পোনেন্টটি ব্যবহৃত হয় একাধিক রুটের মধ্যে একটি মাত্র রুট রেন্ডার করার জন্য। Switch কম্পোনেন্টটি যে প্রথম রুটের পাথের সাথে মিলে যাবে, সেটি রেন্ডার করবে এবং পরে অন্য রুটগুলো পরীক্ষা করবে না। এর মানে হলো, Switch কম্পোনেন্টটি রাউটগুলোর মধ্যে প্রথম মিল পাওয়া রুটটি রেন্ডার করবে এবং অন্য রুটগুলোর জন্য কন্টেন্ট রেন্ডার করবে না।
// import { Switch, Route } from 'react-router-dom';
// function App() {
//   return (
//     <Switch>
//       <Route path="/home" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//     </Switch>
//   );
// }


// 05. How can you use dynamic routes in React Router?
=> . ডাইনামিক রুট সেট করা:
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BlogPost from './BlogPost';
// function App() {
//   return (
//     <Router>
//       <Switch>
//         {/* ডাইনামিক রুট */}
//         <Route path="/blog/:id" component={BlogPost} />
//       </Switch>
//     </Router>
//   );
// }
// export default App;
ডাইনামিক প্যারামিটার ব্যবহার করা:
// import React from 'react';
// import { useParams } from 'react-router-dom';
// function BlogPost() {
//   const { id } = useParams(); 
//   return (
//     <div>
//       <h2>Blog Post {id}</h2>
//       <p>Details of the blog post with ID {id}</p>
//     </div>
//   );
// }
// export default BlogPost;


// 06. What is the purpose of useParams Hook?
=> useParams হুকটি React Router-এর একটি বিশেষ হুক, যা  ডাইনামিক রুট থেকে প্যারামিটারগুলি অ্যাক্সেস করতে সাহায্য করে। যখন  একটি রুটে ডাইনামিক প্যারামিটার ব্যবহার করা হয়, useParams হুকটি সেই প্যারামিটারকে একটি অবজেক্ট আকারে রিটার্ন করে। এর মাধ্যমে  URL পাথ থেকে ডাইনামিক ডেটা সংগ্রহ করা যায় এবং সেই ডেটা  কম্পোনেন্টে ব্যবহার করা যায়।

১. রুট সেটআপ:
javascript
Copy code
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPost from './BlogPost';
function App() {
  return (
    <Router>
      <Switch>
        {/* ডাইনামিক রুট */}
        <Route path="/blog/:id" component={BlogPost} />
      </Switch>
    </Router>
  );
}
export default App;

২. useParams হুক ব্যবহার:
javascript
Copy code
import React from 'react';
import { useParams } from 'react-router-dom';
function BlogPost() {
  const { id } = useParams();  

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>Details of the blog post with ID {id}</p>
    </div>
  );
}
export default BlogPost;









