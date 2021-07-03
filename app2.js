const kategori = document.querySelectorAll(".kategori div");
const rowMenu = document.querySelector(".row-menu");

const Allmenu = [
  {
    id: 1,
    nama: "Mixed Salad",
    harga: "20.00",
    kategori: "salads",
    gambar: "img/salad3.png",
    deskripsi: " Lorem ipsum dolor sit amet consectetur adipisicing. ",
  },
  {
    id: 2,
    nama: "Kacang-kacangan",
    harga: "24.00",
    kategori: "salads",
    gambar: "img/salad4.png",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aspernatur adipisci?",
  },
  {
    id: 3,
    nama: "Avocado & Vegetables",
    harga: "19.00",
    kategori: "healthy food",
    gambar: "img/salad2-removebg.png",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.",
  },
  {
    id: 4,
    nama: "Bayam Ungu",
    harga: "21.00",
    kategori: "healthy food",
    gambar: "img/salad1.png",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aspernatur adipisci?",
  },
];

function allMenu() {
  let barisMenu = "";
  Allmenu.forEach((menu) => {
    barisMenu += daftarMakanan(menu);
  });
  rowMenu.innerHTML = barisMenu;
  const hr = document.querySelectorAll(".hr-menu");
  hr[hr.length - 1].style.display = "none";
}
allMenu();

kategori.forEach((kat) => {
  kat.addEventListener("click", function () {
    // menambahkan banyang pada baris menu ketika di klik
    rowMenu.classList.add("aktif");
    setTimeout(() => {
      rowMenu.classList.remove("aktif");
    }, 215);

    kategori.forEach((k) => {
      k.classList.remove("aktif");
    });
    this.classList.add("aktif");
  });
});

function daftarMakanan(menu) {
  return `<div class="row mt-1 justify-content-between">
            <div class="col-6">
                <img src="${menu.gambar}" data-imgId=${menu.id} class="img-fluid img-app mt-2">
            </div>
            <div class="col-6 align-self-center">
                <h5>${menu.nama}</h5>
                <h5>$${menu.harga}</h5>
                <button class="button-tambah tambah-menu" data-idbtn=${menu.id}><h6 style="font-size:12px;">tambah</h6></button>
            </div>
        </div>
        <hr class="hr-menu">`;
}

kategori.forEach((kat) => {
  kat.addEventListener("click", function () {
    const namaKategori = kat.dataset.kategori;
    if (namaKategori == "all") {
      allMenu();
      return;
    }
    let content = "";
    Allmenu.forEach((menu) => {
      const kategori = menu.kategori;
      if (namaKategori == kategori) {
        content += daftarMakanan(menu);
      }
      rowMenu.innerHTML = content;
    });
  });
});
