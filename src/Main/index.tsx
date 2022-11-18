import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer
} from './styles';

const Main = () => {
	return(
		<>
			<Container>
				<Header />

				<CategoriesContainer>
					<Categories />
				</CategoriesContainer>

				<MenuContainer>
					<Menu />
				</MenuContainer>

			</Container>
			{/* configuracao do footer para IOS */}
			<Footer>
				<FooterContainer></FooterContainer>
			</Footer>
		</>
	)
}

export default Main
