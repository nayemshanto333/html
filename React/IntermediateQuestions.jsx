// 01. Explain the useState Hook.
=> useState React-এর একটি হুক, যা React 16.8 সংস্করণে যুক্ত হয়েছিল। এটি ফাংশনাল কম্পোনেন্টে স্টেট ম্যানেজ করার জন্য ব্যবহৃত হয়। ক্লাস কম্পোনেন্টে স্টেট পরিচালনার জন্য this.state এবং setState ব্যবহৃত হতো। useState ফাংশনাল কম্পোনেন্টে স্টেটের ডেটা সংরক্ষণ এবং সেটি পরিবর্তন করার সহজ উপায় প্রদান করে। 
// const [state, setState] = useState(initialValue);



// 02. How does the useEffect Hook work?
=> useEffect একটি ফাংশন হিসেবে ডিফাইন করা হয়, যা কম্পোনেন্ট রেন্ডার হওয়ার পর চলমান হয়।
// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1); 
//   };
//   return (
//     <div>
//       <p>Count: {count}</p> 
//       <button onClick={handleIncrement}>Increase</button>
//     </div>
//   );
// }
// export default Counter;


// 03. How can you make an API call in React?
=>  fetch API ব্যবহার করে React-এ API কল করা:
// import React, { useState, useEffect } from 'react';
// function DataFetchingComponent() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json()) // JSON-এ কনভার্ট
//       .then((json) => {
//         setData(json);
//         setLoading(false); 
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); 
//       });
//   }, []); 
//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default DataFetchingComponent;


// 04. What are Higher-Order Components (HOCs)? Give an example.
=> Higher-Order Components (HOCs) হলো একটি React প্যাটার্ন, যা একটি কম্পোনেন্টকে ইনপুট হিসেবে গ্রহণ করে এবং একটি নতুন কম্পোনেন্ট আউটপুট করে। HOCs মূলত কম্পোনেন্টের লজিক পুনঃব্যবহারের জন্য ব্যবহৃত হয় এবং এটি React-এ ডেকোরেটর প্যাটার্নের মতো কাজ করে।
একটি HOC মূলত একটি ফাংশন যা একটি কম্পোনেন্টকে গ্রহণ করে এবং একটি এনহ্যান্সড  নতুন কম্পোনেন্ট রিটার্ন করে। এটি props, স্টেট, বা অন্য কোনো লজিক অ্যাড করতে পারে যা মূল কম্পোনেন্টে প্রয়োজন।

// import React from 'react';
// function withLoading(Component) {
//   return function WithLoadingComponent({ isLoading, ...props }) {
//     if (isLoading) {
//       return <p>Loading...</p>;
//     }
//     return <Component {...props} />;
//   };
// }
// function DataDisplay({ data }) {
//   return (
//     <div>
//       <h1>Data:</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// const DataDisplayWithLoading = withLoading(DataDisplay);
// function App() {
//   const [loading, setLoading] = React.useState(true);
//   const [data, setData] = React.useState([]);
//   React.useEffect(() => {
//     setTimeout(() => {
//       setData(['Item 1', 'Item 2', 'Item 3']);
//       setLoading(false);
//     }, 2000); 
//   }, []);
//   return <DataDisplayWithLoading isLoading={loading} data={data} />;
// }
// export default App;


// 05. Explain the use of React Context API.
=> React Context API হলো এমন একটি সিস্টেম যা কম্পোনেন্টগুলির মধ্যে ডেটা (যেমন, থিম, ইউজার ডেটা, ভাষা) সহজে শেয়ার করতে দেয়, প্রোপ চেইনের মাধ্যমে "prop drilling" এড়িয়ে। এটি মূলত তখন ব্যবহৃত হয় যখন একটি ডেটা বা স্টেট অনেক স্তরের কম্পোনেন্টের মধ্য দিয়ে প্রবাহিত হওয়া প্রয়োজন হয় এবং প্রতিটি স্তরে প্রোপস পাস করা ক্লান্তিকর হয়ে পড়ে।


