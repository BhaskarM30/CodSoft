let string = ""
console.log("hiii");
buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if (event.target.innerHTML == 'DE'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if (event.target.innerHTML == 'AC'){
            string = " ";
            document.querySelector('input').value = " ";
        }
        else if (event.target.innerHTML == '='){
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch(error){
                document.querySelector('input').value = "ERROR";
                
            }
            
        }
        else{
            //console.log(event.target);
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})
