import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
    email: '',
    password: ''
    },
    onSubmit: values =>{
      alert( "Login Successful" )
      console.log('form: ', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = "Field required";
      if(!values.password) errors.password = "Field required";
      if(!values.email.includes('@')) errors.email = "Username should be an email";
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name='email' id='emailField' type='text' onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.email ? <div id='emailError' style={{color: 'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input name='password' id='pswField' type='text' onChange={formik.handleChange} value={formik.values.password}></input>
        {formik.errors.password ? <div id='pswField' style={{color: 'red'}}>{formik.errors.password}</div> : null}
        <button id='submitBtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
