function changeImage(imagePath) {
    const galleryImage = document.getElementById("galleryImage");
    const imageLink = document.getElementById("imageLink");

    galleryImage.src = imagePath;
    imageLink.href = imagePath;
}

function scrollToBottom() {
    const target = document.getElementById("scrollTarget");
    target.scrollIntoView({ behavior: "smooth" });
}