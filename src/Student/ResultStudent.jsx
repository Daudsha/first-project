import axios from "axios";
import { useState, useEffect } from "react";
const ResultStudent = () => {
  const [mk, setM] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/20it0534/backend/res.php", {
        stuid: localStorage.getItem("Reg"),
        nic: localStorage.getItem("Nic"),
      })
      .then(function (response) {
        console.log(response.data);
        setM(response.data);
        if(response.data === "invalid"){
            setM([""]); 
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div >
      <div className="container p-5" style={{marginBottom:"500px"}}>
        <div className="text-center"><h1 className="text-center">RESULT </h1> </div>
        <table border="1" className="table table-striped table-danger table-bordered">
          <thead className="">
            <tr className="">
              <th className="col-sm-5 text-center">Subject Name</th>
              <th className="col-sm-3 text-center">Result</th>
              <th className="col-sm-3 text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {mk.map((res, index) => (
              <tr key={res[0]}>
                <td key={res[2]}>{res[2]}</td>
                <td key={res[3]}>{res[3]}</td>
                <td key={res[4]}>{res[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultStudent;
