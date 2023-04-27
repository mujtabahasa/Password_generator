let password_gen = document.getElementById('para');
function Password(){
  password_gen.innerHTML =  Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2)
}
