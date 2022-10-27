import React from 'react';
import Card from 'react-bootstrap/Card';
import img_PL from '../../../../src/PL.png'
// this is home component.
const Home = () => {
    return (
        <Card className="text-center mb-5">
            <Card.Header className='mt-2 fs-2 fw-semibold'>Welcome to Programming Master.</Card.Header>
            <Card.Body>
                <Card.Title className='fs-3 fw-semibold'>Special Programming Language Course.</Card.Title>
                <Card.Img variant="top" src={img_PL} />
                <Card.Text className='fs-4'>
                    Master today’s top programming languages like Java, Python, and C#, whether you’re learning proper syntax or honing your knowledge of advanced concepts such as MVC and test-driven development.Enrol now & kickstart your coding journey with programming master, designed by IIT & Stanford Alumni. Get placement assistance with a dedicated expert to guide you through all placement rounds. These courses cover the basic concepts and designs tradeoffs of programming languages.
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Home;