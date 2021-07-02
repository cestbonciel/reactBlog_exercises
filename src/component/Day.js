import Word from './Word';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
export default function Day() {
    //dummy.words
    // const a  = useParams();
    const {day} = useParams();
    
    const [words, setWords] = useState([]);
    //const wordList = dummy.words.filter(word=> word.day === Number(day));
    // console.log(wordList);
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`) 
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWords(data);
        });
        console.log(fetch);
    },[day]);
  
    return(
    <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
        {words.map(word=>(
        <Word word={word} key={word.id}/>
        ))}
        </tbody>
    </table>
    </>
    );
}