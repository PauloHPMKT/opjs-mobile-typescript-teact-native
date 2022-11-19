import { Modal } from "react-native"
import { Product } from "../../types/Product";
import { Text } from "../Text";

interface ProductModalProps {
	visible: boolean;
	onClose: () => void;
	product: null | Product;
}

const ProductModal = ({ visible, onClose, product }: ProductModalProps) => {
	return(
		<Modal
			animationType="slide"
			visible={visible}
			//setando animation e close modal para IOS
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<Text>ProductModal</Text>
		</Modal>
	)
}

export default ProductModal
