let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');


for(let button of buttons){
  button.addEventListener('click',(e)=>{
 let text=   e.target.innerText
 if(text==='C'){
  input.value=''
 }
 else if(text==='='){
  try{
    input.value=eval(input.value)
  }catch(e){
    input.value='INVALID'
  }


 }
 else{
  input.value+= text
 }


  })
}









