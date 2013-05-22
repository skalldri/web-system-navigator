//Create some shape primitives
	function RectPrism(width, height, depth, x, y, z, texture)
	{
		//Construct Buffers, setup objects
		this.vertexBuffer = gl.createBuffer();
		this.textureCoordBuffer = gl.createBuffer();
		this.texture = texture;
		this.vertexPositions = [];
		this.vertexTextureCoords = [];
		this.needsAnimating = false;
		
		this.x = x;
		this.y = y;
		this.z = z;
		
		this.targetX = x;
		this.targetY = y;
		this.targetZ = z;
		this.motionTime = 0;
		this.completedTime = 0;
		
		this.w = width / 2;
		this.h = height / 2;
		this.d = depth / 2;
		
		this.fillBuffers();
	}
	
	RectPrism.prototype.fillBuffers = function()
	{
		this.vertexPositions = [];
		this.vertexTextureCoords = [];
		
		var w = this.w;
		var h = this.h;
		var d = this.d;
		
		var x = this.x;
		var y = this.y;
		var z = this.z;
		
		//Top Side
		this.vertexPositions.push(w + x, h + z, -d + y);
		this.vertexPositions.push(w + x, h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, -d + y);
		this.vertexPositions.push(w + x, h + z, -d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);
		
		//Bottom Side
		this.vertexPositions.push(w + x, -h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, -h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, -d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);
		
		//Side A (front)
		this.vertexPositions.push(w + x, h + z, d + y);
		this.vertexPositions.push(w + x, h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, d + y);
		this.vertexPositions.push(w + x, h + z, d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);
		
		//Side B (back)
		this.vertexPositions.push(-w + x, h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, -d + y);
		this.vertexPositions.push(-w + x, -h + z, -d + y);
		this.vertexPositions.push(-w + x, -h + z, -d + y);
		this.vertexPositions.push(-w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);
		
		//Side C (left)
		this.vertexPositions.push(w + x, h + z, d + y);
		this.vertexPositions.push(w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, -h + z, d + y);
		this.vertexPositions.push(-w + x, h + z, d + y);
		this.vertexPositions.push(w + x, h + z, d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);
		
		//Side D (right)
		this.vertexPositions.push(w + x, h + z, -d + y);
		this.vertexPositions.push(w + x, -h + z, -d + y);
		this.vertexPositions.push(-w + x, -h + z, -d + y);
		this.vertexPositions.push(-w + x, -h + z, -d + y);
		this.vertexPositions.push(-w + x, h + z, -d + y);
		this.vertexPositions.push(w + x, h + z, -d + y);
		
		this.vertexTextureCoords.push(0.0, 0.0);
		this.vertexTextureCoords.push(0.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 1.0);
		this.vertexTextureCoords.push(1.0, 0.0);
		this.vertexTextureCoords.push(0.0, 0.0);	
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexPositions), gl.DYNAMIC_DRAW);
		this.vertexBuffer.itemSize = 3;
		this.vertexBuffer.numItems = 36;
	
		gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexTextureCoords), gl.STATIC_DRAW);
		this.textureCoordBuffer.itemSize = 2;
		this.textureCoordBuffer.numItems = 36;
	}
	
	RectPrism.prototype.animate = function(elapsed) 
	{			
		//elapsed should be a JavaScript DateTime object from the Animate loop
		//Elapsed is the time between calls to animate
		if((this.x != this.targetX || this.y != this.targetY || this.z != this.targetZ) && this.motionTime > 0 && this.completedTime < this.motionTime)
		{
			//Move points to correct locations and fill the framebuffers for the next scene
			
			//Need to change this motion algorithm: currently approaches the target point asymptotically which isn't what I want.
			//Could do this like I did at work by creating "motion control" objects that just move numbers from point A to point B following a model
			this.x += (this.targetX - this.x) * (elapsed / this.motionTime);
			this.y += (this.targetY - this.y) * (elapsed / this.motionTime);
			this.z += (this.targetY - this.z) * (elapsed / this.motionTime);			
			this.completedTime += elapsed;
			
			this.fillBuffers();
		}		
	}
	
	RectPrism.prototype.requestMove = function(x, y, z, time)
	{
		console.debug("Move request");
		this.targetX = x;
		this.targetY = y;
		this.targetZ = z;
		this.motionTime = time;
		this.completedTime = 0;
	}
	
	RectPrism.prototype.draw = function()
	{	
		if(this.textureCoordBuffer == null || this.vertexBuffer == null) {
            return;
        }
		
		gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(shaderProgram.samplerUniform, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.textureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.drawArrays(gl.TRIANGLES, 0, this.vertexBuffer.numItems);
	}