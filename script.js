// const getElementsToChange = document.querySelectorAll(".left-column", ".right-column");

// document.getElementById("toggle-theme").addEventListener("click", () => {
//   getElementsToChange.forEach((columnSide, index) => {
//     columnSide.style.backgroundColor = "#848484"
//   })
// })

const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");

document.getElementById("toggle-theme").addEventListener("click", () => {
  leftColumn.style.backgroundColor = "#848484"; // couleur personnalisée
   rightColumn.style.backgroundColor = "green"; // vert
});

// const profiles = document.querySelectorAll('.left-column');

// document.getElementById("toggle-theme").addEventListener("click", () => {
//   // Changer le texte + couleur de fond pour chaque élément
//   profiles.forEach((profile, index) => {

//     profile.style.backgroundColor = "#a0d2eb";     // Changer la couleur de fond
//   });
// });

// Thème alternatif

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-theme');
    const downloadBtn = document.getElementById('download-pdf');
  
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        document.documentElement.classList.toggle('alt-theme');
      });
    }
  
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function () {
        window.print(); // ouvre la fenêtre d'impression (PDF possible)
      });
    }
});
  