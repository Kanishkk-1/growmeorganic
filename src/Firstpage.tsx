import React, { useRef, useState ,useEffect} from "react";
import { useHistory} from "react-router-use-history";
import { Link } from "react-router-dom";


const Firstpage: React.FC = () => {
  const history = useHistory();

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleClick = () => {
    if (nameRef.current && phoneNumberRef.current && emailRef.current) {
      console.log(nameRef.current.value, phoneNumberRef.current.value, emailRef.current.value);
      localStorage.setItem("inputValue", nameRef.current.value);
    }
  };


       useEffect(() => {
         // Check if user details are present in localStorage
         const inputValue = localStorage.getItem("inputValue");

         if (!inputValue) {
           // If user details are not present, redirect to the first page with a message
           alert("Please enter your details before accessing the second page.");
           history.push("/");
         }
       }, [history]);

      // if (name && phoneNumber && email) {    
      //   // Save data to localStorage
      //   localStorage.setItem(
      //     "userData",
      //     JSON.stringify({ name, phoneNumber, email })
      //   );

      //   // Redirect to the second page
      //   history.push("/second-page");
      // } else {


        // setErrorMessage("Please enter all details before proceeding.");
      
    
  return (
    <div>
      <form action="">
        <label>Name:</label>
        <input ref={nameRef} type="text" id="name" name="name" required />

        <br />

        <label>Phone Number:</label>
        <input
          ref={phoneNumberRef}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />

        <br />

        <label>Email:</label>
        <input ref={emailRef} type="email" id="email" name="email" required />

        <br />
        <Link to="/second-page">
          <button onClick={handleClick} type="button">
            Submit
          </button>
        </Link>
      </form>

      {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
    </div>
  );
};

export default Firstpage;
