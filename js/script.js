const year = document.querySelector('#year');
const act = new Date().getFullYear();
year.innerHTML = act;

const myModal = document.querySelector('#myModal');
const search = document.querySelector('.portfolio');
console.log(search)
const portfolio = document.querySelector('.portfolio');
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// portfolio.addEventListener('click', (e) => {
//     e.preventDefault();
//     const attribute = e.target.getAttribute('data-id');
//     const img = document.querySelector('#imgModal');
//     if (attribute) {
//         console.log(attribute)
//         myModal.style.display = "flex"
//         myModal.style.justifyContent = "center"
//         myModal.style.alignItems = "center"
//         img.src = attribute;

//     }
// })

const btn = document.querySelector('.btnAbout');
search.addEventListener('click', (e) => {
    const img = e.target.getAttribute('data-id');
    // e.preventDefault();
    if (img) {
        Swal.fire({
            imageUrl: img,
            imageHeight: '100%',
            imageAlt: 'A tall image',
        })
    }else {
        
    }

})