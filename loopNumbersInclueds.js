// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

const numbers = [
  5, 9, 41, 56, 4, 32, 47, 5, 78, 3, 54, 65, 95, 87, 79, 54, 78, 4545, 545, 545,
  8784, 5445, 6554, 543,
];

function names(arrayInclueds) {
  let number = [];
  for (let i = 0; i < arrayInclueds.length; i++) {
    const element = arrayInclueds[i];
    if (element > 80) {
      number.push(element);
    }
  }
  return number;
}

const result = names(numbers);
console.log(result);
