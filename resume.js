





document.addEventListener('scroll',()=>
{
    let navigation = document.querySelector('.navi');
    
    if(window.scrollY>1)
    {

        navigation.classList.add('fixed');
        
    }
    else
    {
        navigation.classList.remove('fixed');
    }
})

//---------------------------Page1-----------------------------//


document.addEventListener('scroll',()=>
{
    let html = document.querySelector('.html');
let css = document.querySelector('.css');
let javascript = document.querySelector('.javascript');
let pic = document.querySelector('.pic');
if(window.scrollY>413)
{
    html.style.width = 80 +"%";
    pic.style.transform ="translateX(0%)";
}
if(window.scrollY>465)
{
    css.style.width=60+"%";
}
if(window.scrollY>500)
{
    javascript.style.width = 70+"%";
}

    
})


//-----------------------------Page2-----------------------------//



window.addEventListener('scroll',()=>
{
    let page2 = document.querySelector('.page2');
    let text1 = document.querySelector('.text');
    let pic1 = document.querySelector('.pic1');

    if(window.scrollY>1150)
    {
        text1.style.transform = "translateX(0%)";
        pic1.style.transform='translateX(0%)';
        
    }
   

  
})


//---------------------slider------------------------//

