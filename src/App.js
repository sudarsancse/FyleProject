import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
/* import ReadMore from "./component/Page/ReadMore"; */
import Home from "./component/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/ReadMore" element={<ReadMore />} /> */}
    </Routes>
  );
}

export default App;
