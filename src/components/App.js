import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TimelineMax, Expo} from 'gsap/all';

import Background from './Background';
import Header from './Header';
import MenuButton from './MenuButton';
import Menu from './Menu';
import BlockQuote from './BlockQuote'

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
        timeLine.staggerFrom('.menu-navigation li', 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1, '-=0.6');
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

                <Router>
                    <React.Fragment>
                        <Menu triggerMenu={this.triggerMenu}>
                            <a href="/home">Home</a>
                            <a href="/about-me">About me</a>
                            <a href="/contact">Contact</a>
                        </Menu>
                        <Switch>
                            <Route path="/home"
                                   isExact
                                   render={() => {
                                       return <BlockQuote author="Alberto Pumar">
                                           Mejorar y aprender cada día enfrentándome y
                                           resolviendo los problemas que se me pongan por delante
                                       </BlockQuote>
                                   }}/>
                            <Route path="/about-me" isExact render={() => {
                                return <h1>TEST ABOUT</h1>
                            }}/>
                            <Route path="/contact" isExact render={() => {
                                return <h1>TEST Contact</h1>
                            }}/>
                        </Switch>
                    </React.Fragment>
                </Router>

                {/*<BlockQuote author="Alberto Pumar">
                    Mejorar y aprender cada día enfrentándome y
                    resolviendo los problemas que se me pongan por delante
                </BlockQuote>*/}

            </Background>
        );
    }
}

export default App;
