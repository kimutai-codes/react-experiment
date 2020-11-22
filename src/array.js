import React from 'react';
// import Namel from './namelist';

const arr = (props) => {
	const items = [
		{ id: 1, name: 'one' },
		{ id: 2, name: 'two' },
		{ id: 3, name: 'three' },
		{ id: 4, name: 'four' },
		{ id: 5, name: 'five' },
		{ id: 6, name: 'six' },
		{ id: 7, name: 'seven' },
		{ id: 8, name: 'eight' },
		{ id: 9, name: 'nine' },
		{ id: 10, name: 'ten' },
	];

	var names = ['Allan', 'Brian', 'Joseh'];
	return (
		<div>
			{names.map((name, index) => {
				return <h4 key={index}> {name}</h4>;
			})}
			<hr />
			{items.map((item,index) => {
				return (
					<h1 key={index}>
						{item.id} - {item.name}{' '}
					</h1>
				);
			})}
		</div>
	);
};

export default arr;
