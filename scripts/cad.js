class validator {

    constructor() {
        this.validations = [
            'data-min-length', 
        ]   
    }
    //iniciar a validação de todos os campos
    validate(form) {
        
        //pegar os inputs
        let inputs = form.getElementsByTagName("input");
    
        //transformo uma HTMLcollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {

        //loop em todas as validações existentes    
        for(let i = 0; this.validations.length> i; i++){
            
            //verifica se a validação atual existe no input
            if(input.getAttribute(this.validations[i])!= null){

                //limpando a string para virar um método
                let method = this.validations[i].replace('data-', '').replace('-', '');

                //valor do input
                let value = input.getAttribute(this.validations[i].replace('data-', ''));

                //invocar método
                this[method] (input, value);

            }
        }    
    }, this); 
}
    //verifica se o input tem um número mínimo de caracteres
    minlength(input, minValue){

      let inputLength = input.value.length;
      
      let errorMessage = 'O campo precisa ter pelo menos $(minValue) caracteres';
    
    if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
    }
}
    //método para imprimir mensagem de erro
    printMessage(input,msg) {
        let template = document.querySelector('.error-validation').cloneNode(true);
        
        template.textContent = msg;

        let inputParent = input.parentNode;
        template.classList.remove('template')
    }
}
let format = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

//evento que dispara as validações
submit.addEventListener("click", function(e) {

    e.preventDefault();
    console.log("funcionou");

    let inputemail = document.querySelector("#email");
    if (inputemail) {
        console.log(inputemail.value);
    }

    let inputname = document.querySelector("#name");
    if (inputname) {
        console.log(inputname.value);
    }
    let inputlastname = document.querySelector("#lastname");
    if (inputlastname) {
        console.log(inputlastname.value);
    }
    let inputpassword = document.querySelector("#password");
    if (inputpassword) {
        console.log(inputpassword.value);
    }
    let inputpassconfirmation = document.querySelector("#passconfirmation");
    if (inputpassconfirmation) {
        console.log(inputpassconfirmation.value);
    }
    let inputagreement = document.querySelector("#agreement");
    if (inputagreement) {
        console.log(inputagreement.value);
    }
});
