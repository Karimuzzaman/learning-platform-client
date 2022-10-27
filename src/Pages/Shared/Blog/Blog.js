import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

// This is blog page.

const Blog = () => {
    return (
        <Accordion className='mt-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is 'cors'?</Accordion.Header>
                <Accordion.Body>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br /> <br />
                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br /> <br />
                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using 'firebase'? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    <h2>Cause of using 'firebase: '</h2> <br />
                    Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. <br /> <br />
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br /> <br />
                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. <br /> <br />

                    <h2> Alternatives of firebase authentication: </h2>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Okta</li>
                    <li>JSON Web Token</li>
                    <li>Keycloak</li>
                    <li>Amazon Cognito</li>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in the route. Otherwise, redirect the user to sign-in page. <br /> <br />
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br /> <br />

                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is Node? How does Node Work?</Accordion.Header>
                <Accordion.Body>
                    <h2>Node: </h2> <br />
                    Node.js is an open source server environment.Node.js is free.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js uses JavaScript on the server. <br />
                    Here is how Node.js handles a file request: <br />

                    <li>Sends the task to the computer's file system.</li>
                    <li>Ready to handle the next request.</li>
                    <li>When the file system has opened and read the file, the server returns the content to the client.</li>
                    <li>Node.js can generate dynamic page content.
                        Node.js can create, open, read, write, delete, and </li>
                    <li>close files on the server.
                        Node.js can collect form data.
                    </li>
                    <li> Node.js can add, delete, modify data in your database.</li> <br /> <br />

                    <h2> Working of node: </h2> <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />

                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br /> <br />

                    Node.js basically works on two concept <br />

                    <li>Asynchronous</li>
                    <li>Non-blocking I/O</li> <br /> <br />
                    Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works. <br /> <br />

                    Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request. <br /> <br />

                    To implement the concept of the system to handle the request  node.js uses the concept of Libuv. <br /> <br />

                    Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;