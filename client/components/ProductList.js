import { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    let ps = this.props.products;
    return (
      <div className="ProductList">
        {this.props.products.map((p, i) => <Product key={i} product={p} />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
ProductList.contextTypes = {
  actions: PropTypes.object
};
