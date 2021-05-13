import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = (props) => {
    return (
        <Row>
            <Col md='6'>
               {props.left}
            </Col>
            <Col md='6'>
                {props.right}
            </Col>
        </Row>
    )
}

export default RowBlock;