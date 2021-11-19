import { useFormik } from "formik"
import * as Yup from 'yup'
import { UserContext } from "../context/User"
import { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"


 
const Login = () => {

    //  on recup la valeur de islogged et le setState pour modifier le state 
    const {setIsLogged , isLogged} = useContext(UserContext)
    console.log(isLogged);
    console.log(Link);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit: values => {
          handleButtonClick()
          // setIsLogged(true)
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

      const handleButtonClick = (event) => {
        if (isLogged === false) {
          setIsLogged(true)
          navigate("/")
        } else {
          setIsLogged(false)
        }
      }

      const clickFalse = () => {
        setIsLogged(false)
        
      }
    //   console.log(formik.initialValues);

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
        {isLogged === false &&  <button type="submit" >Submit</button>}
        {isLogged && 
            <div>
                <button className="btn btn-secondary" type="button" onClick={clickFalse}>Logout</button>
                <p> <span> utilisateur : </span> {formik.values.username} connecter bravo !!!! </p>
            </div>
        }
    </form>
    );
  }
  
  export default Login