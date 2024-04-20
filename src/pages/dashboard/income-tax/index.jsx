import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import {  Button, ButtonGroup, Breadcrumb} from '@themesberg/react-bootstrap';

import UsersTable from "./IncomeTaxRecord";

export default function Users() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Income Tax</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Income Tax</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>
      <IncomeTax  />
    </>
  );
};
