"use strict";

console.log("Результат:", "8" + 2);
console.log("Тип результата:", typeof ("8" + 2));

console.log("Результат:", "8" - 2);
console.log("Тип результата:", typeof ("8" - 2));

console.log("Результат:", Number("8") + 2);
console.log("Тип результата:", typeof (Number("8") + 2));

console.log("Результат:", "12" > "3");
console.log("Тип результата:", typeof ("12" > "3"));

console.log("Результат:", 12 === "12");
console.log("Тип результата:", typeof (12 === "12"));

console.log("Результат:", Number(""));
console.log("Тип результата:", typeof Number(""));

console.log("Результат:", Number("text"));
console.log("Тип результата:", typeof Number("text"));

console.log("Результат:", Boolean("false"));
console.log("Тип результата:", typeof Boolean("false"));

const val9 = typeof null;
console.log("Значение выражения:", val9);
console.log("Тип самого результата выражения:", typeof val9);

const val10 = typeof NaN;
console.log("Значение выражения:", val10);
console.log("Тип самого результата выражения:", typeof val10);