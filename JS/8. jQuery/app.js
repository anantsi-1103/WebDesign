// let p = document.querySelector('p')
// p.innerText = "javascript"
// $('p').text("javascript")

// $(selector).action(callback)

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


