const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer1",
        img: "https://picsum.photos/id/65/200",
        text: "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore eius praesentiumsaepe dicta repudiandae hic asperiores, ipsam corporis id."
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web designer2",
        img: "https://picsum.photos/id/66/200",
        text: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore eius praesentiumsaepe dicta repudiandae hic asperiores, ipsam corporis id."
    },
    {
        id: 3,
        name: "Peter",
        job: "intern3",
        img: "https://picsum.photos/id/68/200",
        text: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore eius praesentiumsaepe dicta repudiandae hic asperiores, ipsam corporis id."
    },
    {
        id: 4,
        name: "Parker",
        job: "intern4",
        img: "https://picsum.photos/id/672/200",
        text: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore eius praesentiumsaepe dicta repudiandae hic asperiores, ipsam corporis id."
    }
]
const img = document.querySelector("#personImg")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")
const prev = document.querySelector(".prev-btn")
const next = document.querySelector(".next-btn")
const random = document.querySelector(".randomButon")

let currenItem = 0

window.addEventListener("DOMContentLoaded", function () {
    showPerson()  //showPerson(currenItem)
    // const item = reviews[currenItem]
    // img.src = item.img  //img.src = reviews[currenItem].img
    // author.textContent = item.name
    // job.textContent = item.job
    // info.textContent = item. text
})

function showPerson() {  //showPerson(person)
    const item = reviews[currenItem] //reviews[person]
    img.src = item.img  //img.src = reviews[currenItem].img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

next.addEventListener("click", function () {
    currenItem++
    if (currenItem > reviews.length - 1) { currenItem = 0 }
    showPerson()  //showPerson(currenItem)
})
prev.addEventListener("click", function () {
    currenItem--
    if (currenItem < 0) { currenItem = reviews.length - 1 }
    showPerson()  //showPerson(currenItem)
})
random.addEventListener("click", function () {
    currenItem = Math.floor(Math.random() * reviews.length)
    if (currenItem < 0) { currenItem = reviews.length - 1 }
    showPerson()  //showPerson(currenItem)
})