const menu = document.getElementById('menu')

const buttom = document.getElementById('bnt-logo-menu')

let value = false;

console.log(value)

buttom.addEventListener('click', () => {
    value = !value;
    if(value){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none';
    }
});

