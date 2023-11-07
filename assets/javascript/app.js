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