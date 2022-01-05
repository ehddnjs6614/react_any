import React from 'react'
import { Figure } from 'react-bootstrap'

function Jumbo() {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={350}
          height={180}
          alt="171x180"
          src="logo192.png"
        />
        <Figure.Caption>임시로 넣음 여기에 동영상넣을거임</Figure.Caption>
      </Figure>
    </div>
  )
}

export default Jumbo
