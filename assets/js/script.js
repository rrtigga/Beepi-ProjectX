$(document).ready(function() {
    var handlesSlider = document.getElementById('priceslider');

noUiSlider.create(handlesSlider, {
    start: [ 4000, 8000 ],
    range: {
        'min': [  2000 ],
        'max': [ 10000 ]
    }
});
});