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
  img.style.backgroundImage = `url(../${siteItem.img})`


  modal.style.display ='flex'
  setTimeout(()=> modal.style.opacity = '100', 100)
  


  
  modal.querySelector('.buttons .closePC    ').addEventListener('click', ()=>
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
