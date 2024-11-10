// 01. hat are React portals, and when should you use them?
=> React Portals এমন একটি ফিচার যা React-এ  একটি কম্পোনেন্টকে তার প্যারেন্ট DOM হায়ারার্কির বাইরে রেন্ডার করতে দেয়। সাধারণত, React কম্পোনেন্টগুলি DOM ট্রির মধ্যে নির্দিষ্টভাবে তাদের প্যারেন্ট কম্পোনেন্টের অধীনে রেন্ডার হয়। তবে portals ব্যবহার করে  একটি চাইল্ড কম্পোনেন্টকে DOM-এর অন্য কোনও স্থানে রেন্ডার করা যায়, যদিও এটি React কম্পোনেন্ট হায়ারার্কির মধ্যে একই রকমভাবে কাজ করবে।

React Portals-এর ব্যবহার:
React portals তৈরি করতে, ReactDOM.createPortal(child, container) ফাংশনটি ব্যবহার করা হয়। এখানে:
child: React এলিমেন্ট বা কম্পোনেন্ট যা আপনি রেন্ডার করতে চান।
container: সেই DOM এলিমেন্ট যেখানে এই কম্পোনেন্টটি রেন্ডার হবে।


// 02.What is code-splitting, and how do you implement it in React?
=> Code Splitting হলো এমন একটি কৌশল যা  অ্যাপ্লিকেশনকে ছোট ছোট অংশে বিভক্ত করে, ফলে অ্যাপ্লিকেশন লোডের সময় এবং কর্মক্ষমতা উন্নত হয়। সাধারণত বড় অ্যাপ্লিকেশনগুলি একবারে পুরো কোড লোড করে, যা বিশেষ করে বড় স্কেল অ্যাপ্লিকেশনগুলির ক্ষেত্রে লোডিং টাইম বেশি করতে পারে। Code Splitting ব্যবহারের ফলে অ্যাপ্লিকেশনটিকে প্রয়োজন অনুযায়ী মডিউল লোড করা যায়, যাতে প্রাথমিকভাবে কম কোড লোড হয় এবং ব্যবহারকারীর জন্য অ্যাপ্লিকেশনটি দ্রুত লোড হয়।

React-এ Code Splitting এর জন্য উদাহরণ:
// import React, { Suspense } from 'react';
// const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));
// function App() {
//   return (
//     <div>
//       <h1>Main Application</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyLoadedComponent />
//       </Suspense>
//     </div>
//   );
// }
// export default App;


// 03. Explain lazy loading and how you can implement it in React.
=> Lazy Loading হলো এমন একটি কৌশল যা নির্দিষ্ট অংশ বা মডিউলগুলোকে তখনই লোড করে যখন সেগুলো ব্যবহারের প্রয়োজন হয়। এটি বিশেষভাবে উপকারী বড় অ্যাপ্লিকেশনগুলোর ক্ষেত্রে, যেখানে সবকিছু একবারে লোড করলে অ্যাপ্লিকেশন ধীরে কাজ করতে পারে এবং ব্যবহারকারীর অভিজ্ঞতা খারাপ হতে পারে। Lazy Loading এর মাধ্যমে প্রাথমিকভাবে শুধুমাত্র প্রয়োজনীয় অংশ লোড করা হয় এবং অতিরিক্ত অংশগুলো পরে লোড করা হয় যখন ব্যবহারকারী সেখানে পৌঁছায়।

Lazy Loading এর উদাহরণ:
// import React, { Suspense } from 'react';
// const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));
// function App() {
//   return (
//     <div>
//       <h1>Welcome to my React App</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <MyLazyComponent />
//       </Suspense>
//     </div>
//   );
// }


// 04. What is Concurrent Mode in React, and what are its benefits?
=> Concurrent Mode হল React-এর একটি বৈশিষ্ট্য যা React অ্যাপ্লিকেশনের পারফরম্যান্স ও ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে সহায়ক। এটি React 18-এর আধুনিক বৈশিষ্ট্যের অংশ এবং React এর traditional synchronous rendering মডেল থেকে একটি বড় পরিবর্তন নিয়ে আসে। Concurrent Mode এর মাধ্যমে React অনেক কাজ একসাথে সামলাতে পারে এবং প্রয়োজন অনুযায়ী rendering পজ করতে বা বাতিল করতে পারে, যা smoother এবং responsive user interface  নিশ্চিত করে।

