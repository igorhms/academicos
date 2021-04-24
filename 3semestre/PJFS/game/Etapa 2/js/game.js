const $levels = {"easy": 3, "medium": 5, "hard": 7}
const $imgWidth = 100; // Largura da toupeira
const $imgHeight = 80; // Altura da toupeira

$(document).ready(function(){
    fillBoard();
});

function fillBoard() {
    $level = $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({"width": $boardWidth, "height": $boardHeight});
}