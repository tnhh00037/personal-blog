import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

interface PersonalInformation {
    name: string;
    job: string;
    hobby: string;
    passion: string;
}

{
    /*const StyledCol  = styled(Col)`
    display:flex;
    flex-direction: column;
    justify-content: center;
`*/
}
export default function AboutMe() {
    const [personalInfomation, setPersonalInformation] = useState<
        PersonalInformation
    >(Object);

    useEffect(() => {
        let personalInfomationFetched: PersonalInformation;
        axios.get(`http://localhost:3030/about-me`).then(res => {
            personalInfomationFetched = res.data;
            setPersonalInformation(personalInfomationFetched);
        });
    }, []);

    useEffect(() => {
        console.log(personalInfomation);
    }, [personalInfomation]);

    return (
        <React.Fragment>
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>
                    <h1>{personalInfomation.name} </h1>
                </Col>
            </Row>
        </React.Fragment>
    );
}
