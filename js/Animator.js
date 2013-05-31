function Animator()
{
	this.objects = [];
}

Animator.prototype.update = function(userX, userY, userZ)
{
	for(var i = 0; i < this.objects.length; i++)
	{		
		//Uses objects[i].y - zPos because OpenGL and my animation framework use different coordinate systems: woops.
		if(Math.sqrt(Math.pow(this.objects[i].object.x - userX, 2) + Math.pow(this.objects[i].object.y - userZ, 2) + Math.pow(this.objects[i].object.z - userY, 2)) < this.objects[i].range)
		{
			console.debug("Moving Object " + i);
			this.objects[i].object.requestMove(this.objects[i].targetX, this.objects[i].targetY, this.objects[i].targetZ, this.objects[i].moveTime);
		}
	}
}

//Registers an object for animation when the user gets within triggerRange
Animator.prototype.registerObject = function(obj, triggerRange, moveX, moveY, moveZ, time)
{
	console.debug("Object registered for animation");
	this.objects.push( { object: obj, range: triggerRange, targetX: moveX, targetY: moveY, targetZ: moveZ , moveTime: time } );
}

Animator.prototype.unregisterObject = function(obj)
{
	//Do nothing for now
}