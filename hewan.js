window.onload = function() {
  const container = document.querySelector('.rain-container');
  
  // Membuat banyak rintik hujan
  for (let i = 0; i < 100; i++) { // Anda dapat mengatur jumlah rintik hujan di sini
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    
    // Posisi horizontal acak untuk setiap rintik
    drop.style.left = Math.random() * 100 + 'vw';
    
    // Durasi animasi acak untuk kecepatan berbeda
    drop.style.animationDuration = Math.random() * 2 + 2 + 's'; // 2 hingga 4 detik
    
    container.appendChild(drop);
  }
};

function redirectToPage() {
  window.location.href = "hewan-terbang.html"; // Nama file halaman kedua
}
