import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import './Card.css'
import Detail from './Detail'
import axios from 'axios'

function Cards() {
  const [test1, setTest1] = useState([])
  console.log(test1)

  useEffect(() => {
    const test =
      'https://92558e46-57d7-4f91-a4b2-e470adaa9cdf.mock.pstmn.io/list'

    fetch(test)
      .then(response => response.json())
      .then(response => {
        setTest1(response)
      })
  }, [])

  return (
    <div style={{ paddingTop: 56 }}>
      <div style={{ paddingTop: 56 }} className="container">
        <h2>귀멸의 칼날 인물들</h2>
        <hr />
        <Row xs={1} md={2} className="g-4">
          {test1.map(i => (
            <Card style={{ marginTop: 10 }} className="col-md-4" key={i.id}>
              <Card.Img variant="top" src={i.img} alt="" />
              <Card.Body>
                <Card.Title>
                  <h1> {i.name}</h1>
                </Card.Title>
                <Card.Text> {i.title}</Card.Text>
                <Card.Text> {i.title2}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
        <Button
          className="btn"
          variant="primary"
          onClick={() => {
            axios
              .get(
                'https://f2b4eab3-2146-4aa0-8f37-ee020362cb6d.mock.pstmn.io/list2'
              )
              .then(response => {
                console.log(response.data)
                setTest1([...test1, ...response.data])
              })
          }}
        >
          더 보기
        </Button>
      </div>
    </div>
  )
}

export default Cards
