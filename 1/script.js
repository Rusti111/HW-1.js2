


let email = document.getElementById('email');
let foremail = document.getElementById('foremail')
let btn = document.getElementById('button');
const regexpemail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let error; 


btn.onclick = () =>{
    if (regexpemail.test(email.value)) {
        alert('Вы успешно зарегистрировались.👍')
    }

    if (error) {
        foremail.removeChild(error);
        error = null;
        
    } else {
        if (!error) {
            error = document.createElement('p');
            error.textContent = 'Некорректный формат почты!!!';
            foremail.appendChild(error);
        }
    }
}