import { IOrderProduct } from "./products";

export interface INewOrderBody {
	customerName: string;
	email: string;
	phone: string;
	address: string;
	products: IOrderProduct[];
}

export interface IOrder {
	customerName: string;
	email: string;
	phone: string;
	address: string;
	id: number;
	createdAt: Date;
	products: IOrderProduct[];
}
