/**
* @description Make the grid
*/
function makeGrid() {
    let tableHeight = $('#inputHeight').val();
    let tableWidth = $('#inputWidth').val();
    $("#inputHeight").attr("value", tableHeight);
    $("#inputWidth").attr("value", tableWidth);

    for (let i = 0; i < tableHeight; i++) {
        //create many elements and set their location once each
        let tableRow = $('<tr></tr>');
        $("#pixelCanvas").append(tableRow);
        for (let j = 0; j < tableWidth; j++) {
            //create many elements and set their location once each
            let tableColumnData = $('<td></td>');
            tableRow.append(tableColumnData);
        }
    }
}

// Submit and Reset functionality if any children and click on submit then reset the grid otherwise make the grid

$("#sizePicker").on("submit", function (event) {
    event.preventDefault();
    if ($("#pixelCanvas").children().length > 0) {
        $("#pixelCanvas").empty();
        makeGrid();
    } else {
        makeGrid();
    }
})

/**
* @description Fill color to grid square element
* @param {object} squareElement - the current target of square element
*/
function fillColor(squareElement) {
    let squareColor = $('#colorPicker').val();
    $(squareElement).css("background-color", squareColor);
}

// When user clicking on a grid square causes only that square to change color

let changeColor = $("#pixelCanvas").on("click", "td", function (event) {
    fillColor($(event.currentTarget));
});

// When user double click on a grid squuare causes only that sqaure to clean color

let cleanColor = $("#pixelCanvas").on("dblclick", "td", function () {
    $(this).removeAttr("style");
});

changeColor();
cleanColor();