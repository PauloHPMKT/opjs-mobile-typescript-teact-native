import { Modal, TouchableOpacity } from "react-native"
import Button from "../Button"
import { Close } from "../Icons/Close"
import { Text } from "../Text"
import { ModalBody, Overlay, Header, Form, Input } from "./styles"
import { Platform } from "react-native"

const isAndoid = Platform.OS === 'android' ? 'height' : 'padding'

const TableModal = () => {
	return(
		<Modal
			transparent
		>
			<Overlay behavior={isAndoid}>
				<ModalBody>
					<Header>
						<Text weight="600">Informe a mesa</Text>

						<TouchableOpacity>
							<Close color="#666" />
						</TouchableOpacity>
					</Header>

					<Form>
						<Input
							keyboardType="number-pad"
							placeholder="Número da mesa"
							placeholderTextColor="#666"
						/>

						<Button onPress={() => alert('Salvou!')}>
							Salvar
						</Button>
					</Form>
				</ModalBody>
			</Overlay>
		</Modal>
	)
}

export default TableModal
