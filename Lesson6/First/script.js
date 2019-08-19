window.onload = function () {
    const gallery = document.querySelector('#gallery');
    const bigPicture = document.querySelector('#big-picture');
    const images = gallery.querySelectorAll('img');

    images.forEach(image =>{
        console.log(image);
        image.addEventListener('click', changeImage);
    });
    function changeImage(event) {
        bigPicture.innerHTML = '';
        const image = event.target;
        const imageNameParts = image.id.split('_');
        const src = 'img/big/'+ imageNameParts[1] + '.jpg';
        const imageDomElement = document.createElement('img');
        imageDomElement.src = src;
        imageDomElement.onload = function()
        {
            bigPicture.appendChild(imageDomElement);
        }
        imageDomElement.onerror = function(){
            imageDomElement.src = 'img/big/no-photo.jpg';
            bigPicture.appendChild(imageDomElement);
        }

    }
}


