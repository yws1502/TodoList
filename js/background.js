const bgImages = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
const currBg = bgImages[parseInt(Math.random()*bgImages.length)];

document.body.style.backgroundImage = `url(../img/${currBg})`;