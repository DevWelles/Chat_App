import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login";
import Chat from "./containers/Chat";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

function App({ member }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            member.username ? <Chat /> : <Navigate to="/" replace={true} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    member: state.member,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
