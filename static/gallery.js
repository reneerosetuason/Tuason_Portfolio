const projectGalleries = {
    project1: [
        "/static/images/MajayjayScholars/mscho1.jpg",
        "/static/images/MajayjayScholars/mscho2.jpg",
        "/static/images/MajayjayScholars/mscho3.jpg",
        "/static/images/MajayjayScholars/mscho4.jpg",
        "/static/images/MajayjayScholars/mscho5.jpg",
        "/static/images/MajayjayScholars/mscho6.jpg",
        "/static/images/MajayjayScholars/mscho7.jpg",
        "/static/images/MajayjayScholars/mscho8.jpg"
    ],
    project2: [
        "/static/images/ExpenseTracker/spend1.jpg",
        "/static/images/ExpenseTracker/spend2.jpg",
        "/static/images/ExpenseTracker/spend3.jpg",
        "/static/images/ExpenseTracker/spend4.jpg",
        "/static/images/ExpenseTracker/spend5.jpg"
    ],
    project3: [
        "/static/images/routine/rout1.jpg",
        "/static/images/routine/rout2.jpg",
        "/static/images/routine/rout3.jpg",
        "/static/images/routine/rout5.jpg",
        "/static/images/routine/rout6.jpg"
    ]
};

let currentGallery = [];
let currentImageIndex = 0;

function openGallery(projectId) {
    currentGallery = projectGalleries[projectId];
    if (!currentGallery || currentGallery.length === 0) {
        alert('No images available for this project');
        return;
    }
    currentImageIndex = 0;
    document.getElementById('galleryImage').src = currentGallery[0];
    document.getElementById('galleryModal').style.display = 'flex';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = currentGallery.length - 1;
    if (currentImageIndex >= currentGallery.length) currentImageIndex = 0;
    document.getElementById('galleryImage').src = currentGallery[currentImageIndex];
}

window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGallery();
    }
}
