document.addEventListener("DOMContentLoaded", function() {
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');

    bar1.addEventListener('click', function() {
        var leftSlices = document.querySelectorAll('.left');
        leftSlices.forEach(function(slice) {
            if (slice.style.display === 'block' || getComputedStyle(slice).display === 'block') {
                slice.style.display = 'none';
                slice.style.border = 'none';
            } else {
                slice.style.display = 'block';
                slice.style.border = '2px solid black';
            }
        });
        
    });

    bar2.addEventListener('click', function() {
        var rightSlices = document.querySelectorAll('.pie-slice.right');
        rightSlices.forEach(function(slice) {
            if (slice.style.display === 'block' || getComputedStyle(slice).display === 'block') {
                slice.style.display = 'none';
                slice.style.border = 'none';
            } else {
                slice.style.display = 'block';
                slice.style.border = '2px solid black';
            }
        });
    });
});
