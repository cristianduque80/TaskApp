$(document).ready(function(){
    $('#form').on('submit', function(e){
    let x = $('#name').val();
    let y = $('#coment').val();
    console.log(x);
    console.log(y);

    
    let data = {//Dato capturado 
        name : $('#name').val(),
        coment : $('#coment').val()
    };

    $.post('index.php',data,function(response){//Dato enviado por POST -> index.php
        console.log(response);
        lista()
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
                    <td>${item.name}</td>
                    <td>${item.text}</td>
                </tr>
            `
        })
        $('#list').html(template);
    });
}


})