$(document).ready(function() {
    $("#delete").click(function() {
        var id = $("#idItem").val();
        var dataUrl = "id="+id;
            $.ajax({
                type: "GET",
                url: "http://localhost/app-server-side-php/delete.php",
                data: dataUrl,
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function() { $("#loading2").text('Please Wait for remove your data...'); },
                success: function (resultado) {
                    $("#result2").html(resultado);
                },
                error: function (erro) {
                    console.log(erro);
                },
                complete: function() { $("#loading2").text('')}
            }); 
            
        return false;
    });
});