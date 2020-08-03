const icons = document.querySelectorAll('.gray');
const iconsColor = document.querySelectorAll('.color');
icons.forEach( (e, i) => {
    e.addEventListener('mouseover', () => {
        e.classList.add('hidden');
        e.classList.remove('vision');
        iconsColor[i].classList.add('vision');
        iconsColor[i].classList.remove('hidden');
    })
    e.addEventListener('mouseout', () => {       
        iconsColor[i].classList.add('hidden');
        iconsColor[i].classList.remove('vision');
        e.classList.add('vision');
        e.classList.remove('hidden');
    })
})
