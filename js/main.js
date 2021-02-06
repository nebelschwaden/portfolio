import AOS from './../libraries/aos/aos';
AOS.init();
/* Navbar Collapsible */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
/* Video Modal */
let modal = document.getElementById("myModal");
let videoButtons = document.querySelectorAll(".video__btn");
let span = document.querySelectorAll(".close")[0];
let modalVideo = document.querySelector('.modal__video');
let navBar = document.querySelector('.nav');
videoButtons.forEach((btn) => {
  btn.onclick = function () {
    modalVideo.src = 'videos/'+btn.id+'.mp4';
    modal.style.display = "block";
    navBar.style.visibility = 'hidden';
  }
});
span.onclick = function() {
  modal.style.display = "none";
  modalVideo.pause();
  navBar.style.visibility = 'visible';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalVideo.pause();
    navBar.style.visibility = 'visible';
  }
}