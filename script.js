document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typingText");
  const text = "This is a typing animation!";
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});
