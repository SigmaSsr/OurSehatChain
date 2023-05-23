import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function DoctorFunc({ setValue, setDocInfo }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [doctorId, setdoctorId] = useState("");
  const [doctorName, setdoctorName] = useState("doctorName");
  const [practiceType, setpracticeType] = useState("PracticeType");
  const [ areaOfExpertize, setareaOfExpertise] = useState("areaOfExpertize");
  const [ addr, setAddr] = useState("Address");
  const [ph, setPh] = useState("");


  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async (event) => {
    event.preventDefault();
    console.log( 'c', doctorId, doctorName, practiceType, areaOfExpertize, ph, addr);
    //const value = await contract.methods.read().call({ from: accounts[0] });
    //setValue(value);
    await contract.methods.addDoctor(Number(doctorId),doctorName,practiceType,areaOfExpertize, ph, addr).send({ from: accounts[0] });
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    const value = await contract.methods.getDoctorDetails(newValue).call({ from: accounts[0] });
    console.log('>213>', value);
    if (value) {
        setValue(value);
    }

  };

  return (
    <div className="">
  Add Doctor
  <form>
  <label htmlFor="doctorId">doctorId</label>
  <input type="text" id="doctorId" name="doctorId" value={doctorId} onChange={(e) => setdoctorId(e.target.value)}
         /><br/>
  <label htmlFor=" doctorName">doctorName:</label>
  <input type="text" id="doctorName" name="doctorName" value={doctorName} onChange={(e) => setdoctorName(e.target.value)}
         /><br/>
  <label htmlFor="Address">Address:</label>
  <input type="text" id="Address" name="Address" value={addr} onChange={(e) => setAddr(e.target.value)}
          /><br/>
  <label htmlFor="phoneNo">phoneNo:</label>
  <input type="text" id="phoneNo" name="phoneNo" value={ph} onChange={(e) => setPh(e.target.value)}/><br/>
  <label htmlFor="practiceType">practiceType:</label>
  <input type="text" id="practiceType" name="practiceType" value={practiceType} onChange={(e) => setpracticeType(e.target.value)}/><br/>
  <label htmlFor="areaOfExpertize">areaOfExpertize:</label>
  <input type="text" id="areaOfExpertize" name="areaOfExpertize" value={areaOfExpertize} onChange={(e) => setareaOfExpertise(e.target.value)}/><br/>
      
      
      
      
      <button onClick={read}>
        Add doc
      </button>
      </form>
      <div className="input-btn">
        <input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={write}>See Doctor</button>

    </div>
  );
}

export default DoctorFunc;