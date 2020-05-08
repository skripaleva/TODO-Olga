import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



const Item = ({value, isDone}) => ( <div className={styles.flex}>
	<div>
	  <Checkbox 
	    checked={isDone}
        color="default"
    />
	<label className={
	classnames({
	  [styles.item]: true,
	  [styles.done]: isDone
	})
}>
	{value}
	</label>
	</div>
<div>
     <IconButton aria-label="delete" >
        <DeleteIcon />
        </IconButton>
</div>
</div>);


export default Item;