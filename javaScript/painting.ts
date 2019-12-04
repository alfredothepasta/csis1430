let images: string[] = [
    '0001',
    '0002',
    '0003',
    '0004',
    '0005',
    '0006',
    '0007',
    '0008',
    '0009',
    '0010',
    '0011',
    '0012',
    '0013'
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
})

let main: HTMLElement = document.getElementById('gallery');

function gallery(div: HTMLDivElement) {
    let id: string = div.getAttribute('id');
    console.log(id);
    let idNum: number = Number.parseInt(id);
    console.log(idNum);

    // Build all of the inner HTML
    let background: HTMLDivElement = document.createElement('div');
    background.className = 'galleryBg';
    background.id = 'galleryDiv';
    let image: HTMLImageElement = document.createElement('img');
    image.src = `..\\images\\paintings\\${images[idNum]}.jpg`;
    image.id = `${id}`;
    image.className = 'currentImage unselectable'
    let leftArrow: HTMLElement = document.createElement('i');
    leftArrow.className = 'left';
    leftArrow.id = 'left';
    let rightArrow: HTMLElement = document.createElement('i');
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
    //     <img src="..\\images\\paintings\\${id}.jpg" alt="" srcset="">
    //     <i class="right" id="right"></i>
    //     <div id="close">X</div>
    //     <i class="left" id="left"></i>
    // </div>`
}

for (let i = 0; i < images.length; i++) {
    // tells us our row
    let row: Number = Math.floor(i / 4);
    let image: string = `${images[i]}`;
    let contentDiv: HTMLDivElement = document.createElement('div');
    let galleryDiv: HTMLDivElement = document.createElement('div');
    let imgElement: HTMLImageElement = document.createElement('img');

    // if we're on a new row, append a new row with an id of row#
    if (i % 4 === 0) {
        let rowDiv: HTMLDivElement = document.createElement('div');
        rowDiv.className = 'row galleryContainer';
        rowDiv.id = `row${row}`;
        main.appendChild(rowDiv);
    }

    let rowDiv = document.getElementById(`row${row}`);

    contentDiv.className = 'three columns centeredContent';
    galleryDiv.className = 'gallery';
    galleryDiv.style.cursor = 'pointer';
    galleryDiv.id = /*`${image}`*/ `${i}`;
    imgElement.src = `..\\images\\paintings\\thumbnails\\${image}.jpg`;
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
    let currentImage: HTMLImageElement = <HTMLImageElement>document.getElementsByClassName('currentImage')[0];
    let index: number = Number.parseInt(currentImage.id);
    let newIndex = index + 1;
    console.log(newIndex);
    console.log(currentImage.src);
    console.log(index);
    let lastIndex = images.length - 1;
    if (newIndex > lastIndex) {
        newIndex = 0;
    }

    console.log(newIndex);

    currentImage.src = `..\\images\\paintings\\${images[newIndex]}.jpg`;
    currentImage.id = /*`${images[newIndex]}`*/`${newIndex}`;
}

function navLeft() {
    let currentImage: HTMLImageElement = <HTMLImageElement>document.getElementsByClassName('currentImage')[0];
    let index: number = Number.parseInt(currentImage.id);
    let newIndex = index - 1;
    console.log(currentImage.src);
    console.log(index);
    let lastIndex = images.length - 1;
    if (newIndex < 0) {
        newIndex = lastIndex;
    }

    console.log(newIndex);

    currentImage.src = `..\\images\\paintings\\${images[newIndex]}.jpg`;
    currentImage.id = /*`${images[newIndex]}`*/`${newIndex}`;
}


