// que-ans
// que-title


$(document).ready(function(){
    
    $('.que-title').click(function(){

        // already down ans up hojaeye
        $('.que-ans').not($(this).next('.que-ans')).slideUp()

        // slide toggle - up and down
        $(this).next('.que-ans').slideToggle()
    })


})
