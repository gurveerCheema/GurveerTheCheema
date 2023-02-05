

// Adding Deleting And Writing Javascript Code

let specialText =document.getElementById('special-text');
let textArr = [
    'Full Stack Web Developer',
    'Web Designer',
    'React Developer',
    'Javscript Intermediate',
    'CSS Expert',
    
];
let arrIndex=0;
let charIndex = specialText.innerHTML.length;
let lettterIndex = 0;
let initial = setInterval(magicFunc , 100);
let initial2 = setInterval(magicFuncPart2, 100);
  function magicFunc(){  
  if(specialText.innerHTML === ""){
      pauser()
        arrIndex++;
        lettterIndex++;
        if(arrIndex >= textArr.length){
            arrIndex=0;
        }

        setTimeout(()=>{

            specialText.innerHTML = textArr[arrIndex];
            charIndex = specialText.innerHTML.length;
        },1000)
        
    }
      
 
    

}
  
function magicFuncPart2(){
   

        charIndex--;
        specialText.innerHTML =specialText.innerHTML.slice( 0 ,charIndex)
 
}

let imgArr=[
    "https://wimsolutions.files.wordpress.com/2017/10/website3.jpg?w=2064&h=1288",
    "images/Add a heading.png",
    "https://th.bing.com/th/id/R.584c07fef9ca459094162f332ad5c5e7?rik=2tsxNWHPDtRfSg&riu=http%3a%2f%2fblog.salesmanago.com%2fwp-content%2fuploads%2f2015%2f04%2fDepositphotos_65204039_original.jpg&ehk=ZAVtCi%2brmevG5CvfSbSeqrwTN2tkctJkFacvM3h%2b17I%3d&risl=&pid=ImgRaw&r=0",
    "https://cdn-images-1.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
   
];
let menuClickCount = 0;
let slider_Img = document.getElementById("slider-img");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev")
let imgIndex= 0;
let circle_btn_updating_variable=0;
let circle_Btn = Array.from(document.getElementsByClassName("fa-regular fa-circle"));
let menu_Bar = document.getElementsByClassName("floating-menu")[0]
let menuBtn =document.getElementById('menu-bar')

slider_Img.src =imgArr[0];
circle_Btn[0].classList.remove('fa-regular');
circle_Btn[0].classList.add('fa-solid');
function updateCirclesStat(){


   circle_Btn.forEach(e=>{
    e.classList.add('fa-regular')
    e.classList.remove('fa-solid')

   })
   
    

}
function changingDots(){
circle_Btn.forEach(e=>{
    e.addEventListener("click",()=>{
        updateCirclesStat()
        pauser()
        e.classList.remove('fa-regular');
        e.classList.add('fa-solid');
    slider_Img.src = imgArr[circle_Btn.indexOf(e)]  
 imgIndex=circle_Btn.indexOf(e)
        
    })
})
}
function interval(index){


    if(index===-1){
        imgIndex--;
       
        if(imgIndex<0){
            imgIndex=imgArr.length-1
        }
       
    }
    else{
        imgIndex++;
if(imgIndex>imgArr.length-1){
    imgIndex=0
}


    


}
updateCirclesStat()
slider_Img.src=imgArr[imgIndex];
circle_Btn[imgIndex].classList.add('fa-solid');
circle_Btn[imgIndex].classList.remove('fa-regular');
changingDots()
}
let timer = setInterval(interval,4000)
function pauser(){
  clearInterval(timer);
  timer=setTimeout(interval,2000);
  setTimeout(resumer,2000)
}
function resumer(){
    clearTimeout(timer);
    timer=setInterval(interval,4000)
}


