let local = localStorage;
document.addEventListener('DOMContentLoaded', () => {
    const loginData = local.getItem('loginData');
    const registeredData = local.getItem('registeredData');
  
    if (loginData !== registeredData) {
      window.location.href = 'login.html';
    }
  });

  function logout(){
    local.removeItem("loginData");
    window.location.assign("login.html")
}