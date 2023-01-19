import React, {useState} from 'react'
import MainNav from '../Nav Bar/MainNav'
import "./NewOutfit.css"




import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../util/validators';
import { useForm } from '../../hooks/form-hook';

// export default function NewOutfit(){
    /* return(
        <React.Fragment>
            <MainNav></MainNav>

            <div class = "container">
            <h1>This is the new outfit page.</h1>

            </div>
    
            <form>
            <label className = "label">
                Upload a cool outfit!
                <input type="file" />
            </label>
            <button type='submit'>Submit</button>
            </form>
            
        </React.Fragment>
    );*/
// }



    const NewOutfit = () => {
      const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}  
        const [formState, inputHandler] = useForm(
          {
            title: {
              value: '',
              isValid: false
            },
            description: {
              value: '',
              isValid: false
            },
          
          },
          false
        );
      
        const placeSubmitHandler = event => {
          event.preventDefault();
          console.log(formState.inputs); // send this to the backend!
        };
      
        return (
            <React.Fragment>
                <MainNav></MainNav>
          <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
            />
            <Input
              id="description"
              element="textarea"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid description (at least 5 characters)."
              onInput={inputHandler}
            />
           
            <label>
                Upload a cool outfit!
                <input type="file" onChange={onImageChange} />
            </label>
            <img src={image} alt="preview image" />
            <button type="submit" >{/*disabled={!formState.isValid}>*/}
              UPLOAD
            </button>
          </form>
          
          </React.Fragment>
        );
      };
      export default NewOutfit;
