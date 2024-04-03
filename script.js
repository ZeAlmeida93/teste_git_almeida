const imageElement = document.getElementById("daily-image");
const today = new Date();
const day = today.getDate().toString().padStart(2, '0'); // Get day with leading zero
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero (months are 0-indexed)

const imageName = `${day}_${month}`;

imageElement.src = `images/${imageName}.jpg`; // Update image source based on date
