import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    let p = this.props.product;
    return (
      <a className="Product" href={p.link} target="_blank">
        <div className="Image">
          <img src={p.imageSrc} />
        </div>
        <div className="Info">
          <div className="FlexRow Flex1 JustifyBetween">
            <div className="Title">{p.title}</div>
            <div className="Cost">{p.cost}</div>
          </div>
          <div className="FlexRow JustifyFlexEnd">
            <div className="Seller">{`${p.seller}`}</div>
          </div>
        </div>
      </a>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
Product.contextTypes = {
  actions: PropTypes.object
};
