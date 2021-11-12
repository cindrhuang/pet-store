import "./styles.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const PetItem = (props) => {
    const {image, age, name, breed, type, id} = props;

    return (
        <div className="pet">
            <img className="pet-photo" src={image} alt={name + breed + "photo"}/>
            
            <Link to ={`/pet/${id}`}>
                <h1 className="pet-name"> {name} </h1>
            </Link>


            <p className="pet-breed"> {breed} </p>
            <p className="pet-age"> {age} years old </p>

            <Button text="Request Pet" type="primary" isDisabled={false} action={() => alert("Requested pet")} />
        </div>
    )
}