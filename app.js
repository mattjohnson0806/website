let arrow = document.getElementById('arrow');

let rotate = (event) => {
    event.target.style.rotate = '+10deg';
}

arrow.addEventListener('mouseover', rotate);
arrow.addEventListener('mouseout', rotate);