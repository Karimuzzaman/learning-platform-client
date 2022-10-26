import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    console.log(courseDetail);
    const { title, conditions, description, img, loops, variables, detail_id } = courseDetail;
    return (
        <div>
            <h1 className='mt-3 mb-3 text-success'>Course Name: {title}</h1>
            <Card className='mb-3'>
                <Card.Header className='fw-bold fs-2 text-secondary'>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>Introduction</Card.Title>
                    <Card.Text className='bg-success bg-opacity-25'>
                        {description}
                    </Card.Text>
                    <Card.Img className='mb-3' variant="top" src={img} />
                    <Card.Title>Variables</Card.Title>
                    <Card.Text className='bg-info bg-opacity-25'>
                        {variables}
                    </Card.Text>
                    <Card.Title>Loops</Card.Title>
                    <Card.Text className='bg-danger bg-opacity-25'>
                        {loops}
                    </Card.Text>
                    <Card.Title >Conditions</Card.Title>
                    <Card.Text className='bg-warning bg-opacity-25'>
                        {conditions}
                    </Card.Text>
                    <Button variant="secondary"><Link to={`/courses/${detail_id}/checkout/${detail_id}`} className='fs-5 text-decoration-none text-light link-warning'>Get Premium Access</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetail;