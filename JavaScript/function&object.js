// 01. Explain the concept of closures in JavaScript.
=> Closure হলো JavaScript-এর ফাংশনের একটি বৈশিষ্ট্য যা তার স্কোপের বাইরে থাকা ডেটা ধরে রাখতে সক্ষম। এটি ডেটা প্রাইভেসি, স্টেট ম্যানেজমেন্ট এবং মেমোরি ব্যবস্থাপনার জন্য খুবই উপকারী। Closure ব্যবহার করে JavaScript কোডে কার্যকর ও নিরাপদ ডেটা সংরক্ষণ করা যায়।

function greeting(message) {
    return function(name) {
        console.log(message + ", " + name);
    };
}

const sayHello = greeting("Hello");
sayHello("Alice"); // আউটপুট: Hello, Alice
sayHello("Bob"); // আউটপুট: Hello, Bob

// 02. What is the this keyword, and how does it behave in different contexts?
=> JavaScript-এ this কীওয়ার্ডটি একটি খুব গুরুত্বপূর্ণ এবং কনটেক্সট-নির্ভর বৈশিষ্ট্য। এটি সেই অবজেক্টকে নির্দেশ করে যার মধ্যে বর্তমানে কোডটি এক্সিকিউট হচ্ছে।
Global Context বা Window Context: যখন this গ্লোবাল কনটেক্সটে ব্যবহৃত হয়  তখন এটি window অবজেক্টকে নির্দেশ করে।
function showThis() {
    console.log(this);
}
showThis(); // আউটপুট: Window {…}

. Function Context: যখন this কোনো সাধারণ ফাংশনের ভিতরে ব্যবহৃত হয়, তখনও এটি ডিফল্টভাবে window অবজেক্টকে নির্দেশ করে ।
"use strict";
function showThis() {
    console.log(this);
}
showThis(); // আউটপুট: undefined
Object Context: যখন this একটি অবজেক্টের মেথডে ব্যবহার করা হয়, তখন এটি সেই অবজেক্টকে নির্দেশ করে যার মাধ্যমে মেথডটি কল করা হয়েছে। 
const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // আউটপুট: Alice
Constructor Function Context: Constructor ফাংশনের মধ্যে this নতুনভাবে তৈরি হওয়া অবজেক্টকে নির্দেশ করে। 
function Person(name) {
    this.name = name;
}
const person1 = new Person("Bob");
console.log(person1.name); // আউটপুট: Bob
Event Handler Context: ইভেন্ট হ্যান্ডলার হিসেবে this ব্যবহার করলে এটি সেই HTML এলিমেন্টকে নির্দেশ করে যেটি ইভেন্ট ট্রিগার করেছে।
<button onclick="console.log(this)">Click me</button>

// 03. How do you create an object in JavaScript?
=> const Person = {
    name:"Rahim",
    age: 32,
    job: "designer"
};
console.log(Person)

// 04. What is the difference between null and undefined?
=> null এবং undefined এর মধ্যে পার্থক্য হল-
undefined:
1. মান JavaScript স্বয়ংক্রিয়ভাবে সেট করে
2. মান নির্ধারিত হয়নি বোঝাতে ব্যাবহার করা হয়
3. ডেটা টাইপ undefined
4. তুলনা undefined == null (true), undefined === null (false)
null:
1. প্রোগ্রামার ইচ্ছাকৃতভাবে মান সে্ট করতে পারে
2. ইচ্ছাকৃতভাবে "শূন্য" বা "খালি" মান বোঝাতে ব্যাবহার করা হয়
3. ডেটা টাইপ object
4. তুলনা একই নয়

// 05. How do you copy an object in JavaScript? Explain shallow vs. deep copy.
=> JavaScript-এ কোনো অবজেক্ট কপি করার দুটি পদ্ধতি আছে: shallow কপি এবং  deep কপি।
shallow copy: শ্যালো কপি হলো একটি কপি যা শুধুমাত্র মূল অবজেক্টের প্রথম স্তরের প্রপার্টিগুলোকেই কপি করে। , যদি অবজেক্টের ভেতরে অন্য অবজেক্ট বা অ্যারে থাকে, তাহলে শ্যালো কপি কেবলমাত্র তাদের reference কপি করে। শ্যালো কপি করা অবজেক্টে কোনো পরিবর্তন করলে মূল অবজেক্টেও পরিবর্তন দেখা যাবে।

let original = { name: "Alice", details: { age: 25 } };
let copy = Object.assign({}, original);
copy.name = "Bob";
copy.details.age = 30;
console.log(original); // আউটপুট: { name: "Alice", details: { age: 30 } }
console.log(copy);     // আউটপুট: { name: "Bob", details: { age: 30 } }

