import React from 'react';

const Button = props => (
  <div>
    <button onClick={props.onClick}>{props.children}</button>
    {props.clicked ? <h1>clicked</h1> : null}
  </div>
)

export default class StatefulCount extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      lastClicked: null
    }
  }

  addOne = () => {
    let nextCount = this.state.count + 1
    this.setState({ count: nextCount, lastClicked: 'Add One' })
  }

  substractOne = () => {
    let nextCount = this.state.count - 1
    this.setState({ count: nextCount, lastClicked: 'Substract One' })
  }

  resetToZero = () => {
    this.setState({ count: 0, lastClicked: 'Reset to Zero' })
  }

  //create button components for your buttons,
  //they should display right next to them if they were last clicked

  render() {
    const { count, lastClicked } = this.state
    return (
      <div>
        <h1>StatefulCount component</h1>
        <h2>randomProp is: {this.props.randomProp}</h2>
        <h2>count is: {count}</h2>
        <h2>lastClickedIs is: {lastClicked}</h2>
        <Button clicked={'Add One' === lastClicked} onClick={this.addOne}>
          Add One
        </Button>
        <br />
        <Button clicked={'Substract One' === lastClicked} onClick={this.substractOne}>
          Substract One
        </Button>
        <br />
        <Button clicked={'Reset to Zero' === lastClicked} onClick={this.resetToZero}>
          Reset to Zero
        </Button>
      </div>
    )
  }
}
