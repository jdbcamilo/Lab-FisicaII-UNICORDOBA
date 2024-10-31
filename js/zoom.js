document.addEventListener('DOMContentLoaded', function() {
    
    const zoomableElements = document.querySelectorAll('.zoomable');
    
    const modal = document.getElementById("zoom-modal");
    
    const zoomedImage = document.getElementById("zoomed-image");
    
    const zoomedVideo = document.getElementById("zoomed-video");
    
    const closeBtn = document.getElementsByClassName("close")[0];

    
   // Función para abrir el modal con la imagen o video
   zoomableElements.forEach(element => {
       element.addEventListener('dblclick', function() {
           if (element.tagName === 'IMG') {
               zoomedImage.src = element.src; // Set the source of the image to the clicked one
               zoomedImage.style.display = 'block'; // Show image
               zoomedVideo.style.display = 'none'; // Hide video
           } else if (element.tagName === 'VIDEO') {
               zoomedVideo.src = element.querySelector('source').src; // Set the source of the video to the clicked one
               zoomedVideo.style.display = 'block'; // Show video
               zoomedImage.style.display = 'none'; // Hide image
           }
           modal.style.display = "block"; // Show modal
       });
   });

   // Cerrar el modal al hacer clic en la "X"
   closeBtn.onclick = function() {
       modal.style.display = "none";
       zoomedImage.src = ''; // Clear image source
       zoomedVideo.src = ''; // Clear video source
   };

   // Cerrar el modal al hacer clic fuera del contenido del modal
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
           zoomedImage.src = ''; // Clear image source
           zoomedVideo.src = ''; // Clear video source
       }
   };
});