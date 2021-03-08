import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import styles from './styles'


export const Card = ({ index, number, handleClick }) => (
  <ListItem index={index} style={styles.card}>
      <p> {number} </p>
      <div onClick={handleClick} style={styles.button}>
        <p> X </p>
      </div>
  </ListItem>
);
