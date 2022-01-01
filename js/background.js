const bgImages = ["3.jpg", "5.jpg", "6.jpg", "7.jpg"]
const currBg = bgImages[parseInt(Math.random()*bgImages.length)];

document.body.style.backgroundImage = `url(./img/${currBg})`;