// script.js
document.addEventListener('DOMContentLoaded', function() {
    const anggotaForm = document.getElementById('anggota-form');
    anggotaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const namaAnggota = document.getElementById('nama-anggota').value;
        alert(`Nama Anggota: ${namaAnggota} telah ditambahkan!`);
        anggotaForm.reset();
    });
});