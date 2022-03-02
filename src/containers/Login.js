import React from "react";
import { connect } from "react-redux";
import { updateUsername, login, setAvatar } from "../redux/actions";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Avatars from "../components/Avatars";

const Login = (props) => {
  let navigate = useNavigate();
  const handleChange = (event) => {
    const userName = event.target.value;
    props.updateUsername(userName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login();
    navigate("/chat", { replace: true });
  };

  //za avatere:
  const selectAvatar = (event) => {
    //akcijska funkcija za setat avatar
    props.setAvatar(event.target.value);
    //ovo isto napravi po svome neke nove avatar da ne budu ovi iz primjera
    // Array.from(event.target.closest("ul").children).forEach(function (element) {
    //   element.className = "reg-form__avatar";
    // });
    // event.target.closest("li").className =
    //   "reg-form__avatar reg-form__avatar--clicked";
  };

  return (
    <Container fluid className="background-login">
      <Row className="vh-100 justify-content-center">
        <Col md={6} className="align-self-center ">
          <Card className="px-5 py-5 bg-transparent ">
            <form
              className="row justify-content-center"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-4 text-center">Enter your user name</h2>

              <div className="row mb-4 text-center">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="User name"
                  value={props.inputLoginValue}
                  onChange={handleChange}
                />
              </div>
              <span>Choose avatar (optional) :</span>
              {<Avatars selectAvatar={selectAvatar} />}
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Login
              </button>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    inputLoginValue: state.inputLoginValue,
    member: state.member,
  };
}

const mapDispatchToProps = {
  updateUsername,
  login,
  setAvatar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
