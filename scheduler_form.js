const form_schedule = document.getElementById("form_schedule");
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const genderElement = document.getElementById('gender');

form_schedule.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    cpfValidate();
    genderValidate();

});




function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
  
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0);
        
    }

    else {
        removeError(0)
        
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        setError(1);
        
    }
    else {
        removeError(1)
        
    }
}


function cpfValidate() {
    if(campos[2].value.length !== 11) {
        setError(2)
        
    }
    else {
        removeError(2)
        
    }
}




function genderValidate() {
    if (genderElement.value === 'selectGender') {
        setError(3);
    } else {
        removeError(3);
    }
}