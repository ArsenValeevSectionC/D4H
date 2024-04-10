console.log("Hello")
//navbar for mobile version change comment later !!!!!!!!!
function toggleNav() {
    let navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active"); 
}

document.getElementById("use-login").addEventListener("click", function(event){
    event.preventDefault();
    let switchInfo = document.getElementById("switchinformation");
    let currentText = switchInfo.innerHTML;

    if (currentText.includes("login")) {
        document.getElementById("registerlogin").textContent = "LOGIN";
        document.getElementById("confirmemailuser").style.display = "none";
        document.getElementById("confirmemailcharity").style.display = "none";
        switchInfo.innerHTML = "Need to register? <a id='register-link' href='#'>Register here</a>";
    } else if (currentText.includes("register")) {
        document.getElementById("registerlogin").textContent = "REGISTER";
        switchInfo.innerHTML = "Already have an account? <a id='login-link' href='#'>Login here</a>";
    }
});

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    let emailUser = document.getElementById("emailuser").value.trim();
    let emailUserConfirm = document.getElementById("confirmemailuser").value.trim();
    let passwordUser = document.getElementById("passworduser").value.trim();
    if (emailUser == emailUserConfirm && emailUser != "" && emailUserConfirm !="" && passwordUser != "") {
        console.log(emailUser);
        console.log(passwordUser);
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    } else {
        document.getElementById("submit").classList = "btn btn-primary mt-2 shake-horizontal"
    }
})

document.getElementById("submit2").addEventListener("click", function(event){
    event.preventDefault();
    let emailCharity = document.getElementById("emailcharity").value.trim();
    let emailCharityConfirm = document.getElementById("confirmemailcharity").value.trim();
    let passwordCharity = document.getElementById("passwordcharity").value.trim();
    if (emailCharity == emailCharityConfirm && emailCharity != "" && emailCharityConfirm !="" && passwordCharity != "") {
        console.log(emailCharity);
        console.log(passwordCharity);
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    } else {
        document.getElementById("submit2").classList = "btn btn-primary mt-2 shake-horizontal"
    }
})









