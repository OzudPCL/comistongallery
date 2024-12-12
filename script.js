function changeImage(imageUrl) {
    const galleryImage = document.getElementById('galleryImage');
    const imageLink = document.getElementById('imageLink');
    
    // Update the image source
    galleryImage.src = imageUrl;

    // Update the href of the link to point to the corresponding PDF
    const pdfUrl = imageUrl.replace('.jpg', '.pdf');
    imageLink.href = pdfUrl;
}


function scrollToBottom() {
    const target = document.getElementById("scrollTarget");
    target.scrollIntoView({ behavior: "smooth" });
}