Concurrent Mode-এর সুবিধা:
1. high পারফরম্যান্স: React বিভিন্ন কাজের মধ্যে সময় ভাগ করতে পারে, যা ভারী কাজগুলোর ক্ষেত্রে UI-কে ব্যস্ত হয়ে পড়া থেকে রক্ষা করে।
2. Responsive UI: ব্যবহারকারীর action দ্রুত handle করা হয় কারণ rendering কার্যক্রম interruptible। এটি ব্যবহারকারীর experience smooth এবং বেশি responsive করে তোলে।
3. অ্যাসিঙ্ক্রোনাস লোডিং সহজ: Suspense এবং Concurrent Mode ডেটা লোডিং এবং asynchronous operations সহজ এবং ব্যবহারকারী-বান্ধব করে।
4. Improved User Experience: ব্যবহারকারী যখন স্ক্রল করছে, নতুন ডেটা লোড হচ্ছে, অথবা input দিচ্ছে, তখন UI-টি ধীরগতির না হয়ে স্বাভাবিকভাবেই রেসপন্স করে।


// 05. How do you implement Error Boundaries in React?
=> Error Boundary তৈরি করার উদাহরণ:
// import React, { Component } from 'react';
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false }; // ত্রুটি ট্র্যাক করার জন্য state তৈরি করা
//   }
//   // getDerivedStateFromError এর মাধ্যমে error state আপডেট করা
//   static getDerivedStateFromError(error) {
//     return { hasError: true }; // যখন ত্রুটি ঘটে, hasError true হয়ে যাবে
//   }
//   // componentDidCatch ত্রুটির বিস্তারিত log করবে
//   componentDidCatch(error, info) {
//     console.log('Error caught by Error Boundary:', error);
//     console.log('Error information:', info);
//   }
//   render() {
//     // যদি error থাকে তবে fallback UI দেখাবে, অন্যথায় children প্রদর্শন করবে
//     if (this.state.hasError) {
//       return <h1>Something went wrong. Please try again later.</h1>;
//     }
//     return this.props.children;
//   }
// }
// export default ErrorBoundary;


// 06. What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?
=> CSR এবং SSR এর মধ্যে পার্থক্য:
Client-Side Rendering:
1. JavaScript ব্রাউজারে রেন্ডার হয়।
2. প্রথম লোড ধীর হতে পারে
3. SEO চ্যালেঞ্জিং হয়
4. একবার পেজ লোড হয়ে গেলে দ্রুত নেভিগেশন।
5. খুব রেসপন্সিভ, UI সাধারণত ফ্লুয়েড এবং স্মুথ।

Server-Side Rendering:
1. 	সার্ভার ক্লায়েন্টের জন্য HTML তৈরি করে পাঠায়।
2. প্রথম লোড দ্রুত, কারণ HTML সম্পূর্ণ রেন্ডার হয়ে আসে।
3. SEO উপযোগী, কারণ সার্ভার থেকে পূর্ণ HTML পাঠানো হয়।
4. প্রতিটি পেজ রেন্ডার সার্ভার থেকে নতুনভাবে আসে, ধীর হতে পারে।
5. কিছুটা স্থির UI হতে পারে


// 07. What is Server-Side Rendering (SSR) in React, and how does it work?
=> Server-Side Rendering (SSR) হল একটি পদ্ধতি যেখানে React অ্যাপ্লিকেশনটি ক্লায়েন্টে পাঠানোর আগে সার্ভারেই সম্পূর্ণভাবে রেন্ডার করা হয়। অর্থাৎ, React অ্যাপ্লিকেশনটি প্রথমবার যখন সার্ভারে রেন্ডার হয়, তখন সার্ভার সম্পূর্ণ HTML তৈরি করে এবং সেই HTML ক্লায়েন্টে পাঠানো হয়। এরপর ক্লায়েন্টে JavaScript লোড হলে অ্যাপ্লিকেশনটি ইন্টারঅ্যাক্টিভ হতে পারে।

SSR যেভাবে কাজ করে-
1. প্রথম রেন্ডারিং সার্ভারে: React অ্যাপ্লিকেশন প্রথমে সার্ভারে রেন্ডার হয়। সার্ভার React উপাদানগুলোর JSX কোড প্রক্রিয়া করে একটি পূর্ণ HTML পেজ তৈরি করে, যা ক্লায়েন্টে পাঠানো হয়। এতে ব্রাউজারে পেজ দ্রুত লোড হয়।

2. React রেন্ডারিং: React অ্যাপ্লিকেশনটি ReactDOMServer.renderToString() মেথড ব্যবহার করে সার্ভারে HTML স্ট্রিংে রেন্ডার হয়। এই HTML স্ট্রিংটি ক্লায়েন্টে প্রেরিত হয়।

