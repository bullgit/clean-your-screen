function fullscreen() {

  var element = document.getElementsByTagName("body")[0];

  if (element.requestFullScreen) {

    if (!document.fullScreen) {
      element.requestFullscreen();

    } else {
      document.exitFullScreen();
    }

  } else if (element.mozRequestFullScreen) {

    if (!document.mozFullScreen) {
      element.mozRequestFullScreen();

    } else {
      document.mozCancelFullScreen();
    }

  } else if (element.webkitRequestFullScreen) {

    if (!document.webkitIsFullScreen) {
      element.webkitRequestFullScreen();

    } else {
      document.webkitCancelFullScreen();
    }

  }

}

document.getElementById("fullscreen").addEventListener("click", fullscreen, false);
