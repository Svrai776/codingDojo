var world = [ [1,1,1,1,1],
			  [1,1,0,2,2],
			  [1,2,0,2,1],
			  [1,2,1,2,1],
			  [1,1,1,1,1], 

	];

var worldDict = {

	0 : 'blank',
	1: 'wall',
	2: 'sushi'

}

function drawWorld (){

	output = "";

	for(var row =0; row< world.length; row++){

		output += "<div class = 'row'></div>"

		for ( var x = 0; x< world[row].length; x++){

			output += "div class = '" + worldDict[world[row][x]] + "'></div>"

			
		}



	}

document.getElementByID('world').innerHTML = output;
 

}
