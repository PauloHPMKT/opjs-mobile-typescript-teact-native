import { Modal } from "react-native"
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, OkButton } from "./styles";

interface OrderConfirmedModalProps {
	visible: boolean;
	onOk: () => void;
}

const OrderConfirmedModal = ({ visible, onOk }: OrderConfirmedModalProps) => {
	return(
		<Modal
			animationType="fade"
			visible={visible}
		>
			<Container>
				<CheckCircle />
				<Text color="#FFF" size={20} weight="600" style={{marginTop: 12 }}>
					Pedido confirmado
				</Text>
				<Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
					O pedido já entrou na fila de producao
				</Text>
				<OkButton onPress={onOk}>
					<Text color="#d73035" weight="600">OK</Text>
				</OkButton>
			</Container>
		</Modal>
	)
}

export default OrderConfirmedModal
