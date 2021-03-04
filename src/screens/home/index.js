import React, { Component } from 'react';
import styles from './styles';


class home extends Component {

  render(){
    return(
      <div style={styles.mainContainer}>
        <h5 style={styles.text}> An easier way to find interesting and relevant content </h5>
        <h5 style={styles.text}> Already have an account? </h5>
        <a style={styles.text} href={'/login'}> Sign in </a>
      </div>
    )
  }
}
export default home;
