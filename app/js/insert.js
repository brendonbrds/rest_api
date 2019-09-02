$(document).ready(function() {
    $("#insert").click(function() {
        var title = $("#title").val();
        var body = $("#body").val();
        var author = $("#author").val();
        var dataUrl = "title="+title+"&body="+body+"&author="+author;

        if ($.trim(title).length > 0 & $.trim(body).length > 0 & $.trim(author).length > 0) {
            $.ajax({
                type: "POST",
                url: "http://localhost/app-server-side-php/insert.php",
                data: dataUrl,
                dataType: "html",
                crossDomain: true,
                cache: false,
                beforeSend: function() { $("#loading").text('Please Wait, connecting...'); },
                success: function (result) {
                    $("#result").html(result);
                },
                error: function (result) {
                    console.log(result);
                },
                complete: function() { $("#loading").text('')}
            });            
        }
        return false;
    });
});