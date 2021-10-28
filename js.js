let searchBut= document.querySelector('#searchBut'),
searchBar= document.querySelector('.S-B');

searchBut.addEventListener('click',() =>{
  searchBar.classList.toggle('show');
})


// hiding lifeside list ---------------------------------------------------------------

let showListBut =document.querySelector('#showList'),
hideListBut =document.querySelector('#hideList'),
list=document.querySelector('.left-side');

hideListBut.addEventListener('click',()=>{
  list.style.cssText='width:0; transition: all .3s;'
  hideListBut.style.display='none'
  showListBut.style.display='block'
})
showListBut.addEventListener('click',()=>{
  list.style.cssText='width:20%; transition: all .3s;'
  hideListBut.style.display='block'
  showListBut.style.display='none'
})


// --------------------------
const mQsmall = window.matchMedia('(max-width: 767px)');
if(mQsmall.matches){
  showListBut.addEventListener('click',()=>{
    list.style.cssText='width:90%; transition: all .3s;'
  })
}
const mQmedim = window.matchMedia('(min-width: 767px) and (max-width: 920px)');
if(mQmedim.matches){
  showListBut.addEventListener('click',()=>{
    list.style.cssText='width:40%; transition: all .3s;'
  })
}


// video clicked -----------------------------

let video =document.querySelectorAll('.video'),
videos=document.querySelector('.videos-con'),
titles=document.querySelector('.titles'),
vImg=document.querySelectorAll('#vImg'),
userImg=document.querySelectorAll('.info img'),
openVideo=document.querySelector('.open-video');


video.forEach((e) => {
  e.addEventListener('click',()=>{
    openVideo.style.display='block'
    list.style.cssText="width:0;"
    videos.style.cssText='width:30%; gap:1em;height: 100%;overflow-y:scroll;'
    titles.style.cssText='width:30%;right:0;top:3.5em;transform:none;position:absolute;background-color: #171717;'
    video.forEach((e)=>{
      e.style.cssText='display:flex; justify-content:space-between;'
    })
    vImg.forEach((e)=>{
      e.style.cssText='width:50%;'
    })
    userImg.forEach((e)=>{
      e.style.cssText='display:none;'
    })
    if(mQsmall.matches){
      titles.style.cssText='width:100%;'
      videos.style.cssText='width:100%;top:60%;'
      openVideo.style.cssText='width:100%;left:0;display:block;'
      vImg.forEach((e)=>{
        e.style.cssText='width:35%;'
      })
      }
    if(mQmedim.matches){
      titles.style.cssText='width:100%;'
      videos.style.cssText='width:100%;top:69%;'
      openVideo.style.cssText='width:100%;left:0;display:block;'
      vImg.forEach((e)=>{
        e.style.cssText='width:35%;'
      })
      }
  })
});


