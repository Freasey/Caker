window.addEventListener('scroll',function () {
    const nav=document.querySelector('nav');
    nav.classList.toggle('turu', window.scrollY > 10)
    if (window.scrollY < 700) {
        document.querySelector('html').style.background='url(Daffa%20Ardhana_Bahan/Home/kerjasama.jpg) center center no-repeat fixed';
        document.querySelector('html').style.backgroundSize='cover';
        
    }
    if (window.scrollY > 1000) {
        document.querySelector('html').style.background='url(Daffa%20Ardhana_Bahan/Home/dokumen.jpg) center center no-repeat fixed';
        document.querySelector('html').style.backgroundSize='cover';
    }
    if (window.scrollY > 100) {
        document.getElementById('profesibox').style.marginTop='-140px';
        document.getElementById('profesibox').style.opacity='1';
    }
    


})
const navslider=document.getElementById('slidernav');
const slider= document.getElementsByClassName('slider')[0];
const slide =() =>{
    
    navslider.style.display='flex'
    slider.setAttribute('onclick', 'slideroff()')
}
const slideroff=()=>{
    navslider.style.display='none'
    slider.setAttribute('onclick', 'slide()')
}

const slideon=(hx)=>{
    if (hx===0) {
        document.querySelectorAll('#filterbar img')[0].style.filter='brightness(0) invert(1)' ;
        document.getElementsByClassName('lokasi')[0].style.height='25vh';
        document.querySelectorAll('#filterbar img')[0].style.marginLeft='-54px' ;
        document.querySelectorAll('#filterbar img')[0].style.transform='rotate(90deg)';
    }
    if (hx===1) {
        document.getElementsByClassName('lokasi')[0].style.height='6vh';
        document.querySelectorAll('#filterbar img')[0].style.filter='brightness(0) invert(0)' ;
        document.querySelectorAll('#filterbar img')[0].style.marginLeft='12px' ;
        document.querySelectorAll('#filterbar img')[0].style.transform='rotate(180deg)';
    }
}
const slideon1=(fx)=>{
    if (fx===0) {
        document.querySelectorAll('#filterbar img')[1].style.filter='brightness(0) invert(1)' ;
        document.getElementsByClassName('lokasi')[1].style.height='25vh';
        document.querySelectorAll('#filterbar img')[1].style.marginLeft='36px' ;
        document.querySelectorAll('#filterbar img')[1].style.transform='rotate(90deg)';
    }
    if (fx===1) {
        document.querySelectorAll('#filterbar img')[1].style.filter='brightness(0) invert(0)' ;
        document.getElementsByClassName('lokasi')[1].style.height='6vh';
        document.querySelectorAll('#filterbar img')[1].style.marginLeft='-30px' ;
        document.querySelectorAll('#filterbar img')[1].style.transform='rotate(0)';
    }
}
const profbox=(lek)=>{
        document.querySelectorAll('.profsbox img')[lek].style.filter='brightness(0) invert(1)';
        document.querySelectorAll('.profsbox')[lek].style.background='#7091F5';
        document.querySelectorAll('.profsbox')[lek].style.color='white';
}
const profboxof=(lek)=>{
    document.querySelectorAll('.profsbox img')[lek].style.filter='brightness(0) invert(0)';
    document.querySelectorAll('.profsbox')[lek].style.background='white';
    document.querySelectorAll('.profsbox')[lek].style.color='#323232';
}



