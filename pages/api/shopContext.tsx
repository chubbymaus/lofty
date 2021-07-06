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

	createCheckout = async () => {};

	fetchCheckout = async () => {};

	addItemtoCheckout = async () => {};

	removeLineItem = async (lineItemIdsToRemove: []) => {};

	fetchAllProducts = async () => {};

	fetchProductWithHandle = async (handle: String) => {};

	closeCart = async () => {};

	openCart = async () => {};

	closeMenu = async () => {};

	openMenu = async () => {};

	render() {
		return <ShopContext.Provider>{this.props.children}</ShopContext.Provider>;
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };
export default ShopProvider;
