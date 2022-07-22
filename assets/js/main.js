addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    const iniciobtn = document.querySelector('.iniciobtn')
    const galeriabtn = document.querySelector('.trabajos')
    const sobrenosotrosbtn = document.querySelector('.sobremi')
    const contactanosbtn = document.querySelector('.contacto')
    if(btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(iniciobtn) {
        iniciobtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(sobrenosotrosbtn) {
        sobrenosotrosbtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(galeriabtn) {
        galeriabtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(contactanosbtn) {
        contactanosbtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
})

var btnContainer = document.getElementById("otroModo");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});
}

const sections = document.querySelectorAll('section[id]')




function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 300;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function validar(){
    let formulario = document.getElementById("form");
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var consulta = document.getElementById("consulta").value;
    if(nombre == '' || email == '' || consulta == ''){
        swal({
            text: "No ingresaste tus datos...",
            icon: "warning",
        });
        return (false);

    } else if(nombre.length < 5 || email.length < 10 || consulta.length < 15) {
        swal({
            text: "Parece que tus datos no son correctos, por favor ingresa datos reales",
            icon: "warning",
        });
        return (false);
    } else {
        return;
    }
}