3. JavaScript ক্লায়েন্টে লোড: ক্লায়েন্ট যখন সার্ভারের HTML পেজটি পেয়ে যায়, তখন React এর hydrate() মেথড ব্যবহার করা হয়, যা সার্ভার থেকে প্রাপ্ত HTML পেজের সাথে React অ্যাপ্লিকেশনটির স্টেট এবং ইন্টারঅ্যাকটিভিটি সংযুক্ত করে।

4. পুনরায় রেন্ডারিং: একবার JavaScript ফাইলগুলো ক্লায়েন্টে লোড হয়ে গেলে, React অ্যাপ্লিকেশনটি ক্লায়েন্ট সাইডে আবার রেন্ডার হতে থাকে এবং এটি ইন্টারঅ্যাকটিভ হয়ে ওঠে।


// 08. How does Next.js improve SSR and static generation in React applications?
=>  Server-Side Rendering (SSR) in Next.js:
1. Server-Side Rendering (SSR) হল যখন পেজের HTML সার্ভার সাইডে রেন্ডার করা হয় এবং তারপর ক্লায়েন্টে পাঠানো হয়। Next.js এই পদ্ধতিটি সহজ করে দেয়।

2. React + SSR: React অ্যাপ্লিকেশন যেখানে সার্ভারের মাধ্যমে পেজ রেন্ডারিং করা হয়, সেখানে Next.js স্বয়ংক্রিয়ভাবে SSR রেন্ডারিং সক্ষম করে, যাতে সার্ভার রেন্ডার করা HTML ক্লায়েন্টে সরাসরি পাঠানো হয়। ফলে ব্রাউজারের প্রাথমিক লোড দ্রুত হয় এবং SEO উন্নত হয়।

3. getServerSideProps: Next.js-এর getServerSideProps() ফাংশন ব্যবহৃত হয় সার্ভার সাইডে ডাটা ফেচিংয়ের জন্য। যখন কোনো পেজ রিকোয়েস্ট করা হয়, তখন এটি সার্ভারে রেন্ডার হয় এবং ডাইনামিক ডাটা নিয়ে আসতে সাহায্য করে।

উদাহরণ:
// import React from 'react';
// export async function getServerSideProps() {
//   // সার্ভার সাইডে ডাটা ফেচিং
//   const res = await fetch('https://api.example.com/data');
//   const data = await res.json();
//   return {
//     props: { data }, // পেজে ডাটা পাঠানো হবে
//   };
// }
// const MyPage = ({ data }) => {
//   return (
//     <div>
//       <h1>Data from Server</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };
// export default MyPage;

Static Site Generation (SSG) in Next.js:
1. Static Site Generation (SSG) হল একটি প্রক্রিয়া যেখানে পেজের HTML বিল্ড টাইমে রেন্ডার হয় এবং পরে স্ট্যাটিক ফাইল হিসেবে সার্ভ করা হয়। Next.js স্ট্যাটিক পেজ রেন্ডারিং অত্যন্ত কার্যকরী এবং দ্রুত করতে সহায়তা করে।

2. React + SSG: Next.js এর getStaticProps() ফাংশন ব্যবহার করে React অ্যাপ্লিকেশনে Static Generation সহজে ইমপ্লিমেন্ট করা যায়। এর ফলে পেজের HTML বিল্ড টাইমে রেন্ডার হয় এবং ফাস্ট লোডিং টাইম পায়।

3. getStaticProps: এই ফাংশনটি কম্পাইল টাইমে ডাটা ফেচিং করে এবং এই ডাটা কম্পাইল হওয়া HTML এর সাথে সংযুক্ত করা হয়।

উদাহরণ:
// import React from 'react';
// export async function getStaticProps() {
//   const res = await fetch('https://api.example.com/data');
//   const data = await res.json();
//   return {
//     props: { data }, 
//   };
// }
// const MyPage = ({ data }) => {
//   return (
//     <div>
//       <h1>Static Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };
// export default MyPage;



