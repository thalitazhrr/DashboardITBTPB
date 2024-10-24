document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('matkul1').addEventListener('click', function() {
        window.location.href = 'matematika.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quiz1').addEventListener('click', function() {
        window.location.href = 'detail.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startTask').addEventListener('click', function() {
        window.location.href = 'quiz.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tombol untuk mulai kuis
    document.getElementById('startTask').addEventListener('click', function() {
        // Reset score dan progress ke 0 saat mulai ulang kuis
        localStorage.setItem('quizScore', '0');
        localStorage.setItem('quizProgress', '0');
        
        // Redirect ke halaman quiz
        window.location.href = 'quiz.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ambil nilai score dari localStorage
    const score = localStorage.getItem('quizScore') || 'Belum ada nilai';
    document.getElementById('score').innerText = score;

    // Ambil progress dari localStorage
    const progress = localStorage.getItem('quizProgress') || '0';
    const progressBar = document.querySelector('.progress-bar .progress');
    const progressText = document.querySelector('.progress-bar .progress-text');

    // Set lebar progress bar sesuai dengan nilai progress
    progressBar.style.width = progress + '%';
    progressText.innerText = progress + '%';
});
