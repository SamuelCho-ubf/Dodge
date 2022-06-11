# Dodge!

## What does this project do?
"Dodge!" is a web application that provides simple games.  
The object of the game is to survive as long as possible by avoiding white dots flying from all sides.

## Why is this project useful?
This project basically serves as a light entertainment by providing a game to users.  
In addition, this web application was created by actively using p5.js which is an open source library for javascript, so it can be a good example of introducing p5.js to other developers interested in p5.js.

## How to get started?
### Development tools used
- html
- css
- javascript
- p5.js
- npm

The installation is pretty straightforward. Run the following commands to update the package index and install Node.js and npm:
```
sudo apt update
sudo apt install nodejs npm
```
Once done, verify the installation by running:
```
nodejs -v
npm -v
```
clone this repository to your local computer
```
git clone https://github.com/SamuelCho-ubf/Dodge.git
```
Change directory to the project directory
```
cd Dodge
```
Install dependencies by running: 
```
npm install
```
Now, you are ready to start. Run the following command to start live server:
```
npm start
```

Open any web browser, and type "your_ip_adress:8080" into the address bar  

Finally, you can enjoy the game!


## How to play?
The rules of the game are simple. The user controls the red dot, and the game ends when it touches any white dots. The user can control the red dot with the arrow keys to dodge the white dots approaching from all sides.
![image](https://user-images.githubusercontent.com/68087418/173179956-0a33843c-e3aa-40cf-91d2-2a3430912aa8.png){: width="33%" height="33%"}
![image](https://user-images.githubusercontent.com/68087418/173179962-e1b0c184-2712-4d39-905e-bcc4b174f7e7.png){: width="33%" height="33%"}
![image](https://user-images.githubusercontent.com/68087418/173179965-c88e9386-07c9-4a59-a51d-c2d98fd00cfa.png){: width="33%" height="33%"}


## Contribution of the project
I designed and implemented everything from scratch except for the functions brought from the p5.js library.  
1. Using the p5.js library, I implemented functions for all dynamic movements in the game, such as player manipulation and random dispersion of white dots. 
2. I implemented the rules of the whole game, such as the function that let the game ended when the player touches any white dots.  
3. I designed overall UI of the application and applied it through css.

## Reference
p5.js: https://p5js.org/

If you need help with this project, please contact me here: 21500683@handong.ac.kr

## Presentation Video Link
