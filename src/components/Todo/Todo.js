import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {

	const initialState = {
		items: JSON.parse(localStorage.getItem('items')) || [
			{
				value: 'Покормить кота',
				isDone: true,
				id: 1
			},
			{
				value: 'Сходить на работу',
				isDone: false,
				id: 2

			},
			{
				value: 'Полить цветы',
				isDone: true,
				id: 3
			}
		],
		count: JSON.parse(localStorage.getItem('count')) || 3,
	};

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);
	const [filterItems, setFilterItems] = useState(initialState.items);
	// const [filter, setFilter] = useState('all');

	useEffect(() => {
		setFilterItems(items);
	}, [items]);

	// useEffect(() => {
	// 	onClickFilter(filter);
	// }, [filter, items]);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
	});

	useEffect(() => {
		localStorage.setItem('count', JSON.stringify(count));
	});

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone
			}
			return newItem;
		});
		setItems(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !== id);
		setItems(newItemList);
		setCount(count => count - 1);
	};

	const onClickAdd = value => {
		const newItemList = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItems(newItemList);
		setCount(count => count + 1);
	};
	const onClickFilter = e => {
		let filterItemList = items;
		switch (e) {
			case 'all':
				filterItemList = items;
				break;
			case 'active':
				filterItemList = items.filter(item => item.isDone !== true);
				break;
			case 'completed':
				filterItemList = items.filter(item => item.isDone === true);
				break;
			default:
				filterItemList = initialState.items;
		}
		setFilterItems(filterItemList);
		// setFilter(e);
	}
	const onClickDeleteAll = () => {
		const emptyItemList = [];
		setItems(emptyItemList);
	}

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Список дел на сегодня:</h1>
			<InputItem onClickAdd={onClickAdd} items={items} />
			<ItemList onClickDone={onClickDone} onClickDelete={onClickDelete} items={filterItems} onClickFilter={onClickFilter} />
			<Footer count={filterItems.length} items={items} onClickFilter={onClickFilter} onClickDeleteAll={onClickDeleteAll} />
		</div>);
};

export default Todo;