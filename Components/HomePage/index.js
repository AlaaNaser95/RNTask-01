import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import { Container, Header } from "native-base";
import * as actionCreators from "../../store/actions/coffeeActions";
// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  componentDidMount(){
    this.props.getCoffeeShops()
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <Login />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
 coffeeShops: state.coffee.coffeeShops,
 loading:state.coffee.loading,
 list:state.cart.list
});
const mapDispatchToProps = dispatch => ({
 getCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
});

export default connect(
 mapStateToProps,mapDispatchToProps
)(HomePage);
