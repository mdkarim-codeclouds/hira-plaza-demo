import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  FormFeedback,
} from "reactstrap";

const ContactComponent = () => {
  const [formValid, setFormValid] = useState({
    nameError: '',
    emailError: '',
    phoneError: '',
    messageError: '',
  });
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let form_valid = formValid;
    let submit_ok = true;

    const data = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      phone: event.target.phone.value.trim(),
      message: event.target.message.value.trim(),
    };
    if (data.name == ''){
      form_valid.nameError = 'Please Enter Your Name.';
      submit_ok = false;
    } else {
      form_valid.nameError = '';
    }
    if (!validateEmail(data.email)) {
      form_valid.emailError = 'Please Enter Your Valid Email.';
      submit_ok = false;
    } else {
      form_valid.emailError = '';
    }
    if (data.phone == '' || data.phone.length < 10) {
      form_valid.phoneError = 'Please Enter Your Valid Phone No.';
      submit_ok = false;
    } else {
      form_valid.phoneError = '';
    }
    if (data.message == '') {
      form_valid.messageError = 'Please Enter Your Query.';
      submit_ok = false;
    } else {
      form_valid.messageError = '';
    }
    setFormValid({...form_valid});
    if (submit_ok) {
      const response = await fetch('/api/customerquery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    }

  }
  return (
    <div>
      <div className="contact1" id="contact-us">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="12">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Inquiry Now</h4>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="text" name="name" id="name" placeholder="Name" invalid={formValid.nameError != ''} />
                            {
                              formValid.nameError != '' ? <FormFeedback>{formValid.nameError}</FormFeedback> : ''
                            }
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="email" name="email" id="email" placeholder="Email" invalid={formValid.emailError != ''} />
                            {
                              formValid.emailError != '' ? <FormFeedback>{formValid.emailError}</FormFeedback> : ''
                            }
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup className="m-t-15">
                            <Input type="text" name="phone" id="phone" placeholder="Phone" invalid={formValid.phoneError != ''} />
                            {
                              formValid.phoneError != '' ? <FormFeedback>{formValid.phoneError}</FormFeedback> : ''
                            }
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="message"
                              id="message"
                              placeholder="Type your query"
                              height={100} 
                              invalid={formValid.messageError != ''} 
                            />
                            {
                              formValid.messageError != '' ? <FormFeedback>{formValid.messageError}</FormFeedback> : ''
                            }
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Submit <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
