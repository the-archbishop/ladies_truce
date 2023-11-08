// Date Calculation
const date = new Date();
const monthNames = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];
const month = monthNames[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
function getOrdinal(day) {
  if (day >= 11 && day <= 13) {
    return day + "th";
  }
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}
const formattedDate = `${month} ${getOrdinal(day)} of the year ${year}`;
$('#cal-dt').text(formattedDate);

// Signature Pad
function resizeCanvas(canvas) {
  console.log(canvas)
  let ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}

// Lae'zel Signature Pad
const laeCanvas = document.getElementById('lae-signature-pad');
const laeSignaturePad = new SignaturePad(laeCanvas, {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
const laeClearButton = document.getElementById('lae-signature-clear');
laeClearButton.addEventListener('click', function (event) {
  laeSignaturePad.clear();
});
resizeCanvas(laeCanvas);

// Shadowheart Signature Pad
const shartCanvas = document.getElementById('shart-signature-pad');
const shartSignaturePad = new SignaturePad(shartCanvas, {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
const shartClearButton = document.getElementById('shart-signature-clear');
shartClearButton.addEventListener('click', function (event) {
  shartSignaturePad.clear();
});
resizeCanvas(shartCanvas);

// Corinna Signature Pad
const corrinaCanvas = document.getElementById('corinna-signature-pad');
const corinnaSignaturePad = new SignaturePad(corrinaCanvas, {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
const corinnaClearButton = document.getElementById('corinna-signature-clear');
corinnaClearButton.addEventListener('click', function (event) {
  corinnaSignaturePad.clear();
});
resizeCanvas(corrinaCanvas);