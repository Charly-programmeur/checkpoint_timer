import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Software Engineer'
    },
    shows: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
