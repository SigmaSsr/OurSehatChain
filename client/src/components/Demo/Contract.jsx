import { useRef, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


function Contract({ value, chemInfo }) {
  console.log('>>>', chemInfo);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {chemInfo.name}</CardTitle>
          <CardSubtitle>{chemInfo.Address}</CardSubtitle>
          <CardSubtitle>{chemInfo.phoneNo}</CardSubtitle>
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

export default Contract;
