// Bikin angka rahasia dari 1 sampai 100, yang harus ditebak
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Jumlah percobaan awal, mulai dari nol
let tries = 0;

// Ambil kotak input, tombol, dan tempat pesan dari HTML
const guessInput = document.getElementById("guessInput"); // tempat kita nulis angka
const checkBtn = document.getElementById("checkBtn");     // tombol untuk tebak
const message = document.getElementById("message");       // tempat muncul pesan "benar" atau "salah"
const attemptsDisplay = document.getElementById("attempts"); // tulisan berapa kali kita sudah coba
const resetBtn = document.getElementById("resetBtn");     // tombol untuk mulai ulang

// Tampilkan jumlah tebakan yang baru mulai
attemptsDisplay.textContent = `Attempts: ${tries}`;

// Saat tombol "Check" diklik...
checkBtn.addEventListener("click", function () {
    // Ambil angka dari input dan ubah jadi angka beneran (bukan teks)
    const userGuess = Number(guessInput.value.trim());

    // Cek kalau angka tidak valid (bukan 1-100)
    if (!userGuess || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Masukkan angka antara 1 dan 100!";
        message.style.color = "orange";
        return; // Berhenti dulu, jangan cek lebih lanjut
    }

    // Tambah jumlah percobaan
    tries++;

    // Tampilkan jumlah percobaan
    attemptsDisplay.textContent = `Attempts: ${tries}`;

    // Sekarang cek apakah tebakannya benar atau tidak
    if (userGuess === secretNumber) {
        // Kalau benar
        message.textContent = `🎉 Selamat! Kamu menebak ${secretNumber} dalam ${tries} kali.`;
        message.style.color = "green";
        // Matikan input dan tombol agar tidak bisa nebak lagi
        guessInput.disabled = true;
        checkBtn.disabled = true;
    } else if (userGuess > secretNumber) {
        // Kalau tebakannya kegedean
        message.textContent = "📉 Kegedean bro! Coba lebih kecil.";
        message.style.color = "red";
    } else {
        // Kalau tebakannya kekecilan
        message.textContent = "📈 Kekecilan bro! Coba lebih besar.";
        message.style.color = "red";
    }

    // Kosongkan input dan fokuskan ke input biar langsung bisa ngetik lagi
    guessInput.value = "";
    guessInput.focus();
});

// Kalau tombol reset diklik...
resetBtn.addEventListener("click", function () {
    // Bikin angka rahasia baru
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset jumlah percobaan jadi nol
    tries = 0;

    // Bersihin semua tampilan
    message.textContent = "";
    message.style.color = "black";
    attemptsDisplay.textContent = `Attempts: ${tries}`;
    guessInput.value = "";

    // Aktifkan kembali input dan tombol
    guessInput.disabled = false;
    checkBtn.disabled = false;

    // Fokus ke input lagi
    guessInput.focus();
});
