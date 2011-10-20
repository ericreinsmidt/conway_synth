

function ActionSquare(grid,id)
{
    this.draw = actionsquare_draw;
    this.grid = grid;
    this.id = id;

    return true;
}

function ActionGrid()
{
    this.xdim = 1;
    this.ydim = 1;
    this.div = "content";
    this.xpixels = 250;
    this.ypixels = 250;
    this.cell = ActionSquare;

    this.create = actiongrid_create;
    this.draw   = actiongrid_draw;
    this.press  = actiongrid_press;

    return true;
}


// create grid
function actiongrid_create()
{
//    alert("creating actiongrid: " + this.div + " " + this.xpixels + " " + this.ypixels);


    this.cells = new Array();

    for (i=0; i<this.ydim; i++)
    {
	for (j=0; j<this.xdim; j++)
	{
	    idx = i*this.xdim + j;
	    this.cells[idx] = new this.cell(this, idx);
	}
    }


    this.paper = Raphael(this.div, this.xpixels, this.ypixels);
    this.draw();
}


// draw grid
function actiongrid_draw()
{
    this.paper.clear();

    xpos = 0; ypos = 0;

    cell_width = this.xpixels / this.xdim;
    cell_height = this.ypixels / this.ydim;


    for (i=0; i<this.ydim; i++)
    {
	for (j=0; j<this.xdim; j++)
	{
	    idx = i*this.xdim + j;
	    this.cells[idx].draw(xpos, ypos, cell_width-2, cell_height-2);
	    xpos += cell_width;
	}

	xpos = 0;
	ypos += cell_height;
    }
}


// handle pressing of a grid button
function actiongrid_press(cell)
{
    this.cells[cell].active = ! this.cells[cell].active;
    this.draw();
}


// draw one square
function actionsquare_draw(x,y,w,h)
{
    this.rect = this.grid.paper.rect(x,y,w,h,5);
    this.rect.node.id = this.id.toString();

    if (this.active)
    {
	this.rect.attr({fill: "#900", stroke: "#00f", opacity: 0.5});
    }
    else
    {
	this.rect.attr({fill: "#000", stroke: "#00f", opacity: 0.5});
    }

    thegrid = this.grid;
    this.rect.node.onclick = function() { thegrid.press(this.id); }
}
