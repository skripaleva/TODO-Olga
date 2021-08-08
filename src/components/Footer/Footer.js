import React from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const Footer = ({ count, onClickFilter, onClickDeleteAll }) => {
    return (
        <div className={styles.wrap}>
            <Button variant="contained">Количество: {count}</Button>
            <div>
                <ButtonGroup variant="contained">
                    <Button id='all' onClick={(e) => onClickFilter('all')}>Все</Button>
                    <Button id='active' onClick={(e) => onClickFilter('active')}>Активные</Button>
                    <Button id='completed' onClick={(e) => onClickFilter('completed')}>Выполненные</Button>
                </ButtonGroup>
            </div>
            <Button variant="contained" onClick={onClickDeleteAll}>Удалить все</Button>
        </div>
    )
};

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
    count: PropTypes.number.isRequired,
    onClickDeleteAll: PropTypes.func.isRequired,
    onClickFilter: PropTypes.func.isRequired
};


export default Footer;