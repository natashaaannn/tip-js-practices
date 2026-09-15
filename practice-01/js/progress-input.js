"use strict";

const totalInput = "  18   "; 
const completedInput = "6";

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
  console.log("Ошибка: входные данные должны быть строками.");
} 
else {
  const totalTrimmed = totalInput.trim();
  const completedTrimmed = completedInput.trim();

  if (totalTrimmed === "" || completedTrimmed === "") {
    console.log("Ошибка: пустой ввод недопустим.");
  } 
  else {
    const totalTasks = Number(totalTrimmed);
    const completedTasks = Number(completedTrimmed);

    if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
      console.log("Ошибка: строка содержит некорректные символы.");
    } 
    else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
      console.log("Ошибка: передано недопустимое бесконечное значение.");
    } 
    else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
      console.log("Ошибка: количество задач должно быть целым числом.");
    } 
    else if (totalTasks < 0 || completedTasks < 0) {
      console.log("Ошибка: количество задач не может быть отрицательным.");
    } 
    else if (totalTasks > 1000) {
      console.log("Ошибка: превышена верхняя граница (1000 задач).");
    } 
    else if (completedTasks > totalTasks) {
      console.log("Ошибка: выполненных задач больше, чем существует.");
    } 
    else if (totalTasks === 0 && completedTasks === 0) {
      console.log("Задач пока нет");
    } 
    else {
      const remainingTasks = totalTasks - completedTasks;
      const progressPercent = (completedTasks / totalTasks) * 100;
      
      let status = "";
      if (completedTasks === 0) {
        status = "Не начато";
      } else if (completedTasks === totalTasks) {
        status = "Завершено";
      } else {
        status = "В работе";
      }

      console.log(`Всего задач: ${totalTasks}`);
      console.log(`Выполнено: ${completedTasks}`);
      console.log(`Осталось: ${remainingTasks}`);
      console.log(`Прогресс: ${progressPercent.toFixed(1)}%`);
      console.log(`Статус: ${status}`);
    }
  }
}