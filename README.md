# clickyGame

## What it is
clickyGame is a memory game that was built with **React**. The assignment required breaking UI into components, managing component state, 
and responding to user events. *Stranger Things* characters are appended onto cards, and the user is to click on a 
card. Once the card is clicked, the cards get shuffled around and the user is to click on another card. This continues while it 
stores the choices made, once it hits a card user have already clicked the game ends.

## How it was made
clickyGame was created using **Create React App**, a tool built by developers at Facebook that gives you a head start when building React apps. This app relies on React to display the game to the user. The application is broken up into the following components: 
FriendCard, Nav, Title, and Wrapper. The FriendCard is how the characters are stored on the page. All the characters are stored in a friends.json; each object containing an id, an associated image, and the boolean of "clicked". The clicked value is defaulted at false, but changed to true on the user's click. Aside from that there are other values that are updated as the game progresses as well.

## How it works
Visit the deployed site and test your memory: https://birnadam.github.io/clickyGame/
<br>*OR* do the following:
1. Clone this repository: https://github.com/birnadam/clickyGame.git
2. Pull up the terminal in clickyGame/my-app and type "npm init -y" to intialize your package.json
3. Then type in "npm install" to install all the proper modules
4. Lastly, type either "npm start" or "yarn start" to start the server
5. Enjoy the game at localhost:3000 in the web browser
