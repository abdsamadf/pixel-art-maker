// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    let tableHeight = $("#inputHeight").val();
    let tableWidth = $("#inputWidth").val();
    $("#inputHeight").attr("value", tableHeight);
    $("#inputWidth").attr("value", tableWidth);

    for (let i = 0; i < tableHeight; i++) {
        //create many elements and set their location once each
        let tableRow = $("<tr></tr>")
        $("#pixelCanvas").append(tableRow)
        for (let j = 0; j < tableWidth; j++) {
            //create many elements and set their location once each
            let tableColumnData = $("<td></td>")
            tableRow.append(tableColumnData)
        }
    }

}

$("#sizePicker").on("submit", function (event) {
    event.preventDefault()
    makeGrid();
})