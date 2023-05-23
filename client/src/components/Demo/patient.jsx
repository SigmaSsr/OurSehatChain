import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function PatientBtns({ setValue, setPatientInfo }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [_adharCardNumber, setAadharId] = useState(0);
  const [name, setName] = useState("name");
  const [addr, setAddr] = useState("addr");
  const [ph, setPh] = useState(0);
  const [bloodgroup, setAddBloodGrp] =useState("");
  const [_insuranceCompany, setInsuranceId  ]=useState(0);
  const [_emergencyContact, setEmergencyContact]=useState(0);


  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async (event) => {
    event.preventDefault();
    console.log( 'c', _adharCardNumber, name, addr, ph, bloodgroup, _insuranceCompany,_emergencyContact );
    //const value = await contract.methods.read().call({ from: accounts[0] });
    //setValue(value);
    await contract.methods.addPatientInfo( _adharCardNumber, name, addr, ph, bloodgroup, _insuranceCompany, _emergencyContact ).send({ from: accounts[0] });
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
    const val = await contract.methods.getPatientInfo(newValue).call({ from: accounts[0] });
    console.log('>>', val);
    console.log('>>231', val);
    setPatientInfo(val);
  };

  return (
    <div className="">
  Add Patient
  <form>
  <label htmlFor="_adharCardNumber">_adharCardNumber:</label>
  <input type="text" id="_adharCardNumber" name="_adharCardNumber" value={_adharCardNumber} onChange={(e) => setAadharId(e.target.value)}
         /><br/>
  <label htmlFor="name">name:</label>
  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
         /><br/>
  <label htmlFor="Address">Address:</label>
  <input type="text" id="Address" name="Address" value={addr} onChange={(e) => setAddr(e.target.value)}
          /><br/>
  <label htmlFor="phoneNo">phoneNo:</label>
  <input type="text" id="phoneNo" name="phoneNo" value={ph} onChange={(e) => setPh(e.target.value)}/><br/>
  
  <label htmlFor="bloodgroup">bloodgroup:</label>
  <input type="text" id="bloodgroup" name="bloodgroup" value={bloodgroup} onChange={(e) => setAddBloodGrp(e.target.value)}
         /><br/>

         <label htmlFor="_insuranceCompany">_insuranceCompany:</label>
  <input type="text" id="_insuranceCompany" name="_insuranceCompany" value={_insuranceCompany} onChange={(e) => setInsuranceId(e.target.value)}
         /><br/>

         <label htmlFor="_emergencyContact">_emergencyContact:</label>
  <input type="text" id="_emergencyContact" name="_emergencyContact" value={_emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)}
         /><br/>
      
      
      <button onClick={read}>
        Add Patient
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
      <button onClick={write}>See Patient</button>

    </div>
  );
}

export default PatientBtns;
