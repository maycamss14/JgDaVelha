const x = document.querySelectorAll('.x');
let flag = true;



const quadrados = document.querySelectorAll(".grid div");



for(let i in quadrados){
    quadrados[i].onclick = function(i) {
        if(flag){
            console.log(i);
            x[i].classList.toggle('visivel');
            flag = !flag;
        }else{
            x[i].classList.toggle('o');
            flag = !flag;
        }
    };
}
