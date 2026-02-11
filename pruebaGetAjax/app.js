$(document).ready(function(){
    $('#form').on('submit', function(e){
    let x = $('#name').val();
    let y = $('#coment').val();
    console.log(x);
    console.log(y);

    
    let data = {
        name : $('#name').val(),
        coment : $('#coment').val()
    };

    $.post('index.php',data,function(response){
        console.log(response);
    });

    e.preventDefault();


    });

function lista(){
    $.get('list.php', function(response){
        let list = JSON.
    });
}


})