# Scheduler
 
## Description
For this challenge we were tasked with creating a basic work day scheduler. The page consists a series of input fields (8am-5pm) and their respective save buttons. The styling is all done with simple bootstrap and other libaries such as jQuery and Moment.js were used extensively. The goal I had in mind when writing this code was to make things as clean and simple as possible and accomplish more with less. The entire list of inputs is generated dynamically in JavaScript. At the top of the page is the current date and a live clock generated using Moment.js.

## Installation
No installation required, access the application at the live URL via this link: https://garretthilberling.github.io/scheduler/

## Usage
When the user enters a task into Scheduler and clicks the respective save button, this value will be stored and will remain upon refresh or revisit thanks to local storage. When the current time is greater than the hour of the time block its color will turn grey. When it is currently the hour that the task is due, the time block will turn red. Finally, when it is not the hour the task is due the time block will turn green. 

## Credits
This project was created solely by Garrett Hilberling: https://github.com/garretthilberling
