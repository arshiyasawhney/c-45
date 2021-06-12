var player, playerImage;
var bg, bgImage
var coin, coinImg;
var score = 0;
function preload(){
  playerImage = loadImage("images/character1.png");
  bgImage = loadImage("images/bg.png");
  coinImage = loadImage("images/coin.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2);
  background.addImage(bgImage);
  background.scale = 2;
  player = createSprite(width/8,height);
  player.addImage(playerImage);
  player.scale = 0.5;
  edges = createEdgeSprites();
  background.velocityX = -2
  coinGroup = new Group();
}


function draw(){
  drawSprites();
  textSize(30)
  fill("lightblue");
  text("Coin count:"+ score,width-200,30);
  spawnCoins();
if (keyDown(UP_ARROW)){
player.y -= 10;
}
if(keyDown(DOWN_ARROW)){
  player.y += 10;
}
player.collide(edges[2])
player.collide(edges[3])
if(background.x<width/4){
  background.x = width/2;
}
/*for (var i=0;1<coinGroup.length;i++){
if((coinGroup.get(i)).isTouching (player)){
  coinGroup.get(i).destroy();
 score = score+1;
}
}*/
if(coinGroup.isTouching(player)){
  coinGroup.destroyEach();
  score = score+1;
}
}
function spawnCoins(){
  if (frameCount % 160 === 0){
    var coin = createSprite(width,100);
    coin.scale = 0.5;
    coin.addImage(coinImage);
    coin.y = Math.round(random(80,120));
    coin.velocityX = -3;
    coin.lifetime = width/3;
    coinGroup.add(coin);
  }
}