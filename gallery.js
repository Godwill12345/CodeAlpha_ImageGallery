let lightBox=document.querySelector(".lightBox");
let imageBox=document.querySelector(".imageBox");
let imageGallery=document.querySelector(".imageGallery");
let images=document.querySelectorAll(".gallery-Image");
let imageView=document.getElementById("imageView");

images.forEach(function(NewImage){
    NewImage.addEventListener("click",()=>{
        imageView.src=NewImage.src;
        lightBox.classList.add("active");
        console.log("Show image");
    });
});
lightBox.addEventListener("click",()=>{
    lightBox.classList.remove("active");
})