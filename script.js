const imgSldLay = document.getElementById("slideImg"),
  btn0 = document.getElementById("sld-0"),
  btn1 = document.getElementById("sld-1"),
  btn2 = document.getElementById("sld-2"),
  btn3 = document.getElementById("sld-3");
  
var imgSldCounter = 0;

setInterval(function() {
  imgSldCounter++;
  if(imgSldCounter > 3){
    imgSldCounter = 0;
  }
  counterFun();
  slideImgFun();
}, 2000);

function slideImgFun() {
  
  if (btn0.checked === true){
    imgSldLay.style.transform = "translateX(0px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(0, 1, 2, 3);
    
  } else if (btn1.checked === true){
    imgSldLay.style.transform = "translateX(-330px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(1, 0, 2, 3);
    
  } else if (btn2.checked === true){
    imgSldLay.style.transform = "translateX(-660px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(2, 1, 0, 3);
    
  } else if (btn3.checked === true){
    imgSldLay.style.transform = "translateX(-990px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(3, 2, 1, 0);
  } else {
    return
  }
  
}

// 330
function counterFun(){
  switch(imgSldCounter){
    case 0:
      btnCheck(btn0, btn1, btn2, btn3);
      break;
    case 1:
      btnCheck(btn1, btn0, btn2, btn3);
      break;
    case 2:
      btnCheck(btn2, btn1, btn0, btn3);
      break;
    case 3:      
      btnCheck(btn3, btn0, btn1, btn2);
      break;
  }
}

function brightImg(active, non1,non2,non3){
  $(`#${active}`).removeClass("dark");
  $(`#${non1}`).addClass("dark");
  $(`#${non2}`).addClass("dark");
  $(`#${non3}`).addClass("dark");
}
function btnCheck(active, non1,non2,non3){
  active.checked = true;
  non1.checked = false;
  non2.checked = false;
  non3.checked = false;
}

$("input[type='radio']").bind("change", () => {
  if (btn0.checked === true) {
    imgSldLay.style.transform = "translateX(0px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(0, 1, 2, 3);
    imgSldCounter = 0;
  } else if (btn1.checked === true){
    imgSldLay.style.transform = "translateX(-330px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(1, 0, 2, 3);
    imgSldCounter = 1;
    
  } else if (btn2.checked === true){
    imgSldLay.style.transform = "translateX(-660px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(2, 0, 1, 3);
    imgSldCounter = 2;
    
  } else if (btn3.checked === true){
    imgSldLay.style.transform = "translateX(-990px)";
    imgSldLay.style.transition = "transform .7s ease";
    
    brightImg(3, 0, 1, 2);
    imgSldCounter = 3;
    
  } else {
    return;
  }
});

// Normalize
btn0.checked = true;