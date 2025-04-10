const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");

document.getElementById("toggle-theme").addEventListener("click", () => {
  leftColumn.style.backgroundColor = "#848484"; 
   rightColumn.style.backgroundColor = "green";
});

// document.getElementById('download-pdf').addEventListener('click', function() {
//   const element = document.querySelector('all-print');
//   html2pdf().from(element).save('mon_cv.pdf');
// });

document.addEventListener('DOMContentLoaded', function () {
  // const toggleBtn = document.getElementById('toggle-theme');
  const downloadBtn = document.getElementById('download-pdf');

  // // Changer de thème
  // if (toggleBtn) {
  //   toggleBtn.addEventListener('click', function () {
  //     document.documentElement.classList.toggle('alt-theme');
  //   });
  // }

  // Télécharger le CV en PDF
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      const element = document.getElementById('all-print');
      const opt = {
        margin:       0,
        filename:     'mon_cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      // Cacher les boutons avant impression (facultatif)
      const buttons = document.querySelector('.cv-buttons');
      if (buttons) buttons.style.display = 'none';

      html2pdf().set(opt).from(element).save().then(() => {
        // Réafficher les boutons après impression
        if (buttons) buttons.style.display = 'flex';
      });
    });
  }
});

