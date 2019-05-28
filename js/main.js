var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    game.load.image('tinystar', 'assets/images/star2.png');
    this.load.image('sky', 'asset/images/sky.png');
    this.load.image('star', 'asset/images/star.png');
    this.load.spritesheet('dude', 
        'asset/images/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(400, 300, 'sky');
    stars = this.add.sprite(700, 100, 'star');
    stars1 = this.add.sprite(400, 400, 'star');
    stars2 = this.add.sprite(200, 200, 'star');
    stars3 = this.add.sprite(600, 300, 'star');
    player = this.add.sprite(100, 450, 'dude');
    cursors = this.input.keyboard.createCursorKeys();
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