// 09. What are the benefits of using Next.js over a standard React app?
=> Next.js ব্যবহার করার সুবিধা একটি স্ট্যান্ডার্ড React অ্যাপ্লিকেশন এর তুলনায়:
1. Server-Side Rendering (SSR) সমর্থন
Next.js ডিফল্টভাবে Server-Side Rendering (SSR) সমর্থন করে, যার ফলে পেজগুলি সার্ভার সাইডে রেন্ডার হয় এবং তারপর ক্লায়েন্টে পাঠানো হয়। এতে SEO উন্নত হয় এবং প্রাথমিক লোডিং সময় কমে যায়।
React: React শুধুমাত্র ক্লায়েন্ট সাইডে রেন্ডার হয়। এটি সার্ভার সাইড রেন্ডারিং সমর্থন করে না, কিন্তু কিছু বাইরের লাইব্রেরি (যেমন ReactDOMServer) দিয়ে এটি করতে হয়।
Next.js: Next.js-এ  খুব সহজেই getServerSideProps ব্যবহার করে SSR সক্ষম করা যায়। এটি ডাইনামিক কন্টেন্টের জন্য খুবই কার্যকরী।

2. Static Site Generation (SSG) সমর্থন
Next.js স্ট্যাটিক সাইট জেনারেশনের জন্য getStaticProps এবং getStaticPaths ফিচার প্রদান করে। এতে বিল্ড টাইমে ডাটা ফেচিং এবং পেজ রেন্ডারিং করা হয়, যা দ্রুত এবং SEO-friendly।
React: React স্ট্যাটিক সাইট জেনারেশন সমর্থন করে না। তবে,  এটি নিজে কনফিগার করে কাজ করতে পারে, যেমন Gatsby.js দিয়ে।
Next.js: getStaticProps দিয়ে  সাইটের স্ট্যাটিক পেজগুলি প্রি-রেন্ডার করতে পারে, যা SEO এবং পারফরমেন্স উন্নত করে।

3. API Routes
Next.js এ API Routes ফিচার রয়েছে, যা  React অ্যাপ্লিকেশনে সার্ভার সাইড API তৈরি করতে সাহায্য করে।  এটি ব্যবহার করে সার্ভার সাইড ফাংশনালিটি যেমন ডাটা ফেচিং বা ফর্ম সাবমিশন পরিচালনা করে।
React: React নিজে API Routes সমর্থন করে না, তাই  এক্সটার্নাল সার্ভার (যেমন Express.js) ব্যবহার করতে হয়।
Next.js: API Routes ব্যবহার করে  React অ্যাপ্লিকেশনেই সার্ভার সাইড কোড লিখতে পারেন, যা ডেভেলপমেন্ট প্রক্রিয়াকে সহজ এবং দ্রুত করে তোলে।

4. File-based Routing
Next.js-এ file-based routing ব্যবহৃত হয়। এর মানে হল যে, pages/ ফোল্ডারে কোনো ফাইল তৈরি করলে সেটা স্বয়ংক্রিয়ভাবে রুট হিসাবে ব্যবহৃত হয়। এটি রাউটিং সেটআপ খুবই সহজ করে তোলে।
React: React অ্যাপ্লিকেশনগুলিতে রাউটিং সেটআপ করতে  React Router অথবা অন্য কোনো রাউটিং লাইব্রেরি ব্যবহার করতে হয়।
Next.js: Next.js স্বয়ংক্রিয়ভাবে ফাইল-ভিত্তিক রাউটিং পরিচালনা করে, এবং  pages/ ফোল্ডারে ফাইল তৈরি করে সহজেই রুট তৈরি করে



// 10. What are Suspense and Concurrent Mode in React?
=> 1. Suspense in React
Suspense হল একটি React ফিচার যা লেজি লোডিং এবং ডাটা ফেচিংয়ের জন্য ব্যবহৃত হয়। এটি অ্যাপ্লিকেশনকে ইউজারকে ধীরে ধীরে রেন্ডার করার অনুমতি দেয়, যাতে অ্যাপ্লিকেশনটির পারফরম্যান্স আরও দ্রুত হয় এবং লোডিং সময় কমানো যায়।

2. Concurrent Mode in React
Concurrent Mode একটি এক্সপেরিমেন্টাল ফিচার যা React অ্যাপ্লিকেশনগুলিকে আরো প্রতিক্রিয়াশীল এবং ইন্টারেক্টিভ করতে সাহায্য করে। এটি অ্যাপ্লিকেশন রেন্ডারিংয়ের জন্য একটি নতুন মেকানিজম ব্যবহার করে যাতে React অ্যাপ্লিকেশনগুলো অযথা ব্যস্ত না হয় এবং ব্যবহারকারীর একশনগুলো দ্রুত রেসপন্ড করতে পারে।


