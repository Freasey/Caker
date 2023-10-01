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
const slideon=(hx)=>{
    if (hx===0) {
        
        document.getElementsByClassName('lokasi')[0].style.height='25vh'
    }
    if (hx===1) {
        document.getElementsByClassName('lokasi')[0].style.height='35px';
        
    }
}
const slideon1=(fx)=>{
    if (fx===0) {
       
        document.getElementsByClassName('lokasi')[1].style.height='25vh';
        
    }
    if (fx===1) {
        
        document.getElementsByClassName('lokasi')[1].style.height='35px';
        
    }
}
const filt=(das)=>{
    if (das===0) {
        document.getElementsByClassName('blak')[0].style.display='none'
        document.getElementsByClassName('blaks')[0].style.display='block'
        document.querySelector('html').style.overflowY='scroll'
    }
    if (das===1) {
        document.getElementsByClassName('blak')[0].style.display='block'
        document.getElementsByClassName('blaks')[0].style.display='none'
        document.querySelector('html').style.overflowY='hidden'
    }
    
}