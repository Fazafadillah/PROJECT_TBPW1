const tips=[
    "Minum air putih minimal 8 gelas sehari",
    "Bangun dan tidur di jam yang teratur",
    "Konsumsi buah dan sayur setiap hari",
    "Hindari begadang tanpa alasan penting",
    "Kurangi makanan cepat saji",
];

function generateTip(){
    constrandom = Math.floor(Math.random()*tips.length);
    document.getElementById("dailyTip").innerText = tips[random];
}
window.onload = generateTip;