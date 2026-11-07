# Bunga Fried Chicken – Landing Page UMKM

Project contoh UAS mata kuliah Pemrograman Berbasis Web. Website landing page untuk usaha kuliner Bunga Fried Chicken.

## Teknologi
- HTML5
- CSS3 (responsive)
- JavaScript
- Git dan GitHub
- GitHub Pages

## Fitur
- Landing page responsive
- Navigasi mobile
- Profil usaha
- Katalog 6 menu
- Filter kategori menu
- Tombol pemesanan WhatsApp dengan pesan otomatis
- Informasi promo, testimoni, dan kontak
- Tanpa database dan backend

## Cara menjalankan
1. Download atau clone repository.
2. Buka folder project.
3. Klik dua kali `index.html`, atau jalankan menggunakan ekstensi Live Server di Visual Studio Code.

## Konfigurasi WhatsApp
Buka `js/script.js`, lalu ubah:

```js
const WHATSAPP_NUMBER = "6281234567890";
```

Ganti dengan nomor WhatsApp usaha dalam format internasional, tanpa tanda `+`. Contoh format: `628xxxxxxxxxx`.

## Penyesuaian konten sebelum dipublikasikan
- Sesuaikan nama, deskripsi, alamat, WhatsApp, dan Instagram usaha.
- Periksa dan ubah harga menu sesuai harga sebenarnya.
- Ganti foto ilustrasi dengan foto produk milik UMKM.
- Ganti testimoni contoh dengan ulasan pelanggan asli yang telah mendapat izin.
- Pastikan semua informasi kontak benar.

Foto pada template menggunakan URL gambar eksternal dari Unsplash dan memerlukan koneksi internet. Untuk penggunaan final, unduh foto yang berlisensi sesuai kebutuhan atau gunakan foto milik usaha sendiri, lalu simpan ke folder `images/`.

## Upload ke GitHub
1. Buat repository baru bernama `bunga-fried-chicken`.
2. Upload semua isi folder project ke repository.
3. Pastikan `index.html` berada di root repository.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
7. Tunggu proses selesai. URL biasanya berbentuk:
   `https://USERNAME.github.io/bunga-fried-chicken/`

## Struktur folder
```text
bunga-fried-chicken/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── logo.svg
```

## Catatan akademik
Harga, testimoni, alamat, dan nomor kontak pada template merupakan data contoh. Mahasiswa harus melakukan penyesuaian dan menjelaskan kontribusi masing-masing anggota kelompok.
