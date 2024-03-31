let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => 
{   sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => 
                { links.classList.remove('active')
                  document.querySelector(`header nav a[href*= ${id}]`).classList.add('active')
                })
        }
    })
    let header = document.querySelector('header') 

    header.classList.toggle('sticky', window.scrollY > 100) 
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
/* Menu Icon */

let menuIcon = document.querySelector('#menu-item');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})




/* MODAL*/

document.querySelectorAll('.portfolio-box').forEach( element => element.addEventListener('click', ()=>
{ 
  let modal = document.querySelector('.popUp');
  let siteID = element.getAttribute('data-key');
  let siteItem = sites[(siteID - 1)];
  let title = document.querySelector('.popUpRight .content h2');
  let desc = document.querySelector('.popUpRight .content p');
  let img = document.querySelector('.popUpLeft .siteImg');
  let sitelink = document.querySelector('.buttons .site');
  let git = document.querySelector('.gitHub a')
  git.href = siteItem.git;
  sitelink.href = siteItem.link;
  title.innerHTML = siteItem.name;
  desc.innerHTML = siteItem.desc;
  img.style.backgroundImage = `url(${siteItem.img})`


  modal.style.display ='flex'
  setTimeout(()=> modal.style.opacity = '100', 100)
  


  
  modal.querySelector('.buttons .closePC ').addEventListener('click', ()=>
   { modal.style.opacity ='0'
    setTimeout(()=> 
    {modal.style.display = 'none'}, 200)
    
   })

   modal.querySelector('.close').addEventListener('click', ()=>
   { modal.style.opacity ='0'
    setTimeout(()=> 
    {modal.style.display = 'none'}, 200)
    
   })
  
}))
