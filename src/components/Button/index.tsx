import { ActivityIndicator } from "react-native";
import { Text } from "../Text"
import { Container } from "./styles"

interface ButtonProps {
	children: string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
}

const Button = ({ children, onPress, disabled, loading }: ButtonProps) => {
	return(
		<Container onPress={onPress} disabled={disabled || loading}>
			{!loading&& (
				<Text weight="600" color="#fff">
					{ children }
				</Text>
			)}

			{loading &&(
				<ActivityIndicator
					color="#FFF"
				/>
			)}
		</Container>
	)
}

export default Button
