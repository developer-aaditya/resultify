let showPass = document.querySelector('.icon-pack');
let pass = document.querySelector('#password');
showPass.addEventListener('click', () => {
    if (pass.type == "password") {
        pass.type = "text";
        document.querySelector('#hide-pass').style.display = 'none';
        document.querySelector('#show-pass').style.display = 'block';
    } else {
        pass.type = "password";
        document.querySelector('#hide-pass').style.display = 'block';
        document.querySelector('#show-pass').style.display = 'none';
    }
});

let loginButton = document.querySelector('#login-btn');
loginButton.addEventListener('click', () => {
    let count = false;
    let password = pass.value;
    let rollNo = document.querySelector('#roll-no').value;
    for (let id = 0; id < studentData.length; id++) {
        if (password == studentData[id].password && rollNo == studentData[id].rollNo) {
            localStorage.setItem('id-No', id);
            window.location.assign("html/grade.html");
            alert('Successful log-in');
            count = true;
            return;
        }
    }
    if(count == false){
        window.location.assign("html/index.html");
        alert('Check your Roll-No & Password');
    }
})
