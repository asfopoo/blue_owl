import React, { Component } from 'react';
import styles from './styles';


class resume extends Component {

  render(){
    return(
      <div style={styles.mainContainer}>
        <h5 style={styles.text}> resume </h5>

        <a style={styles.text} href={'/'}> Home </a>
      </div>
    )
  }
}
export default resume;
