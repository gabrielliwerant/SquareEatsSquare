var createEnemyShip = function() {
    var svg = document.getElementById('game-board');
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute('x', 30);
    rect.setAttribute('y', 60);
    rect.setAttribute('width', 50);
    rect.setAttribute('height', 80);
    rect.setAttribute('style', "stroke:#000000; fill:none;");
    rect.id = "enemy-ship";

    svg.appendChild(rect);
};