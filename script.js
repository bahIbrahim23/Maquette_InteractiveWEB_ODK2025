const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");

document.getElementById("toggle-theme").addEventListener("click", () => {
  leftColumn.style.backgroundColor = "#848484"; 
   rightColumn.style.backgroundColor = "green";
});

document.getElementById('download-pdf').addEventListener('click', function() {
  const element = document.querySelector('all-print');
  html2pdf().from(element).save('mon_cv.pdf');
});
