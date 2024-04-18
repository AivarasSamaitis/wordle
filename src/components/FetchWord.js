import { useState, useEffect } from 'react';
import axios from 'axios';
import Wordle from './Wordle';

const FetchWord = () => {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'POST',
                url: 'https://wordle-game-api1.p.rapidapi.com/word',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '6d6908bf5emsh585731898c49204p1536b7jsne3450abc359a',
                    'X-RapidAPI-Host': 'wordle-game-api1.p.rapidapi.com'
                },
                data: {
                    timezone: 'UTC + 0'
                }
            };
        
            try {
                const response = await axios.request(options);
                setSolution(response.data.word);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return ( 
        <div>
            {solution && <Wordle solution={solution} />}
        </div>
     );
}
 
export default FetchWord;