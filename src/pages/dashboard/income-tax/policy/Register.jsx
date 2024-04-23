import React from "react";

import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { authAxios } from "../../../../plugins/axios";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../../../../components/common/toast";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IncomeTaxPolicyRegistration() {
  const [formData, setFormData] = React.useState({
    married: {},
    unmarried: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    authAxios
      .post("/income-tax/policy/", formData)
      .then((res) => {
        toast(res?.data?.message, successToast);
      })
      .catch((err) => {
        console.log(err);
        toast("Couldn't create policy", errorToast);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Income Tax Policy Information</h5>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Fiscal Year (*)</Form.Label>
                <Form.Select onChange={handleChange} name="fiscal_year">
                  <option value="1">2079/80</option>
                  <option value="2">2080/81</option>
                  <option value="3">2081/82</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <h5>Married Policy</h5>
            <Col md={5} className="mb-3">
              <Form.Group>
                <Form.Label>Pan Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pan"
                  onChange={handleChange}
                  placeholder="3434**343"
                />
              </Form.Group>
            </Col>
            <Col md={5} className="mb-3">
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="User Password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-gray-900"
                onClick={(event) => {}}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
