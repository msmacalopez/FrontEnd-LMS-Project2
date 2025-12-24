import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { COLORS } from "../../theme.js";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../features/auth/authSlice";

const LibNavBar = () => {
  //   const location = useLocation();
  //   const { user } = useSelector((state) => state.authStore);
  //   const dispatch = useDispatch();

  const handleOnLogout = () => {
    // sessionStorage.removeItem("accessJWT");
    // localStorage.removeItem("refreshJWT");
    // dispatch(setUser({})); // Clear user from Redux store
    console.log("logout");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: COLORS.dark }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span style={{ fontWeight: 700 }}>MyLibrary</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link> */}
            <Nav.Link as={Link} to="/">
              Books
            </Nav.Link>
          </Nav>

          <Nav>
            <>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleOnLogout}>
                Logout
              </Nav.Link>
            </>

            <Button
              as={Link}
              to="/login"
              style={{
                backgroundColor: COLORS.accent,
                borderColor: COLORS.accent,
              }}
            >
              Login / Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LibNavBar;
