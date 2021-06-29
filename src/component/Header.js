
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";

// export default function Header() {
//   return (
//     <Router>
//         <div className="header">
//           <h1>
//             <Link to="/">토익 영단어(고급)</a>
//           </h1>
//           <div className="menu">
//             <Link to="/create_word" className="link">
//               단어 추가
//             </a>
//             <Link to="/create_day" className="link">
//               Day 추가
//             </a>
//           </div>
//         </div>
//     </Router>
//   );
// }
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="header">
            <h1>
                <Link to="/">토익 영단어(고급)</Link>    
            </h1>
            <div className="menu">
                <a href="#x" className="link">단어 추가</a>
                <a href="#x" className="link">Day 추가</a>
            </div>
        </div>
    );
}