import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.map(course => <Card key={course.id} className="bg-dark text-info fs-2 mt-4 mb-3">
                    <Card.Img src={course.img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='fs-1 fw-bolder'>Course Name: {course.name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Card.Text>Number of Students:{course.total_student}</Card.Text>
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                Course Content
                            </Button>{' '}
                        </div>
                    </Card.ImgOverlay>

                </Card>
                )
            }
        </div>
    );
};

export default Courses;