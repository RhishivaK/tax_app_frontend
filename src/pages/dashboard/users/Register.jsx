import React from "react";

import {
  Col,
  Row,
  Card,
  Form,
  Button,
} from "@themesberg/react-bootstrap";
import { authAxios } from "../../../plugins/axios";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../../../components/common/toast";
import { useNavigate } from "react-router";

export default function UserRegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    pan: "",
    maritial_status: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    authAxios
      .post("/users/", formData)
      .then((res) => {
        toast(res?.data?.message, successToast);
        navigate('/dashboard/users');
      })
      .catch((err) => {
        console.log(err);
        toast("Couldn't create user", errorToast);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">User Information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>First Name (*)</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  name="first_name"
                  type="text"
                  placeholder="Enter first name"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="middle_name"
                  type="text"
                  placeholder="Middle Name (If any)"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Last Name (*)</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter last name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
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
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0" disabled>Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  placeholder="9800000000"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
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
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Reset Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="reset-password"
                  onChange={handleChange}
                  placeholder="User Password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Maritial Status</Form.Label>
                <Form.Select onChange={handleChange} name="maritial_status">
                  <option value="unmarried">Unmarried</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="general">General User</option>
                  <option value="officer">Officer</option>
                  <option value="super_admin">Super Admin</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={12} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your home address"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col sm={6} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select Provinces</Form.Label>
                <Form.Select name="province" defaultValue="bagmati">
                  <option value="koshi">Koshi</option>
                  <option value="madesh">Madhesh</option>
                  <option value="bagmati">Bagmati</option>
                  <option value="gandaki">Gandaki</option>
                  <option value="lumbini">Lumbini</option>
                  <option value="karnali">Karnali</option>
                  <option value="sudurpashchim">Sudurpashchim</option>
                </Form.Select>
              </Form.Group>
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
