// Task 1
function taskOne () {
   const entriesNum = prompt('Введите, пожалуйста число')
    if (entriesNum > 7) {
        console.log('Привет')
    }
}

//Task 2
function taskTwo () {
    const name = prompt('Введите, пожалуйста, имя')
    if (name === 'Вячеслав') {
        console.log('Привет, Вячеслав')
    } else {
        console.log('Нет такого имени')
    }
}

//Task 3
function taskThree (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0){
            console.log(array[i])
        }
    }
}