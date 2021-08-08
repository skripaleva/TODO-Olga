import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
// import PropTypes from 'prop-types'

class InputItem extends React.Component {
	state = {
		inputValue: '',
		error: false,
		errorMessage: ''
	};

	onButtonClick = () => {
		this.setState({ inputValue: '' });
		let replayValue = this.props.items.find(item => item.value === this.state.inputValue);

		if (this.state.inputValue === '') {
			this.setState({
				error: true,
			})
		}
		else if (replayValue) {
			this.setState({
				errorMessage: 'Такая задача уже существует',
				inputValue: '',
				error: false
			})
		}
		else if (this.state.inputValue !== '' && !replayValue) {
			this.setState({
				inputValue: '',
				errorMessage: '',
				error: false
			});
			this.props.onClickAdd(this.state.inputValue)
		}
	};

	render() {

		return (
			<div>
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
				</div>
				<div>{this.state.errorMessage ? <div className={styles.input_error}>{this.state.errorMessage}</div> : null}</div>
			</div>);
	}
}

// InputItem.propTypes = {
// 	onButtonClick: PropTypes.func.isRequired
// };

export default InputItem;