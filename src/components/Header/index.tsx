import { TouchableOpacity } from "react-native";
import { Text } from "../Text"
import { Container, OrderHeaderContent, OrderHeader, Table } from "./styles"

interface HeaderProps {
	selectedTable: string;
	onCancelOrder: () => void;
}

const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
	return(
		<Container>
			{!selectedTable && (
				<>
					<Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
					<Text size={24} weight="700">WAITER<Text size={24}>APP</Text></Text>
				</>
			)}

			{selectedTable && (
				<OrderHeaderContent>
					<OrderHeader>
						<Text weight="600" size={24}>Pedido</Text>
						<TouchableOpacity onPress={onCancelOrder}>
							<Text color="#d73035" weight="600" size={14}>Cancelar pedido</Text>
						</TouchableOpacity>
					</OrderHeader>
					<Table>
						<Text color="#666">Mesa {selectedTable}</Text>
					</Table>
				</OrderHeaderContent>
			)}
		</Container>
	)
}

export default Header
