$('.home_features').parallax({imageSrc:'img/bckg/home_features_bckg.jpg'});


$('.btn-minuse').on('click', function(){
        $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
})

$('.btn-pluss').on('click', function(){
        $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
})




