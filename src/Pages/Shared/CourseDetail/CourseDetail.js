import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const ref = React.createRef();

// creating course detail component

const CourseDetail = () => {
    const courseDetail = useLoaderData();
    console.log(courseDetail);
    const { title, conditions, description, img, loops, variables, detail_id } = courseDetail;
    return (
        <div className="mb-3">
            <div className="d-flex mt-3 mb-3">
                <Pdf className="w-9/12" targetRef={ref} filename="course-detail.pdf">
                    {({ toPdf }) => <Button onClick={toPdf} className="ms-3" variant="success" size="lg"> <FaDownload /> Download Course Detail</Button>}
                </Pdf>
                <h1 className='mt-3 mb-3 text-success ms-3'>Course Name: {title}</h1>
            </div>
            <Card ref={ref} className='mb-3'>
                <Card.Header className='fw-bold fs-2 text-secondary'>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>Introduction</Card.Title>
                    <Card.Text className='bg-success bg-opacity-25 text-start'>
                        {description}
                    </Card.Text>
                    <Card.Img className='mb-3' variant="top" src={img} />
                    <Card.Title>Variables</Card.Title>
                    <Card.Text className='bg-info bg-opacity-25 text-start'>
                        {variables}
                    </Card.Text>
                    <Card.Title>Loops</Card.Title>
                    <Card.Text className='bg-danger bg-opacity-25 text-start'>
                        {loops}
                    </Card.Text>
                    <Card.Title >Conditions</Card.Title>
                    <Card.Text className='bg-warning bg-opacity-25 text-start'>
                        {conditions}
                    </Card.Text>

                </Card.Body>
            </Card>
            <Button variant="secondary"><Link to={`/courses/${detail_id}/checkout/${detail_id}`} className='fs-5 text-decoration-none text-light link-warning'>Get Premium Access</Link></Button>
        </div>
    );
};

export default CourseDetail;