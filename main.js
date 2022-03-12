const email = document.getElementById('email');
const passwd = document.getElementById('passwd');
const btn = document.getElementById('btn');

const res = document.getElementById('result');


function checkEmail() {

    const filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;

    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }else {
        console.log(email.value);
    }
}

function checkPasswd() {

    const filter = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/;

    if (!filter.test(passwd.value)) {
        alert('Пароль должен содержать латинские буквы, символы, числа и чтобы был не менее 6 значений');
        passwd.focus;
        return false;
    }else {
        console.log(passwd.value);
    }
}

btn.addEventListener('click', () => {
    checkEmail();
    checkPasswd();
    res.innerText = 'all ok'
})