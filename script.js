document.querySelector('.present__Wrapper').addEventListener('click', () => {
    const message = document.querySelector('.message');
    message.classList.toggle('active'); // Toggles the 'active' class
});

const close = document.querySelector('.close');
const present__Wrapper = document.querySelector('.present__Wrapper');
close.addEventListener('click', ()=>{

    present__Wrapper.style.display = 'none';


});
