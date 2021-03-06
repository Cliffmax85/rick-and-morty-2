import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../../App.css';

export default function CharacterDetail({ characters = [] }) {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const selectedCharacter = characters.find((character) => character.id === Number(id));
        setCharacter(selectedCharacter);
        console.log(selectedCharacter);
    }, [id]);

    return (
        <div className={styles.detail}>
            <><h2>{character.name}</h2><img src={character.image} alt={`picture of ${character.name}`} /></>
        </div>
    )
}