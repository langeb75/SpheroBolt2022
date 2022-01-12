/*
Programmer: Mr. Lange
Date: 3.10.20
Program: This is a sandbox where I am learning multiple things with the Sphero Bolt.  
I am using the Sphero Wiki to get information related ot all the commands.  I will be
having fun creating functions to try out with the Sphero Bolt
*/


/**
 * upperLoop creates the first/top loop in our Figure 8.
*/
async function upperLoop(){
	setSpeed(80); 				// <--set the speed of robot to 80
	await spin(355,4.5);		// <--starts the roll at 355 degrees so it will make a loop for 4.5 seconds
	stopRoll();					// <--stops the roll
}


/**
 * lowerLoop creates the second/bottom loop in our Figure 8.
*/
async function lowerLoop(){
	setSpeed(80);				// <--set the speed of robot to 80
	await spin(-355,4.5);		// <--starts the roll at 355 degrees so it will make a loop for 4.5 seconds
	stopRoll();					// <--stops the roll
}


/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
	await roll((getHeading() + 0), 60, 4); // Heading 0 degrees at 60 speed for 4 seconds
	await delay(1);
	await roll((getHeading() + 90), 60, 4); // heading 90 degrees at 60 speed for 4 seconds
}


/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
	await upperLoop();			// <--calls the upperLoop Function to run
	await lowerLoop();			// <--calls the lowerLoop Function to run
}
