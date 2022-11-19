import Header from '../components/Header';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer
} from './styles';
import TableModal from '../components/TableModal';

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
				<FooterContainer>
					<Button onPress={() => alert('novo pedido')}>
						Novo Pedido
					</Button>
				</FooterContainer>
			</Footer>

			<TableModal />
		</>
	)
}

export default Main
