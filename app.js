//Usando jQuery
$(document).ready(function(){

    $('#taskResult').hide();
    //Captura el input con el ID search y se le asigna un evento keyup
    $('#search').keyup(function(){
        if($('#search').val()){        
            let search = $('#search').val();//Almacena el valor del input

            $.ajax({//Se realiza la peticion a un servidor mediante un objeto
                url: 'task-search.php',//Se pide 'algo' al archivo php

                type: 'POST',//Se asigna el tipo de peticion

                //Se envia el dato, puede ser un string,obj,etc
                data: { search },//En este caso se envio un objeto. Esta sintaxis simplifica escribir search:search (La key es igual a su value)

                success: function(response){//Evento -> El servidor respondio al pelo
                    console.log(response);
                    let tasks = JSON.parse(response);//Este metodo transforma la cadena que contiene el objeto en un objeto
                    console.log(tasks);
                    let template = '';
                    tasks.forEach(task => {
                        template += `<li>
                            ${task.name}
                        </li>`
                    
                    });
                    $('#taskResult').show();              
                    $('#taskResult').html(template);//Agregamos el valor template a la etiqueta HTML
                } 
            });
        }    
    });
    
    $(('#task-form')).submit(function(e){
        const postDate = {
            name : $('#name').val(),
            description : $('#description').val()
        };
        console.log(postDate);
        e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
    })
});