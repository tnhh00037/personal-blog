import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import { Sidebar, Header, Footer, Main, Article, AboutMe } from "./Components";
import { Row, Col } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const App = (
    <div className="full-size">
        <Row>
            <Col sm={3}>
                <Sidebar />
            </Col>
            <Col sm={9}>
                <Router>
                    <Route path="/articles" component={Article} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/home" component={Main} />
                </Router>
            </Col>
        </Row>
    </div>
);

export default App;