// 06. How does the Context API differ from props drilling?
=> Context API এবং Props Drilling এর মধ্যে প্রধান পার্থক্য:
1. ডেটা শেয়ারিং পদ্ধতি:
Props Drilling: ডেটা পাস করতে হলে প্রতিটি মধ্যবর্তী কম্পোনেন্টকে props পাস করতে হয়।
Context API: ডেটা গ্লোবালভাবে context-এর মাধ্যমে সরাসরি যে কোনো কম্পোনেন্টে অ্যাক্সেসযোগ্য হয়।

2. কোড জটিলতা:
Props Drilling: বড় ও জটিল হায়ারার্কিতে Props Drilling-এর জন্য অনেক কোড লেখা লাগে এবং এটি রক্ষণাবেক্ষণ করা কঠিন হয়ে যেতে পারে।
Context API: এটি props পাস করার জটিলতাকে কমিয়ে দেয় এবং কম্পোনেন্টগুলির মধ্যে সহজে ডেটা শেয়ারিং সম্ভব করে।

3. ব্যবহার ক্ষেত্র:
Props Drilling: যখন ডেটা কম স্তরে পাস করার প্রয়োজন হয় এবং Context ব্যবহার করা অতিরিক্ত মনে হয়।
Context API: যখন ডেটা অনেক স্তরের কম্পোনেন্টে শেয়ার করা প্রয়োজন এবং প্রোপ ড্রিলিং এড়াতে হবে।


// 07. What are refs, and when should you use them in React?
=> Refs হলো React-এর এমন একটি বিশেষ ফিচার যা আপনাকে DOM (Document Object Model) উপাদান বা React কম্পোনেন্টের ডিরেক্ট এক্সেস দিতে পারে। সাধারণত, React-এ ডেটা ও UI ম্যানেজ করতে declarative approach (state & props) ব্যবহার করা হয়। তবে এমন কিছু পরিস্থিতি থাকে যেখানে সরাসরি DOM ম্যানিপুলেশন প্রয়োজন হয়। সেই সময়ে refs ব্যবহৃত হয়।

// import React, { Component } from 'react';
// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.myInputRef = React.createRef(); 
//   }
//   componentDidMount() {
//     this.myInputRef.current.focus();
//   }
//   render() {
//     return (
//       <input type="text" ref={this.myInputRef} />
//     );
//   }
// }
// export default MyComponent;


// 08. What is the useRef Hook, and how is it different from createRef?
=> React Hooks-এর অংশ হিসেবে useRef ফাংশনাল কম্পোনেন্টে ব্যবহৃত হয় এবং এটি React 16.8 ভার্সনে চালু হয়েছে। এটি একটি mutable object প্রদান করে যা current নামে একটি প্রপার্টি রাখে এবং এটি কোনও DOM এলিমেন্ট বা React উপাদানের রেফারেন্স ধরে রাখতে ব্যবহৃত হয়। useRef-এর একটি বিশেষ বৈশিষ্ট্য হল, এটি কম্পোনেন্ট পুনঃরেন্ডার হওয়ার সময়ও এর মান পরিবর্তিত হলেও রেন্ডার প্রক্রিয়া ট্রিগার করে না।

useRef এবং createRef এর মধ্যে পার্থক্য:

1. কন্টেক্সট :
createRef সাধারণত class components-এ ব্যবহৃত হয়।
useRef মূলত functional components-এ ব্যবহৃত হয়।

2. Mutable Reference:
useRef হুকটি একটি mutable reference প্রদান করে যা পুরো কম্পোনেন্ট লাইফসাইকেল জুড়ে সংরক্ষিত থাকে এবং কম্পোনেন্ট রি-রেন্ডার হওয়ার সময়ও একই থাকে।
createRef প্রতিবার নতুন রেফারেন্স তৈরি করে যখন কম্পোনেন্ট রেন্ডার হয়।

3. Performance Impact:
useRef কম রেন্ডার ট্রিগার করে এবং এটি state পরিবর্তনের ক্ষেত্রে React এর আপডেট প্রক্রিয়াতে হস্তক্ষেপ করে না। এটি state পরিবর্তনের চেয়ে দ্রুত এবং lightweight।
createRef প্রতিবার নতুন reference তৈরির জন্য সাধারণত ব্যবহারিক সীমাবদ্ধতা থাকতে পারে যেখানে mutable reference প্রয়োজন হয়।


