var loadState = {

	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('player', 'assets/LoboDI.png', 62,31);
		game.load.image('enemy', 'assets/enemy.png');
		game.load.image('coin', 'assets/ham.png', 50,50);
		game.load.image('pixel', 'assets/pixel.png');
        game.load.image('laser', 'assets/laser.png');
        game.load.image('fondomenu','assets/fondomenu.jpg');
		game.load.image('background', 'assets/background.png', 1000,600);
        game.load.image('tileset','assets/tileset.png');
        
       
        //fondo
         game.load.image('fondo', 'assets/fondo.png');
        
        //assets para el mapa
        game.load.image('manaBar', 'assets/manaBar.png');
        game.load.image('manaBar2', 'assets/manaBar2.png');
        game.load.image('moneda','assets/Runner/moneda.png');
        game.load.image('cave1','assets/Runner/CaveBackground.png');
        game.load.image('cave2','assets/Runner/CaveBaseForeground.png');
        game.load.image('cave3','assets/Runner/CaveEntrance.png');
        game.load.image('cave4','assets/Runner/CaveEntranceD.png');
        game.load.image('setas','assets/Runner/platshrooms.png');
        game.load.image('follower','assets/Runner/follower.png');
        game.load.image('terreno','assets/Runner/terrain.png');
        game.load.image('hierva2','assets/Runner/hierva.png');
        game.load.image('lava','assets/Runner/Ugly_cropped_lava_flow_make_a_better_1.png');
        game.load.image('tierra','assets/Runner/Tierra.png');
       
        game.load.image('selva','assets/Runner/Jungle_terrainwater.png');
        game.load.image('stone','assets/Runner/stone.png');
        game.load.image('mana','assets/Runner/progressBar.png');
        
        
        
		game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
        game.load.tilemap('Runner','assets/Runner/RunnerMap.json', null, Phaser.Tilemap.TILED_JSON);
        //asset de las vidas
        game.load.image('corazon', 'assets/corazon.png');
       
		game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
		game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
		game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
	},

	create: function() { 
		game.state.start('menu');
	}
};