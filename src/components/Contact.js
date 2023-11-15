import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const newErrors = {
      name: "",
      phoneNumber: "",
      email: "",
      text: "",
    };

    if (data.name.trim() === "") {
      valid = false;
      newErrors.name = "Name is required";
    }

    if (data.phoneNumber.trim() === "") {
      valid = false;
      newErrors.phoneNumber = "Phone number is required";
    }

    if (data.email.trim() === "") {
      valid = false;
      newErrors.email = "Email is required";
    }

    if (data.text.trim() === "") {
      valid = false;
      newErrors.text = "Message is required";
    }

    if (valid) {
      alert(
        `My name is ${data.name}. My mobile number is ${data.phoneNumber} and email is ${data.email}, Here is what i want to say ${data.text}`
      );

      setData({
        name: "",
        phoneNumber: "",
        email: "",
        text: ""
      });

      // Clear the errors
      setErrors({
        name: "",
        phoneNumber: "",
        email: "",
        text: ""
      });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
    
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bolder"
                >
                  FullName
                </label>
                <div className="text-danger error">
                  {errors ? errors.name : null}
                </div>
                <input
                  style={{ borderColor: errors.name ? "red" : "" }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  placeholder="enter your name here..."
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bolder"
                >
                  Phone
                </label>
                <div className="text-danger error">
                  {errors ? errors.phoneNumber : null}
                </div>
                <input
                  style={{ borderColor: errors.name ? "red" : "" }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bolder"
                >
                  Email address
                </label>
                <div className="text-danger error">
                  {errors ? errors.email : null}
                </div>
                <input
                  style={{ borderColor: errors.name ? "red" : "" }}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-bolder"
                >
                  Message
                </label>
                <div className="text-danger error">
                  {errors ? errors.text : null}
                </div>
                <textarea
                  style={{ borderColor: errors.name ? "red" : "" }}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  name="text"
                  onChange={handleChange}
                  value={data.text}
                  placeholder="write your message here..."
                ></textarea>
              </div>
              <div className="col-10">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
