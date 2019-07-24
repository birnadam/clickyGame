import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

let count = 0;
let topscore = 0;
let rightwrong = "Click away, but don't click the same character twice!";

class App extends Component {
  // Setting this.state
  state = {
    friends,
    count,
    topscore,
    rightwrong
  };

  setClicked = id => {
    // Making a copy of the array 
    const friends = this.state.friends;

    // Filter for the clicked friend
    const clickedfriend = friends.filter(friend => friend.id === id);

    // If click value is already true for the one picked
    // do the game over action
    if (clickedfriend[0].clicked) {
      // console.log("Correct Guesses: " + count);
      // console.log("Best Score: " + topscore);
      count = 0;
      rightwrong = "GG! You've already clicked this, you lose! :("
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }
      this.setState({ rightwrong });
      this.setState({ count });
      this.setState({ friends });

      // Otherwise, if clicked = false, game continues
    } else if (count < 11) {

      // Set the one that's been clicked to true
      clickedfriend[0].clicked = true;

      // Increment
      count++;
      rightwrong = "You pwn! You haven't clicked any twice, keep going! :)";
      if (count > topscore) {
        topscore = count;
        this.setState({ topscore });
      }

      // Shuffle the array, rendering cards in different locations
      friends.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
      this.setState({ count });
      this.setState({ rightwrong });
    } else {

      clickedfriend[0].clicked = true;

      // Restart the counter
      count = 0;

      // Challenge the user to go again
      rightwrong = "You think you're hot stuff? Bet you can't do it again! ._.";
      topscore = 12;
      this.setState({ topscore });
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      friends.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ friends });
      this.setState({ count });
      this.setState({ rightwrong });
    }
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title='ST Memory Game'
          score={this.state.count}
          topscore={this.state.topscore}
        />

        <Title><span>{this.state.rightwrong}</span></Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-4">
                <FriendCard
                  key={friend.id}
                  setClicked={this.setClicked}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
export default App; 