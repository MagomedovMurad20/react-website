import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultChecked="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sec"> Team </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Programming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four"> Framework </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five"> Libruary</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm="9">
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260s" />
                                    <p> Тут такая суета кароче Дезигн жи есь</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sec">
                                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                    <p> Тут такая суета кароче Дезигн жи есь</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                    <p> Тут такая суета кароче Дезигн жи есь</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <img src="https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                    <p> Тут такая суета кароче Дезигн жи есь</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five" >
                                    <img src="https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                    <p> Тут такая суета кароче Дезигн жи есь</p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        )
    }
}
