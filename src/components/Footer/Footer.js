import React, { useState } from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const Footer = ({ count, onClickFilter, deleteAll }) => {

    return (
        <div className={styles.wrap}>
            <Button variant="contained">Осталось: {count}</Button>
            <div>
                <ButtonGroup variant="contained">
                    <Button id='all' onClick={(e) => onClickFilter('all')}>Все</Button>
                    <Button id='active' onClick={(e) => onClickFilter('active')}>Активные</Button>
                    <Button id='completed' onClick={(e) => onClickFilter('completed')}>Выполненные</Button>
                </ButtonGroup>
            </div>
            <Button variant="contained">Удалить все</Button>
        </div>
    )




    Footer.defaultProps = {
        count: 0
    };

    Footer.propTypes = {
        count: PropTypes.number.isRequired
    };
}

export default Footer;