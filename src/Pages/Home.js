import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center">Our team</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Our devs </Card.Title>
                                <Card.Text>
                                    Samie chotkie rebyata rabotaoyut tolko u nas
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Our devs </Card.Title>
                                <Card.Text>
                                    Samie chotkie rebyata rabotaoyut tolko u nas
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Our devs </Card.Title>
                                <Card.Text>
                                    Samie chotkie rebyata rabotaoyut tolko u nas
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
