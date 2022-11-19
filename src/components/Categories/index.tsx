import { useState } from 'react'
import { FlatList } from 'react-native'
import { CategoryContainer, Icon } from "./styles"
import { Text } from "../Text"
import { Category } from '../../types/Category'

interface CategoriesProps {
	categories: Category[];
}

const Categories = ({ categories }: CategoriesProps ) => {
	const [selectedCategory, setSelectedCategory] = useState('')

	const handleSelectCategory = (categoryId: string) => {
		const category = selectedCategory === categoryId ? '' : categoryId
		setSelectedCategory(category)
	}


	return(
		<>
			<FlatList
				horizontal
				data={categories}
				// cria um paddingRight no container
				contentContainerStyle={{ paddingRight: 24 }}
				showsHorizontalScrollIndicator={false}
				keyExtractor={category => category._id}
				renderItem={({ item: category }) => {

					const isSelected = selectedCategory === category._id
					return(
						<CategoryContainer onPress={() => handleSelectCategory(category._id)}>
							<Icon>
								<Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
							</Icon>
							<Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
								{category.name}
							</Text>
						</CategoryContainer>
					)
				}}
			/>
		</>
	)
}

export default Categories
