// this lines for mobile navbar which work with responsive
const bar = document.getElementById('menu-icon');
const nav = document.getElementById('navbar-main')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}


// global animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);



//   validation of the sign in page 

const form = document.getElementById('sign-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();
});
 const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
 }
 const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
 };
// this is for a email validation
 const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// to get it work with border of the form
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }
    if(emailValue ===''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)) {
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }
    if(passwordValue ===''){
        setError(password, 'PAssword is required');
    }else if(passwordValue.length < 8){
        setError(password,'Password must be at least 8 character.')
    }else{
        setSuccess(password);
    }
    if(password2Value ==='') {
        setError(password2,'Please confirm your password');
    }else if( password2Value !== passwordValue) {
        setError(password2,"Passwords doesn't match");
    }else{
        setSuccess(password2);
    }
    

};