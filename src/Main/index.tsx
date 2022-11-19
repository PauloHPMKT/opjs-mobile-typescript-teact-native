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

		setCartItems(prevState => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)

			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					product,
				})
			}

			const newCartItems = [...prevState]
			const item = newCartItems[itemIndex]
			newCartItems[itemIndex] ={
				...item,
				quantity: item.quantity + 1
			}

			return newCartItems
		})
	}

	const handleDecreaseCartItem = (product: Product) => {
		setCartItems(prevState => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)
			const item = prevState[itemIndex]
			const newCartItems = [...prevState]


			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1) //de ela, para ela mesma

				return newCartItems
			}

			newCartItems[itemIndex] ={
				...item,
				quantity: item.quantity - 1
			}

			return newCartItems

		})
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
						<Cart
							onAdd={handleAddToCart}
							onRemove={handleDecreaseCartItem}
							cartItems={cartItems}
						/>
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