// 11. How do you handle asynchronous data with Suspense in React?
=> React Suspense একটি শক্তিশালী ফিচার, যা অ্যাসিঙ্ক্রোনাস ডাটা লোডিং হ্যান্ডল করতে ব্যবহার করা হয়। এটি মূলত React কম্পোনেন্ট লোডিংয়ের সময় একটি "সাসপেন্স" স্টেট প্রদান করে, যাতে UI আপডেট হওয়ার আগে অ্যাসিঙ্ক্রোনাস ডাটা রেন্ডার করা যায়। React-এর এই ফিচারটি ব্যাকগ্রাউন্ডে ডাটা লোড করা এবং ব্যবহারকারীদের একটি সুন্দর লোডিং অভিজ্ঞতা প্রদান করতে সাহায্য করে।
// import React, { Suspense } from 'react';
// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Successfuly loaded");
//     }, 2000); 
//   });
// };
// const DataFetchingComponent = () => {
//   const dataPromise = fetchData();
//   throw dataPromise;
// };
// function App() {
//   return (
//     <div>
//       <h1>React Suspense Example</h1>
//       <Suspense fallback={<div>loading...</div>}>
//         <DataFetchingComponent />
//       </Suspense>
//     </div>
//   );
// }
// export default App;


// 12. What are custom hooks in React, and why would you use them?
=> Custom Hooks হলো  নিজের তৈরি করা Hooks যা React-এর বিদ্যমান Hooks (যেমন useState, useEffect ইত্যাদি) ব্যবহার করে একটি বিশেষ ফাংশনালিটি বা লজিক এক্সট্র্যাক্ট করে। Custom Hooks React ফাংশনাল কম্পোনেন্টে কোডের পুনঃব্যবহারযোগ্যতা বৃদ্ধি করতে সাহায্য করে। এগুলি সাধারণ JavaScript ফাংশনের মতোই কাজ করে, তবে এগুলির নাম use দিয়ে শুরু হয় এবং React Hooks-এর নিয়ম মেনে চলে।

Custom Hooks  ব্যবহার করার কারণ-
1. কোডের পুনঃব্যবহারযোগ্যতা:  যদি একটি নির্দিষ্ট লজিক বা কার্যকলাপ বিভিন্ন কম্পোনেন্টে বারবার ব্যবহার করতে চায়, তবে Custom Hooks ব্যবহার করে সেই কোড সহজেই পুনঃব্যবহারযোগ্য করা সম্ভব।
2. কোড ক্লিন এবং মেইনটেইনেবল রাখা: কম্পোনেন্ট থেকে লজিক আলাদা করে Custom Hooks তৈরি করলে কোড ক্লিন এবং আরও সহজে পড়া যায়।
3. কম্পোজেবল লজিক: একাধিক Hooks এবং লজিক একত্রে কম্পোজ করে একটি Custom Hook তৈরি করা যায়, যা কাজের নির্দিষ্ট প্রয়োজন মেটাতে সহায়ক।


// 13. What are the best practices for structuring a large React project?
=> বড় React প্রজেক্টের স্ট্রাকচারিং-এর জন্য পদ্ধতিগুলো হল:
1. ফোল্ডার এবং ফাইল স্ট্রাকচার তৈরি করা
2. কম্পোনেন্টগুলিকে ফাংশনাল এবং পেজ-লেভেল মডিউলে ভাগ করা
3. CSS মডিউল বা Styled-Components ব্যবহার করা
4. Context API বা Redux দিয়ে স্টেট ম্যানেজমেন্ট করা
5. Routes এবং Navigation হ্যান্ডেল করা
6. কোড স্প্লিটিং এবং লেজি লোডিং ব্যবহার করা
7. Custom Hooks ব্যবহার করা
8. ফাইল এবং কম্পোনেন্ট নামকরণ কনভেনশন মেনে চলা
9. লিন্টার এবং ফরম্যাটার ব্যবহার করা
10. Utility ফাইল এবং সার্ভিস লেয়ার ব্যবহার করা
11. Error Boundary কম্পোনেন্ট ব্যবহার করা


// 14. How does the Virtual DOM work in React?
=> React-এ Virtual DOM একটি কার্যকর পদ্ধতি যা অ্যাপ্লিকেশনের ইউজার ইন্টারফেস আপডেট করার জন্য ব্যবহার করা হয়। এটি ব্রাউজারের Real DOM এর উপরে একটি হালকা-ওজনের কপি বা "ভার্চুয়াল" রেপ্রেজেন্টেশন তৈরি করে। 

Virtual DOM এর কাজের পদ্ধতি-
1. কম্পোনেন্ট আপডেট:
যখন একটি React কম্পোনেন্টে ডাটা পরিবর্তন হয় (State বা Props), তখন নতুন ভার্সনে Virtual DOM তৈরি হয়।

