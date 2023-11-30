// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(frnds) {
  let storeElement = [""];
  for (let i = 0; i < frnds.length; i++) {
    const element = frnds[i];
    storeElement = element;
    if (storeElement.length < element.length) {
      storeElement.push(element);
    } else {
      false;
    }
  }
  return storeElement;
}

const friends = [
  "masud",
  "eshak",
  "jobair",
  "sahadat",
  "asik",
  "arif",
  "bokkoddu",
  "jobair ibn sihab",
  "nur rahman",
  "rahmatullah",
  "babu",
];
const result = bestFriend(friends);
console.log(result);
