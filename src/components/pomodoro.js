import React from "react";
import ChronoButton from "./chrono-button";
import Modal from "./modal";

const displayNone = {
    display: "none",
};

const display = {
    display: "block",
};

const displayPomodoro = {
    display: "flex",
};

const displayNonePomodoro = {
    display: "none",
};

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            countdown: 1,
            isShow: true,
        };

        this.Start = this.handleStart.bind(this);
        this.Pause = this.handlePause.bind(this);
        this.Reset = this.handleReset.bind(this);
        this.Plus = this.handlePlus.bind(this);
        this.Min = this.handleMin.bind(this);
        this.decreaseCountdown = this.decreaseCountdown.bind(this);
        this.Exit = this.handleExit.bind(this);
        this.Restart = this.handleRestart.bind(this);
    }

    handleStart() {
        this.setState({isStarted: true});
        this.interval = setInterval(this.decreaseCountdown, 1000);
    }

    handlePause() {
        this.setState({isStarted: false});
        clearInterval(this.interval);
    }

    handleReset() {
        this.setState(() => ({
            countdown: 300,
        }));
    }

    handlePlus() {
        this.setState(currentState => ({
            countdown: currentState.countdown + 60,
        }));
    }

    handleMin() {
        if (this.state.countdown > 60) {
            this.setState(currentState => ({
                countdown: currentState.countdown - 60,
            }));
        }
    }

    handleExit() {
        this.setState();
    }

    handleRestart() {
        this.setState(() => ({
            countdown: 300,
        }));
        console.log(this.state.countdown);
    }

    decreaseCountdown() {
        this.setState(currentState => ({
            countdown: currentState.countdown - 1,
        }));
        if (this.state.countdown === 0) {
            clearInterval(this.interval);
        }
    }

    formatCountdown() {
        let seconds = Math.floor(this.state.countdown % 60);
        const minutes = Math.floor(this.state.countdown / 60);
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }

    render() {
        return (
            <div className={"wrapper"}>
                <Modal
                    value={"Exit"}
                    class={"Exit"}
                    handleExitFunc={this.Exit}
                    handleRestartFunc={this.Restart}
                    style={
                        this.state.countdown <= 0
                            ? displayPomodoro
                            : displayNonePomodoro
                    }
                />
                <div
                    className={"pomodoro"}
                    style={
                        this.state.countdown <= 0
                            ? displayNonePomodoro
                            : displayPomodoro
                    }>
                    <div className={"timerWrapper"}>
                        {this.formatCountdown()}
                    </div>
                    <div className={"btnWrapper"}>
                        <ChronoButton
                            value={"+"}
                            class={"Plus"}
                            isDisabled={this.state.isStarted ? true : false}
                            handleFunc={() => {
                                this.Plus();
                            }}
                        />
                        <ChronoButton
                            value={"Start"}
                            class={"Start"}
                            isDisabled={this.state.isStarted ? true : false}
                            handleFunc={this.Start}
                            style={this.state.isStarted ? displayNone : display}
                        />
                        <ChronoButton
                            value={"Pause"}
                            class={"Pause"}
                            isDisabled={this.state.isStarted ? false : true}
                            handleFunc={this.Pause}
                            style={this.state.isStarted ? display : displayNone}
                        />
                        <ChronoButton
                            value={"Reset"}
                            class={"Reset"}
                            isDisabled={
                                !this.state.isStarted &&
                                this.state.countdown !== 300
                                    ? false
                                    : true
                            }
                            handleFunc={this.Reset}
                        />
                        <ChronoButton
                            value={"-"}
                            class={"Min"}
                            isDisabled={this.state.isStarted ? true : false}
                            handleFunc={this.Min}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pomodoro;
