import { useRef, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


function Patient({ value, patientInfo }) {
  console.log('>>>', patientInfo);
  return (
    <div>
      <Card>
        <CardBody>
          <CardSubtitle>{patientInfo._adharCardNumber}</CardSubtitle>
          <CardTitle>Name: {patientInfo.name}</CardTitle>
          <CardSubtitle>{patientInfo.addres}</CardSubtitle>
          <CardSubtitle>{patientInfo.bloodGroup}</CardSubtitle>
          <CardSubtitle>{patientInfo.phoneNo}</CardSubtitle>
          <CardSubtitle>{patientInfo.emergencyContacts}</CardSubtitle>
          <CardSubtitle>{patientInfo._insuranceCompany}</CardSubtitle>

          
        </CardBody>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default Patient;
