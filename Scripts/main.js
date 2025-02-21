function fetchHeaderAndFooter() {
    document.addEventListener("DOMContentLoaded", function () {
        fetch('./PageComponents/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
                executeScripts(data);
            });
        fetch('PageComponents/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
                executeScripts(data);
            });
    })
}

function executeScripts(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const scripts = tempDiv.querySelectorAll('script');
    
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
            newScript.src = script.src;
        } else {
            newScript.textContent = script.textContent;
        }
        document.head.appendChild(newScript);
        document.head.removeChild(newScript);
    });
}

fetchHeaderAndFooter();
