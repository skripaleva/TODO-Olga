import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Покормить кота';

const App = () => {
	const items = [
		{value: 'Покормить кота'},
		{value: 'Сходить на работу'},
		{value: 'Полить цветы'}
	];

return (
	<div>
		<h1>Список дел на сегодня:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count= {3} />
	</div>);
}

export default App; 