
// document.getElementby ID/TagName/ClassName
// let head = document.getElementsByTagName('h1')

// console.log(head[0])

// let head = document.getElementById("heading")

// console.dir(head)

// let head = document.getElementByClassName("heading")

// console.dir(head)


// QuerySelector
// h1 - element , class ki value head  , id ki value head
// let head = document.querySelector("#head")
// let img = document.querySelectorAll(".oldImg")

// console.log(img[1])

// let para = document.querySelector('#para')

// innertext -> html m se bus text 
// console.log(para.innerText)

// innerHtml -> 
// console.log(para.innerHTML)


// let head = document.getElementById('heading')

// // head se pta kra ki apke tag ke andr koi class 
// console.log(head.classList)

// // head ke andr maine class ko add 
// head.classList.add("newAdded")

// // head ke andr koi class
// console.log(head.classList)

// // class exist hai ya nhi
// console.log(head.classList.contains("newAdded"))
// head.classList.add("green")

// // remove 
// head.classList.remove("newAdded")

// // toggle - switch -> yes - no - no - yes
// head.classList.toggle("green")


// Navigation property
// let box = document.querySelector('.box')

// console.log(box.parentElement)
// console.log(box.childElementCount)
// console.log(box.children)
// console.log(box.previousElementSibling)
// console.log(box.nextElementSibling)

// create element in js 

let p = document.createElement('p')

p.innerText = 'new para by JS'

let box = document.querySelector('.box')

box.appendChild(p)

p.classList.add('para')

p.prepend("React ")

p.append(" JavaFullStack")

// beforebegin,beforeend, afterstart, afterend
// box.insertAdjacentElement("afterend",p)

// box.removeChild(p)

// dom events -> js -> 