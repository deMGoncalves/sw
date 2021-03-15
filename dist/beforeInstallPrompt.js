"use strict";
window.addEventListener('beforeinstallprompt', (event) => event.userChoice.then((choiceResult) => console.log('SW beforeinstallprompt', choiceResult.outcome)));
