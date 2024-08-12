import React, { useEffect, useState } from "react";

function FormComponent() {

    // let [name,setName]=useState("");

    // const handleChange=(e)=>{
    //     setName(e.target.value)
    // }

    // let userobj={
    //     name:"sgihu",
    //     email:"jgjsgdjgf@gmai.com",
    //     password:"1234";
    // }

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [submittedData, setSubmittedData] = useState(false)

    // useEffect(()=>{
    //     console.log("Form Data",FormData);
    //     setFormData(FormData)
    // },[FormData]);

    const handleChange = (e) => {

        setFormData({
            ...FormData,
            name: e.target.value,
        })
    };

    const handleEmailChange = (e) => {
        setFormData({
            ...FormData,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setFormData({
            ...FormData,
            password: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data", FormData)

        setSubmittedData(true);

    }


    return (
        <div>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <h1>This is a form</h1>
                <label htmlFor="name">
                    Enter the username &nbsp;
                    <input type="text"
                        onChange={(e) => handleChange(e)} />
                </label>
                <br />


                <label htmlFor="name">
                    Enter the user email &nbsp;
                    <input type="text"
                        onChange={(e) => handleEmailChange(e)} />
                </label>


                <br />
                <label htmlFor="name">
                    Enter the password &nbsp;
                    <input type="password"
                        onChange={(e) => handlePasswordChange(e)} />
                </label>
                <button type="submit">Submit</button>
                <h1></h1>


            </form>


            {
                submittedData ? <h1>{FormData.name}</h1> : null
            }


        </div>
    );
}
export default FormComponent;