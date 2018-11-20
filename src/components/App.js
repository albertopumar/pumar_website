import React, {Component} from 'react';
import {TimelineMax, Expo} from 'gsap/all';

import Background from './Background';
import Header from './Header';
import MenuButton from './MenuButton';
import Menu from "./Menu";

class App extends Component {

    state = {
        timeLine: null
    };

    componentDidMount() {
        this.createMenuAnimation();
    }

    createMenuAnimation = () => {
        let timeLine = new TimelineMax({paused: true});

        timeLine.to(".overlay", 1.6, {
            top: 0,
            ease: Expo.easeInOut

        });

        timeLine.to(".page-title", 1, {
            left: -400,
            ease: Expo.easeIn

        }, '-=1.6');
        timeLine.staggerFrom('.menu-navigation li', 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);
        timeLine.reverse();

        this.setState({timeLine});
    };

    triggerMenu = () => {
        this.state.timeLine.reversed(
            !this.state.timeLine.reversed()
        );
    };

    render() {
        return (
            <Background>
                <Header>
                    <h1 className="page-title">Alberto Pumar Jiménez</h1>
                    <MenuButton triggerMenu={this.triggerMenu}/>
                </Header>

                <Menu triggerMenu={this.triggerMenu}>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Contact</li>
                </Menu>

                {/*<div className="header">*/}
                {/*<h1>Alberto Pumar Jiménez</h1>*/}
                {/*<div className="menu-btn">*/}
                {/*<button type="button"><i className="material-icons">menu</i></button>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="blockquote">*/}
                {/*<blockquote>*/}
                {/*Mejorar y aprender cada día enfrentándome y*/}
                {/*resolviendo los problemas que se me pongan por delante*/}
                {/*<cite>Alberto Pumar</cite>*/}
                {/*</blockquote>*/}
                {/*</div>*/}

                {/*<div className="menu">*/}
                    {/*<div className="row">*/}
                        {/*<div className="col-lg overlay">*/}
                            {/*<div className="nav">*/}
                                {/*<ul>*/}
                                    {/*<li className="noselect">Home</li>*/}
                                    {/*<li className="noselect">About me</li>*/}
                                    {/*<li className="noselect">Contact</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

            </Background>
        );
    }
}

export default App;
