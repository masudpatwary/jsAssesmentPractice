// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const friends = [
  "masud",
  "eshsk",
  "jobair",
  "raquib",
  "sujon",
  "jihad",
  "sifat",
  "arafat",
];
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log(element);
}