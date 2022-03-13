/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* 
 * This code was written, tested, debugged, and operated by me only Muhammad Nasif, all rights reserved only to me and Udacity.
 * Everything done in the code has its own comment above it.
*/

// Start Global Variables
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End Global Variables


// Start build the nav
function buildNav(){
    sections.forEach(section => {
        //Create the li elements that contained inside the ul
        const navButton = document.createElement('li');
        //Insert the html text to  the li
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        //Append the li to the ul
        navList.appendChild(navButton);

        //scrollBehavior Function Invoke
        scrollBehavior(navButton, section);
    });
    //Append the ul to the nav
    navBar.appendChild(navList);
}

//Build Nav Function Invoke
buildNav();

//End build the nav


// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End of Scroll to anchor ID using scrollTO event


// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
    // Select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport accourding to top and bottom boundings
            //add 'your-active-class' class to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport


// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar(){
    let userScroll;
    //Default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    // Cleartimeout throughout the scrolling
    window.clearTimeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
// End of Toggle the NavBar According to User Scroll Activity


//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 


// Start of GO UP Button
//Create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button


