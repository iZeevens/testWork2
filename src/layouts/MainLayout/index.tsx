import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import Header from '@/components/Header/Header';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<Header />
			<main className={clsx(s.wrap__body, classNames?.body)}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</main>
			<footer className={clsx(s.wrap__footer, classNames?.footer)}>
				© 2025 TheRPC. All rights reserved.
			</footer>
		</div>
	);
};
