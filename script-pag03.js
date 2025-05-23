document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os vídeos pelos IDs
    const video1 = document.getElementById('hover-video');
    const video2 = document.getElementById('hover-video2');
    const video3 = document.getElementById('hover-video3');
    const video4 = document.getElementById('hover-video4');

  
    // Função para adicionar os eventos de hover a um vídeo
    function setupVideoHover(video) {
      // Mouse entra: reproduz
      video.addEventListener('mouseenter', function() {
        video.play().catch(e => console.log("Erro ao reproduzir:", e));
      });
  
      // Mouse sai: pausa e reinicia
      video.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
      });
    }
  
    // Configura os eventos para ambos os vídeos
    if (video1) setupVideoHover(video1);
    if (video2) setupVideoHover(video2);
    if (video3) setupVideoHover(video3);
    if (video4) setupVideoHover(video4);
  });


  // Player

   document.addEventListener('DOMContentLoaded', function() {
    // Verifica se os elementos existem antes de manipulá-los
    const audio = document.getElementById('myAudio');
    const playButton = document.querySelector('.playButton');
    const playIcon = document.getElementById('play');
    const pauseIcon = document.getElementById('pause');

    // Se os elementos existirem
    if (playButton && playIcon && pauseIcon) {
        // Configuração inicial
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'block';

        playButton.addEventListener('click', function() {
            if (audio && audio.paused) {
                audio.play()
                    .then(() => {
                        playIcon.style.display = 'none';
                        pauseIcon.style.display = 'block';
                    })
                    .catch(error => {
                        console.error("Erro ao reproduzir áudio:", error);
                    });
            } else if (audio) {
                audio.pause();
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            }
        });
    }
});

