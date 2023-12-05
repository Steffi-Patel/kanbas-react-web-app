import Signin from "./users/signin";
import Account from "./users/account";
import Signup from "./users/signup";
import UserTable from "./users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./nav";
function Project() {
  return (
<div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
        <Navbar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;