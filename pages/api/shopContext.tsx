import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext(null);

const client = Client.buildClient({
	domain: `${process.env.SHOPIFY_DOMAIN}`,
	storefrontAccessToken: `${process.env.SHOPIFY_API_TOKEN}`,
});

class ShopProvider extends Component {
	state = {
		product: {},
		products: [],
		checkout: {},
		isCartOpen: false,
		isMenuOpen: false,
	};

	createCheckout = async () => {
		const checkout: { id: any } = await client.checkout.create();
		localStorage.setItem('checkout-id', checkout.id);
		this.setState({ checkout: checkout });
	};

	fetchCheckout = async () => {};

	addItemtoCheckout = async () => {};

	removeLineItem = async (lineItemIdsToRemove: []) => {};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		this.setState({ products: products });
		console.log(products);
	};

	fetchProductWithHandle = async (handle: string) => {
		const product = await client.product.fetchByHandle(handle);
		this.setState({ product: product });
	};

	closeCart = async () => {};

	openCart = async () => {};

	closeMenu = async () => {};

	openMenu = async () => {};

	render() {
		return (
			<ShopContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };
export default ShopProvider;