// 09. What is the purpose of React.memo?
=> React.memo হল একটি higher-order component যা  React কম্পোনেন্টের পুনঃরেন্ডারিং অপটিমাইজ করতে সাহায্য করে। এটি মূলত  কম্পোনেন্টকে মেমোইজ  করে রাখে এবং শুধুমাত্র যখন তার props পরিবর্তিত হয় তখনই এটি পুনরায় রেন্ডার হয়। React.memo-এর উদ্দেশ্য হল কম্পোনেন্টের প্রয়োজনহীন রেন্ডারিং এড়ানো এবং পারফরম্যান্স উন্নত করা। এটি অনেকটা PureComponent-এর মত কাজ করে, কিন্তু functional components-এর জন্য প্রযোজ্য।


// 10. Explain React lifecycle methods.
=> React কম্পোনেন্টের লাইফসাইকেল বলতে বোঝায় যে একটি কম্পোনেন্ট তৈরির সময় থেকে শুরু করে DOM-এ যুক্ত হওয়া, আপডেট হওয়া এবং শেষে মুছে যাওয়া পর্যন্ত যেসব ধাপ অতিক্রম করে, সেই প্রক্রিয়াটি। React এর Class Components এ বিভিন্ন লাইফসাইকেল মেথড আছে যেগুলো কম্পোনেন্টের বিভিন্ন পর্যায়ে নির্দিষ্ট কাজ করতে ব্যবহৃত হয়।
React কম্পোনেন্টের লাইফসাইকেল তিনটি প্রধান পর্যায়ে বিভক্ত:

1. Mounting:
Mounting পর্যায়ে একটি কম্পোনেন্ট প্রথমবার DOM-এ যুক্ত হয়। এই পর্যায়ে কিছু গুরুত্বপূর্ণ মেথড রয়েছে:
constructor(): এটি কম্পোনেন্টের ইনস্ট্যান্স তৈরি করার সময় প্রথমে কল হয়। এটি সাধারণত স্টেট এবং ইনিশিয়াল সেটআপের জন্য ব্যবহৃত হয়।
উদাহরণ:
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
// }
render(): এটি সবচেয়ে গুরুত্বপূর্ণ মেথড। এটি JSX কে DOM-এ রেন্ডার করে। এই মেথডটি React Elements রিটার্ন করে।
componentDidMount(): এটি কম্পোনেন্টটি DOM-এ যোগ হওয়ার পর কল হয়। এটি সাধারণত API কল, DOM ম্যানিপুলেশন বা সাবস্ক্রিপশনের জন্য ব্যবহৃত হয়।

2. Updating: 
আপডেটিং পর্যায়ে একটি কম্পোনেন্ট যখন নতুন প্রপস বা স্টেট পরিবর্তন পায় তখন রেন্ডার হয়। এই পর্যায়ে কিছু মেথড আছে:
shouldComponentUpdate(nextProps, nextState):
এটি  নির্ধারণ করতে দেয় যে কোনও কম্পোনেন্ট আপডেট হবে কিনা। এটি পারফরম্যান্স অপটিমাইজেশনের জন্য ব্যবহৃত হয়।
ডিফল্টভাবে, এটি true রিটার্ন করে।
render(): এটি পুনরায় কম্পোনেন্ট রেন্ডার করার জন্য কল হয়।
componentDidUpdate(prevProps, prevState): এটি আপডেটের পরে চালানো হয়।  যখন DOM বা API কলের উপর নির্ভরশীল কিছু কাজ করতে চায়, তখন এটি উপযুক্ত।

3. Unmounting: 
Unmounting পর্যায়ে একটি কম্পোনেন্ট DOM থেকে সরানো হয়।
componentWillUnmount(): এটি আনমাউন্টের আগে কল হয় এবং ক্লিনআপ অপারেশনের জন্য ব্যবহৃত হয় (যেমন টাইমার ক্লিয়ার করা, সাবস্ক্রিপশন আনসাবস্ক্রাইব করা ইত্যাদি)।

