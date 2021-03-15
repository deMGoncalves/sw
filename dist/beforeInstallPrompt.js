"use strict";
window.addEventListener('beforeinstallprompt', (event) => event.userChoice((choiceResult) => console.log('SW beforeinstallprompt', choiceResult.outcome)));
