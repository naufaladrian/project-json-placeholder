import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Comment from "./pages/Comment";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Posts</Nav.Link>
            <Nav.Link href="/comment">Comment</Nav.Link>
            <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
            <Nav.Link href="/todos">Todos</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* body pages */}
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
