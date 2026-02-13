$(document).ready(function(){
     //lista();

    $('#form').on('submit', function(e){
 
    let data = {//Dato capturado
        username : $('#username').val(),
        tittle : $('#tittle').val(),
        description : $('#description').val()
    };

    console.log(data);

    $.post('index.php',data,function(response){//Dato enviado por POST -> index.php
        console.log(response);
        lista();
    });
    e.preventDefault();

    ;

    });

function lista(){
    $.get('list.php', function(response){
        let list = JSON.parse(response);//string -> array asociativo 
        console.log(list);
        let template = '';
        list.forEach( item => {
            template += `
                <tr>
                    <td>${item.tittle}</td>
                    <td>${item.description}</td>
                </tr>
            `
        })
        $('#list').html(template);
    });
}


})