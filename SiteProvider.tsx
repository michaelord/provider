import {useLocalStorage} from 'components/hooks';
import React from 'react';

import * as Types from 'components/types';

type Props = {
	children?: Types.Children;
};

type ContextProps = {};
const defaults: ContextProps = {
	theme: 'dasdas',
};

const SiteContext = React.createContext(defaults);
const {Consumer, Provider} = SiteContext;

export const SiteProvider = (props: Props) => {
	const {children} = props;

	//const [theme, setTheme] = useLocalStorage(props.theme, 'theme');
	//const [debug, setDebug] = useLocalStorage('off', 'debug');

	const setFavourite = () => {
		console.log('set favourite');
	};

	return (
		<Provider
			value={{
				theme: 'dsds',
				setFavourite,
			}}
		>
			{children}
		</Provider>
	);
};

export const SiteConsumer = ({children}: {children}) => (
	<Consumer>{(context: ContextProps) => children(context)}</Consumer>
);
