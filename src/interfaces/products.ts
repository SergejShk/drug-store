export interface IProduct {
	id: number;
	name: string;
	price: string;
	createdAt: Date;
	shopId: number;
}

export interface IOrderProduct extends IProduct {
	count: number;
}
