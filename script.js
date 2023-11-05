// Get the <style> element by its id
const styleElement = document.getElementById('custom-styles');
var icones = document.querySelectorAll('.icones li');
let tab_icone_startX = [0,-40,40,0,-40,40];
let tab_icone_startY = [-70,-70,-70,70,70,70];
let tab_goto = [0,-45,45,180,-135,135];


var lastPosition = ` 0% {
    transform: rotate(${tab_goto[0]}deg);
        }`

icones.forEach((element,index) => {
    let gotoli= `gotoli_${index}`;
    let iconeli =`icone_li${index}`;
    let deg = tab_goto[index];

    // Create a new CSS rule for the animation
const animationRule = document.createTextNode(`
.${gotoli}{
    background-color: transparent;
    animation: ${gotoli} 2s ease forwards;
}

@keyframes ${gotoli} {
    ${lastPosition} 

    100% {
        transform: rotate(${deg}deg);
    }
}

@keyframes ${iconeli} {
    0% {
        transform: translateX(${tab_icone_startX[index]}px) translateY(${tab_icone_startY[index]}px) rotate(360deg);
    }
    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0;
    }  
}

@keyframes ${iconeli}_reverse {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        opacity: 0;
    }
    100% {
        transform: translateX(${tab_icone_startX[index]}px) translateY(${tab_icone_startY[index]}px) rotate(360deg);
    }  
}
`);

// Append the animation rule to the <style> element
styleElement.appendChild(animationRule);



});


var third_circle = document.getElementById('third_circle');


third_circle.addEventListener('test', ()=>{
    console.log(third_circle);
    console.log("test");
    if ( third_circle.classList.contains('third_circle_out')) {
        third_circle.classList.remove('third_circle_out');
    }
    third_circle.classList.add('third_circle_over');
})

third_circle.addEventListener('test', ()=>{
    console.log(third_circle);
    console.log("sorti");
    if (third_circle.classList.contains('third_circle_over')) {
        third_circle.classList.remove('third_circle_over');
    }
        third_circle.classList.add('third_circle_out');
})

var first_element = document.querySelector('.first_circle');

var second_element = document.querySelector('.third_circle');
second_element.addEventListener('click',()=>{

    icones.forEach((element,index) => {
            let animation= `icone_li${index}`;
            console.log(element,index,animation);
            if (element.classList.contains("activate")) {
                element.style.animation = `${animation}_reverse 1s ease-in-out forwards`;
                first_element.style.animation ='reduceReverse 1s  ease-in-out forwards'
                element.classList.remove('activate');
            }else{
                element.classList.add("activate")
                element.style.animation = `${animation} 1s ease-in-out forwards`;
                first_element.style.animation ='reduce 1s  ease-in-out forwards'


            }
    });
});

icones.forEach((element,index) => {
    element.addEventListener('click',()=>{
        //let animation= `icone_li${index}`;
        icones.forEach((otherElement, otherIndex) => {
            if (otherIndex !== index) {
                otherElement.classList.remove('active');
                third_circle.classList.remove(`gotoli_${otherIndex}`);
            }
        });

        if (element.classList.contains("active")) {
            element.classList.remove('active');    
            third_circle.classList.remove(`gotoli_${index}`);
        }else{
            third_circle.classList.add(`gotoli_${index}`);
            element.classList.add("active")
        }
    })
});