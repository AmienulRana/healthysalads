const imgDetail = document.querySelectorAll('.img-app')
const colDesainHp = document.querySelector('.desain-hp')
const rowFoodDetail = document.querySelector('.row-food-detail')

let detail;
colDesainHp.addEventListener('click',function(e){
  if(e.target.classList.contains('img-app')){
    const imgId = e.target.dataset.imgid
    fetch('../menu.json').then(result => result.json())
      .then(result => {
        const semuaMenu = result.menu
        semuaMenu.forEach(Idmenu => {
          const idmenu = Idmenu.id
          if (imgId == idmenu) {
            let detailLengkap = foodDetail(Idmenu)
            rowFoodDetail.innerHTML = detailLengkap
            const colFoodDetail = document.querySelector('.col-food-detail')
            // ditemptakan dalam variabel lain agar button silang juga memberikan event
            detail = colFoodDetail
            detail.classList.add('munculkan')
            // function yang bertugas untuk menghapus detail selain tombol silang
            deleteDetail()
          }
        });
    })
  }
  
})


function deleteDetail() {
  window.addEventListener('click', function (e) {
    const target  = e.target
    if (target.classList.contains('silang')) {
        detail.classList.remove('munculkan')
    }
  })
  if (detail.classList.contains('munculkan')) {
      colDesainHp.addEventListener('click', function () {
      detail.classList.remove('munculkan')
  })
}
}









function foodDetail(IDmenu) {
  return(
    `<div class="col-12 col-food-detail">
      <div class="contanier container-fluid container-detail">
        <div class="row my-3">
          <div class="col">
            <ion-icon name="close" class="float-right silang"></ion-icon>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col-10 m-auto col-img-detail text-center">
            <img src="${IDmenu.gambar}" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col">
            <h3 style="font-size: 19px" class="nama-menu">
              ${IDmenu.nama}
            </h3>
          </div>
          <div class="col align-self-center">
            <span class="float-right d-flex">
              <button class="btn-dark quanty"><p>-</p></button>
              <p class="mx-3">1</p>
              <button class="btn-dark quanty"><p>+</p></button>
            </span>
          </div>
        </div>
        <div class="row mt-2 mb-1">
          <div class="col-10">
            <p class="text-justify text-deskripsi">
              ${IDmenu.deskripsi}
            </p>
          </div>
        </div>
        <div class="row mb-3 justify-content-between">
          <div class="col-5">
            <p>Total price</p>
            <h5 class="harga-detail">$${IDmenu.harga}</h5>
          </div>
          <div class="col-6">
            <span class="float-right">
              <button class="keranjang">
                <ion-icon name="cart" class="keranjang"></ion-icon>
              </button>
              <span class="jumlah-keranjang"><p>1</p></span>
            </span>
          </div>
        </div>
      </div>
    </div>`
  )

}
