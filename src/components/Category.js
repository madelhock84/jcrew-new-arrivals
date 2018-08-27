import React, { Component } from 'react';
import axios from 'axios';

class Category extends React.Component {

  constructor(props) {
    super(props);

    this.category = this.props.match.params.categoryId_feature.split('_')[0];
  	this.state = {
  		productList: []
  	}
  }

  componentWillMount() {

    axios.get(`/data/v1/US/enhance-category/c/${this.category}_feature/newarrivals`)
      .then((response) =>  {
       if (response.data) {
        console.log(response.data);
          this.setState({
            productList: response.data.productList[0].products
          });
       }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

  	const productTiles = this.state.productList.map((product) => {
  			const imageUrl = `https://i.s-jcrew.com/is/image/jcrew/${product.productCode}_${product.defaultColorCode}`;
  			return (
  			  <div className="product-tile">
  			  	<img className="product-image" src={imageUrl} alt={product.productDescription}/>
  			  	<h2 className="product-desc">{product.productDescription}</h2>
  			  </div>
  			);
  	});

    return (
    	<div>
    	{productTiles}
    	</div>
    );
  }
}

export default Category;