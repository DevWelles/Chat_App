import React from "react";
import { connect } from "react-redux";
import { updateUsername, login } from "../redux/actions";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  return (
    <Row className="vh-100 justify-content-center">
      <Col md={6} className="align-self-center">
        <Card className="px-5 py-5">
          <form className="row justify-content-center" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Unter your User Name</h2>

            <div className="row mb-4 text-center">
              <input
                type="text"
                className="form-control text-center"
                placeholder="User name"
                value={props.inputLoginValue}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>
          </form>
        </Card>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    inputLoginValue: state.inputLoginValue,
  };
}

const mapDispatchToProps = {
  updateUsername,
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
