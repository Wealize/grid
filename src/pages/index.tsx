import React from "react"

import { Container, Row, Column } from "../lib"


const Index = () => (
  <Container>
    <Row style={{ background: "grey" }}>
      <Column push={2} style={{ background: "red" }}>
        holi
      </Column>
      <Column style={{ background: "blue" }}>
        holi 2
      </Column>
    </Row>
  </Container>
)

export default Index
