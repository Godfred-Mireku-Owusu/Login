var username = document.querySelector('#username');
var password = document.querySelector('#password');

username.innerHTML = localStorage.getItem('name');
password.innerHTML = localStorage.getItem('college');

console.log(localStorage.getItem('college'));
console.log(localStorage.getItem('location'));
