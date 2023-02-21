let name = prompt('Как вас зовут?').toLowerCase().trim()

if (name === 'алекс' || name === 'alex') {
    console.log('welcome')
    let account = prompt('Номер счета').trim()

    if (account === '7777') {
        console.log('succeful');

        let money = prompt('Сколько обналичить?')

        if ( money <= 10000 ) {
              console.log( 'вы сняли ' + money + ' долларов с вашей карты')
        } else {
            console.log('Недостаточно средств');
        }
} else {
        console.log('Пользователь не найден,досвидули');
       }
} else {
    console.log('Пользователь не найден,досвидули')
}


let guard = prompt('Write your name').trim().toLowerCase()

if ( guard.charAt(0) === 'a') {
    console.log('Well');

    let age = prompt('Write your age')

    if( age >= 20 && age <= 40 ) {
        console.log('Великолепно');

        let balance = prompt('How much money do u have?')

        if( balance >= 100) {
            console.log('Хватает');

            let freePlace = 10
            let booked = 8
            let place = +prompt('Сколько с вами людей')

            if(place + booked <= freePlace) {
                console.log('Проходите')
            } else {
                console.log('Нет свободных мест');
            }
        } else {
            console.log('Тебе не хватит денег проваливай');
        }
    } else {
        console.log('Ты сликом маленький для этого клуба')
    }
} else {
    console.log('Ваше имя нам не нравиться');
}



