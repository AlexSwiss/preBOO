var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'asset/images/background.png');
    this.load.image('apple', 'asset/images/apple.png');
    this.load.image('bag', 'asset/images/bag.png');
    this.load.image('banana', 'asset/images/banana.png');
    this.load.image('bread', 'asset/images/bread.png');
    this.load.image('carrot', 'asset/images/carrot.png');
    this.load.image('grape', 'asset/images/grape.png');
    this.load.image('lemon', 'asset/images/lemon.png');
    this.load.image('yam', 'asset/images/yam.png');
    this.load.image('leaf', 'asset/images/leaf.png');
    this.load.spritesheet('dude', 
        'asset/images/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(400, 300, 'background');
    apple = this.physics.add.sprite(400, 350, 'apple');
    bag = this.physics.add.sprite(400, 150, 'bag');
    banana = this.physics.add.sprite(500, 250, 'banana');
    bread = this.physics.add.sprite(500, 350, 'bread');
    carrot = this.physics.add.sprite(300, 350, 'carrot');
    grape = this.physics.add.sprite(500, 150, 'grape');
    lemon = this.physics.add.sprite(400, 250, 'lemon');
    yam = this.physics.add.sprite(300, 150, 'yam');
    leaf = this.physics.add.sprite(300, 250, 'leaf');
    player = this.physics.add.sprite(200, 350, 'dude');
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(player, apple, collectApple, null, this);
    this.physics.add.overlap(player, bag, collectBag, null, this);
    this.physics.add.overlap(player, banana, collectBanana, null, this);
    this.physics.add.overlap(player, bread, collectBread, null, this);
    this.physics.add.overlap(player, carrot, collectCarrot, null, this);
    this.physics.add.overlap(player, grape, collectGrape, null, this);
    this.physics.add.overlap(player, lemon, collectLemon, null, this);
    this.physics.add.overlap(player, yam, collectYam, null, this);
    this.physics.add.overlap(player, leaf, collectLeaf, null, this);
   

    //  You can also scale sprites like this:
        //  sprite.scale.x = value;
        //  sprite.scale.y = value;
    player.scale.x = 1;
    player.scale.y = 3;

}

function update ()
{
    if (cursors.left.isDown)
    {
        player.x -=10;
    }
    else if (cursors.right.isDown)
    {
        player.x +=10;
    }
    else if(cursors.up.isDown)
    {   player.y -=10;
    }
    if (cursors.down.isDown)
    {   player.y +=10;
    }

    
}
function collectApple ()
    {
        apple.disableBody(true, true);
    }
    function collectBag ()
    {
        bag.disableBody(true, true);
        alert('Ops! You failed!');
        location.reload(true);

    }
    function collectBanana ()
    {
        banana.disableBody(true, true);
    }
    function collectBread ()
    {
        bread.disableBody(true, true);
        alert('Ops! You failed!');
        location.reload(true);

    }
    function collectCarrot ()
    {
        carrot.disableBody(true, true);
    }
    function collectGrape ()
    {
        grape.disableBody(true, true);
        alert('Congratulations! level complete!')
    }
    function collectLemon ()
    {
        lemon.disableBody(true, true);
    }
    function collectYam ()
    {
        yam.disableBody(true, true);
        alert('Ops! You failed!');
        location.reload(true);
    }
    function collectLeaf ()
    {
        leaf.disableBody(true, true);
        alert('Ops! You failed!');
        location.reload(true);

    }
