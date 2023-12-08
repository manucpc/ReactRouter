import React from 'react'
import cs from './cs.jpg';
import './styles.css'

function Branch() {
  return (
    <>
    <h4>Welcome to CS branch</h4>
    <p>computer science Computer science is the study of computation, information, and automation.
      Computer science spans theoretical disciplines to applied disciplines. 
      Though more often considered an academic discipline, computer science is closely related to computer programming. </p>
    <center>
    <img src={cs} alt='cs.jpg' style={{height:'150px',widows:'150px'}}></img>
    </center>
    </>
  )
}

export default Branch