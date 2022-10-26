import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion className='mt-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the aim of this web application (web site)?</Accordion.Header>
                <Accordion.Body>
                    It is a quality learning platform in the field of computer science & engineering (CSE).
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How many courses are present in this learning platform? </Accordion.Header>
                <Accordion.Body>
                    There are 6 courses in this web application (web site). Namely: <br />
                    <li>Introduction To C</li>
                    <li>Programming In C++</li>
                    <li>Java & It's Applications</li>
                    <li>Advanced Programming With Python</li>
                    <li>C# Programming Technology</li>
                    <li>PHP & Backend Technologies</li>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Is there any login system?</Accordion.Header>
                <Accordion.Body>
                    Yes, there 3 login system in this web application. <br />
                    <li>Login with email & password.</li>
                    <li>Login with google account.</li>
                    <li>Login with github.</li>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Is there any authentication system?</Accordion.Header>
                <Accordion.Body>
                    Yes, firebase authentication system is implemented in this web site.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Can we get premium service from this application?</Accordion.Header>
                <Accordion.Body>
                    Yes, premium service is available in this web application. But for this, the user have to create an account in this web site.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;