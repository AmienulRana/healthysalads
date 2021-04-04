const kategori = document.querySelectorAll('.kategori div')
const rowMenu = document.querySelector('.row-menu')
function allMenu() {
    fetch('menu.json').then(result => result.json())
    .then(result => {
        const semuaMenu = result.menu
        let barisMenu = ''
        semuaMenu.forEach(menu => {
            barisMenu += daftarMakanan(menu)  
        })
        rowMenu.innerHTML = barisMenu
        const hr = document.querySelectorAll('.hr-menu')
        hr[hr.length - 1].style.display = 'none'
    })
}
allMenu()
 

kategori.forEach(kat => {
    kat.addEventListener('click', function () {
        // menambahkan banyang pada baris menu ketika di klik
        rowMenu.classList.add('aktif')
        setTimeout(() => {
            rowMenu.classList.remove('aktif')
        }, 325)
        
        kategori.forEach(k => {
            k.classList.remove('aktif')
        });
        this.classList.add('aktif')
    })
})


function daftarMakanan(menu) {
    return (
        `<div class="row mt-1 justify-content-between">
            <div class="col-6">
                <img src="${menu.gambar}" data-imgId=${menu.id} class="img-fluid img-app mt-2">
            </div>
            <div class="col-6 align-self-center">
                <h5>${menu.nama}</h5>
                <h5>$${menu.harga}</h5>
                <button class="button-tambah tambah-menu" data-idbtn=${menu.id}><h6 style="font-size:12px;">tambah</h6></button>
            </div>
        </div>
        <hr class="hr-menu">`
    )
}

kategori.forEach(kat => {
    kat.addEventListener('click', function () {
        const namaKategori = kat.dataset.kategori
        if(namaKategori == 'all'){
            allMenu()
            return
        }
        fetch('menu.json').then(result => result.json())
        .then(result => {
            const semuaMenu = result.menu
            let content = ''
            semuaMenu.forEach(menu => {
                const kategori = menu.kategori
                if (namaKategori == kategori) {
                    content += daftarMakanan(menu)
                }
                rowMenu.innerHTML = content
            })
        })
    })
})

// ketika user berpindah ke halaman keranjang
// 




















