import React from 'react';
import {Button,Modal,Container,Row,Col,Navbar} from  'react-bootstrap';
import {useState} from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

 
function Add(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movies, setMovies] = useState({
    id:"",
    title:"",
    description:"",
    postUrl:"",
    rate:""
  
});

    const handleChange=(e)=>{
        setMovies({...movies,[e.target.name]:e.target.value});
    
    }
    const handleSubmit = (e) => {
      props.handleAdd(movies);
      setMovies({  
      id:uuidv4(),
      title:"",
      description:"",
      postUrl:"",
      rate:""})
   handleClose()
       // handleOk();
      };
    //const [value, setValue] = useState();
  return (
    <>
      <Button  style={{    marginTop: '10px',
                           marginLeft: '1280px',
                           marginBottom: '-146px'}}
      variant="primary" onClick={handleShow}>
      Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{textShadow: '2px 2px green'}}>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: '900'}}>Title</Form.Label>
                    <Form.Control  name="title" type="text" placeholder="Title" onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ fontWeight: '900'}}>Description</Form.Label>
                    <Form.Control name="description"  type="text" placeholder="Description" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ fontWeight: '900'}}>PostUrl</Form.Label>
                    <Form.Control  name="postUrl" type="text" placeholder="PostUrl" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ fontWeight: '900'}}>Rate</Form.Label>
                    <Form.Control  name="rate"   type="text" placeholder="Rate" onChange={handleChange} />
                  </Form.Group>

                  <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
</Form>
          
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Add
