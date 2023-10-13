//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("SYSTEX 太郎");

// 24スプレッド構文
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

// 25filter
// const nameArr = ["A", "B", "C"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "A") {
// return name;
//   } else {
// return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 26三角演算子
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています` : `許容範囲内です`;
// };
// console.log(checkSum);

// 27 論理演算子

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か２はtrue");
// }
// if (flag1 && flag2) {
//   console.log("１も２はtrue");
// }

// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// const num2 = null;
// const fee2 = num2 && "何か設定";
// console.log(fee2);
