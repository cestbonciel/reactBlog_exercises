// import logo from './logo.svg';
import './App.css';
// import imgs from './imgs/music.jpg';
// import Headcompose from './component/Headcompose';
import Header from './component/Header';
// import ContentLeft from './component/ContentLeft';
// import ContentRight from './component/ContentRight';
import SecondContent from './component/SecondCon';
// import styles from "./App.module.css";
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
   
  return (
    // <BrowserRouter>
      <div className="App" >
      
        <header className="App-header">
          {/* <Headcompose/> */}
          {/* <h1 style={{color:"lightpink",backgroundColor:"gray",}}>Hello, {name} !</h1>
          <a className="clink" href={chrome.url}>{chrome.name}</a> */}
          <Header/>
        </header>
        {/* <main className="cntWrap" style={{width:"1000px",
        margin:"0 auto",
        backgroundColor:"#eee",
        }}>
          <ContentLeft className="conleft"/>
          <ContentRight className="conRight"/>
      
        </main> */}
        <section className="midInfo">
          <SecondContent num={10} /><hr />
          <SecondContent num={20}/><hr />
          <SecondContent num={30}/>
        </section>
       <footer className="spotiFoot">
          <address>copyright &copy; all right reserved </address>
      
       </footer>
       {/* <div className={styles.box}></div> */}
      </div>
    // </BrowserRouter>
    
  );
}

export default App;