deep copy : ডিপ কপি হলো অবজেক্টের প্রতিটি স্তরকে রিকার্সিভ পদ্ধতিতে কপি করা। ডিপ কপিতে মূল অবজেক্টের কোনো নেস্টেড অবজেক্ট বা অ্যারে থাকলে সেগুলোর নতুন রেফারেন্স তৈরি করা হয়, ফলে মূল অবজেক্টে কোনো পরিবর্তন করলে কপি অবজেক্টের ওপর কোনো প্রভাব পড়ে না ।

let original = { name: "Alice", details: { age: 25 } };
let copy = JSON.parse(JSON.stringify(original));
copy.details.age = 30;
console.log(original); // আউটপুট: { name: "Alice", details: { age: 25 } }
console.log(copy);     // আউটপুট: { name: "Alice", details: { age: 30 } }

// 06. Explain how call, apply, and bind work in JavaScript.
=> Call method: call মেথডটি একটি ফাংশনকে তাৎক্ষণিকভাবে একটি নির্দিষ্ট this কন্টেক্সট সহ কল করে। call মেথডে আর্গুমেন্টগুলো আলাদা আলাদা প্যারামিটার হিসেবে পাস করা হয়। 
const person = {
    name: "rahim",
    greet: function (age) {
      console.log(`hello my name is ${this.name} & ${age} years old`);
    },
  };
  const ainotherPerson = { name: "Karim" };
  person.greet.call(ainotherPerson, 25);

Apply method: apply মেথডটিও call-এর মতোই কাজ করে, তবে এটি আর্গুমেন্টগুলোকে একটি অ্যারে আকারে গ্রহণ করে। এর ফলে আর্গুমেন্টগুলোকে আলাদা আলাদা প্যারামিটারের পরিবর্তে একটি অ্যারেতে পাস করতে হয়।
  const person = {
    name : "Karim",
    greet: function(age, city){
        console.log(`my name is ${this.name}. I am ${age} years old. I live in ${city}`);
    }
}
const anotherPerson = {name : "Rasel"};
person.greet.apply(anotherPerson, [32 , "Dhaka"])

Bing method: bind মেথডটি call এবং apply-এর মতোই this কন্টেক্সট সেট করতে ব্যবহার হয়, কিন্তু এটি তাৎক্ষণিকভাবে ফাংশনটি কল করে না। বরং এটি একটি নতুন ফাংশন রিটার্ন করে, যেখানে this কন্টেক্সট সেট করা থাকে। bind এর সাহায্যে আপনি ফাংশনটি পরবর্তীতে ইচ্ছামতো কল করতে পারেন।
const person = {
    name : "Karim",
    greet: function(city){
        console.log(`my name is ${this.name}. I live in ${city}`);
    }
}
const anotherPerson = {name : "Rasel"};
const boundGreet =  person.greet.bind(anotherPerson,  "Dhaka");
boundGreet();

// 07. What is the prototype chain, and how does inheritance work in JavaScript?
=> JavaScript-এ প্রতিটি অবজেক্টের একটি prototype থাকে, যা অন্য অবজেক্টের সঙ্গে সংযুক্ত থাকে। এই prototype মূলত একটি রেফারেন্স হিসেবে কাজ করে । যখন কোনো অবজেক্ট থেকে একটি প্রোপার্টি বা মেথড অ্যাক্সেস করা হয়, তখন JavaScript প্রথমে সেই অবজেক্টের মধ্যে এটি খুঁজে দেখে। যদি না পায়, তবে এটি সেই অবজেক্টের প্রোটোটাইপে খোঁজ করে, যা আবার তার প্রোটোটাইপে খুঁজতে পারে—এই পদ্ধতিই prototype chain নামে পরিচিত।
const animal = {
    eats: true,
  };
  const dog = {
    barks: true,
  };
  dog.__proto__ = animal;
  console.log(dog.barks); 
  console.log(dog.eats);  
 
Inheritance :JavaScript-এ inheritance হলো একটি অবজেক্টের গুণাবলি এবং মেথড অন্য অবজেক্টে পাওয়া যায় এমন পদ্ধতি। JavaScript মূলত প্রোটোটাইপ ভিত্তিক inheritance অনুসরণ করে, যেখানে একটি অবজেক্ট অন্য অবজেক্টের প্রোটোটাইপ হিসেবে কাজ করে এবং এর গুণাবলি ও মেথড পায়।
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
  }

  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
  };
  
  const myDog = new Dog("Rex", "German Shepherd");
  myDog.eat(); 
  myDog.bark(); 

  
  