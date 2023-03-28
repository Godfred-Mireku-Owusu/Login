
let btn = document.querySelector('button');
let img = document.getElementById('profile');
let addpic = document.getElementById('addpic');

addpic.onchange = function(){

  img.src = URL.createObjectURL(addpic.files[0])
}


btn.addEventListener('click' , ()=>{
  var name = document.querySelector('#Name').value;
  var college = document.querySelector('#College').value;
  var location = document.querySelector('#Location').value;

  localStorage.setItem('name', name);
  localStorage.setItem('college', college);
  localStorage.setItem('location', location);
})
