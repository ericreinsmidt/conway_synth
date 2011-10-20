/*
Currently using raphael js lib @ http://http://raphaeljs.com/
Canvas is great, but not fully implemented in all browsers.
Raphael does a great job of synthesizing canvas using widely available js.

Any other ideas for drawing objects?

*/

function loadGrid() {
	var paper = Raphael("content", 459, 459); // js 'canvas'... params: div id, width, height
	var cube_array = new Array(
		new Array(), // row
		new Array()  // col
	);
	var x = 0; // starting x-coord declaration
	var y = 0; // starting y-coord declaration
	var width = 50; // non-changed rect width declaration
	var height = 50; // non-changed rect height declaration
	var round = 10; // non-changed rect corner round declaration
	var rect_name = ''; // starting rect name declaration
	
	for (var i = 0; i < 9; ++i) { // 9 rows
		x = 0; // reset x-coord for each row
		for (var j = 0; j < 9; ++j) { // 9 cols
			rect_name = i.toString() + j.toString(); // save unique obj name for later reference
			temp_name = rect_name; // store unique name in temp
			rect_name = paper.rect(x, y, width, height, round); // create raphael obj
			rect_name.attr({fill: "#000", stroke: "#00f", opacity: 0.5}); // set obj attributes
			rect_name.node.id = temp_name; // assign saved name to obj id
			rect_name.node.onclick=function(){
				alert(this.id)
			}; // for debug

			x += 51; // extra px for spacing
		}
		y += 51; // extra px for spacing
	}
}