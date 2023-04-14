import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/cartItem";
import { Product } from "../../types/Product";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import OrderConfirmedModal from "../OrderConfirmedModal";
import { Text } from "../Text";
import {
  Actions,
  Item,
  ProductItem,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer,
} from "./styles";

interface CartProps {
  cartItems: CartItem[];
	onAdd: (product: Product) => void;
	onRemove: (product: Product) => void;
	onConfirmOrder: () => void;
	selectedTable: string;
}

const Cart = ({ cartItems, onAdd, onRemove, onConfirmOrder, selectedTable }: CartProps) => {
	const [isLoading, setIsLoading] =  useState(false)
	const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false)

	const total = cartItems.reduce((total, cartItem) => {
		return total + cartItem.quantity * cartItem.product.pricing
	}, 0)

	const handleConfirmOrder = async () => {
		setIsLoading(true)

		const payload = {
			table: selectedTable,
			products: cartItems.map(cartItem => ({
				product: cartItem.product._id,
				quantity: cartItem.quantity,
			}))
		}

		await api.post('/orders', payload)
		setIsLoading(false)
		setIsModalConfirmVisible(true)
	}

	const handleOk = () => {
		onConfirmOrder()
		setIsModalConfirmVisible(false)
	}

  return (
    <>
			<OrderConfirmedModal
				onOk={handleOk}
				visible={isModalConfirmVisible}
			/>

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({ item: cartItem }) => (
            <Item>
							<ProductItem>
								<Image
									source={{
										uri: `http://10.0.0.137:3008/uploads/${cartItem.product.imagePath}`,
									}}
								/>
								<QuantityContainer>
									<Text size={14} color="#666">
										{cartItem.quantity}x
									</Text>
								</QuantityContainer>

								<ProductDetails>
									<Text size={14} weight="600">
										{cartItem.product.name}
									</Text>
									<Text size={14} color="#666" style={{ marginTop: 4 }}>
										{formatCurrency(cartItem.product.pricing)}
									</Text>
								</ProductDetails>
							</ProductItem>

              <Actions>
                <TouchableOpacity
									onPress={() => onAdd(cartItem.product)}
									style={{ marginRight: 24 }}
								>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRemove(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <Button
					onPress={handleConfirmOrder}
					disabled={cartItems.length === 0}
					loading={isLoading}
				>
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
};

export default Cart;
