let images = [
    '001',
    '002',
    '003',
    '004',
    '005',
    '006',
    '007',
    '008',
    '009',
];
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        try {
            navRight();
        }
        finally {
        }
    }
});
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37) {
        try {
            navLeft();
        }
        finally {
        }
    }
});
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        try {
            closeGallery();
        }
        finally {
        }
    }
});
let main = document.getElementById('gallery');
function gallery(div) {
    let id = div.getAttribute('id');
    console.log(id);
    let idNum = Number.parseInt(id);
    console.log(idNum);
    // Build all of the inner HTML
    let background = document.createElement('div');
    background.className = 'galleryBg';
    background.id = 'galleryDiv';
    let image = document.createElement('img');
    image.src = `..\\images\\digital\\${images[idNum]}.jpg`;
    image.id = `${id}`;
    image.className = 'currentImage unselectable';
    let leftArrow = document.createElement('i');
    leftArrow.className = 'left';
    leftArrow.id = 'left';
    let rightArrow = document.createElement('i');
    rightArrow.className = 'right';
    leftArrow.id = 'right';
    let close = document.createElement('div');
    close.innerHTML = 'x';
    close.id = 'close';
    // build the gallery window
    background.appendChild(image);
    background.appendChild(leftArrow);
    background.appendChild(rightArrow);
    background.appendChild(close);
    // add in the gallery window
    document.body.prepend(background);
    // add event listeners
    close.addEventListener('click', function () {
        closeGallery();
    });
    rightArrow.addEventListener('click', function () {
        navRight();
    });
    leftArrow.addEventListener('click', function () {
        navLeft();
    });
    // `<div class="galleryBg">
    //     <img src="..\\images\\digital\\${id}.jpg" alt="" srcset="">
    //     <i class="right" id="right"></i>
    //     <div id="close">X</div>
    //     <i class="left" id="left"></i>
    // </div>`
}
for (let i = 0; i < images.length; i++) {
    // tells us our row
    let row = Math.floor(i / 4);
    let image = `${images[i]}`;
    let contentDiv = document.createElement('div');
    let galleryDiv = document.createElement('div');
    let imgElement = document.createElement('img');
    // if we're on a new row, append a new row with an id of row#
    if (i % 4 === 0) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row galleryContainer';
        rowDiv.id = `row${row}`;
        main.appendChild(rowDiv);
    }
    let rowDiv = document.getElementById(`row${row}`);
    contentDiv.className = 'three columns centeredContent';
    galleryDiv.className = 'gallery';
    galleryDiv.style.cursor = 'pointer';
    galleryDiv.id = /*`${image}`*/ `${i}`;
    imgElement.src = `..\\images\\digital\\thumbnails\\${image}.jpg`;
    imgElement.className = 'unselectable';
    contentDiv.appendChild(galleryDiv);
    galleryDiv.appendChild(imgElement);
    rowDiv.appendChild(contentDiv);
    galleryDiv.addEventListener('click', function (e) {
        gallery(galleryDiv);
    });
}
function closeGallery() {
    document.getElementById('galleryDiv').remove();
}
function navRight() {
    let currentImage = document.getElementsByClassName('currentImage')[0];
    let index = Number.parseInt(currentImage.id);
    let newIndex = index + 1;
    console.log(newIndex);
    console.log(currentImage.src);
    console.log(index);
    let lastIndex = images.length - 1;
    if (newIndex > lastIndex) {
        newIndex = 0;
    }
    console.log(newIndex);
    currentImage.src = `..\\images\\digital\\${images[newIndex]}.jpg`;
    currentImage.id = /*`${images[newIndex]}`*/ `${newIndex}`;
}
function navLeft() {
    let currentImage = document.getElementsByClassName('currentImage')[0];
    let index = Number.parseInt(currentImage.id);
    let newIndex = index - 1;
    console.log(currentImage.src);
    console.log(index);
    let lastIndex = images.length - 1;
    if (newIndex < 0) {
        newIndex = lastIndex;
    }
    console.log(newIndex);
    currentImage.src = `..\\images\\digital\\${images[newIndex]}.jpg`;
    currentImage.id = /*`${images[newIndex]}`*/ `${newIndex}`;
}
