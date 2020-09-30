import React, {Component} from "react"

/*import {
  Button as BootstrapButton,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
*/

class Question extends Component {
  constructor(props) {
      super(props)
//      this.state = {
//         value: ""
//      };
  }

    render(){
	let { label} = this.props
	console.log("From class")
	console.log(label)
	return (
		<div>
		<p> {label} </p>
		</div>
		>
		{ label } 
	)	
    }
}

export default Question
