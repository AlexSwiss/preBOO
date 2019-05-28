'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-left",
  "lastDummyAlign0": "RIGHT",
  "message0": "Left",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-right",
  "lastDummyAlign0": "RIGHT",
  "message0": "Right",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);



Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-top",
  "lastDummyAlign0": "RIGHT",
  "message0": "Top",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "directions-down",
  "lastDummyAlign0": "RIGHT",
  "message0": "Down",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}


]);

Blockly.defineBlocksWithJsonArray([
{
  "type": "end",
  "message0": "End",
  "previousStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);




Blockly.defineBlocksWithJsonArray([

 {
  "type": "directions",
  "message0": "Start Game %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "command"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);
