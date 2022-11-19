export interface Product {
	_id: string;
	name: string;
	description: string;
	imagePath: string;
	pricing: number;
	ingredient: {
		name: string;
		icon: string;
		_id: string;
	}[];
}
