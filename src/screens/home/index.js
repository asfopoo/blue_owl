import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructionContainer: true
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
    }

  addCards = () => {
    console.log('add cards');
  }

  removeCards = () => {
    console.log('remove cards');
  }

  navToResume = () => {
    // pop a modal here
    window.location = '/resume';
  }

  render(){
    return(
      <div>
        {this.state.showInstructionContainer && (
          <div style={styles.instructionsContainer}>
            <h4>Instructions</h4>
          </div>
        )}
        <div style={styles.header}>
          <Button onClick={this.addCards}>Add Cards</Button>
          <Button onClick={this.removeCards}>Sort Cards</Button>
        </div>
        <div style={styles.cardsContainer}>
          <h1>Im a card</h1>
        </div>
        <div style={styles.footer}>
          <Button onClick={this.navToResume}>Useful Links</Button>
        </div>
      </div>
    )
  }
}
export default home;
