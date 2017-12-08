import { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../client/components/Layout'
import SearchInput from '../client/components/SearchInput'
import ProductList from '../client/components/ProductList'
import * as Actions from '../client/actions/actions.js'
import ActionBinder from '../lib/ActionBinder'

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...Actions.getInitialState()
		}
	}
	actions(){
		return ActionBinder([Actions], this);
	}
	getChildContext(){
		return {
			actions: this.actions()
		};
	}
	componentDidMount() {
		this.actions().search();
	}
	render(){
		return (
			<Layout>	
				<div className="Index Page">
					<h1>Joe Search</h1>
				  <SearchInput {...this.state} />
				  <ProductList products={this.state.products} />
				</div>
			</Layout>
		);
	}
}

Index.childContextTypes = {
  actions: PropTypes.object
};