2. ডিফ (Diffing) অ্যালগরিদম:
React পুরোনো Virtual DOM এবং নতুন Virtual DOM-এর মধ্যে পার্থক্য খুঁজে বের করার জন্য একটি "ডিফিং" অ্যালগরিদম ব্যবহার করে।
এটি নির্ধারণ করে কোন কোন পরিবর্তনগুলি UI-তে প্রয়োগ করতে হবে।

3. প্যাচ (Patching) প্রক্রিয়া:
React শুধুমাত্র পরিবর্তিত নোডগুলোকে Real DOM-এ আপডেট করে ।
ফলে পুরো DOM পুনরায় রেন্ডার না করেই প্রয়োজনীয় পরিবর্তন করা সম্ভব হয়, যা পারফরম্যান্সের উন্নতি করে।


// 15. How does React’s reconciliation algorithm work?
=> Reconciliation হলো React-এর সেই প্রক্রিয়া যার মাধ্যমে এটি পরিবর্তনগুলো Virtual DOM এবং Real DOM-এর মধ্যে সঠিকভাবে প্রয়োগ করে। React একটি দক্ষ পদ্ধতি ব্যবহার করে UI আপডেট করতে পারে এবং এটি মূলত Reconciliation Algorithm দ্বারা সম্ভব হয়।

Reconciliation অ্যালগরিদমের কার্য পদ্ধতি হলো- 
1. ডিফ (Diffing) অ্যালগরিদম:
React নতুন Virtual DOM এবং পুরানো Virtual DOM-এর মধ্যে পার্থক্য  নির্ধারণ করার জন্য একটি বিশেষ অ্যালগরিদম ব্যবহার করে।
এটি দুটি স্টেপে কাজ করে:
Tree Comparison: প্রথমে পুরোনো এবং নতুন Virtual DOM ট্রি গঠন করে।
Element Differences: প্রতিটি নোডের পার্থক্য  চিহ্নিত করা হয়।

2. React এ নোড আপডেট :
যদি React একটি নতুন নোড দেখে যা পুরোনো Virtual DOM-এ ছিল না, তখন এটি নতুন নোডটি Real DOM-এ যোগ করে।
যদি একটি নোড মুছে ফেলা হয়, React সেই পুরোনো নোডটি Real DOM থেকে সরিয়ে দেয়।
যদি একটি নোড পরিবর্তিত হয়, React শুধুমাত্র সেই নির্দিষ্ট পরিবর্তনটি Real DOM-এ আপডেট করে, পুরো DOM রেন্ডার করার প্রয়োজন হয় না।

3. Keys ব্যবহার করা:
Reconciliation-এর জন্য React একটি বিশেষ প্রপার্টি key ব্যবহার করে যা লিস্টের ইলিমেন্ট বা ডাইনামিক কম্পোনেন্টগুলির মধ্যে পার্থক্য নির্ধারণে সাহায্য করে।
Key-এর মাধ্যমে React সহজে বুঝতে পারে কোন ইলিমেন্টটি পরিবর্তিত হয়েছে বা মুছে ফেলা হয়েছে।



// 16. Explain how React.StrictMode works and its purpose.
=> React.StrictMode হলো React-এর একটি বিশেষ কম্পোনেন্ট যা অ্যাপ্লিকেশন ডেভেলপমেন্টের সময় ডেভেলপারদের জন্য বিভিন্ন সমস্যা এবং সম্ভাব্য ত্রুটি সনাক্ত করতে সাহায্য করে। এটি শুধুমাত্র ডেভেলপমেন্ট মোডে সক্রিয় থাকে এবং প্রোডাকশন বিল্ডে এর কোনো প্রভাব নেই। এর মূল উদ্দেশ্য হলো ডেভেলপারদের অ্যাপ্লিকেশন কোডে সম্ভাব্য ত্রুটি বা অবাঞ্ছিত আচরণ চিহ্নিত করা, উন্নত কোড মান বজায় রাখা, এবং ভবিষ্যতের React আপডেটের সাথে সামঞ্জস্যপূর্ণ হতে সাহায্য করা।

React.StrictMode-এর কাজ:
1. অ্যান্টি-প্যাটার্ন সনাক্ত করা:
React.StrictMode এমন কিছু কোড প্যাটার্ন সনাক্ত করতে সাহায্য করে যেগুলি অনুচিত বা অ-প্রস্তাবিত হতে পারে। এটি নিশ্চিত করে যে কোডটি আরও স্থিতিশীল ও শক্তিশালী।

