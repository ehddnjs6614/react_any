import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import './Card.css'

import axios from 'axios'

function Cards() {
  // eslint-disable-next-line no-lone-blocks
  {
    /*

  useState로 빈배열을 만들어놓고 useEffect사용해 fetch로 불러온 api를 빈배열에 담아관리한다.

  */
  }
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
        <h1>귀멸의 칼날 인물들</h1>
        <hr />

        {/*
        불러온 api정보를 화면에뿌려주기위해 map함수를 돌려 뿌려줌.
        */}

        <Row xs={1} md={2} className="g-4">
          {test1.map(i => (
            <Card style={{ marginTop: 10 }} className="col-md-4" key={i.id}>
              <Card.Img variant="top" src={i.img} alt="" />
              <Card.Body>
                <Card.Title>
                  <h2> {i.name}</h2>
                </Card.Title>
                <Card.Text>
                  <h3>{i.title}</h3>
                </Card.Text>
                <Card.Text>
                  <h4>{i.title2}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>

        {/*

          하단 더 보기 button 을 클릭하면 axios로 불러온 api정보들을 출력.        
        
        */}
        <Button
          style={{ marginTop: 15 }}
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
