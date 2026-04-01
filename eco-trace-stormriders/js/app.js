/** * ECOTRACE 2026
 * Dibuat oleh: Tim Strom Riders
 */

document.addEventListener('DOMContentLoaded', function() {
    const fInput = document.getElementById('input_berat');
    const fKategori = document.getElementById('kategori_sampah');
    const fSkorTeks = document.getElementById('preview-skor');
    const fForm = document.getElementById('formEntry');

    // Itung skor real-time pas lagi ngetik
    function kalkulasiSkor() {
        let angkaberat = parseFloat(fInput.value) || 0;
        let jenis = fKategori.value;
        let poinPerKilo = 0;

        if (jenis == "Plastik") { poinPerKilo = 35; }
        else if (jenis == "Kertas") { poinPerKilo = 25; }
        else if (jenis == "Logam") { poinPerKilo = 45; }
        else if (jenis == "Elektronik") { poinPerKilo = 75; }
        else if (jenis == "Organik") { poinPerKilo = 15; }

        let hasilAkhir = Math.floor(angkaberat * poinPerKilo);
        
        if (jenis != "") {
            fSkorTeks.innerText = "Estimasi Skor: +" + hasilAkhir + " Poin";
        } else {
            fSkorTeks.innerText = "Pilih kategori dulu...";
        }
        return hasilAkhir;
    }

    if (fInput) fInput.addEventListener('input', kalkulasiSkor);
    if (fKategori) fKategori.addEventListener('change', kalkulasiSkor);

    // Kirim data dan simpan di memori browser
    if (fForm) {
        fForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let beratInput = parseFloat(fInput.value);
            let poinDapet = kalkulasiSkor();

            let bLama = localStorage.getItem('eco_berat_total') || 128;
            let sLama = localStorage.getItem('eco_skor_total') || 2560;

            localStorage.setItem('eco_berat_total', parseFloat(bLama) + beratInput);
            localStorage.setItem('eco_skor_total', parseFloat(sLama) + poinDapet);

            alert("Data Berhasil Disimpan! Dashboard Otomatis Terupdate.");
            window.location.href = 'index.html';
        });
    }

    // Update tampilan dashboard utama
    const tabBerat = document.getElementById('tab-berat');
    const tabSkor = document.getElementById('tab-skor');

    if (tabBerat && tabSkor) {
        let dataB = localStorage.getItem('eco_berat_total') || 128;
        let dataS = localStorage.getItem('eco_skor_total') || 2560;

        tabBerat.innerHTML = parseFloat(dataB).toFixed(1) + "<span>kg</span>";
        tabSkor.innerHTML = Math.floor(dataS);
    }
});