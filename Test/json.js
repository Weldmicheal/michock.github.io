$(function () {

    $("#loader").hide();
    $(document).ajaxStart(function () { $("#loader").show(); })
        .ajaxStop(function () { $("#loader").hide(); })

    $("#get").click(function () {
        $.get("http://jsonplaceholder.typicode.com/users",
            {
                "id":1
            
            })
        
            .done(retrieveJson)
            .fail(errorMes)
    })
})
function retrieveJson(xdata) {
    $("#texta").text(JSON.parse(JSON.stringify(xdata)));
}

function errorMes() {
    $("#texta").val("error")
}