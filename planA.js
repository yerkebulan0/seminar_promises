// Создать функцию 'createPlan' которая после 5 секунд будет возвращать промис с двумя методами `.then`
// Первый метод должен вернуть в консоль текст: "План придуман, полетели!"
// Второй метод должен переписать глобальную переменную `window.plans.planA=true;`


function createPlan (){


    return new Promise((resovle, reject)=>{
        setTimeout( resovle ("План придуман, полетели!"),5000);
    }) 

}
createPlan()
    .then((response) => {
        console.log(response);
    } )
    .then(() => {
        window.plans.planA=true;
    });
    

