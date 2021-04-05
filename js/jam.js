
function realTime() {
    const clock = new Date()
    let jam = clock.getHours()
    let menit = clock.getMinutes()
    // conver tthe hours component to 12-hour format
    jam = (jam > 12) ? jam - 12 : jam
    // pad the hours, minutes with leading zeros
    jam = ("0" + jam).slice(-2)
    menit = ("0" + menit).slice(-2)
    const pJam = document.querySelector('.jam')
    pJam.innerHTML = jam + " : " + menit
    setInterval(realTime,500)
}
