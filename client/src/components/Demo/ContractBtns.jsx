import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue, setChemInfo }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [chemId, setChemId] = useState("");
  const [name, setName] = useState("name");
  const [addr, setAddr] = useState("addr");
  const [ph, setPh] = useState("");


  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async (event) => {
    event.preventDefault();
    console.log( 'c', chemId, name, addr, ph);
    //const value = await contract.methods.read().call({ from: accounts[0] });
    //setValue(value);
    await contract.methods.addChemist(chemId, name, addr, ph).send({ from: accounts[0] });
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
    const val = await contract.methods.getchemistinfo(newValue).call({ from: accounts[0] });
    console.log('>>', val);
    setChemInfo(val);
  };

  return (
    <div className="">
  Add Chemist
  <form>
  <label htmlFor="_chemistId">_chemistId:</label>
  <input type="text" id="_chemistId" name="_chemistId" value={chemId} onChange={(e) => setChemId(e.target.value)}
         /><br/>
  <label htmlFor="name">name:</label>
  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
         /><br/>
  <label htmlFor="Address">Address:</label>
  <input type="text" id="Address" name="Address" value={addr} onChange={(e) => setAddr(e.target.value)}
          /><br/>
  <label htmlFor="phoneNo">phoneNo:</label>
  <input type="text" id="phoneNo" name="phoneNo" value={ph} onChange={(e) => setPh(e.target.value)}/><br/>
      
      
      
      <button onClick={read}>
        Add Chemist
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
      <button onClick={write}>See chemist</button>

    </div>
  );
}

export default ContractBtns;
