import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./dashboard";
import BusinessPage from "../components/BusinessPage";
import Transactions from "./Transactions";
import Settings from "./Settings";
import UserRoutes from "./dashboard/users/routes";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import IncomeTaxRoutes from "./dashboard/income-tax/routes";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Preloader show={false} />
            <Sidebar />
            <main className="content">
              <Navbar />
              <Outlet />
              <Footer toggleSettings={true} showSettings={true} />
            </main>
          </>
        }
      >
        <Route exact path={"/"} element={<Dashboard />} />
        <Route exact path={"/transactions"} element={<Transactions />} />
        <Route path={"/users/*"} element={<UserRoutes />} />
        <Route path={"/income-tax/*"} element={<IncomeTaxRoutes />} />
        <Route path={"/corporate-tax/*"} element={<IncomeTaxRoutes />} />
        <Route exact path={"/settings"} element={<Settings />} />
      </Route>
    </Routes>
  );
}
