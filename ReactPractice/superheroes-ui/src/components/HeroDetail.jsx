import React from 'react'
import images from '..'
import Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'


const HeroDetail = (props) => {
  const[counter, setCounter] = useState(0);
  const incrementCounter =()=>{
        setCounter(counter+1);
        }
  return (
     <Card >
        <div className="imgContainer">
        <Card.Img variant="top" src={images[props.info.alias.replaceAll(/\s/g, '')]} width="150px" />
        </div>
        <Card.Body >
            <Card.Title >Alias: {props.info.alias}</Card.Title>
            <Card.Text >Name: {props.info.name}</Card.Text>
            <Button variant="primary" onClick={incrementCounter}>Like</Button>
            <Card.Text>Likes: {counter}</Card.Text>
        </Card.Body>
     </Card>
  )
}

export default HeroDetail