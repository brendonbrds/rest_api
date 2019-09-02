$(document).ready(function() {
    $("#update").click(function() {
        var id = $("#idItem").val();
        var title = $("#titleUpdate").val();
        var body = $("#bodyUpdate").val();
        var author = $("#authorUpdate").val();
        var dataUrl = "id="+id+"&title="+title+"&body="+body+"&author="+author;

        if ($.trim(id).length > 0 & $.trim(title).length > 0 & $.trim(body).length > 0 & $.trim(author).length > 0) {
            $.ajax({
                type: "POST",
                url: "http://localhost/app-server-side-php/update.php",
                data: dataUrl,
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function() { $("#loading2").text('Please Wait for update your data...'); },
                success: function (result) {
                    $("#result2").html(result);
                },
                error: function (result) {
                    console.log(result);
                },
                complete: function() { $("#loading2").text('')}
            });            
        }
        return false;
    });
});