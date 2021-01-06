
const guessNumber = 50
let randomNumber = undefined
const div = document.querySelector('#startdiv')
const startButton = document.querySelector('#start')
const highButton = document.querySelector('#high')
const equalButton = document.querySelector('#equal')
const lowButton = document.querySelector('#low')
const h3 = document.querySelector('#h3')
const h4 = document.querySelector('#h4')

startButton.addEventListener('click', (e) => {
    randomNumber = (Math.random() * 100).toFixed(0)
    startButton.disabled = true
    highButton.disabled = false
    equalButton.disabled = false
    lowButton.disabled = false
    h3.innerText = 'A random number is generated! between 0 to 100'
    h4.innerText = `choose an option from below with respect to number ${guessNumber}`
    h3.classList.remove('success','danger')
    // startdiv.remove()
})

function result(value) {
    console.log(value)
    switch (value) {
        case 'high':
            if (randomNumber > 50) {
                h3.innerText = `congratulations you won the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('success')
            } else {
                h3.innerText = `sorry you lost the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('danger')
            }
            break;

        case 'low':
            if (randomNumber < 50) {
                h3.innerText = `congratulations you won the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('success')
            } else {
                h3.innerText = `you lost the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('danger')
            }
            break;

        case 'equal':
            if (randomNumber == 50) {
                h3.innerText = `congratulations you won the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('success')
            } else {
                h3.innerText = `you lost the game! number is:${randomNumber} `
                h4.innerText = 'you can play again by clicking start now!'
                h3.classList.add('danger')
            }
            break;
        default:
            h3.innerText = 'something went wrong'
    }
    highButton.disabled = true
    equalButton.disabled = true
    lowButton.disabled = true
    startButton.disabled = false
}

highButton.addEventListener('click', (e) => result(e.target.value))
equalButton.addEventListener('click', (e) => result(e.target.value))
lowButton.addEventListener('click', (e) => result(e.target.value))

// lowButton.addEventListener('click', (e) => {
//     if (randomNumber < 50) {
//         h3.innerText = `you won! number is:${randomNumber} `
//     } else {
//         h3.innerText = `you lost! number is:${randomNumber} `
//     }
//     highButton.disabled = true
//     equalButton.disabled = true
//     lowButton.disabled = true
//     startButton.disabled = false
// })

// equalButton.addEventListener('click', (e) => {
//     if (randomNumber == 50) {
//         h3.innerText = `you won! number is:${randomNumber} `
//     } else {
//         h3.innerText = `you lost! number is:${randomNumber} `
//     }
//     highButton.disabled = true
//     equalButton.disabled = true
//     lowButton.disabled = true
//     startButton.disabled = false
// })
