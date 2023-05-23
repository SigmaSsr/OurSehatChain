import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import DoctorFunc from "./doctor";
import DoctorInfo from "./doctorinfo";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import PatientBtns from "./patient";
import Patient from "./Patientinfo";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [chemInfo, setChemInfo] = useState({});
  const [docinfo, setDocInfo] = useState({});
  const [patientInfo, setPatientInfo] = useState({});

  const demo =
    <>
      <br />
      <h1><center> OurSehatChain : A secure and scalable blockchain based healthcare system</center></h1>
      <br />

      <h2><center> Chemist</center></h2>
      <div className="contract-container">
        <Contract value={value} chemInfo={chemInfo}/>
        <ContractBtns setChemInfo={setChemInfo} />
      </div>
      <br/>
      <h2><center> Doctor </center></h2>
      <div className="contract-container">
        <DoctorInfo value={value} docinfo={docinfo}/>
        <DoctorFunc setValue={setValue} />
      </div>
      <h2><center> Patient </center></h2>
      <div className="contract-container">
        <Patient patientInfo={patientInfo} setPatientInfo={setPatientInfo} />
        <PatientBtns setPatientInfo={setPatientInfo}/>
      </div>
    </>;

  return (
    <div className="demo">
      {
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
