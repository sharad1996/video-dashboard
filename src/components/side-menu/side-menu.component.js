import React from 'react';
import { Link } from "react-router-dom";
import './side-menu.styles.scss';

function SideMenu() {
	const menu = [
		{id: 0, name: 'home', link:'home'},
		{id: 1, name: 'alert', link:'alert'},
		{id: 2, name: 'faces', link:'faces'},
		{id: 3, name: 'settings', link:'settings'},
		{id: 4, name: 'reports', link:'reports'}
	];
	const [activeId, setActiveId] = React.useState(0);
	
	const handleClick = (ev, id) => {
		setActiveId(id);
	}

	return (
		<div className='d-flex'>
			<div className='menu-bar pt-4 px-2'>
				<div className='heading'>OWAL</div>
				<div className='user-profile'>
					<div className='text-center'>
						<div className='user-img mx-auto mt-4 mb-2'></div>
						<h4 className='user-name mb-5 font-weight-bold'>JC</h4>
					</div>
				</div>
				<div className='menu-list'>
					<ul className='pl-0'>
						{menu.map(data => {
							return (
								<li
									className={`list-unstyled d-flex align-items-end justify-content-center mb-3 ${activeId === data.id && 'active'}`}
									key={data.id}
									onClick={() => handleClick(this, data.id) }
								>
									<Link to={`${data.link}`}>{data.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideMenu;
