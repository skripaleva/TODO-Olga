import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem} ) => (<ul>
	<li><Item todoItem={todoItem} /></li>
	<li><Item todoItem={'Сходить на работу'} /></li>
	<li><Item todoItem={'Полить цветы'} /></li>
</ul>);

export default ItemList;