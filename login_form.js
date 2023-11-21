const login_form = document.getElementById("login-form");
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


login_form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailLoginValidate();
    

});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
  
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


function emailLoginValidate() {
    if(!emailRegex.test(campos[0].value)) {
        setError(0);
        
    }
    else {
        removeError(0)
        
    }
}
