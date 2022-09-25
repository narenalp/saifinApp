import React, { Component } from "react";
import axios from 'axios';
//import { useState } from "react";
//import { useHistory } from "react-router-dom";


export default class Customer extends Component {
  state = {
    email: "",
    cellno: "",
    name: "",
    nameg: "Mr",
    birthdate: "",
    father_fname: "",
    father_lname: "",
    mother_fname: "",
    mother_lname: "",
    citizen: "",
    resident: "",
    pancard: "",
    ckyc: "",
    profession: "",
    company: "",
    designation: "",
    gross: "",
    coemail: "",
    house: "",
    street: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    marital_status: this.props.marital_status,
    img: "null",
  };
  //Methods
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeCellno = (e) => {
    this.setState({ cellno: e.target.value });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangeNameg = (e) => {
    this.setState({ nameg: e.target.value });
  };
  onChangeBirthDate = (e) => {
    this.setState({ birthdate: e.target.value });
  };
  onChangeFatherfName = (e) => {
    this.setState({ father_fname: e.target.value });
  };
  onChangeFatherlName = (e) => {
    this.setState({ father_lname: e.target.value });
  };
  onChangeMotherfName = (e) => {
    this.setState({ mother_fname: e.target.value });
  };
  onChangeMotherlName = (e) => {
    this.setState({ mother_lname: e.target.value });
  };
  setCitizen = (e) => {
    this.setState({ citizen: e.target.value });
  };
  setResident = (e) => {
    this.setState({ resident: e.target.value });
  };
  onChangePancard = (e) => {
    this.setState({ pancard: e.target.value });
  };
  onChangeCkyc = (e) => {
    this.setState({ ckyc: e.target.value });
  };
  onChangeProfession = (e) => {
    this.setState({ profession: e.target.value });
  };
  onChangeCompany = (e) => {
    this.setState({ company: e.target.value });
  };
  onChangeDesignation = (e) => {
    this.setState({ designation: e.target.value });
  };
  onChangeGross = (e) => {
    this.setState({ gross: e.target.value });
  };
  onChangeCoEmail = (e) => {
    this.setState({ coemail: e.target.value });
  };
  onChangeHouse = (e) => {
    this.setState({ house: e.target.value });
  };
  onChangeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  onChangeArea = (e) => {
    this.setState({ area: e.target.value });
  };
  onChangeLandmark = (e) => {
    this.setState({ landmark: e.target.value });
  };

  onChangeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  onChangePincode = (e) => {
    this.setState({ pincode: e.target.value });
  }

  setMaritalStatus = (e) => {
    this.setState({marital_status: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();

    const customer = {
      email: this.state.email,
      cellno: this.state.number,
      name: this.state.name,
      nameg: this.state.nameg,
      birthdate: this.state.birthdate,
      father_fname: this.state.father_fname,
      father_lname: this.state.father_lname,
      mother_fname: this.state.mother_fname,
      mother_lname: this.state.mother_lname,
      marital_status: this.state.marital_status,
      citizen: this.state.citizen,
      resident: this.state.resident,
      pancard: this.state.pancard,
      ckyc: this.state.ckyc,
      profession: this.state.profession,
      company: this.state.company,
      designation: this.designation,
      gross: this.state.gross,
      coemail: this.state.coemail,
      house: this.state.house,
      street: this.state.street,
      area: this.state.area,
      landmark: this.state.landmark,
      pincode: this.state.pincode,
      city: this.state.city,
      image: this.state.image
    }
   axios.post('http://localhost:3306/customers', customer)
              .then(res => console.log(res.data));
            
    window.location = '/';
}
  render() {
    const { marital_status } = this.state;
    const { citizen } = this.state;
    const { resident } = this.state;
    return (
      <div className="container">
        <section className="user-form">
          <form onSubmit={this.onSubmit}>
            <div className="form-container">
              <h3>Contact Details</h3>
              <div className="form-group">
                <div>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email ID*"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="Mobile No.*"
                    value={this.state.cellno}
                    onChange={this.onChangeCellno}
                  />
                </div>
                <div className="nameformet">
                  <select
                    name="firstNameSalutation"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.onChangeNameg}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                  </select>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control c_name"
                    placeholder="Full Name as per PAN card*"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
            </div>
            <div className="form-container">
              <h3>Personal Data</h3>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Father's First Name*"
                    value={this.state.father_fname}
                    onChange={this.onChangeFatherfName}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Father's Last Name*"
                    value={this.state.father_lname}
                    onChange={this.onChangeFatherlName}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    required
                    className="form-control"
                    value={this.state.birthdate}
                    onChange={this.onChangeBirthDate}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Mother's First Name*"
                    value={this.state.mother_fname}
                    onChange={this.onChangeMotherfName}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Mother's Last Name*"
                    value={this.state.mother_lname}
                    onChange={this.onChangeMotherlName}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <div className="radio-container-wrapper">
                    <p>Marital Status*</p>
                    <div className="radio-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="marital"
                          value="Married"
                          checked={marital_status === "Married"}
                          onClick={this.setMaritalStatus}
                        />
                        <label for="marital">Married</label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="marital"
                          checked={marital_status === "Unmarried"}
                          onClick={this.setMaritalStatus}
                          value="Unmarried"
                        />
                        <label for="marital">Unmarried</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="radio-container-wrapper">
                    <p>Citizenship*</p>
                    <div className="radio-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="citizen"
                          value="Indian"
                          checked={citizen === "Indian"}
                          onClick={this.setCitizen}
                        />
                        <label for="citizen">Indian</label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="citizen"
                          value="Other"
                          checked={citizen === "other"}
                          onClick={this.setCitizen}
                        />
                        <label for="citizen">Other</label>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <div className="radio-container-wrapper">
                    <p>Residential Status*</p>
                    <div className="radio-container">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="resident"
                          value="Resident Individual"
                          checked={resident === "Resident Individual"}
                          onClick={this.setResident}
                        />
                        <label for="resident">Resident Individual</label>
                      </div>
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="resident"
                          value="Non Resident Indian"
                          checked={resident === "Non Resident Individual"}
                          onClick={this.setResident}
                        />
                        <label for="resident">Non Resident Indian</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Pan Card*"
                    value={this.state.pancard}
                    onChange={this.onChangePancard}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="CKYC / KIN (IF AVAILABLE)*"
                    value={this.state.ckyc}
                    onChange={this.onChangeCkyc}
                  />
                </div>
              </div>
            </div>
            <div className="form-container">
              <h3>Professional Details</h3>
              <div className="form-group">
                <div>
                  <select
                    name="profession"
                    className="form-control"
                    value={this.state.profession}
                    onChange={this.onChangeProfession}
                  >
                    <option value>Profession</option>
                    <option value="Salaried">Salaried</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Company Name*"
                    value={this.state.company}
                    onChange={this.onChangeCompany}
                  />
                </div>
                <div>
                  <select
                    name="Designation"
                    className="form-control"
                    value={this.state.designation}
                    onChange={this.onChangeDesignation}
                  >
                    <option value="" disabled="">
                      Designation*
                    </option>
                    <option value="Accountant">Accountant</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Executive/ Officer">
                      Executive/ Officer
                    </option>
                    <option value="Assistant Manager/ Manager">
                      Assistant Manager/ Manager
                    </option>
                    <option value="AVP/ AGM">AVP/ AGM</option>
                    <option value="VP/ GM">VP/ GM</option>
                    <option value="Contract employee">Contract employee</option>
                    <option value="Director/ CXO">Director/ CXO</option>
                    <option value="Teacher/ Professor">
                      Teacher/ Professor
                    </option>
                    <option value="Doctor">Doctor</option>
                    <option value="CA/ CS">CA/ CS</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Architect">Architect</option>
                    <option value="Real Estate Broker">
                      Real Estate Broker
                    </option>
                    <option value="Wellness Expert">Wellness Expert</option>
                    <option value="Artist/ Designer">Artist/ Designer</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Gross Annual Income*"
                    value={this.state.gross}
                    onChange={this.onChangeGross}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Coporate Email ID*"
                    value={this.state.coemail}
                    onChange={this.onChangeCoEmail}
                  />
                </div>
              </div>
            </div>
            <div className="form-container">
              <h3>Address</h3>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Flat/ House no*"
                    value={this.state.house}
                    onChange={this.onChangeHouse}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Street and road*"
                    value={this.state.street}
                    onChange={this.onChangeStreet}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Area / Locality*"
                    value={this.state.area}
                    onChange={this.onChangeArea}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Landmark (if any)"
                    value={this.state.landmark}
                    onChange={this.onChangeLandmark}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Pincode*"
                    value={this.state.pincode}
                    onChange={this.onChangePincode}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="City*"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                  />
                </div>
              </div>
            </div>
            <div>
              <img height={100} width={100} src={this.state.image} alt=" " />
              <h1>Select Image</h1>
              <input type="file" name="myImage" onChange={this.onImageChange} />
            </div>
            <div className="form-submit">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </section>
      </div>
    );
  }


}