document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById('add-to-home-popup');
  const installButton = document.getElementById('install-pwa');
  const closeButton = popup.querySelector('.close');

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    popup.style.display = 'block';
  });

  installButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(() => {
        popup.style.display = 'none';
      });
    }
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
