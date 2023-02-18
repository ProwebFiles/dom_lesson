// console.log(document);

// let item = document.querySelector(".item")

// console.log(item);
// console.log(body);

// item.addEventListener("click", function () {
//     // console.log('Ishladi');
//     // console.dir(item);
//     if (item.style.background == "red") {
//         item.style.background = '#fff'
//     } else {
//         item.style.background = "red"
//     }
// })

// item.addEventListener("dblclick", function () {
//     console.log('Double click');
// })

// item.addEventListener("mouseover", function () {
//     body.style.background = 'orange'
// })

// item.addEventListener("mouseout", function () {
//     body.style.background = '#fff'
// })

// let item = document.querySelector(".item")

// if (item.hasAttribute("data-bg")) {
//     // console.log('Bor');
//     item.setAttribute("src", "img/01.png")
//     item.removeAttribute("class")
//     console.log(item.getAttribute("data-bg"));
// } else {
//     // console.log("Yo'q");
// }

// console.log(item);

// hasAttribute = attribute bor yo'qligini tekshirib beradi hasAttribute(attrName)
// setAttribute = attribute qoshib beradi setAttribute(attrName, value)
// removeAttribute = attribute ochirib beradi removeAttribute(attrName)
// getAttribute = attribute qiymatini qaytaradi getAttribute(attrName)

let item = document.querySelectorAll(".item")
// console.log(item);

for (let i = 0; i < item.length; i++) {
    // const x = item[i]
    // console.log(item[i]);
    item[i].style.background = item[i].getAttribute("data-bg")

    item[i].addEventListener("click", function () {
        // console.log(item[i].getAttribute("data-bg"));
        body.style.background = item[i].getAttribute("data-bg")
    })
}

function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(randColor());

function randDeg() {
    return Math.floor(Math.random() * 361)
}

let card = document.querySelectorAll(".card")
let card_2 = document.querySelectorAll(".card_2")

// linear-gradient(360deg, rgb(83, 11, 250), rgb(83, 11, 250))

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        card[i].style.background = randColor()
    })
    card_2[i].addEventListener("click", function () {
        card_2[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()})`
    })
}

let color = ["red", "#000", "blue", 'pink', "grey"];