//navbar for mobile version change comment later !!!!!!!!!
function toggleNav() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("fadeIn"); 
}
  
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.querySelector(".contact-form");

  // Reset the form fields upon page load
  form.reset();
});

// Trigger the toast
const toast = new bootstrap.Toast(document.getElementById('liveToast'));
toast.show();