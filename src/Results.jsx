import Pet from "./Pet";

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map(pet => (
                    <Pet 
                        id={pet.id}
                        nome={pet.name} 
                        animal={pet.animal} 
                        raca={pet.breed} 
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                    />
                ))
            )}
        </div>
    );
};

export default Results;
