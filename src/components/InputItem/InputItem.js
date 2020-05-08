import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const InputItem = () => ( <div className={styles.flex}>
	<TextField 
		id="outlined-basic" 
		label="Добавить новое дело" 
		variant="outlined"
		fullWidth
	/>
	 <IconButton>
                <AddBoxIcon
                	fontSize='large' 
                />
     </IconButton>

</div>);

export default InputItem;