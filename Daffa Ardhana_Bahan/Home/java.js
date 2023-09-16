window.addEventListener('scroll',function () {
    const nav=document.querySelector('nav');
    nav.classList.toggle('turu', window.scrollY > 10)
    if (window.scrollY < 700) {
        document.querySelector('html').style.background='url(Daffa%20Ardhana_Bahan/Home/kerjasama.jpg) center center no-repeat fixed';
        document.querySelector('html').style.backgroundSize='cover';
        
    }
    if (window.scrollY > 1000) {
        document.querySelector('html').style.background='url(Daffa%20Ardhana_Bahan/Home/069372200_1662512644-Khaby-2.webp) center center no-repeat fixed';
        document.querySelector('html').style.backgroundSize='cover';
    }



})


const navslider=document.getElementById('slidernav');
const slider= document.getElementsByClassName('slider')[0];
const slidhr=document.querySelectorAll('.slider hr');
const slide =() =>{
    document.querySelector('html').style.overflowY='hidden'
    navslider.style.display='flex'
    slider.setAttribute('onclick', 'slideroff()')
    slidhr[0].style.transform='translate(0,6px) rotate(45deg)'
    slidhr[1].style.transform='translate(0,-6px) rotate(45deg)'
    slidhr[2].style.transform='translate(0,-19px) rotate(-45deg)'
    setTimeout(() => {
        document.querySelectorAll('#slidernav ul')[0].style.transform='translate(0px,0px)'; 
        navslider.style.backgroundColor= 'rgba(0, 0, 0, 0.5)';
    }, 100);
    
}
const slideroff=()=>{
    document.querySelector('html').style.overflowY='scroll'
    document.querySelectorAll('#slidernav ul')[0].style.transform='translate(500px,0)'; 
    slider.setAttribute('onclick', 'slide()')
    slidhr[0].style.transform='translate(0,0px) rotate(0deg)'
    slidhr[1].style.transform='translate(0,0px) rotate(0deg)'
    slidhr[2].style.transform='translate(0,0px) rotate(0deg)'
    navslider.style.backgroundColor= 'rgba(0, 0, 0, 0)';
    setTimeout(() => {
        navslider.style.display='none'
    }, 500);
    
}

const slideon=(hx)=>{
    if (hx===0) {
        
        document.getElementsByClassName('lokasi')[0].style.height='25vh'
    }
    if (hx===1) {
        document.getElementsByClassName('lokasi')[0].style.height='6vh';
        
    }
}
const slideon1=(fx)=>{
    if (fx===0) {
       
        document.getElementsByClassName('lokasi')[1].style.height='25vh';
        
    }
    if (fx===1) {
        
        document.getElementsByClassName('lokasi')[1].style.height='6vh';
        
    }
}
const profbox=(lek)=>{
        document.querySelectorAll('.profsbox img')[lek].style.filter='brightness(0) invert(1)';
        document.querySelectorAll('.profsbox')[lek].style.background='#2D4059';
        document.querySelectorAll('.profsbox')[lek].style.color='white';
}
const profboxof=(lek)=>{
    document.querySelectorAll('.profsbox img')[lek].style.filter='brightness(0) invert(0)';
    document.querySelectorAll('.profsbox')[lek].style.background='white';
    document.querySelectorAll('.profsbox')[lek].style.color='#323232';
}
const masukoff=()=>{
    document.getElementById('daftar').setAttribute('onclick', 'masukon()')
    document.getElementById('masuk').style.display='none'
    document.querySelector('html').style.overflowY='scroll'
}
const masukon=()=>{
    document.querySelector('html').style.overflowY='hidden'
    document.getElementById('daftar').setAttribute('onclick', 'masukoff()')
    document.getElementById('masuk').style.display='flex'
}
for (let ams = 0; ams < document.getElementsByClassName('lowonganbox').length; ams++) {
    document.getElementsByClassName('lowonganbox')[ams].addEventListener('click', function() {
        window.location.href = "Daffa Ardhana_Bahan/Detail Lowongan/Detail.html";
    })
    
}



