import Calendar from './components/calendar'
import React from 'react'
class App extends React.Component {
  state = {
    date: '2020-11-08',
  }

  render() {
    return (
      <div className="App">
        <Calendar
          value={this.state.date}
          onChange={(newDate) =>
            this.setState({
              date: newDate,
            })
          }
        />
      </div>
    )
  }
}

export default App
