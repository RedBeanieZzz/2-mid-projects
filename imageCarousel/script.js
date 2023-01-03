const imgContainer = document.querySelector('.imgcontainer');
const button = document.querySelectorAll('.button');

button.forEach((eachButon,value)=>{
    button[value].addEventListener('click', () =>{
        let position = value
        let operator = position * -25
        imgContainer.style.transform = `translateX(${operator}%)`;

        button.forEach((eachButon, value)=>{
            button[value].classList.remove('active');
        })
        button[value].classList.add('active');
    })
    
})