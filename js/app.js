// UI
const btn = document.querySelector('.btn');
const navs = document.querySelectorAll('.nav');
const closebtn = document.querySelector('.closebtn');

const switchbtn = document.getElementById('switch');
const slider = document.getElementById('slider');
const paras = document.querySelectorAll('.para');
const navwhite = document.querySelector('.nav-white');

const random = document.getElementById('random');
const photocollector = document.querySelector('.photo-collector');

// const url = "https://source.unsplash.com/random/";

btn.addEventListener('click',()=>{
    navs.forEach((nav)=>nav.classList.add('shownav'));
});

closebtn.addEventListener('click',()=>{
    navs.forEach((nav)=>nav.classList.remove('shownav'));
});

slider.addEventListener('click',()=>{
    if(!switchbtn.checked){
        navwhite.classList.add('darkmode');
    }else{
        navwhite.classList.remove('darkmode');
    }
});

random.addEventListener('click',()=>{
    const img = document.createElement('img');
    // img.src = `${url}${getrandomsize()}`;
    img.src = `img/${getrandomnum()}.jpg`;
    
    
    console.log(img.src);
    photocollector.appendChild(img);
    // console.log('hay');

    setTimeout(()=>img.remove(),5000);
});



function getrandomnum(){
    return Math.floor((Math.random()*10))+1;
    console.log(Math.floor((Math.random()*10)));
};

// function getrandomsize(){
//     return getrandomnum()*getrandomnum();
// }