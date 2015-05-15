var ship = {};
ship.xPos = 10;
ship.yPos = 10;

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

ship.create = function() {
    var svg = document.getElementById('game-board');
    var svgSpec = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgSpec, 'rect');

    rect.setAttribute('x', this.xPos);
    rect.setAttribute('y', this.yPos);
    rect.setAttribute('width', 50);
    rect.setAttribute('height', 50);
    rect.id = 'ship';

    svg.appendChild(rect);
};

ship.updateXPosRight = function() {
    this.xPos += 10;
};

ship.create();
//createEnemyShip();