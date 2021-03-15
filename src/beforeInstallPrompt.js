window.addEventListener('beforeinstallprompt', (event) =>
  event.userChoice.then((choiceResult) =>
    console.log('SW before install prompt: ', choiceResult.outcome)))
