import { Link } from "react-router-dom";

const Pet = ({nome, animal, raca, images, location, id}) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={nome} />
            </div>
            <div className="info">
                <h1>{nome}</h1>
                <h2>{animal} - {raca} - {location}</h2>
            </div>
        </Link>
    );
};

export default Pet;
