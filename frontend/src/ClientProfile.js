import React from "react";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      firstAddress: null,
      secondAddress: null,
      city: null,
      state: null,
      zipcode: null,
      errors: {
        firstName: "",
        lastName: "",
        firstAddress: "",
        secondAddress: "",
        city: "",
        state: "",
        zipcode: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName = value.length > 50 ? "Maximum is 50 characters" : "";
        break;
      case "lastName":
        errors.lastName = value.length > 50 ? "Maximum is 50 characters" : "";
        break;
      case "firstAddress":
        errors.firstAddress =
          value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "secondAddress":
        errors.secondAddress =
          value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "city":
        errors.city = value.length > 100 ? "Maximum is 100 characters" : "";
        break;
      case "state":
        errors.state = value.length < 2 ? "Please select a state" : "";
        break;
      case "zipcode":
        if (value.length < 5) {
          errors.zipcode = "At least 5 characters required";
        } else if (value.length > 9) {
          errors.zipcode = "Maximum is 9 characters";
        }
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form - Creating Profile");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="clientProfile">
        <div className="form-wrapper">
          <h1>Client Profile Form </h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label>First Name: </label>
              <input
                type="text"
                name="fName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstName.length > 0 && (
                <span className="errMsg"> {errors.firstName} </span>
              )}
            </div>
            <div className="lastName">
              <label>Last Name: </label>
              <input
                type="text"
                name="lName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.lastName.length > 50 && (
                <span className="errMsg"> {errors.lastName} </span>
              )}
            </div>
            <div className="firstAddress">
              <label>Address 1: </label>
              <input
                type="text"
                name="address1"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstAddress.length > 100 && (
                <span className="errMsg"> {errors.firstAddress} </span>
              )}
            </div>
            <div className="secondAddress">
              <label>Address 2: </label>
              <input
                type="text"
                name="address2"
                onChange={this.handleChange}
                noValidate
              />
              {errors.secondAddress.length > 100 && (
                <span className="errMsg"> {errors.secondAddress} </span>
              )}
            </div>
            <div className="city">
              <label>City: </label>
              <input
                type="text"
                name="city"
                onChange={this.handleChange}
                noValidate
              />
              {errors.city.length > 100 && (
                <span className="errMsg"> {errors.city} </span>
              )}
            </div>
            <div className="State">
              <label>State: </label>
              <select name="state">
                <option value="Alabama"> Alabama(AL)</option>
                <option value="Alaska"> Alaska(AK) </option>
                <option value="Arizona"> Arizona(AZ)</option>
                <option value="Arkansas"> Arkansas(AR)</option>
                <option value="California"> California(CA)</option>
                <option value="Colorado"> Colorado(CO)</option>
                <option value="Connecticut"> Connecticut(CT)</option>
                <option value="Delaware"> Delaware(DE)</option>
                <option value="Florida"> Florida(FL)</option>
                <option value="Georgia"> Georgia(GA)</option>
                <option value="Hawaii"> Hawaii(HI)</option>
                <option value="Idaho"> Idaho(ID)</option>
                <option value="Illinois"> Illinois(IL)</option>
                <option value="Indiana"> Indiana(IN)</option>
                <option value="Iowa"> Iowa(IA)</option>
                <option value="Kansas"> Kansas(KS)</option>
                <option value="Kentuckey"> Kentuckey(KY)</option>
                <option value="Louisiana"> Louisiana(LA)</option>
                <option value="Maine"> Maine(ME)</option>
                <option value="Maryland"> Maryland(MD)</option>
                <option value="Massachusetts"> Massachusetts(MA)</option>
                <option value="Michigan"> Michigan(MI)</option>
                <option value="Minnesota"> Minnesota(MN)</option>
                <option value="Mississippi"> Mississippi(MS)</option>
                <option value="Missouri"> Missouri(MO)</option>
                <option value="Montana"> Montana(MT)</option>
                <option value="Nebraska"> Nebraska(NE)</option>
                <option value="Nevada"> Nevada(NV)</option>
                <option value="New Hampshire"> New Hampshire(NH)</option>
                <option value="New Jersey"> New Jersey(NJ)</option>
                <option value="New Mexico"> New Mexico(NM)</option>
                <option value="New York"> New York(NY)</option>
                <option value="North Carolina"> North Carolina(NC)</option>
                <option value="North Dakota"> North Dakota(ND)</option>
                <option value="Ohio"> Ohio(OH)</option>
                <option value="Oklahoma"> Oklahoma(OK)</option>
                <option value="Oregon"> Oregon(OR)</option>
                <option value="Pennsylvania"> Pennsylvania(PA)</option>
                <option value="Rhode Island"> Rhode Island(RI)</option>
                <option value="South Carolina"> South Carolina(SC)</option>
                <option value="South Dakota"> South Dakota(SD)</option>
                <option value="Tennessee"> Tennessee(TN)</option>
                <option value="Texas"> Texas(TX)</option>
                <option value="Utah"> Utah(UT)</option>
                <option value="Vermont"> Vermont(VT)</option>
                <option value="Virginia"> Virginia(VA)</option>
                <option value="Washington"> Washington(WA)</option>
                <option value="West Virginia"> West Virginia(WV)</option>
                <option value="Wisconsin"> Wisconsin(WI)</option>
                <option value="Wyoming"> Wyoming(WY)</option>
              </select>
              {errors.state.length > 0 && (
                <span className="errMsg"> {errors.state} </span>
              )}
            </div>
            <div className="zipcode">
              <label>Zipcode: </label>
              <input
                type="text"
                name="zipcode"
                onChange={this.handleChange}
                noValidate
              />
              {errors.zipcode.length > 5 && (
                <span className="errMsg"> {errors.zipcode} </span>
              )}
            </div>
            <div className="savebtn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
