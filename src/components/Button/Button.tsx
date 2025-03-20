import s from './Button.module.scss';
import clsx from 'clsx';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'danger';
	size?: 'sm' | 'md' | 'lg';
}

export default function Button({
	variant = 'primary',
	size = 'md',
	className,
	children,
	...props
}: IButtonProps) {
	return (
		<button
			className={clsx(s.button, s[variant], s[size], className)}
			{...props}
		>
			{children}
		</button>
	);
}
