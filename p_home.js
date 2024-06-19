// Disable right-click context menu
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

// Disable F12, Ctrl+Shift+I, and other DevTools shortcuts
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
        (event.ctrlKey && event.keyCode == 83)) { // Ctrl+S
      event.preventDefault();
      return false;
    }
  });

  // Function to detect if DevTools is open
  function detectDevTools(openCallback, closeCallback) {
    const threshold = 160;
    let prevWidth = window.outerWidth;
    let prevHeight = window.outerHeight;

    function check() {
      const width = window.outerWidth;
      const height = window.outerHeight;

      if (width < prevWidth - threshold || height < prevHeight - threshold) {
        openCallback();
      } else if (prevWidth < width - threshold || prevHeight < height - threshold) {
        closeCallback();
      }

      prevWidth = width;
      prevHeight = height;
    }

    window.addEventListener('resize', check);
    check();
  }

  // Display a warning message when DevTools is opened
  detectDevTools(
    function() {
      alert('DevTools is open. Accessing this site’s resources is prohibited.');
    },
    function() {
      console.log('DevTools is closed.');
    }
  )
