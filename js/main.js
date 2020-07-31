(() => {
  let audio = document.querySelector("audio"),
      playButton = document.querySelector(".controls button");

  function playAudio() {
    document.querySelectorAll("path").forEach(path => path.classList.add("text-anim"))
    document.querySelector("#typeWrapper").classList.add("wrapper-anim")
    audio.play()
  }

  playButton.addEventListener("click", playAudio);

})();
