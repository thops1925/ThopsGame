var y = new Date().getFullYear();
document.getElementById("y").innerHTML = "Thops Game" + " " + y;


function play() {
    let randomNumber1 = Math.floor(Math.random() * 6)  + 1;
    let randomImage = "dice" + randomNumber1 + ".png"
    let imageSrc ="images/" + randomImage ;
    let  image1= document.querySelectorAll("img")[0].setAttribute("src",imageSrc);

    let randomNumber2 = Math.floor(Math.random() * 6)  + 1;
    let randomImage2 = "dice" + randomNumber2 + ".png"
    let imageSrc2 = "images/" + randomImage2 ;
    let  image2= document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);


  var x = [1];

    if (randomNumber1 > randomNumber2){
      var y = x + 1;
        document.querySelector("h1").innerHTML = "Thops Win the game!";
        document.getElementById("score").innerHTML = "score" + " " + x;



    }


    else if (randomNumber2 > randomNumber1){
      document.querySelector("h1").innerHTML = "Mitch Win the game!"
    }


     else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

}
