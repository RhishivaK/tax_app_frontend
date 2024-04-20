import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Col,
  Row,
  Form,
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  Pagination,
  InputGroup,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { authAxios } from "../../../plugins/axios";

export default function UsersTable(props) {
  const [total, setTotal] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  const TableRow = (props) => {
    const {
      index,
      first_name,
      middle_name,
      last_name,
      pan,
      email,
      phone,
      role,
      maritial_status,
      last_login,
    } = props;
    const roleVariant =
      role === "general"
        ? "success"
        : role === "officer"
        ? "warning"
        : role === "super_admin"
        ? "danger"
        : "primary";

    return (
      <tr>
        <td>{index}</td>
        <td>
          <Card.Link as={Link} to={"/"} className="fw-normal">
            {`${first_name} ${middle_name || ""} ${last_name}`}
          </Card.Link>
        </td>

        <td>
          <span className="fw-normal">{pan}</span>
        </td>
        <td>
          <span className="fw-normal">{email}</span>
        </td>
        <td>
          <span className="fw-normal">{phone}</span>
        </td>
        <td>
          <span className={`fw-normal`}>{maritial_status}</span>
        </td>
        <td>
          <span className={`fw-normal text-${roleVariant}`}>{role}</span>
        </td>
        <td>
          <span className={`fw-normal`}>
            {new Date(last_login).toLocaleString()}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item
                href={`users/update/${props.id}`}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  const getUsers = React.useCallback(async () => {
    return await authAxios
      .get("/users/list")
      .then((res) => {
        return res.data;
      })
      .catch((_) => {
        return [];
      });
  }, []);;

  const loadUsers = React.useCallback(async () => {
    const data = await getUsers();
    setUsers(data.results);
    setTotal(data.total);
  }, [getUsers, setUsers, setTotal]);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>

          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Button
              variant="primary"
              className="mb-3 w-100"
              href="users/register"
            >
              <FontAwesomeIcon icon={faPlus} /> New User
            </Button>
            {/* <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 p-0"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">
                  Show
                </Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
        </Row>
      </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">#</th>
                <th className="border-bottom">Name</th>
                <th className="border-bottom">PAN</th>
                <th className="border-bottom">Email</th>
                <th className="border-bottom">Phone</th>
                <th className="border-bottom">Status</th>
                <th className="border-bottom">Role</th>
                <th className="border-bottom">Last Login</th>
                <th className="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((t, index) => (
                <TableRow
                  key={`user-${index}`}
                  {...t}
                  index={index + 1}
                  handleActionsClick={props.handleActionsClick}
                />
              ))}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{total}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
