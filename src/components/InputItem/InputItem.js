import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		error: false
	};

	onButtonClick = () => {
		this.setState({inputValue: ''});

if (this.state.inputValue !== '') {
            this.props.onClickAdd(this.state.inputValue);
            this.setState({
                error: false
            })

        } else {
            this.setState({
                error: true
            })
        };
};

render() {
	const { onClickAdd } = this.props;

return (
 <div className={styles.flex}>
	<TextField 
		label="Добавить новое дело" 
		variant="outlined"
		fullWidth
		value={this.state.inputValue}
		onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
		error={this.state.error}
	/>
	 <IconButton>
                <AddBoxIcon
                	fontSize='large' 
                	onClick={this.onButtonClick} 
                />
     </IconButton>

</div>);
  }
};
export default InputItem;