const $levels = {"easy": 3, "medium": 5, "hard": 7}
const $imgWidth = 100; // Largura da toupeira
const $imgHeight = 80; // Altura da toupeira
const $imgsTheme = {"default": "buraco.gif", "active": "toupeira.gif", "dead": "morreu.gif"}

$(document).ready(function(){
    fillBoard();
    $("#btnPlay").click(function(){
        setInterval(startGame, 1180);
    })
});

// Cria o tabuleiro do jogo conforme o nível de dificuldade
function fillBoard() {
    $level = $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({"width": $boardWidth, "height": $boardHeight});
    placeHolesBoard($level);
}

// Insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    // cria uma div com uma imagem dentro do #board
    for($i = 0; $i < Math.pow($level,2); $i++){
        $div = $("<div></div>");
        $img = $("<img>").attr({"src": `img/${$imgsTheme.default}`, "id": `mole_${$i+1}`});
        $($img).click(function(){updateScore(this)});
        $($div).append($img);
        $("#board").append($div);
    }
}

function updateScore($img){
    if ($($img).attr("src").search($imgsTheme.active)!=-1){
        /* $pontuacao = $("#score").html();
        $pontuacao++;
        $("#score").html($pontuacao); */
        $("#score").text(parseInt($("#score").text()+1));
        $($img).attr("src",`img/${$imgsTheme.dead}`)
    }
}

// função de iniciar o jogo
function startGame() {
    fillBoard(); // melhorar: trocar apenas a toupeira do tabuleiro pelo buraco ao invés de limpar todo o tabuleiro
    $level = getLevel();
    $randNumber = getRandNumber(1, Math.pow($level,2));
    // pega uma imagem no com id gerado aleatoriamente e substitui pela toupeira
    $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.active}`);
}

// Gera um numero aleatorio entre "min" e "max"
function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

// Retorna o número correspondente ao nível de dificuldade selecionado pelo usuário
function getLevel() {
    return $level = $levels[$("#level").val()];
}