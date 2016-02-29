
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.src = 'googlelogo.jpg';
    image.addEventListener('load', function() {
        context.drawImage(image, 0, 0, 150, 100);
    }, false);
