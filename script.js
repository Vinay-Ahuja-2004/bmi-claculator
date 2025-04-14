// const heights =document.querySelector('#height')
// const weights =document.querySelector('#weight')
// const results =document.querySelector('#result')
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const heights=parseInt(document.querySelector('#height').value);
    const weights=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('.results')
    const infos=document.querySelector('.info');
    if(!heights||heights<=0||isNaN(heights)){
        results.textContent=(`Unvalid height`);
    }
        else if(!weights||weights<=0||isNaN(weights)){
            results.textContent=(`Unvalid weight`);
    }
    else{
        const bmi=(weights/((heights**2)/10000)).toFixed(2);
        results.textContent=(`Your bmi is : ${bmi}`)
        if(bmi<18.6){
            infos.textContent=(`Your bmi is low !`)
            infos.style.color='red';
        }
       else if(bmi>18.6&&bmi<24.9){
         infos.textContent=(`You are healthy !`)
         infos.style.color='green';
        }
       else{
            infos.textContent=(`You are overweight !`)
            infos.style.color='red';
        }
       }
     
});
// if(bmi<18.6){
//     info.textContent=(`Your bmi is low`)
// }
// else if(bmi>18.6&&bmi<24.9){
//     info.textContent=(`You are healthy`)
// }
// else{
//     info.textContent=(`You are overweight`)
// }
