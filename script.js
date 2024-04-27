document.addEventListener("DOMContentLoaded", function() {
    const frameCount = 89;
    let frameIndex = 0; // Start from 0 to match your naming convention
    const animationElement = document.getElementById('animation');

    const intervalId = setInterval(() => {
        if (frameIndex <= frameCount) {
            let paddedIndex = frameIndex.toString().padStart(5, '0'); // Pad with zeros
            animationElement.src = `images/tailor-made/Handskrivet/skrift-large_${paddedIndex}.png`;
            frameIndex++;
        } else {
            clearInterval(intervalId); // Stop the interval after the last image
        }
    }, 80); // Change the interval to control speed, 100ms here
}); // Skräddarsydda lösningar png läsare

document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.getElementById('carouselContainer');

    function calculateScrollPercentage() {
        const scrollTop = carouselContainer.scrollTop;
        const scrollHeight = carouselContainer.scrollHeight;
        const clientHeight = carouselContainer.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const scrolledPercentage = Math.floor((scrollTop / maxScroll) * 100);

        // console.log(`Scrolled through ${scrolledPercentage}% of the container.`);

        if (scrolledPercentage <= 15) {
            carouselContainer.style.backgroundColor = "#114ECD";
        } else if (scrolledPercentage <= 41) {
            carouselContainer.style.backgroundColor = "#368635";
        } else if (scrolledPercentage <= 80) {
            carouselContainer.style.backgroundColor = "#FEDB57";
        } else {
            carouselContainer.style.backgroundColor = "#DC3948";
        }
    }

    carouselContainer.addEventListener('scroll', calculateScrollPercentage);
}); // Scrollbara delen med webbutveckling osv

/*
document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { imgSrc: "icons/rullband/glob.png", description: "Global Närvaro" },
        { imgSrc: "icons/rullband/person.png", description: "Ökad Tillgänglighet" },
        { imgSrc: "icons/rullband/graf.png", description: "Datainsamling & Analys" },
        { imgSrc: "icons/rullband/pengavag.png", description: "Konkurrenskraft" },
    ];
    
    const container = document.querySelector('.scroll-container');


})
*/


