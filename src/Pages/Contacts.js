import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Contact us </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email adress </Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                        <Form.Text> How are you bro </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Enter your pass </Form.Label>
                        <Form.Control as="textarea" rows="3" />
                        <Form.Text> How are you bro </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}
