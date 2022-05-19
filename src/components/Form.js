import React, { useState } from "react";


const Form = () =>{
    const [employeDetails, setEmployeDetails] = useState({
        username: "",
        depart: "",
        rating: "",
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setEmployeDetails({...employeDetails, [name] : value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = { ...employeDetails, id:new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setEmployeDetails({username:"", depart:"", rating:""});
    }

    return(
        <React.Fragment>
            <p className="heading">EMPLOYEE FEEDBACK FORM</p>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <lable htmlFor='username'>Name : </lable>
                    <input className="inputtype" type="text" 
                     value={employeDetails.username}
                     onChange={handleInput}
                    name="username" id="username" />
                </div>
                <br/>
                <div>
                    <lable htmlFor='depart'>Department : </lable>
                    <input className="inputtype" type="text" 
                     value={employeDetails.depart}
                     onChange={handleInput}
                    name="depart" id="depart" />
                </div>
                <br/>
                <div>
                    <lable htmlFor='rating'>Rating : </lable>
                    <input className="inputtype" type="text" 
                     value={employeDetails.rating}
                     onChange={handleInput}
                    name="rating" id="rating" />
                </div>
                <br/>
                <input className="button" type="submit" />
            </form>


            <div className="final_details">
                {
                    records.map((curElem) =>{
                        return(
                            <div className="details">
                                <span>Name : {curElem.username} |</span>
                                <span> Department : {curElem.depart} |</span>
                                <span> Rating : {curElem.rating} |</span>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Form;