2. Deprecated API-গুলো চিহ্নিত করা:
React ভবিষ্যতে যেসব API অব্যবহৃত বা Deprecated হবে, StrictMode সেই API ব্যবহার সম্পর্কে সতর্ক করে, যাতে ডেভেলপাররা সেগুলি বদলাতে পারেন।

3. Double Rendering:
ডেভেলপমেন্টের সময়, এটি কিছু Lifecycle Methods  ডাবল রেন্ডার করে যাতে side-effects বা অনাকাঙ্ক্ষিত কার্যকলাপ সনাক্ত করা যায়।
অনুমানযোগ্য কোড ব্যবহার:
React.StrictMode নিশ্চিত করে যে কোডে React-এর async rendering behaviour, যেমন "ক্লিনআপ ফাংশন" বা সঠিক lifecycle ব্যবহার করা হচ্ছে।


// 17. How do you prevent unnecessary re-renders in React?
=> 1. React.memo ব্যবহার করে
// import React from 'react';
// const MyComponent = React.memo(({ propValue }) => {
//   console.log('Component rendered');
//   return <div>{propValue}</div>;
// });

2. shouldComponentUpdate ব্যবহার করে 
// import React, { Component } from 'react';
// class MyComponent extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.propValue !== this.props.propValue;
//   }
//   render() {
//     console.log('Component rendered');
//     return <div>{this.props.propValue}</div>;
//   }
// }

3. PureComponent ব্যবহার করে
// import React, { PureComponent } from 'react';
// class MyComponent extends PureComponent {
//   render() {
//     console.log('Component rendered');
//     return <div>{this.props.propValue}</div>;
//   }
// }

4. useCallback Hook ব্যবহার করে
// import React, { useCallback, useState } from 'react';
// const MyComponent = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []); 
//   return <button onClick={handleClick}>Click me</button>;
// };



// 18. Explain how to debounce or throttle a function in React.
=> Debouncing:
Debouncing একটি ফাংশনকে নির্দিষ্ট সময়ের জন্য বিলম্বিত করে এবং শুধুমাত্র যখন নির্দিষ্ট সময়ের মধ্যে আর কোনো ইভেন্ট ট্রিগার হয় না, তখনই ফাংশনটি কল হয়। অর্থাৎ, ব্যবহারকারীর ক্রিয়াকলাপ বন্ধ হওয়ার পর একটি নির্দিষ্ট বিলম্ব পরপর ফাংশনটি চালানো হয়। এটি অতিরিক্ত API কল বা DOM পরিবর্তন রোধে সাহায্য করে।

Throttling:
Throttling একটি ফাংশনকে নির্দিষ্ট সময় অন্তর অন্তর কল করতে বাধ্য করে, অর্থাৎ ইভেন্টটি বারবার ট্রিগার হলেও ফাংশনটি একটি নির্দিষ্ট সময়ের ব্যবধানে শুধুমাত্র একবার কল হয়। এটি স্ক্রোল বা রিসাইজ ইভেন্টের ক্ষেত্রে কার্যকর।


// 19. What are prop types, and why are they used in React?
=> Prop Types হল React কম্পোনেন্টগুলিতে ডেটা টাইপ চেক করার একটি উপায়। এটি নিশ্চিত করে যে, কোনো কম্পোনেন্টে পাঠানো props সঠিক ডেটা টাইপের এবং প্রয়োজনীয় props পাঠানো হয়েছে কিনা। এটি React-এ টাইপ-সংক্রান্ত সমস্যাগুলি সহজেই খুঁজে বের করতে সাহায্য করে এবং ডেভেলপারদের জন্য একটি স্পষ্ট ধারণা দেয় যে কম্পোনেন্টটি কী ধরনের ডেটা আশা করছে।

Prop Types ব্যবহার করার কারণ-
1. ডেটা চেকিং: এটি কম্পোনেন্টে সঠিক টাইপের ডেটা প্রেরিত হচ্ছে কিনা তা যাচাই করে, যা বাগ ও ভুল ব্যবহারের ঝুঁকি হ্রাস করে।
2. সহজ ডকুমেন্টেশন: Prop Types ব্যবহার করলে কম্পোনেন্ট কী ধরনের ডেটা আশা করে তা জানা সহজ হয়। এটি কোড রিডেবিলিটি উন্নত করে।
3. বাগ ধরা সহজ: props-এর ভুল টাইপের কারণে যে সমস্যা হতে পারে তা ডেভেলপমেন্ট সময়েই খুঁজে পাওয়া সম্ভব হয়, ফলে দ্রুত সমস্যার সমাধান করা যায়।


