import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function AddApartmentPage(){

    const [formState, setFormState] = useState({})

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        axios
        .post(
            "https://ironbnb-m3.herokuapp.com/apartments",
            formState)
        .then(response=>{
            setFormState({})
            history.push("/")
        }
        )
        .catch(console.log)

    }

    function handleInput(e){
        setFormState({...formState, [e.target.name]: e.target.value }) // setFromState(Object.assign({}, state, {[e.name]: e.value}))
    }

    // if you like you can destructure state here
    // const {price, headline} = formState

    return(
    <div className="AddApartmentPage">
    <h3>Add New Apartment</h3>
    
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
        value={formState.title}
      />

      <label>Price per Day</label>
      <input
        type="number"
        name="pricePerDay"
        onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
        value={formState.pricePerDay}
      />
      
      <button type="submit">Create Apartment</button>
      
    </form>
  </div>
  )
}