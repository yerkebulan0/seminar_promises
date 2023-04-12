// Создать функцию `placeABomb` которая должна взорваться через 2 секунды с текстом "BANG!"
// Взрыв должен быть в `reject`
// Метод `catch` должен переписать глобальную переменную `window.plans.planB=true;`

function placeABomb() {
    return new Promise((resolve , reject) =>{
       setTimeout( reject("BANG!"),2000)
    }
    )};

placeABomb()
    .catch(() =>{
        window.plans.planB=true;
    })
