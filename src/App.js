import "./App.css";
import {useState} from 'react';

function App() {

  const [formData , setFormData] = useState({
    firstName : "" , lastName : "" , email : "" , country : "India" , streetAddress : "" , city : "" , state : "" , postalCode : "" , comments : false , candidates : false , offers : false , pushNotifications : ""
  })

  function changeHandler(event) {
    const {name , value , checked , type} = event.target;
    setFormData( (prev) => ({...prev , [name] : type === "checkbox" ? checked : value}))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing the value of form data  : ");
    console.log(formData);
  }


  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name : </label>
        <br />
        <input 
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Pankaj"
        value={FormData.firstName}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="lastName">Last Name : </label>
        <br />
        <input 
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Yadav"
        value={FormData.lastName}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="email">Email Address : </label>
        <br />
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="pankajdark6@gmail.com"
        value={FormData.email}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select id="country" value={formData.country} onChange={changeHandler} className="outline" >
          <option>India</option>
          <option>United States</option>
          <option>California</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address : </label>
        <br />
        <input 
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="Hanuman Nagar"
        value={FormData.streetAddress}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="city">City : </label>
        <br />
        <input 
        type="text"
        name="city"
        id="city"
        placeholder="Mumbai"
        value={FormData.city}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="state">State : </label>
        <br />
        <input 
        type="text"
        name="state"
        id="state"
        placeholder="Maharashtra"
        value={FormData.state}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <label htmlFor="postalCode">ZIP / Postal Code : </label>
        <br />
        <input 
        type="number"
        name="postalCode"
        id="postalCode"
        placeholder="400101"
        value={FormData.postalCode}
        onChange = {changeHandler}
        className="outline"
        />

        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input 
            type="checkbox"
            name="comments"
            id="comments"
            checked={formData.comments}
            onChange={changeHandler}
            />

            <div className="px-2">
              <label htmlFor="comments">Comments</label>
              <p>Get Notified with someones posts a comments on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input 
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            />

            <div className="px-2">
              <label htmlFor="candidates">Candidates</label>
              <p>Get Notified with the candidates applies for a job</p>
            </div>
          </div>
        
          <div className="flex">
            <input 
            type="checkbox"
            name="offers"
            id="offers"
            checked={formData.offers}
            onChange={changeHandler}
            />

            <div className="px-2">
              <label htmlFor="offers">Offers</label>
              <p>Get Notified when candidates Accepts or Rejects an offers</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered vis SMS to your mobile phones.</p>

          <input 
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br />
          <input 
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as Email"
          onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>

          <br />
          <input 
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notifications"
          onChange={changeHandler}
          />

          <label htmlFor="pushNothing">No Push Notifications</label>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
