function toggleNav() {
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active"); 
}
function showContainers(type) {
      var containers = document.querySelectorAll(".container-dropDown");
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = "none";
      }
      var selectedContainers = document.querySelectorAll("#" + type);
      for (var j = 0; j < selectedContainers.length; j++) {
        selectedContainers[j].style.display = "block";
      }
}
    