import React, { useState } from "react";
import { NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";

const FormControls = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dropdown, setDropdown] = useState("apple");
  const [dropdownError, setDropdownError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedError, setIsCheckedError] = useState("");
  const [radio, setRadio] = useState("");
  const [radioError, setRadioError] = useState("");

  const validation = () => {
    let isError = false;

    setNameError("");
    setEmailError("");
    setPassword("");

    if (!name.trim()) {
      isError = true;
      setNameError("Please enter user name");
      console.log("name");
    }

    if (!email.trim()) {
      isError = true;
      setEmailError("Please enter email address");
      console.log("Email");
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      isError = true;
      setEmailError("Invalid email address");
      console.log("Invalid email");
    }

    if (!password.trim()) {
      isError = true;
      setPasswordError("Please enter password");
      console.log("Password");
    } else if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        password
      )
    ) {
      isError = true;
      setPasswordError(
        "UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
      );
      console.log("Password Pattern");
    }

    return isError;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let err = validation();
    if (!err) {
      console.log("Working");
    }
  };

  return (
    <div className="container py-3">
      <div className="card-border-0 shadow w-75 p-3 mx-auto">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name {name}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError ? <p className="text-danger">{nameError}</p> : null}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email {email}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError ? <p className="text-danger">{emailError}</p> : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password {password}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError ? (
              <p className="text-danger">{passwordError}</p>
            ) : null}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select One {dropdown}</Form.Label>
            <Form.Control
              as="select"
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <h4>CheckBox is : {isChecked ? "True" : "False"} </h4>
            <Form.Check
              type="checkbox"
              label="Check me out"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </Form.Group>

          <h4>Rdaio button is : {radio} </h4>
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Red"
            checked={radio === "red"}
            value="red"
            onChange={(e) => setRadio(e.target.value)}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Blue"
            checked={radio === "blue"}
            value="blue"
            onChange={(e) => setRadio(e.target.value)}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Green"
            checked={radio === "green"}
            value="green"
            onChange={(e) => setRadio(e.target.value)}
          />

          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormControls;
