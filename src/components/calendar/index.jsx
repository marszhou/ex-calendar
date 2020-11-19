import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import cx from 'classnames'
import 'moment/locale/zh-cn'
import './style.css'

window.moment = moment

moment.locale('zh-cn')

function parseDateFromString(value) {
  const m = moment(value)
  return {
    year: m.year(),
    month: m.month(),
    date: m.date(),
  }
}

class Calendar extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const d = parseDateFromString(this.props.value || Date.now())
    this.state = {
      currentYear: d.year,
      currentMonth: d.month,
      // currentDate: d.date,
    }
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { value } = this.props
    const { value: prevValue } = prevProps
    if (value !== prevValue) {
      const date = moment(value)
      if (this.state.currentMonth !== date.month()) {
        this.setState({
          currentYear: date.year(),
          currentMonth: date.month(),
        })
      }
    }
  }

  handlePreviousMonth = () => {
    this.monthChange(-1)
  }

  handleNextMonth = () => {
    this.monthChange(1)
  }

  monthChange = (change) => {
    const { currentYear, currentMonth } = this.state
    const current = moment([currentYear, currentMonth])
    const next = current.clone().add(change, 'M')
    this.setState({
      currentYear: next.year(),
      currentMonth: next.month(),
    })
  }

  handleDateChoose = (start, row, column) => {
    const dateDiff = row * 7 + column
    const date = start.clone().add(dateDiff, 'days')
    this.props.onChange(date.format('YYYY-MM-DD'))
  }

  render() {
    const { currentYear, currentMonth } = this.state
    const monthStart = moment([currentYear, currentMonth])
    const calendarStart = monthStart.clone().subtract(monthStart.weekday(), 'd')
    const monthEnd = monthStart.clone().date(monthStart.daysInMonth())
    const today = moment()
    const active = this.props.value ? moment(this.props.value) : null
    const daysDiff = moment.duration(monthEnd.diff(calendarStart)).asDays() + 1

    return (
      <div className="container">
        <div className="calendar">
          <div className="front">
            <div className="current-date">
              <div className="left" onClick={this.handlePreviousMonth}></div>
              <div className="right" onClick={this.handleNextMonth}></div>
              <h1>{monthStart.format('YYYY年MM月')}</h1>
            </div>
            <div className="current-month">
              <ul className="week-days">
                {moment.weekdaysShort(true).map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className="weeks">
                {[...Array(Math.ceil(daysDiff / 7))].map((_, row) => (
                  <div key={row}>
                    {[...Array(7)].map((_, column) => {
                      const d = calendarStart
                        .clone()
                        .add(row * 7 + column, 'day')
                      return (
                        <span
                          key={column}
                          className={cx({
                            'last-month': d.month() !== monthStart.month(),
                            today: d.isSame(today, 'date'),
                            active: active && d.isSame(active, 'date'),
                          })}
                          onClick={() =>
                            this.handleDateChoose(calendarStart, row, column)
                          }
                        >
                          {d.format('DD')}
                        </span>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {}

export default Calendar
