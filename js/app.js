let images = new TimelineMax();
let img = document.querySelectorAll(".img");
let imgHeader = document.getElementById("header-img");
let hover = false;

function loadin() {
  // Changes the body from unresolved to resolved, and fades in content
  document.body.removeAttribute("unresolved");
  TweenMax.from("#content", 1.5, {
    opacity: 0,
  });
}

//Checks if content is loaded. If so, run resolve. If not, listen for when it does
if(document.readyState === "interactive" || document.readyState === "complete") {
  resolve();
} else {
  window.addEventListener("DOMContentLoaded", loadin);
}


//Listens for the element to be hovered over. If so, grow the box from the center
img.forEach(function (element) {
  element.addEventListener("mouseover", function() {
      if(!hover) {
        TweenMax.to(element, 1, {transformOrigin: "50% 50%", scale: 1.25});
      }
      hover = true;
    }
  );

  // Shrinks back to original size once mouse leaves the element
  element.addEventListener("mouseleave", function() {
      hover = false;
      TweenMax.to(element, 1, {transformOrigin: "50% 50%", scale: 1});
    }
  );

  // On click, makes the entire gallery disappear.
  element.addEventListener("click", function() {
    TweenMax.to(img, 1.5, { opacity: 0 });
  });
});
