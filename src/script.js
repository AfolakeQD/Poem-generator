function fetchPoem(event) {
   event.preventDefault();

   new Typewriter("#poem", {
    strings: "God is king, but life is a trend",
    autoStart: true,
    delay: 2,
    cursor: "",
   });
}
 
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", fetchPoem);