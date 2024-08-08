let local = localStorage;

        function register(){
            let Rusername = document.getElementById("Rusername").value;
            let Rpassword = document.getElementById("Rpassword").value;

            let registeredData = {
                username: Rusername,
                password: Rpassword
            }
            local.setItem("registeredData", JSON.stringify(registeredData));

            let signup = document.getElementById("signups");
            let popover = document.getElementById("popover");
            popover.classList.remove("overlay");
            // signup.style.width = "5000px";
            signup.classList.remove("popup");
        }

        const submitForm=()=>{
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            
            let loginData = {
               username: username,
               password: password
            }
            local.setItem("loginData", JSON.stringify(loginData));


            if(local.getItem("loginData") === local.getItem("registeredData")){
                window.location.assign("/");
            }
        }

        
        function signUp(){
            let signup = document.getElementById("signups");
            let popover = document.getElementById("popover");
            popover.classList.add("overlay");
            // signup.style.width = "5000px";
            signup.classList.add("popup");
        }
        function closee(){
            let signup = document.getElementById("signups");
            let popover = document.getElementById("popover");
            popover.classList.remove("overlay");
            // signup.style.width = "5000px";
            signup.classList.remove("popup");
        }
        
       