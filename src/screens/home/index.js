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
      cards: [{key: 1, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 2, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 3, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 4, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 5, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 6, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 7, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 12, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 13, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 14, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 15, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 16, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 17, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))},
        {key: 18, number: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0)))}],
      key: 0,
      cardsContainer: {
        flex: 1,
        width: window.innerWidth - 375,
        height: '100%',
        position: 'fixed',
        marginTop: '3%',
        overflow: 'scroll',
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

  render(){
    return(
      <div style={styles.mainContainer}>
        <div style={styles.cardsContainer}>
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
        <div style={styles.instructionsContainer}>
          <h2> Instructions </h2>
          {instructions.map((instruction, index) => {
            return (
              <h4 key={index}> {instruction} </h4>
            )
          })}
        </div>
      </div>
    )
  }
}
export default home;
