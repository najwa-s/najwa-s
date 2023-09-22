document.addEventListener('DOMContentLoaded', function () {
const parentdiv=document.querySelector('.hobbies');
const textcontent =[]
const backgroundImgUrls = [
    'assets/img/LH.png',
    'assets/img/beyonce.jpg',
    'assets/img/trips.jpg',
    'assets/img/Friends.png',
    'assets/img/codng.jpg',
    'assets/img/books.jpg',
    'assets/img/tiktok.jpeg',
    'assets/img/AI.jpg'
];

const childDivs = parentdiv.querySelectorAll('.circle');
childDivs.forEach((div) =>{
    textcontent.push(div.textContent);
    div.textContent='';

});

function handleMouseEnter(event) {
    const index = Array.from(childDivs).indexOf(event.target);
    event.target.style.border = '2px solid white';
    event.target.textContent = textcontent[index];
    event.target.style.tex // Replace with your desired text
    event.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function handleMouseLeave(event) {
    event.target.style.border = '1px solid #ccc'; // Restore the original border style
    event.target.style.boxShadow = '';
    event.target.textContent = ''; // Hide the text again
}

childDivs.forEach((div,index) => 
                { div.style.backgroundImage =`url(${backgroundImgUrls[index]})`;
                
                div.addEventListener('mouseenter',handleMouseEnter);
                div.addEventListener('mouseleave',handleMouseLeave);
                });

   
function remove(){
    const options = document.getElementById('options');
    if( options.style.visibility=='visible'){
    document.getElementById('options').classList.remove("style");
    document.getElementById("options").style.visibility="hidden";
    }
    else {
        document.getElementById("options").style.visibility="visible";
        document.getElementById('options').classList.add("style");   
    }      

}
const container = document.querySelector('.container');
container.addEventListener("click",remove)
});