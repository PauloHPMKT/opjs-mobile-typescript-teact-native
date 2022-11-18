import { FlatList } from "react-native";
import { Text } from "../Text";
import { products } from "../../mocks/products";
import { Product, ProductImage, ProductDetails, Separator} from './styles';
import { formatCurrency } from "../../utils/formatCurrency";

const Menu = () => {
	return(
		<FlatList
			data={products}
			keyExtractor={product => product._id}
			style={{ marginTop: 32 }}
			contentContainerStyle={{ paddingHorizontal: 24 }}
			ItemSeparatorComponent={Separator}
			renderItem={({ item: product }) => (
				<Product>
					<ProductImage
						source={{
							uri: `http://192.168.1.7:19000/uploads/${product.imagePath}`,
						}}
					/>
					<ProductDetails>
						<Text weight="600">{product.name}</Text>
						<Text size={14}	color="#666">{product.description}</Text>
						<Text weight="600" size={14} color="#333" style={{ marginVertical: 8 }}>
							{formatCurrency(product.price)}
						</Text>
					</ProductDetails>
				</Product>
			)}
		/>
	)
}

export default Menu