// 20. How do you manage side effects in a React app?
=> React অ্যাপে সাইড ইফেক্ট ম্যানেজ করার পদ্ধতিগুলো:
1. useEffect হুক ব্যবহার করে:
React হুকগুলির মধ্যে useEffect অন্যতম গুরুত্বপূর্ণ একটি হুক যা সাইড ইফেক্ট পরিচালনা করতে ব্যবহৃত হয়। এটি প্রতিটি রেন্ডারের পরে চালিত হয় এবং নির্দিষ্ট ডিপেন্ডেন্সি পরিবর্তন হলে পুনরায় চালানো হয়। useEffect-এ ডেটা ফেচিং, সাবস্ক্রিপশন পরিচালনা, বা ম্যানুয়াল DOM আপডেটের মতো কাজ করা সম্ভব।

2. useLayoutEffect হুক ব্যবহার করে:
useLayoutEffect হল useEffect এর মতো একটি হুক, কিন্তু এটি DOM পরিবর্তনের পরে এবং ব্রাউজার স্ক্রিনে রেন্ডার হওয়ার আগেই চালিত হয়। এটি সাধারণত ব্যবহৃত হয় যখন  ডোম পরিবর্তনের সাথে সরাসরি কাজ করার প্রয়োজন হয়।

3. ক্লাস কম্পোনেন্টে লাইফসাইকেল মেথড ব্যবহার করে :
React ক্লাস কম্পোনেন্টে লাইফসাইকেল মেথডগুলো যেমন componentDidMount, componentDidUpdate এবং componentWillUnmount ব্যবহার করে সাইড ইফেক্ট পরিচালনা করা হয়।


// 21. How does the useReducer Hook work, and when would you use it?
=> useReducer এর কার্য পদ্ধতি হলো-
useReducer হুক একটি রিডিউসার ফাংশন এবং একটি স্টেটের প্রাথমিক মান গ্রহণ করে এবং একটি স্টেট ভ্যালু ও একটি dispatch ফাংশন রিটার্ন করে। এই dispatch ফাংশন ব্যবহার করে অ্যাকশন (action) ট্রিগার করা হয় যা স্টেট আপডেট করে।
useReducer এর সাধারণ সিনট্যাক্স:
const [state, dispatch] = useReducer(reducer, initialState);

useReducer এর ব্যবহার বিধি-
1. কমপ্লেক্স স্টেট লজিক: যখন স্টেট ম্যানেজমেন্ট জটিল হয়ে যায় এবং useState ব্যবহার করে স্টেট পরিবর্তন পরিচালনা করা কঠিন হয়ে পড়ে, তখন useReducer কার্যকর।

2. মাল্টিপল স্টেট আপডেট লজিক: যখন একটি একক স্টেট পরিবর্তনের জন্য একাধিক স্টেট আপডেট প্রয়োজন, যেমন জটিল ফর্ম হ্যান্ডলিং বা গ্লোবাল স্টেট পরিবর্তন।

3. কম্পোনেন্ট ট্রি-তে গভীরভাবে props পাস না করতে: জটিল অ্যাপ্লিকেশনগুলিতে, বিশেষত যখন অনেক অ্যাকশন এবং স্টেট পরিবর্তন করা হয়, useReducer স্টেট ম্যানেজমেন্ট আরও গঠিত এবং সুসংহত করে।



// 22. Explain how to create and use custom hooks.
=> কাস্টম হুক তৈরি:
1. কাস্টম হুক তৈরি করার জন্য একটি সাধারণ JavaScript ফাংশন ব্যবহার করা হয়। 
2. এই ফাংশনের নাম অবশ্যই "use" দিয়ে শুরু করতে হবে, যেমন useCustomHook। 
3. এটি React-এর অন্যান্য হুকগুলোর মতোই স্টেট এবং লাইফসাইকেল মেথড ব্যবহার করতে পারে।
// import { useState } from 'react';
// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
//   const increment = () => setCount(prevCount => prevCount + 1);
//   const decrement = () => setCount(prevCount => prevCount - 1);
//   const reset = () => setCount(initialValue);
//   return { count, increment, decrement, reset };
// }
// export default useCounter;

কাস্টম হুক ব্যবহার :
// import React from 'react';
// import useCounter from './useCounter'; 
// const CounterComponent = () => {
//   const { count, increment, decrement, reset } = useCounter(5);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };
// export default CounterComponent;
