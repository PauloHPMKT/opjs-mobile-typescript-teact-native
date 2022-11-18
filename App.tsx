import { useFonts } from 'expo-font';
import Main from './src/Main';

export default function App() {
	//verificar o tipo do hook - o hook carrega de forma asincrona
	const isFontsLoaded = useFonts({
		'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
		//abordagem para utilizacao de fonts = style={{fontFamily: 'GeneralSans-600'}}
	});

	if (!isFontsLoaded) {
		return null;
	}

  return (
		<Main />
  );
}
