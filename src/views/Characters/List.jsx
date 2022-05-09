import { useState, useEffect } from 'react';


export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
          const res = await fetch('https://rickandmortyapi.com/api/character');
          const { results } = await res.json();
          setCharacters(results);
          setLoading(false);
        };
        fetchCharacters();
    }, []);

    return (
        <>
          {loading ? (
              <h3>Loading the Characters</h3>
          ) : (
              <div>
                  <h2>Here are your characters</h2>
                  {characters.map((character) => (
                      <section key={character.id}>
                          <p>{character.name}</p>
                      </section>
                  ))}
              </div>
          )
          })
        </>
    )
}