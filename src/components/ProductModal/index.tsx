import { FlatList, Modal } from "react-native"
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
	CloseButton,
	Header,
	Image,
	ModalBody,
	IngredientsContainer,
	Ingredient,
	Footer,
	FooterContainer,
	PriceContainer,
} from "./styles";

interface ProductModalProps {
	visible: boolean;
	onClose: () => void;
	product: null | Product;
	onAddToCart: (product: Product) => void;
}

const ProductModal = ({ visible, onClose, product, onAddToCart }: ProductModalProps) => {
	// usa optional para acessar o modal somente caso exista um produto
	if (!product) {
		return null
	}

	const handleAddToCart = () => {
		onAddToCart(product!) // non-null assertion informa que sempre haverá uma assercao verdadeira
		onClose()
	}

	return(
		<Modal
			animationType="slide"
			visible={visible}
			//setando animation e close modal para IOS
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<Image
				source={{
					uri: `http://192.168.1.7:3008/uploads/${product.imagePath}`,
				 }}
			>
				<CloseButton onPress={onClose}>
					<Close />
				</CloseButton>
			</Image>

			<ModalBody>
				<Header>
					<Text weight="600" size={24}>{product.name}</Text>
					<Text weight="400" size={16} color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
				</Header>

					{product.ingredients.length > 0 && (
						<IngredientsContainer>
							<Text weight="600" color="#666">Ingredientes</Text>
							<FlatList
								data={product.ingredients}
								keyExtractor={ingredient => ingredient._id}
								showsVerticalScrollIndicator={false}
								style={{  marginTop: 16 }}
								renderItem={({ item: ingredient }) => (
									<Ingredient>
										<Text>{ingredient.icon}</Text>
										<Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
									</Ingredient>
								)}
							/>
						</IngredientsContainer>
					)}
			</ModalBody>
			<Footer>
				<FooterContainer>
					<PriceContainer>
						<Text color="#666">Preco</Text>
						<Text size={20} weight="600">{formatCurrency(product.price)}</Text>
					</PriceContainer>
					<Button onPress={handleAddToCart}>
						Adicionar ao pedido
					</Button>
				</FooterContainer>
			</Footer>
		</Modal>
	)
}

export default ProductModal
