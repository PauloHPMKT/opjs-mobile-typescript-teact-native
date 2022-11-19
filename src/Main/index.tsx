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

const Main = () => {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false)
	const [selectedTable, setSelectedTable] = useState('')

	const handleSaveTable = (table: string) => {
		setSelectedTable(table)
	}

	const handleCancelOrder = () => {
		setSelectedTable('')
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
					<Menu />
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
