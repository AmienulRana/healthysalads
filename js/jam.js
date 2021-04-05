
function realTime() {
    const clock = new Date()
    let jam = clock.getHours()
    let menit = clock.getMinutes()
    jam = (jam > 24) ? jam - 24 : jam
    jam = ("0" + jam).slice(-2)
    menit = ("0" + menit).slice(-2)
    const pJam = document.querySelector('.jam')
    pJam.innerHTML = jam + " : " + menit
    setInterval(realTime,500)
}
