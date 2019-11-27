let images = [
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
    '..\\images\\figureDrawing\\001.jpg',
];
let main = document.getElementById('gallery');
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
    imgElement.src = image;
    contentDiv.appendChild(galleryDiv);
    galleryDiv.appendChild(imgElement);
    rowDiv.appendChild(contentDiv);
}
