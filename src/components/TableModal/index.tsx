import { Modal, TouchableOpacity } from "react-native"
import Button from "../Button"
import { Close } from "../Icons/Close"
import { Text } from "../Text"
import { ModalBody, Overlay, Header, Form, Input } from "./styles"
import { Platform } from "react-native"
import { useState } from "react"

const isAndoid = Platform.OS === 'android' ? 'height' : 'padding'

interface TableMofalProps {
	visible: boolean;
	onClose: () => void;
	onSave: (table: string) => void;
}

const TableModal = ({ visible, onClose, onSave }: TableMofalProps) => {
	const [table, setTable] = useState('')

	const handleSave = () => {
		onSave(table)
		onClose()
	}

	return(
		<Modal
			visible={visible}
			transparent
			animationType="fade"
		>
			<Overlay behavior={isAndoid}>
				<ModalBody>
					<Header>
						<Text weight="600">Informe a mesa</Text>

						<TouchableOpacity onPress={onClose}>
							<Close color="#666" />
						</TouchableOpacity>
					</Header>

					<Form>
						<Input
							onChangeText={setTable}
							keyboardType="number-pad"
							placeholder="Número da mesa"
							placeholderTextColor="#666"
						/>

						<Button onPress={(handleSave)} disabled={table.length === 0}>
							Salvar
						</Button>
					</Form>
				</ModalBody>
			</Overlay>
		</Modal>
	)
}

export default TableModal
