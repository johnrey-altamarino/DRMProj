// debug-check.js

(function() {
    // Function to detect if a debugger is present
    function detectDebugger() {
        // Detect if the developer tools are open
        const isDebugger = (function() {
            const threshold = 10; // Change this value based on what you observe
            const start = new Date();
            debugger; // Intentionally trigger the debugger
            const end = new Date();
            return end - start > threshold;
        })();

        if (isDebugger) {
            // Redirect to a 403 error page or similar action
            document.body.innerHTML = "<h1>403 Forbidden</h1><p>Access Denied.</p>";
            console.log('Debugger detected. Access forbidden.');
        }
    }

    // Run the debugger check
    detectDebugger();
})();
