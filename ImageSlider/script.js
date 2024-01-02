// console.log("running")
const leftBtn= document.querySelector('.leftBtn')
const rightBtn= document.querySelector('.rightBtn')
const sliderContainer= document.querySelector('#image-slider')

// console.log( typeof sliderContainer)
sliderContainer.addEventListener('wheel',(e)=>{
    e.preventDefault();
    // console.log(e.deltaY)
    sliderContainer.scrollLeft+=e.deltaY
    sliderContainer.style.scrollBehavior='smooth'
})
rightBtn.addEventListener('click',(e)=>{
    const imageWidth = 350;
    sliderContainer.scrollTo({
        top: 0,
        left: sliderContainer.scrollLeft + imageWidth,
        behavior: 'smooth'
        })

})
leftBtn.addEventListener('click',()=>{
    const imageWidth = 400;
    // const maxOffset = sliderContainer.offsetWidth - imageWidth;
    // console.log(sliderContainer.offsetWidth)
    if (sliderContainer.scrollLeft <= 0){
        return;
        } else {
            sliderContainer.scrollTo({
                top: 0,
                left: sliderContainer.scrollLeft - imageWidth,
                behavior: 'smooth'
                })
                }
})
let startX=0;
const imageWidth=10;
sliderContainer.addEventListener('touchstart', (e)=>{
    // console.log(e.touches)
      startX = e.touches[0].clientX;
})
sliderContainer.addEventListener('touchmove',(e)=>{
    let currentX = e.touches[0].clientX;
let diff=startX-currentX;
if(diff>0){
    sliderContainer.scrollLeft+=imageWidth;
}
else if(diff<0){
    sliderContainer.scrollLeft-=imageWidth;
}
startX=currentX;
 });
