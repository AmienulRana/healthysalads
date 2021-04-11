const fadeUp = document.querySelectorAll('.fade-up')
const fadeRight = document.querySelectorAll('.fade-right')
const fadeLeft = document.querySelectorAll('.fade-left')

function posFade(fade, position) {
    const winHeight = window.innerHeight / 1.1
    fade.forEach(up => {
        const posUp = up.getBoundingClientRect().top
        if (posUp < winHeight) {
            up.classList.add(position)
        }
    })
}


function scrollFade() {
    posFade(fadeUp,'up')
    posFade(fadeRight,'right')
    posFade(fadeLeft,'left')
}
scrollFade()

window.addEventListener('scroll',scrollFade)


// function innWidth(f,posFade) {
//     f.forEach(fade => {
//         fade.classList.replace(posFade,'fade-up')
//     })
// }
// innWidth(fadeRight,'fade-right')
// innWidth(fadeLeft,'fade-left')




