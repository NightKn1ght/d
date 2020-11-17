let buttonMenu = document.getElementById("button-phone");
let OpenCloseMenu = document.getElementById("menu");
let aClick = ()=>{
    OpenCloseMenu.style.display = "none";
}
buttonMenu.onclick = () => {
    if (OpenCloseMenu.style.display != "block") {
        //document.body.style.background = "#3a3e64";
        OpenCloseMenu.style.display = "block"
    } else {
        //document.body.style.backgroundImage = "url('img/intro-bg.jpg')";
        OpenCloseMenu.style.display = "none";
    }
}

let slider = (x)=>{
    let review = document.getElementById("review-user-text");
    let imgPhoto = document.getElementById('client');
    let photo = "";
    if(x.id == "slider-1")
        photo = "img/reviews/review-1.jpg";
    if(x.id == "slider-2")
        photo = "https://cs11.pikabu.ru/post_img/big/2020/04/30/10/1588266690127712315.jpg";
    if(x.id == "slider-3")
        photo = "https://img5.goodfon.ru/wallpaper/nbig/1/9a/synth-retrowave-synthwave-new-retro-wave-sintveiv-retrove-13.jpg";
    if(x.id == "slider-4")
        photo = "https://cs7.pikabu.ru/post_img/big/2017/12/27/6/1514366899147280970.jpg";

    imgPhoto.style.opacity= review.style.opacity = '1';

    let timer = setInterval(()=>
    {
        imgPhoto.style.opacity =review.style.opacity = Number(review.style.opacity)-0.05 + '';
        if(Number(review.style.opacity) <= 0) {
            review.innerText = "\"" + x.value + "\"";
            imgPhoto.src = photo;
           let time = setInterval(()=> {
               imgPhoto.style.opacity = review.style.opacity = Number(review.style.opacity)+0.05 + '';
                if(Number(review.style.opacity) >= 1)
                    clearInterval(time);
            },10)
            clearInterval(timer);
        }
    }, 10);
}
function next(review) {
    review.style.opacity = Number(review.style.opacity)+0.1 + '';
    alert(Number(review.style.opacity));
    if(Number(review.style.opacity) == 1)
        clearInterval();
}