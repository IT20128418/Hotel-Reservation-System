import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";



const UpdateProfile = ({
    show, 
    onHide
}) => {

    return (
      <div>
      <Modal  show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{background: "#272E48"}}>
        <Modal.Header closeButton> 
          
        </Modal.Header>
        <Modal.Body >
                <p>Hello</p>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateProfile;