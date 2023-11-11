function toggleFanSide(side) {
    var fan = document.getElementById('fan-svg');
    var paths = fan.querySelectorAll('path.' + side);
    
    paths.forEach((path) => {
        if (path.style.transform === 'scale(0)') {
            path.style.transform = '';
        } else {
            path.style.transform = 'scale(0)';
            path.style.transformOrigin = '16px 16px';
        }
    });
}

document.getElementById('left-handle').addEventListener('click', function() {
    toggleFanSide('left');
});

document.getElementById('right-handle').addEventListener('click', function() {
    toggleFanSide('right');
});