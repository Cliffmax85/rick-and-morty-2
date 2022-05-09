import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CharacterDetail from './Detail';
import styles from '../../App.css';


export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url, path } = useRouteMatch();

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
              <><div className={styles.list}>
                        <h2>Here are your characters</h2>
                        {characters.map((character) => (
                            <section key={character.id}>
                                <Link to={`${url}${character.id}`}>
                                    <p>{character.name}</p>
                                    <img src={character.image} alt={`picture of ${character.name}`} />
                                    <h3>{character.status}</h3>
                                    <h3>{character.species}</h3>
                                </Link>
                            </section>
                        ))}
                    </div>
                    <Route path={`${path}:id`}>
                        <CharacterDetail characters={characters} />
                    </Route></>
          )}
        </>
    )
}