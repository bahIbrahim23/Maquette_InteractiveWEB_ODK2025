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
  