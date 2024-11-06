// 01. What are some common array methods in JavaScript?
=> JavaScript এ array নিয়ে কাজ করার জন্য কিছু কমন মেথড রয়েছে, যেগুলো ডাটা ম্যানিপুলেশন, ফিল্টারিং, যোগ-বিয়োগ এবং কন্ডিশনাল অপারেশন করতে সহায়ক। নিচে কয়েকটি গুরুত্বপূর্ণ Array মেথড নিয়ে আলোচনা করা হলো।

push(): একটি array এর শেষে নতুন element যোগ করতে ব্যবহৃত হয়।
pop(): একটি array এর শেষ element মুছে ফেলে।
const fruits = ["apple", "banana"];
fruits.push("mango");  // ["apple", "banana", "mango"]
fruits.pop();           // ["apple", "banana"]

shift(): একটি array এর প্রথম element সরিয়ে ফেলে।
unshift(): একটি array এর শুরুতে নতুন element যোগ করে।
const fruits = ["apple", "banana"];
fruits.shift();         // ["banana"]
fruits.unshift("mango"); // ["mango", "banana"]

concat(): দুটি বা ততোধিক array একত্রিত করতে ব্যবহৃত হয়।
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "tomato"];
const combined = fruits.concat(vegetables); // ["apple", "banana", "carrot", "tomato"]

slice(): একটি নির্দিষ্ট অংশ কেটে নিয়ে নতুন array তৈরি করে, মূল array অপরিবর্তিত থাকে।
const fruits = ["apple", "banana", "mango", "orange"];
const sliced = fruits.slice(1, 3); // ["banana", "mango"]

sort(): array এর element গুলোকে অক্ষর বা সংখ্যা অনুযায়ী সাজায়।
const numbers = [3, 1, 4, 2];
numbers.sort(); // [1, 2, 3, 4]

join(): array এর element গুলোকে একটি নির্দিষ্ট separator দিয়ে সংযুক্ত করে একটি string তৈরি করে।
const fruits = ["apple", "banana", "mango"];
const result = fruits.join(", "); // "apple, banana, mango"


// 02. how does map() differ from forEach() in arrays?
=> map() এবং forEach() উভয়ই JavaScript এ array এর উপর লুপ চালানোর জন্য ব্যবহৃত হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। নিচে  ব্যাখ্যা করা হলো:
Map:
1. একটি নতুন array রিটার্ন করে
2. array এর প্রতিটি element প্রক্রিয়াকরণ এবং নতুন array তৈরি করে 
3. চেইনিং সমর্থন করে
4. মূল array অপরিবর্তিত থাকে

ForEach:
1. কিছুই রিটার্ন করে না
2. array এর প্রতিটি element এর উপর কাজ চালায়
3. চেইনিং সমর্থন করে না
4. মূল array অপরিবর্তিত থাকে, তবে সরাসরি কাজ করতে পারে


// 03. Explain the filter() method. How does it work?
=> JavaScript এর filter() মেথডটি array এর উপর ব্যবহার করা হয় এবং এটি একটি নতুন array তৈরি করে যেটিতে শুধু সেই element গুলো থাকে যেগুলো নির্দিষ্ট শর্ পূরণ করে। অর্থাৎ, filter() array এর প্রতিটি element এর উপর একটি function চালায় এবং যেই element গুলো function এর শর্ত পূরণ করে, সেগুলোকে নতুন array তে সংরক্ষণ করে।

filter () method এর কাজ করার পদ্ধতি হলঃ
filter() একটি callback function গ্রহণ করে যা array এর প্রতিটি element এর উপর আলাদাভাবে চালানো হয়।
callback function যদি কোনো element এর জন্য true রিটার্ন করে, তবে সেই element কে নতুন array তে যোগ করা হয়।
callback function যদি কোনো element এর জন্য false রিটার্ন করে, তবে সেই element কে বাদ দেওয়া হয়।
মূল array অপরিবর্তিত থাকে, filter() শুধুমাত্র একটি নতুন array তৈরি করে।

const numbers = [2, 5, 8, 1, 10];
const greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive); // [8, 10]


// 04. What does the reduce() method do, and how is it used?
=> reduce() মেথড array এর প্রতিটি element এর উপর একটি callback function চালায় এবং প্রতিটি ধাপে একটি accumulator  আপডেট করে।
callback function এর দুটি প্রধান পারামিটার থাকে:
1. accumulator - যেখানে আগের ধাপের ফলাফল সংরক্ষিত থাকে।
2. currentValue - বর্তমান element যা callback function এর দ্বারা প্রক্রিয়াকৃত হচ্ছে।
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15


// 05. How do you find the length of a string and reverse it?
=> স্ট্রিং এর দৈর্ঘ্য বের করতে .length প্রপার্টি ব্যবহার করা হয়। উদাহরণস্বরূপ:
const text = "Hello, World!";
const length = text.length;
console.log(length); // 13

জাভাস্ক্রিপ্টে সরাসরি স্ট্রিং রিভার্স করার কোনো মেথড নেই। তবে, আমরা এটি কয়েকটি ধাপের মাধ্যমে করতে পারি:
1. প্রথমে স্ট্রিংটিকে একটি array তে রূপান্তর করতে হবে।
2. এরপর array এর .reverse() মেথড ব্যবহার করে array টি উল্টো করতে হবে।
3. সবশেষে .join('') মেথড ব্যবহার করে array কে আবার স্ট্রিংয়ে রূপান্তর করতে হবে।
const text = "Hello, World!";
const reversedText = text.split('').reverse().join('');
console.log(reversedText); // "!dlroW ,olleH"


// 06. What are template literals, and how can they be used for string manipulation?
=> জাভাস্ক্রিপ্টে Template Literals হলো স্ট্রিং লেখার একটি সহজ উপায়, যা ES6 এ যুক্ত হয়েছে। এটি ব্যাকটিক (``) চিহ্নের ভেতরে লেখা হয় এবং এর মাধ্যমে স্ট্রিং এর ভেতরে ভেরিয়েবল ও এক্সপ্রেশন সহজেই ইনজেক্ট করা যায়।
const name = "Rahim";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // আউটপুট: My name is Rahim and I am 25 years old.


// 07.How do you remove duplicates from an array?
=> জাভাস্ক্রিপ্টে একটি অ্যারে থেকে ডুপ্লিকেট  অপসারণ করার জন্য বিভিন্ন পদ্ধতি রয়েছে। নিচে কয়েকটি  পদ্ধতির উদাহরণ দেখানো হলো:
set: const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // আউটপুট: [1, 2, 3, 4, 5]

filter : const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // আউটপুট: [1, 2, 3, 4, 5]

Reduce: const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);
console.log(uniqueArray); // আউটপুট: [1, 2, 3, 4, 5]
