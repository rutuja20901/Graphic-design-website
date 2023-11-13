
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const servicesData = [
        {
            title: "Logo Design",
            description: "We create unique and memorable logos for your brand.",
        },
        {
            title: "Web Design",
            description: "We design stunning and responsive websites tailored to your needs.",
        },
        {
            title: "Print Design",
            description: "From business cards to brochures, we design for print with precision.",
        },
        {
            title: "UI Design",
            description: "From business cards to brochures, we design for print with precision.",
        },
        
    ];
    
    // Function to create service cards dynamically
    function createServiceCards() {
        const serviceCardsContainer = document.querySelector(".service-cards");
    
        servicesData.forEach((service) => {
            const serviceCard = document.createElement("div");
            serviceCard.classList.add("service-card");
    
            serviceCard.innerHTML = `
                <h2>${service.title}</h2>
                <p>${service.description}</p>
            `;
    
            serviceCardsContainer.appendChild(serviceCard);
        });
    }
    
    // Call the function to populate service cards
    createServiceCards();




//Testimonials Right side (Customer reviews)

var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonials.style.transform = "translateX(650px)"; //650
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick=function(){
    testimonials.style.transform = "translateX(50px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick=function(){
    testimonials.style.transform = "translateX(-540px)"; //540
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}
