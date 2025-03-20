import s from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { navLinks } from '@/assets/data/example';

export default function Header() {
	return (
		<header className={s.head}>
			<div className={clsx('container', s.container)}>
				<h2 className={s.logo}>CompanyName</h2>
				<nav className={s.navList}>
					<ul>
						{navLinks.map(({ path, label }) => (
							<li key={path}>
								<Link to={path}>{label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
