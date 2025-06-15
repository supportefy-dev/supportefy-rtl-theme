let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const popup = document.getElementById('add-to-home-popup');
  if (popup) popup.style.display = 'block';
});

function hidePopup() {
  const popup = document.getElementById('add-to-home-popup');
  if (popup) popup.style.display = 'none';
}

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(() => {
      deferredPrompt = null;
      hidePopup();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('#add-to-home-popup .close');
  if (closeBtn) closeBtn.addEventListener('click', hidePopup);

  const installBtn = document.getElementById('install-pwa');
  if (installBtn) installBtn.addEventListener('click', installPWA);
});
