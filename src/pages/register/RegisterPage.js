import React from 'react';
import usePassword from '../../shared/hooks/usePassword';
import Logo from '../../assets/img/sample-logo.png';
import './RegisterPage.css';

export default function RegisterPage() {
  const { password, setPassword, passwordErrors } = usePassword();

  function login() {
    window.alert('Logando..');
  }

  return (
    <div className="LoginPage">
      <div className="OuterContainer">
        <div className="InnerContainer">
          <div className="FormContainer">
            <img src={Logo} alt="Your logo goes here" />

            <form autoComplete="new-password">
              <div className="FormGroup">
                <label className="Label" htmlFor="login">
                  Login
                </label>

                <div className="InputContainer">
                  <input 
                    type="text" 
                    id="login"
                    placeholder="type your login"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="FormGroup">
                <label className="Label" htmlFor="password">
                  Password
                </label>

                <div className="InputContainer">
                  <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    id="login"
                    placeholder="type your password"
                    autoComplete="off"
                  />
                </div>

                {passwordErrors.map((passwordError, index) => (
                  <p className="ErrorMessage" key={index}>
                    {passwordError}
                  </p>
                ))}
              </div>

            </form>

            <div className="ButtonContainer">
              <button onClick={login} disabled={passwordErrors.length > 0}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
