import { FlatList } from 'react-native'
import { Category, Icon } from "./styles"
import { Text } from "../Text"

import { categories } from "../../mocks/categories"

const Categories = () => {
	return(
		<>
			<FlatList
				horizontal
				data={categories}
				// cria um paddingRight no container
				contentContainerStyle={{ paddingRight: 24 }}
				showsHorizontalScrollIndicator={false}
				keyExtractor={category => category._id}
				renderItem={({ item: category }) => (
					<Category>
						<Icon>
							<Text>{category.icon}</Text>
						</Icon>
						<Text size={14} weight="600">{category.name}</Text>
					</Category>
				)}
			/>
		</>
	)
}

export default Categories
