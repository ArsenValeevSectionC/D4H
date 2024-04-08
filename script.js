console.log("Hello")
//navbar for mobile version change comment later !!!!!!!!!
function toggleNav() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("fadeIn"); 
}

// document.getElementById("use-login").addEventListener("click", function(event){
//     event.preventDefault();
//     document.getElementById("registerlogin").textContent = "LOGIN"
//     document.getElementById("switchinformation").textContent = "Need to register?"
// })

document.getElementById("use-login").addEventListener("click", function(event){
    event.preventDefault();
    var switchInfo = document.getElementById("switchinformation");
    var currentText = switchInfo.innerHTML;

    if (currentText.includes("login")) {
        document.getElementById("registerlogin").textContent = "LOGIN";
        switchInfo.innerHTML = "Need to register? <a id='register-link' href='#'>Click here</a>";
    } else if (currentText.includes("register")) {
        document.getElementById("registerlogin").textContent = "REGISTER";
        switchInfo.innerHTML = "Already have an account? <a id='login-link' href='#'>Login here</a>";
    }
});


