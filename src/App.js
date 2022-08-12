import React from 'react'
import { Formik } from "formik";
import *as Yup from "yup";
import "./App.css";

const App = () => {
  return (
    <div className='container'>
      <div className='brand-box'>
        <h1>Magic Form</h1>
        <p>Build forms in react without in teasers.</p>

      </div>
      <div className='magic-form'>
        <Formik initialvalues={{
          name: "",
          email: "",
          agree: false,
          favoriteColor: ""
        }}
          validationschema={
            Yup.object({
              name: Yup.string().required("İsim Boş Bırakılamaz"),
              email: Yup.string().email("Doğru email adresi değil.").required("Email boş bırakılamaz"),
              agree: Yup.boolean().required("Koşulları kabul et"),
              favoriteColor: Yup.string().required("Renk seç")
                .oneOf(["red", "blue", "green"])
            })
          }
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 20000);
          }
          }
          

          
       >
          {({
            values, errors, handleChange, handleSubmit, handleReset, dirty, touched, isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                type="text"
                placeholder="Buse"
                className='input'
                value={values?.name}
                onChange={handleChange}
              

              />
              {
                errors?.name && touched?.name && (
                  <div className='input-feedback'>
                    {errors?.name}
                  </div>
                )
              }

              <label htmlFor="email" className='topMargin'>Email</label>
              <input
                id="email"
                type="email"
                placeholder="buse.kotan.025@gmail.com"
                className='input'
                value={values?.email}
                onChange={handleChange}
              />
              
              {
                errors.email && touched.email && (
                  <div className='input-feedback'>
                    {errors?.email}
                  </div>
                )
              }
              <label htmlFor="favoriteColor" className='topMargin'>Favori Renk</label>
              <select
                id="favoriteColor"
                value={values?.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Renk Seç" />
                <option value="red" label="Kırmızı" />
                <option value="blue" label="Mavi" />
                <option value="green" label="Yeşil" />


              </select>
              {
                errors?.favoriteColor && touched?.favoriteColor && (
                  <div className='input-feedback'>
                    {errors?.favoriteColor}
                  </div>
                )
              }
              <div className='checkbox topMargin'>

                <input
                  id="agree"
                  type="checkbox"
                  value={values?.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className='checkbox-label'>Sözleşmeyi okudum, Kabul ediyorum</label>

              </div>
              {errors?.agree && (
                <div className="input-feedback">{errors?.agree}</div>
              )}
              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
              
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App
/*import React from 'react'

import *as Yup from "yup";
import "./App.css";
import { useFormik } from 'formik';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
*/