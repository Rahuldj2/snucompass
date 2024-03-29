import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

function DynamicMinorProgressBar(props) {
    const[minorName,SetMinorName]=useState('');

    useEffect(()=>{
        SetMinorName(props.department);
    })
  return (
    <Container>
      <Row>
        <Col><h2>
        Progress in {minorName}:
            </h2></Col>
      </Row>
      <Row>
        <Col>
          {props.percentage!==null? (
          <ProgressBar now={props.percentage?.toFixed(2)} label={`${props.percentage?.toFixed(2)}%`} />
        ) : (
          <ProgressBar now={3} label={`0%`} />
        )}
        </Col>
      </Row>
    </Container>
  );
}

export default DynamicMinorProgressBar;