// Создать функцию `leaveFast`, которая
// после двух секунд должна вернуть в resolve "leave the bank in 2 seconds"
// и после 4 секунд должна вернуть в resolve "close the road in 4 seconds"
// Если два условия выполнены вывести в консоль "we almost did it!" и
// переписать глобальную переменную `window.plans.planC=true;`

const promise1 = new Promise((res, rej) =>
  setTimeout(() => res("leave the bank in 2 seconds"), 2000)
);

const promise2 = new Promise((res, rej) =>
  setTimeout(() => res("close the road in 4 seconds"), 4000)
);

Promise.all([promise1, promise2]).then((res) => {
  console.log("all promises resolved", res);
  console.log("we almost did it!");
  window.plans.planC = true;
});

//  2
const message1 = "leave the bank in 2 seconds";
const message2 = "close the road in 4 seconds";

function leaveFast(message, time) {
  return new Promise((res, rej) => setTimeout(() => res(message), time));
}

Promise.all([leaveFast(message1, 2000), leaveFast(message2, 4000)])
  .then((res) => {
    console.log("all promises resolved", res);
  })
  .then(() => {
    console.log("we almost did it!");
  })
  .then(() => {
    window.plans.planC = true;
  });
