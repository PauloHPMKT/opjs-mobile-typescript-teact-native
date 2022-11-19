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
import { useState } from 'react';
import Cart from '../components/Cart';
import { CartItem } from '../types/cartItem';
import { Product } from '../types/Product';

const Main = () => {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false)
	const [selectedTable, setSelectedTable] = useState('')
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	const handleSaveTable = (table: string) => {
		setSelectedTable(table)
	}

	const handleCancelOrder = () => {
		setSelectedTable('')
	}

	const handleAddToCart = (product: Product) => {
		if (!selectedTable) {
			setIsTableModalVisible(true)
		}

		alert(product.name)
	}

	return(
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleCancelOrder}
				/>

				<CategoriesContainer>
					<Categories />
				</CategoriesContainer>

				<MenuContainer>
					<Menu onAddToCart={handleAddToCart}/>
				</MenuContainer>
			</Container>
			{/* configuracao do footer para IOS */}
			<Footer>
				<FooterContainer>
					{!selectedTable && (
						<Button onPress={() => setIsTableModalVisible(true)}>
							Novo Pedido
						</Button>
					)}

					{selectedTable && (
						<Cart cartItems={cartItems}/>
					)}
				</FooterContainer>
			</Footer>

			<TableModal
				onClose={() => setIsTableModalVisible(false)}
				visible={isTableModalVisible}
				//essa funcao pode ser compartilhada entre componentes
				onSave={handleSaveTable}
			/>
		</>
	)
}

export default Main
