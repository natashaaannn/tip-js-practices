"use strict";

const totalTasks = 18;
const completedTasks = 6;
const dailyLimit = 5;

if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks) || Number.isNaN(dailyLimit)) {
  console.log("Ошибка: недопустимое числовое значение.");
} 
else if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: вместо числа передана строка.");
} 
else if (typeof dailyLimit !== "number") {
  console.log("Ошибка: дневная норма задана строкой.");
} 
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: дробное количество.");
} 
else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дробной дневной нормы быть не должно.");
} 
else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество.");
} 
else if (totalTasks > 1000) {
  console.log("Ошибка: превышена верхняя граница.");
} 
else if (dailyLimit < 1) {
  console.log("Ошибка; цикл не запускается.");
} 
else if (dailyLimit > 1000) {
  console.log("Ошибка: превышена верхняя граница нормы.");
} 
else if (completedTasks > totalTasks) {
  console.log("Ошибка: некорректное число выполненных задач.");
} 
else {
  let remainingTasks = totalTasks - completedTasks;

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
  } else {
    console.log(`Осталось задач: ${remainingTasks}`);
    
    let day = 0;

    while (remainingTasks > 0) {
      day += 1;
      const tasksToday = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= tasksToday;
      console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}