import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import { Card } from '../../components/card'
import { instructions } from '../../components/instructions'
import styles from './styles';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructionContainer: true,
      cards: [],
      key: 0,
      cardsContainer: {
        flex: 1,
        width: window.innerWidth - 375,
        height: '100%',
        position: 'fixed',
        marginTop: '3%',
        overflow: 'scroll',
        borderWidth: 1,
        borderStyle: 'solid',
      }
    }
    this.handleResize = this.handleResize.bind(this);
  }

  //set listener for window resizing
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  //remove window resize listener
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  //add or remove instructions based on window size
  handleResize(WindowSize, event) {
    window.innerWidth <= 900 ?
      this.setState({showInstructionContainer: false}) :
      this.setState({showInstructionContainer: true})
    let cardsContainer = {
      flex: 1,
      width: window.innerWidth - 375,
      height: '100%',
      position: 'fixed',
      marginTop: '3%',
      overflow: 'scroll',
      borderWidth: 1,
      borderStyle: 'solid',
    }
    this.setState({ cardsContainer })
  }

  //math.random returns a float between 0 and 1 so we add a little sugar to make it 0 - 100
  addCards = () => {
    let cards = this.state.cards;
    cards.push({
      key: this.state.key,
      number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0))),
    })
    this.setState({ cards });
    this.setState({key: this.state.key + 1})
  }

  sortCards = () => {
    let cards = this.state.cards;
    cards.sort((a, b) => (a.number > b.number) ? 1 : -1)
    this.setState({ cards });
  }

  removeCard = (index) => {
    let cards = this.state.cards;
    cards.splice(index, 1);
    this.setState({ cards });
  }

  navToResume = () => {
    // pop a modal here
    window.location = '/resume';
  }

  render(){
    return(
      <div style={styles.mainContainer}>
        <div style={styles.header}>
          <Button onClick={this.addCards}>Add Card</Button>
          <Button onClick={this.sortCards}>Sort Cards</Button>
        </div>
        <div style={this.state.showInstructionContainer ? this.state.cardsContainer : styles.cardsContainer}>
          <List style={styles.cardsList}>
            {this.state.cards.map(( card, index ) => {
              return (
                <Card
                  key={card.key}
                  onClick={() => this.removeCard(index)}
                  number={card.number}
                />)
            })}
          </List>
        </div>
        <div style={styles.footer}>
          <Button onClick={this.navToResume}>Useful Links</Button>
        </div>
        {this.state.showInstructionContainer && (
          <div style={styles.instructionsContainer}>
            <h2> Instructions </h2>
            {instructions.map((instruction, index) => {
              return (
                <h4 key={index}> {instruction} </h4>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}
export default home;
