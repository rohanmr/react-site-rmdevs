import React from "react";
import "../assets/css/FormStyle.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <label className="text">Name :</label>
        <input type="text"></input>
        <br />
        <label className="text"> Email :</label>
        <input type="email"></input>
        <br />
        <label className="text">Phone :</label>
        <input type="text"></input>
        <br />
        <label className="text">Message :</label>
        <br />
        <textarea rows={6} placeholder="Type your Message Here"></textarea>
        <br />
        <button className="btn ">Submit</button>
      </form>
    </div>
  );
};

export default Form;
