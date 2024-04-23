// the variables of the image slider
const image = document.querySelectorAll(".slide-image");
const imageNumber = document.querySelectorAll(".slide-image-number");
const totalImageNumber = document.querySelectorAll(".total-image-number");
const prevBtn = document.querySelectorAll(".backward");
const nextBtn = document.querySelectorAll(".forward");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

// the image array
const images = [
  "./img/1.jpeg",
  "./img/2.jpeg",
  "./img/3.jpeg",
  "./img/4.jpeg",
  "./img/5.jpeg",
  "./img/6.jpeg",
  
];

/* const folderPath = 'C:\\Users\\Abhimanyu\\Pictures\\img';

function getAllJPEGPaths(folderPath) {
    const files = fs.readdirSync(folderPath);

    const jpegPaths = files.filter(file => {
        return path.extname(file).toLowerCase() === '.jpeg' || path.extname(file).toLowerCase() === '.jpg';
    }).map(file => {
        return path.join(folderPath, file);
    });

    return jpegPaths;
}

// Example usage:

const images = getAllJPEGPaths(folderPath);*/
// the index of the image on page load
let currentImage = 0;

// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", function () {
  showImage();
});

// function to select and change the image details
function showImage() {
  for (i of image) {
    i.src = images[currentImage];
    i.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  }

  for (i of imageNumber) {
    i.textContent = currentImage + 1;
  }

  for (i of totalImageNumber) {
    i.textContent = images.length;
  }
}

// the next button function
for (i of nextBtn) {
  i.addEventListener("click", function () {
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
    showImage(currentImage);
  });
}

// the prev button function
for (i of prevBtn) {
  i.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    showImage(currentImage);
  });
}

// close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});