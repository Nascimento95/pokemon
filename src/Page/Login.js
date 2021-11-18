import { useFormik } from "formik"
import * as Yup from 'yup'


 
const Login = () => {
    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit: values => {
          console.log("valeur apres le submit",values)
        },
        // utilisation de yup pour mettre des condition a nos formulaire 
        validationSchema: Yup.object().shape({
          username: Yup.string()
            .max(15, "Username est trop long")
            .required("Username est requis"),
          password: Yup.string()
            .min(6, "password trop court")
            .required("password trop long")
        }),
        validateOnChange: false
      })

      console.log(formik.initialValues);

    return (
        <form  onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="enter username"
                value={formik.values.username}
                // function de fornik qui permet de changer les valeur de mon state 
                onChange={formik.handleChange}
      />
                {formik.errors.username && <p>{formik.errors.username}</p>}
        <br />
        
        <input
            type="password"
            name="password"
            placeholder="enter password"
            value={formik.values.password}
            // function de fornik qui permet de changer les valeur de mon state 
            onChange={formik.handleChange}
      />
            {formik.errors.password && <p>{formik.errors.password}</p>}
        <br />
        <button type="submit">Submit</button>
    </form>
    );
  }
  
  export default Login