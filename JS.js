const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.registration-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.iconClose');




// $('.registration-link').click(function(){
//     alert("The paragraph was clicked.");
//   });


registerlink.addEventListener('click',()=>{
    // alert("hello Registration");
wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    // alert("hello Login");
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});