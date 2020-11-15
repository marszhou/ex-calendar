import React from 'react'
import styles from './style.css'
console.log(styles)

class Calendar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calendar">
          <div className="front">
            <div className="current-date">
              <div className="left"></div>
              <div className="right"></div>
              <h1>January 2016</h1>
            </div>
            <div className="current-month">
              <ul className="week-days">
                <li>MON</li>
                <li>TUE</li>
                <li>WED</li>
                <li>THU</li>
                <li>FRI</li>
                <li>SAT</li>
                <li>SUN</li>
              </ul>
              <div className="weeks">
                <div className="first">
                  <span className="last-month">28</span>
                  <span className="last-month">29</span>
                  <span className="last-month">30</span>
                  <span className="last-month">31</span>
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                </div>
                <div className="second">
                  <span>04</span>
                  <span>05</span>
                  <span className="event">06</span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                  <span>10</span>
                </div>
                <div className="third">
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span className="active">15</span>
                  <span>16</span>
                  <span>17</span>
                </div>
                <div className="fourth">
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                </div>
                <div className="fifth">
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                  <span>31</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <input placeholder="What's the event?" />
            <div className="info">
              <div className="date">
                <p className="info-date">
                  Date: <span>Jan 15th, 2016</span>
                </p>
                <p className="info-time">
                  Time: <span>6:35 PM</span>
                </p>
              </div>
              <div className="address">
                <p>
                  Address: <span>129 W 81st St, New York, NY</span>
                </p>
              </div>
              <div className="observations">
                <p>
                  Observations: <span>Be there 15 minutes earlier</span>
                </p>
              </div>
            </div>
            <div className="actions">
              <button className="save">
                Save <i className="ion-checkmark" />
              </button>
              <button className="dismiss">
                Dismiss <i className="ion-android-close" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {}

export default Calendar
