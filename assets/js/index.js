const header_DOM = document.querySelector(".header-section");

//On scrolling Header background changes
window.addEventListener("scroll",function(e){
    if(window.scrollY > 100){
        header_DOM.classList.add("background-black");
    } else {
        header_DOM.classList.remove("background-black");
    }
})

//Countdown
window.addEventListener("scroll",function(e){
    if (window.scrollY > 480){
        const count = document.querySelectorAll(".count");
        const speed = 9;
        count.forEach(number =>{
            const updateCount = ()=>{
                const target = +number.getAttribute('data-target');
                const countDown = +number.innerText;
                const inc = parseInt(target/speed);
                if(countDown < target){
                    number.innerText = parseInt(countDown + inc * 0.3);
                    setTimeout(updateCount, 75);
                } else{
                    countDown.innerText = target;
                }
            }
            updateCount();
        })
    }
})


// CALL US PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});