import Calendar from './components/calendar'
import React from 'react'
import CalendarInput from './components/calendar/CalendarInput'
class App extends React.Component {
  state = {
    date: '2020-11-08',
  }

  render() {
    return (
      <div
        className="App"
        style={{ position: 'absolute', left: 100, top: 200 }}
      >
        <CalendarInput
          value={this.state.date}
          onChange={(newDate) =>
            this.setState({
              date: newDate,
            })
          }
        />
        {/**
           <Calendar
          value={this.state.date}
          onChange={(newDate) =>
            this.setState({
              date: newDate,
            })
          }
        />
           */}
      </div>
    )
  }
}

export default App
