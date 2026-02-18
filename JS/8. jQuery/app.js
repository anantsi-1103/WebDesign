// let p = document.querySelector('p')
// p.innerText = "javascript"
// $('p').text("javascript")


// hide 

$('.hide').click(() => {
    $('.container').hide(1500, () => {
        console.log("Hide done")
    })
})

$('.show').click(() => {
    $('.container').show(1500, () => {
        console.log("show done")
    })
})

// fadein , fade out , fade to , fade toggle

$('.fadeOut').click(() => {
    $('.container').fadeOut(1500, () => {
        console.log("fade out done")
    })
})


$('.fadeIn').click(() => {
    $('.container').fadeIn(2000, () => {
        console.log("fade In done")
    })
})


$('.fadeTo').click(() => {
    $('.container').fadeTo(2000, 0.5, () => {
        console.log("fade To done")
    })
})


$('.fadeToggle').click(() => {
    $('.container').fadeToggle(1000, () => {
        console.log("fade Toggle done")
    })
})


$('.slideup').click(() => {
    $('.container').slideUp(1000, () => {
        console.log("slide Up done")
    })
})

$('.slidedown').click(() => {
    $('.container').slideDown(1000, () => {
        console.log("slide Down done")
    })
})

$('.slidetoggle').click(() => {
    $('.container').slideToggle(1000, () => {
        console.log("slide Toggle done")
    })
})


$('.animate').click(() => {
    $('.container').animate({
        width: "+=50px",
        height: "+=50px",
        opacity: '-=0.2'
        //1 - 0.8, 0.6,0.4,0.2,0
    })
})