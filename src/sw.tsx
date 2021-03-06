export let deferredPrompt : null | any ;

export function sw() {
    // Check for browser support of service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                // Successful registration
                console.log('Service worker Registration successful, scope is:', registration.scope);
            }).catch(function (err) {
                // Failed registration, service worker won’t be installed
                console.log('Whoops. Service worker registration failed, error:', err);
            });
    }
  }
    
  window.addEventListener('beforeinstallprompt', function(event) {
      console.log("Before Install Prompt fired");
      event.preventDefault();
      deferredPrompt=event;
      return false;
  });

  