/* Change to "busy" cursor during page load */
document.body.style.cursor="wait";
window.onload=function(){document.body.style.cursor="default"}

/* Auto-expanding textarea */
function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

var textarea = document.getElementsByTagName("textarea");
for (var i = 0; i < textarea.length; i++) {
  textarea[i].setAttribute("style", "height:" + (textarea[i].scrollHeight) + "px;overflow-y:hidden;");
  textarea[i].addEventListener("input", OnInput, false);
}

/* Indicate JavaScript has been successfully excecuted */
console.info("Here be dragons! 🐲");
