import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <div className="services min-vh-100 d-flex align-items-center" id="services">
        <Container>
            <Row className="mb-5">
                <Col>
                    <h1 className="text-center fw-bold">Services</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit magnam, dicta at magni possimus atque illum iure quo tempore laboriosam aliquid beatae voluptate ratione earum recusandae placeat pariatur velit nam.</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
                <Col className="text-center py-5 px-3">
                    <i class="fa-solid fa-coins fs-2 mb-4"></i>
                    <h5 className="fw-bold">Harga Terjangkau</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, officiis.</p>
                </Col>
                <Col className="text-center py-5 px-3">
                    <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
                    <h5 className="fw-bold">Fasilitas Terbaik</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, officiis.</p>
                </Col>
                <Col className="text-center py-5 px-3">
                    <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
                    <h5 className="fw-bold">Tersertifikasi</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, officiis.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services