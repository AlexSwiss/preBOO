'use strict';
goog.require('Blockly.JavaScript');


Blockly.JavaScript['directions-left'] = function(block) {
  
  //Phaser Player
  player.x -=100;
  

  var code = '...;\n';
  return code;
};

Blockly.JavaScript['directions-right'] = function(block) {

  //Phaser Player
  player.x +=100;


  var code = '...;\n';
  return code;
};

Blockly.JavaScript['directions-top'] = function(block) {
  
  //Phaser Player
  player.y -=100;
  

  var code = '...;\n';
  return code;
};

Blockly.JavaScript['directions-down'] = function(block) {
  
  //Phaser Player
  player.y +=100;
  
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['end'] = function(block) {
  
  //Logic to check if blockly connection is correct or not.

  var code = '...;\n';
  return code;
}

Blockly.JavaScript['directions'] = function(block) {
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  var code = '...;\n';
  return code;
};
