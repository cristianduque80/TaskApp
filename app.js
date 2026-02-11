//Usando jQuery
$(document).ready(function(){

    $('#taskResult').hide();
    fetchTask();

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
        const postData = {
            name : $('#name').val(),
            description : $('#description').val()
        };
        console.log(postData.name.length)

    //Nuevo metodo para enviar datos por metodo POST, otra opcion aparte del $.ajax()
    /*Con este metodo enviamos los datos: 
    post(
        '<url.php>',
        <datoAEnviar>,
        <function que se ejecuta al recibir una respuesta>
        )*/
       if(postData.name.length>0 && postData.description.length>0){
        $.post('taskAdd.php',postData,function (response){
            fetchTask();
            $('#task-form').trigger('reset');
            
            });     
       }
       
       e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
         
    })

    function fetchTask(){
        $.ajax({
        url: 'taskList.php',
        type: 'GET',
        success: function (response){
            let tasks = JSON.parse(response);//Este metodo transforma la cadena que contiene el objeto en un objeto
            let template = '';
            tasks.forEach(task => {
                template += `
                <tr taskId="${task.id}">
                    <td>${task.id}</td>
                    <td>
                        <a href='#' class='task-item'>${task.name}</a>
                    </td>
                    <td>${task.description}</td>
                    <td>
                    <button class='task-delete btn btn-danger'>Delete</button>
                    </td>    
                </tr>
                `
            })
            $('#tasks').html(template);
        } 
    })
    }

    $(document).on('click','.task-delete',function(){
        if(confirm('Are you sure you want to delete ir?')){
            let element = $(this)[0].parentElement.parentElement;//Se encuentra la fila del boton
            let id = $(element).attr('taskId');//Seleccionamos el atributo taskId
            $.post('task-delete.php',{id},function (response){
                console.log(response);
                fetchTask();
            })
        } 
    })

    $(document).on('click','.task-item',function(){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');
        console.log(id);
        $.post('task-single.php',{id},function(response){
            const task = JSON.parse(response);
            $('#name').val(task[0].name);
            $('#description').val(task[0].description);
           console.log(task);
        })
    })
});