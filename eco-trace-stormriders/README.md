# 🍃 Projek EcoTrace - Storm Riders

Aplikasi web sederhana untuk memantau pengumpulan sampah di sekolah dan klasemen poin antar kelas.

## Catatan Teknis
Kami membangun sistem ini dengan fokus pada kecepatan akses (Lightweight Build):
- **UI :** Menggunakan CSS Native dengan variabel dinamis (Mendukung Dark Mode otomatis).
- **Logika :** Menggunakan Vanilla JavaScript dan LocalStorage browser agar data tetap tersimpan tanpa database berat.
- **Icon :** Favicon menggunakan Data URI SVG untuk menghemat request file.

## Struktur Folder
- `index.html` : Dashboard pantauan utama & klasemen.
- `input-data.html` : Form untuk mencatat setoran sampah.
- `css/sytle.css` : Kerangka desain & warna.
- `js/app.js` : Mesin penghitung poin otomatis.

## Fitur Utama
1. **Live Preview Score :** Skor langsung muncul saat mengetik berat sampah.
2. **Kategori Multi-Point :** Poin berbeda untuk setiap jenis limbah (Elektronik paling tinggi).
3. **Responsive Design :** Bisa dibuka lancar di HP maupun PC.

---
*Projek ini dikembangkan untuk lomba INNOVATE 2026 oleh Tim Storm Riders.*