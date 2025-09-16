window.onload = function() {
    const introSection = document.getElementById("introducao");
    introSection.style.opacity = 0;
    introSection.style.transition = "opacity 2s ease-in-out";
    
    setTimeout(() => {
        introSection.style.opacity = 1;
    }, 500);
};
