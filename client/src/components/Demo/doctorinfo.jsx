import { useRef, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


function DoctorInfo({ value, docInfo }) {
  console.log('>>>', value);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {value.doctorName}</CardTitle>
          <CardSubtitle>{value.Address}</CardSubtitle>
          <CardSubtitle>{value.areaOfExpertize}</CardSubtitle>
          <CardSubtitle>{value.doctorId}</CardSubtitle>
          <CardSubtitle>{value.phoneNo}</CardSubtitle>
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

export default DoctorInfo;
