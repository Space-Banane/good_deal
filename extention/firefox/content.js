(function () {
    // create the button
    const btn = document.createElement('button');
    btn.textContent = "Check Deal 🔍";
    btn.style.position = "fixed";
    btn.style.bottom = "24px";
    btn.style.right = "24px";
    btn.style.zIndex = "9999";
    btn.style.padding = "12px 22px";
    btn.style.background = "linear-gradient(90deg, #e11d48 0%, #be185d 100%)";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "12px";
    btn.style.cursor = "pointer";
    btn.style.fontFamily = "'Inter', 'Segoe UI', 'sans-serif'";
    btn.style.fontWeight = "600";
    btn.style.fontSize = "1.1rem";
    btn.style.boxShadow = "0 4px 24px 0 rgba(190,24,93,0.18), 0 1.5px 6px 0 rgba(30,41,59,0.12)";
    btn.style.letterSpacing = "0.01em";
    btn.style.transition = "transform 0.15s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1)";
    btn.style.backdropFilter = "blur(2px)";
    btn.style.outline = "none";

    btn.addEventListener('mouseenter', () => {
        btn.style.transform = "scale(1.04)";
        btn.style.boxShadow = "0 6px 32px 0 rgba(225,29,72,0.22), 0 2px 8px 0 rgba(30,41,59,0.16)";
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "0 4px 24px 0 rgba(190,24,93,0.18), 0 1.5px 6px 0 rgba(30,41,59,0.12)";
    });

    // on click: redirect user
    btn.addEventListener('click', () => {
        let currentUrl = encodeURIComponent(window.location.href);
        
        // Prep URL
        currentUrl = currentUrl.replace(/%2F/g, "SLASH");
        currentUrl = currentUrl.split('%3F')[0]; // Remove anything after ?
        
        const redirectUrl = `https://shsf-api.reversed.dev/api/exec/7/c109a958-e326-4619-993f-44985da7cec7/?url=${currentUrl}&dont_auto_start=true`;
        window.location.href = redirectUrl;
    });

    // add to the page
    const actionsDiv = document.getElementById('viewad-user-actions');
    if (actionsDiv) {
        actionsDiv.appendChild(btn);
    } else {
        document.body.appendChild(btn);
    }
})();
