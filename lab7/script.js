let string = "";



let buttons = document.querySelectorAll(".button");
for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        if(event.target.id == 'sign'){
            string += ")";
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.innerHTML == 'AC'){
            string = ''
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.innerHTML == '='){
            string = evaluateExpression(string);
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.classList.contains == "sci"){
            string += event.target.innerHTML;
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.innerHTML == "sqrt("){
            string += "sqrt(";
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.innerHTML == "expt("){
            string += "expt(";
            document.getElementsByTagName("input")[0].value = string;
        }
        else{
            string = string + event.target.innerHTML;
            document.getElementsByTagName("input")[0].value = string;
        }
    });
}



function evaluateExpression(expression) {
    
    expression = expression.replace(/sin\(/g, 'Math.sin(' + Math.PI/180 + '*');
    expression = expression.replace(/cos\(/g, 'Math.cos(' + Math.PI/180 + '*');
    expression = expression.replace(/tan\(/g, 'Math.tan(' + Math.PI/180 + '*');
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/expt\(/g, 'Math.exp(');
 
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}


function firstchar(){
    return string.charAt(0);
}

