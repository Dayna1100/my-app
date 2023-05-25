import { useState } from "react";
import './Mood.css';

function Mood() {
    const [isHappy, setIsHappy] = useState(true)
    const changeMood = () => setIsHappy(!isHappy);
    const styles = { color: isHappy ? 'green' : 'red' };
    return <h3 
        className="Mood" 
        style={styles} 
        onClick={changeMood}>{isHappy ? ":)" : ":("}
        </h3>
}

export default Mood;