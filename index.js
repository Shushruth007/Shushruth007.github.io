import "./src/styles.css";

const $text1 = document.querySelector(".intro-trans");
console.log($text1.textContent);

/*
 * Method 2: Using event listener for triggering transition change (CSS Centric)
 */

function toggleTransitionWithoutTimeout() {
  // removing any previous listener and
  // adding an click event listerner on button to
  // trigger toggleTransition method
  $text1.removeEventListener("transitionend", onTransitionEnd);
  $text1.addEventListener("transitionend", onTransitionEnd);

  // removing the class for leave state
  $text1.classList.remove("edaf");
}
function onTransitionEnd() {
  // removing the listener again so that it is triggered only once
  $text1.removeEventListener("transitionend", onTransitionEnd);

  // Finding the content and adding class again
  const content = $text1.textContent === "Old Text" ? "New Text" : "Old Text";
  $text1.innerHTML = content;
  $text1.classList.add("edaf");
}

$text1.addEventListener("click", toggleTransitionWithoutTimeout);
