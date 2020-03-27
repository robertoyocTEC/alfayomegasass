document.addEventListener("DOMContentLoaded", function(event) { 
    $('.toast').toast()
    $('#panic-button').click(() => {
        $('#panic-toast').toast('show')
    })
});