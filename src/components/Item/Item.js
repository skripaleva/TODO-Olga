import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'

class Item extends React.Component {


    render() {
        const { value, isDone, onClickDone, id, onClickDelete, onClickFilter } = this.props;

        return (<div className={styles.flex}>
            <div>
                <Checkbox
                    checked={isDone}
                    color="default"
                    onClick={() => onClickDone(id)}
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
                    <DeleteIcon
                        onClick={() => onClickDelete(id)}
                    />
                </IconButton>
            </div>
        </div>);
    }
};

Item.defaultProps = {
    value: 'У вас не запланировано новых дел'
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default Item;