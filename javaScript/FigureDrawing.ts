let images: string[] = [
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

let main: HTMLElement = document.getElementById('gallery');

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
    imgElement.src = image;
    contentDiv.appendChild(galleryDiv);
    galleryDiv.appendChild(imgElement);
    rowDiv.appendChild(contentDiv);

}

