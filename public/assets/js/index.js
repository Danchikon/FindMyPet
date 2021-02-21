$("#show-filters").on('click', function() {
    $("#show-filters").toggleClass("active");
    if($('.filter-container').hasClass("active")){
        $('.filter-container').removeClass("active");
    }
    else{
        $('.filter-container').addClass("active");
    }
});
