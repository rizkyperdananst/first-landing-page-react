import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='hero min-vh-100 w-100' id="home">
        <Container>
            <Row>
                <Col>
                <h1 className='text-white text-center fs-1'>Mari Bersantai Sejenak</h1>
                <p className='text-white text-center text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero;