import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [showError,setError] = useState(false);

  const handlePassword = (e) => {
    setPassword({value:e.target.value, isTouched: true});
    if (e.target.value.length < 8) {
      setError(true);
      return true;
    }
    return false;

  }

  const getIsFormValid = () => {
    // Implement this function
    if (firstName !== "" && email !== "" && validateEmail(email) && password.isTouched && password.value.length >= 8  && (role === "individual" || role === "business" )) { 
    return true;
    }

    return false;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({value: "", isTouched: false});
    setRole("role");
    setError(false);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input id="password" type="text" value={password.value} onChange={e => handlePassword(e)} placeholder="Password" />
            <div> {showError &&
              PasswordErrorMessage()}
            </div>
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select name="role" id="role" onChange={ e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