// 11. What are componentDidMount and componentWillUnmount, and when are they used?
=> componentDidMount মেথড:
componentDidMount হল React এর একটি লাইফসাইকেল মেথড যা কম্পোনেন্টটি প্রথমবার DOM-এ যোগ করার পর কল হয়। এটি মাউন্টিং পর্বের একটি অংশ।
componentDidMount শুধুমাত্র তখন কল হবে যখন MyComponent DOM-এ প্রথমবার মাউন্ট হয়।
// import React, { Component } from 'react';
// class MyComponent extends Component {
//   componentDidMount() {
//     console.log('Component has mounted.');
//   }
//   render() {
//     return <div>Hello, World!</div>;
//   }
// }
// export default MyComponent;

componentWillUnmount মেথড: 
componentWillUnmount হল React এর একটি লাইফসাইকেল মেথড যা কম্পোনেন্টটি DOM থেকে সরানোর আগে কল হয়। এটি আনমাউন্টিং পর্বের একটি অংশ।
// import React, { Component } from 'react';
// class MyComponent extends Component {
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log('Timer is running');
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log('Component will unmount.');
//   }
//   render() {
//     return <div>Watch the console for timer messages.</div>;
//   }
// }
// export default MyComponent;


// 12.Explain the useCallback Hook and why it is useful.
=> React এর useCallback হুকটি একটি Performance Optimization Hook যা ফাংশন কম্পোনেন্টে ব্যবহৃত হয়। এটি এমন একটি ফাংশন রিটার্ন করে যা শুধুমাত্র নির্দিষ্ট নির্ভরশীলতা পরিবর্তন হলে পুনরায় তৈরি হয়। এর মাধ্যমে অপ্রয়োজনীয় রি-রেন্ডার এড়িয়ে পারফরম্যান্স উন্নত করা সম্ভব হয়।

useCallback হুকের তাৎপর্য: 
1. অনিচ্ছাকৃত রি-রেন্ডার এড়ানো: যখন কোনও কম্পোনেন্টে প্রচুর child কম্পোনেন্ট থাকে এবং একটি নির্দিষ্ট কলব্যাক ফাংশন প্রতিবার নতুন করে তৈরি হলে, useCallback তা প্রতিরোধ করতে সাহায্য করে।
2. Performance Optimization: এটি React.memo এর সাথে ব্যবহার করলে, শিশু কম্পোনেন্টের অপ্রয়োজনীয় রি-রেন্ডার হ্রাস করা যায়।
3. useEffect এবং অন্যান্য হুকের ডিপেন্ডেন্সি হিসেবে ফাংশন ব্যবহার করার ক্ষেত্রে: useCallback ব্যবহার করলে নিশ্চিত করা যায় যে useEffect কেবল নির্দিষ্ট পরিস্থিতিতে পুনরায় চালু হবে।


// 13. How is the useMemo Hook used in React?
// => import React, { useState, useMemo } from 'react';
// function ExpensiveCalculationComponent() {
//   const [number, setNumber] = useState(0);
//   const [increment, setIncrement] = useState(0);
//   const squaredNumber = useMemo(() => {
//     console.log('Calculating square...');
//     return number * number;
//   }, [number]); 
//   return (
//     <div>
//       <h2>Square: {squaredNumber}</h2>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setIncrement(increment + 1)}>
//         Increment: {increment}
//       </button>
//     </div>
//   );
// }
// export default ExpensiveCalculationComponent;


// 14. What are controlled components in forms?
=> Controlled Components হল এমন React কম্পোনেন্ট যেগুলোতে form elements (যেমন input, textarea, select) এর মান এবং ব্যবহারকারীর ইনপুট সম্পূর্ণভাবে React state দ্বারা নিয়ন্ত্রিত হয়। React-এ Controlled Components ব্যবহার করার সময়, form elements গুলোতে মান (value) সেট করা এবং তা পরিবর্তনের উপর নজর রাখার জন্য React state ব্যবহার করা হয়।

উদাহরণ: 
import React, { useState } from 'react';
function ControlledForm() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h2>Controlled Component Example</h2>
      <input
        type="text"
        value={inputValue} 
        onChange={handleChange} 
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
}
export default ControlledForm;
