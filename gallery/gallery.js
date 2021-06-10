/* Get a list of all the files in the images folder */
// TODO: uncomment when server is set up
// $.ajax({
//     method: 'GET',
//     url: '/galleryitems',
//     dataType: 'json'
// }).done((response) => { /* Ain't over till the fat lady syncs */
//     var galleryContent = "";
//     var modalContent = "";
//     var i = 1;
//     Object.values(response).forEach((element) => {
//         if (element.includes('.jpg') && !element.includes('Logo')) {
//             galleryContent +=
//                 `<div class="col-md-3 gallery-item">
//                     <a href="../images/${element}">
//                         <img class="img-fluid mx-auto img-thumbnail" alt="Thumbnail - 225px" style="width: 225px; height: 225px;" src="../images/thumbnails/${element}">
//                     </a>
//                 </div>\n`;

//             modalContent +=
//                 `<div id="slide-${i}" class="carousel-item">
//                     <img class="d-block w-100 carouselImage" src="../images/${element}" alt="Slide-${i}">
//                 </div>\n`;
//         }
//         i++;
//     });
//     console.log(modalContent);
//     $('#gallery-pics').html(galleryContent);
//     $('.carousel-inner').html(modalContent);
//     $('#slide-1').addClass('active');
// }).fail((jqXHR, textStatus) => {
//     alert(`Error getting gallery item list: ${textStatus}`);
// });

let gallery_pics = document.getElementById('gallery-pics');
let gallery_modal = document.getElementById('carousel-content');
for (let i = 1; i <= 19; i++) {
    gallery_pics.innerHTML +=
        `<div class="col-md-3 gallery-item">
            <a href="../scaled/${i}.JPG">
                <img class="img-fluid mx-auto img-thumbnail" alt="Thumbnail${i} - 225px" style="width: 225px; height: 225px;" src="../scaled/${i}.JPG">
            </a>
        </div>\n`;
    gallery_modal.innerHTML += 
        `<div id="slide-${i}" class="carousel-item">
            <img class="d-block w-100 carouselImage" src="../scaled/${i}.JPG" alt="Slide-${i}">
        </div>\n`;
}
$('#slide-1').addClass('active');
