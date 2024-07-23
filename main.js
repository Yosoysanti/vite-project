let button = document.querySelector("button");
button.addEventListener("click", function ()  {
alert("Usuario incorrecto");
});

function myfunction() {
  var password = document.getElementById("password")
  if (password.type=='password') {
    password.type="text";
  }else{
    password.type='password';
  }
}
