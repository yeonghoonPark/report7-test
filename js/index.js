let bMunu = document.querySelectorAll('.b-menu');
let sMenu = document.querySelectorAll('.s-menu');
let navBack = document.getElementById('nav-back');
let slide = document.querySelectorAll('.slide');
let btn01 = document.getElementById('btn01');
let btn02 = document.getElementById('btn02');
let btn03 = document.getElementById('btn03');
let idx = 0;
let popNbtn = document.querySelectorAll('.pop-n');
let popN = document.querySelector('.notice-popup');
let popNclose = document.getElementById('notice-popup-close');
let popGbtn01 = document.getElementById('pop-g01');
let popGbtn02 = document.getElementById('pop-g02');
let popGbtn03 = document.getElementById('pop-g03');
let popG01 = document.getElementById('gallery-popup01');
let popG02 = document.getElementById('gallery-popup02');
let popG03 = document.getElementById('gallery-popup03');
let popGclose01 = document.getElementById('gallery-popup-close01');
let popGclose02 = document.getElementById('gallery-popup-close02');
let popGclose03 = document.getElementById('gallery-popup-close03');

// sub-navigation show event
bMunu[0].addEventListener('mouseenter',function(){
    sMenu[0].style.display = 'block';
    sMenu[1].style.display = 'block';
    sMenu[2].style.display = 'block';
    sMenu[3].style.display = 'block';
    navBack.style.display = 'block';
});
bMunu[1].addEventListener('mouseenter',function(){
    sMenu[0].style.display = 'block';
    sMenu[1].style.display = 'block';
    sMenu[2].style.display = 'block';
    sMenu[3].style.display = 'block';
    navBack.style.display = 'block';
});
bMunu[2].addEventListener('mouseenter',function(){
    sMenu[0].style.display = 'block';
    sMenu[1].style.display = 'block';
    sMenu[2].style.display = 'block';
    sMenu[3].style.display = 'block';
    navBack.style.display = 'block';
});
bMunu[3].addEventListener('mouseenter',function(){
    sMenu[0].style.display = 'block';
    sMenu[1].style.display = 'block';
    sMenu[2].style.display = 'block';
    sMenu[3].style.display = 'block';
    navBack.style.display = 'block';
});

// sub-navigation hidden event
bMunu[0].addEventListener('mouseleave',function(){
    sMenu[0].style.display = 'none';
    sMenu[1].style.display = 'none';
    sMenu[2].style.display = 'none';
    sMenu[3].style.display = 'none';
    navBack.style.display = 'none';
})
bMunu[1].addEventListener('mouseleave',function(){
    sMenu[0].style.display = 'none';
    sMenu[1].style.display = 'none';
    sMenu[2].style.display = 'none';
    sMenu[3].style.display = 'none';
    navBack.style.display = 'none';
})
bMunu[2].addEventListener('mouseleave',function(){
    sMenu[0].style.display = 'none';
    sMenu[1].style.display = 'none';
    sMenu[2].style.display = 'none';
    sMenu[3].style.display = 'none';
    navBack.style.display = 'none';
})
bMunu[3].addEventListener('mouseleave',function(){
    sMenu[0].style.display = 'none';
    sMenu[1].style.display = 'none';
    sMenu[2].style.display = 'none';
    sMenu[3].style.display = 'none';
    navBack.style.display = 'none';
})

// slide btn event
btn01.addEventListener('click',function(){
    slideRemove();
    slide[0].classList.add('active');            
});
btn02.addEventListener('click',function(){
    slideRemove();
    slide[1].classList.add('active');      
});
btn03.addEventListener('click',function(){
    slideRemove();
    slide[2].classList.add('active');      
});
setInterval(function(){
    slideRemove();
    if(idx>2){
        idx=0;
    }
    slide[idx++].classList.add('active'); 
},3000);

// function
function slideRemove(){
    for(let idx=0;idx<slide.length;idx++){
        slide[idx].classList.remove('active');  
    }
}

// popup-notice event
popNbtn[0].addEventListener('click',function(){
    popN.style.display = 'block';
});
popNbtn[1].addEventListener('click',function(){
    popN.style.display = 'block';
});
popNbtn[2].addEventListener('click',function(){
    popN.style.display = 'block';
});
popNbtn[3].addEventListener('click',function(){
    popN.style.display = 'block';
});
popNclose.addEventListener('click',function(){
    popN.style.display = 'none';
})

// popup-gallery event
popGbtn01.addEventListener('click',function(){
    popG01.style.display = 'block';
});
popGclose01.addEventListener('click',function(){
    popG01.style.display = 'none';
});
popGbtn02.addEventListener('click',function(){
    popG02.style.display = 'block';
});
popGclose02.addEventListener('click',function(){
    popG02.style.display = 'none';
});
popGbtn03.addEventListener('click',function(){
    popG03.style.display = 'block';
});
popGclose03.addEventListener('click',function(){
    popG03.style.display = 'none';
});
        