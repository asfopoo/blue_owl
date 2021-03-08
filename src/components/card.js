import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import styles from './styles'


export class Card extends React.Component {

  render(){
    //render a card using the props sent to the component
    return (
      <ListItem index={this.props.index} style={styles.card}>
        <p> {this.props.number} </p>
        <div onClick={this.props.onClick} style={styles.button}>
          <Button> X </Button>
        </div>
      </ListItem>
    )}
}
