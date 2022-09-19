
import { connect } from 'react-redux'
import { AddToCart } from "../services/Actions/Actions";
import Header from "../components/Header";

const mapStateToProps = (state)=>({
    data : state.cardItems 
})

const mapDispatchToProps = (dispatch)=>({
    addToCartHandler : data => dispatch(AddToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)