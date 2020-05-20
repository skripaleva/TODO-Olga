import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () => {
	const initialState = {
		items: [
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
		count: 3,
	};

const [items, setItems] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);

const onClickDone = id => {
	const newItemList = items.map(item => {
		const newItem = {...item};
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

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Список дел на сегодня:</h1>
			<InputItem onClickAdd={onClickAdd} />
			<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} />
			<Footer count={1} />
		</div>);
	};

export default Todo; 