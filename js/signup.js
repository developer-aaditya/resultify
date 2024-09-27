let showPass = document.querySelector('.icon-pack');
let password = document.querySelector('#password');
showPass.addEventListener('click', ()=>{
    if(password.type == "password"){
        password.type = "text";
        document.querySelector('#hide-pass').style.display = 'none';
        document.querySelector('#show-pass').style.display = 'block';
    } else {
        password.type = "password";
        document.querySelector('#hide-pass').style.display = 'block';
        document.querySelector('#show-pass').style.display = 'none';
    }
});

var pass = document.querySelector('#password');
var msg = document.querySelector('#message');
var str = document.querySelector('#strength');

pass.addEventListener('input', ()=>{
    if(pass.value.length > 0){
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
    if(pass.value.length <= 4 && pass.value.length > 0){
        msg.innerText = 'Password is Weak';
        msg.style.color = 'red';
        pass.style.borderColor = 'red';
    } else if(pass.value.length <= 8 && pass.value.length > 4){
        msg.innerText = 'Password is Medium';
        pass.style.borderColor = 'orange';
        msg.style.color = 'orange';
    } else if(pass.value.length > 8){
        msg.innerText = 'Password is Strong';
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
    } else {
        pass.style.borderColor = 'var(--grey)';
    }
});