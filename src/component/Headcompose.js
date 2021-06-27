// import './Drifting at 432 Hz - Unicorn Heads.mp3';
import styles from "./Headcompose.module.css";
export default function headComposition(){
    function showGenre(){
        console.log("Hiphop");
    }
    function showList(list){
        console.log(list);
    }
    function showTxt(txt){
        console.log(txt);
        //target은 input 태그가 되고,value는input의 value, 즉 작성한 값이된다.
    }
    return (<div className="wrap">
        {/* <input type="text" placeholder="typing words which you want to find" style={{
            padding:"10px",
        }}/> */}
        <h1 className={styles.headTit}>Feel the Music</h1>
        <button className={styles.btn} onClick={showGenre()}>Show your Genre</button>

        <button className={styles.btn2} onClick={()=> {
          showList(6)

        }}>Show your lists</button>
        {/* <div className={styles.box}/> */}
        <br />
        <input type="text" onChange={e=>{
            const txt = e.target.value;
            showTxt(txt);
        }} />
    </div>    );
    
    

}