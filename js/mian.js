let input = document.querySelector("#inputField");
let output= document.querySelector("#output");
let checker= document.querySelector("#checker");

checker.addEventListener("click",function(){
    if(input.value == ""){
        return alert("Please Input Your Number");
    }
    else{
      if(input.value % 2== 0){
        output.innerHTML=`This ${input.value} is Even`;
      }
      else{
        output.innerHTML=`This ${input.value} is Old`;
      }
    }
})