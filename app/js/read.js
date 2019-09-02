// read with code
$(document).ready(function () {
    $("#read").click(function () {
        $("#loading2").text('Loading...');
        var code = $("#code").val();
        var url = "http://localhost/app-server-side-php/read.php?id=";
        if (code != "" & code > 0) {
            $.getJSON(url + code, function (result) {
                console.log(result);
                $.each(result, function (i, item) {
                    var id = item.id;
                    var title = item.title;
                    var body = item.body;
                    var author = item.author;
                    var data =
                        "ID:<br>" + "<input type='text' class='inpCor' id='idItem' style='color:#626262' value='" + id + "' " + "readonly />" + "<br><br>"
                        + "Title:<br>" + "<input type='text' class='inpCor' id='titleUpdate' style='color:#626262' value='" + title + "' " + "/>" + "<br><br>"
                        + "Body:<br>" + "<input type='text' class='inpCor' id='bodyUpdate' style='color:#626262' value='" + body + "' " + "/>" + "<br><br>"
                        + "author:<br>" + "<input type='text' class='inpCor' id='authorUpdate' style='color:#626262' value='" + author + "' " + "/>" + "<br><br>";
                        
                    result = data;

                });
                $("#loading2").text('');
                $("#result2").html(result);
                $("#update, #delete").css("display", "initial");
                $(".inpCor").css("border", "1px solid #83b582");
            });
        }
        else if (code == "") {
            $("#loading2").text('');
            $("#result2").text("Preencha o campo");

        }
        else {
            $("#loading2").text('');
            $("#result2").text("Valor inválido!");
        }

    });
});

// read all
$(document).ready(function () {
    $("#read-all").click(function () {
        $("#loading3").text('Loading...');
        var content = "";
        var url = "http://localhost/app-server-side-php/read.php";
        $.getJSON(url, function (data) {
            $.each(data, function (i, item) {
                var title = item.title;
                var body = item.body;
                var author = item.author;
                content += "<ul>";
                content += "<li>" + "<strong>Title:</strong> " + title + "</li>";
                content += "<li>" + "<strong>Body:</strong> " + body + "</li>";
                content += "<li>" + "<strong>Author:</strong> " + author + "</li>";
                content += "</ul>";
            });

            // imprimindo html do content var
            $("#loading3").text('');
            $("#listview").html(content);
        });
    });
});