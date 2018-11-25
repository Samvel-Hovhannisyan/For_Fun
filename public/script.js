var matrix;
var socket;
var side = 10;

var stat;

function setup() {
    frameRate(0);
    var socket = io.connect();
    socket.on("get matrix", function (mtx) {
        matrix = mtx;
        createCanvas(matrix[0].length * side + 500, matrix.length * side);
        noLoop();

        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        })

        socket.on("Right Statistics", function(Statistics){
            stat = Statistics;
        })
    });

    background('#acacac');

}
var start = false;

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
            // else if (matrix[y][x] == 0) {
            //     fill('white');
            //     rect(x * side, y * side, side, side);
            // }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill('white');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('gray');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill('#42c5f4');
                rect(x * side, y * side, side, side);
            }
        }
    }
}