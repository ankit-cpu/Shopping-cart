import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import {random, commerce} from "faker"
import {Container, Col, Row} from "reactstrap"
import CartItem from './cartItem'

const apiKey = "563492ad6f91700001000001e4fb8d03ca814e9a949d7ff7d130b757"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "http://www.json-generator.com/api/json/get/cgpaEIeSbm?indent=2"
const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

    const fetchPhotos = async () => {
        //const response = await Axios.get(url, {
        //    header: {
        //        Authorization: apiKey
        //    }
        //})
    
        const {data} = await Axios.get(localurl,{})
        const {photos} = data
    
        

    const allProduct = photos.map(photo => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: random.word(),
        productPrice: commerce.price(),
        id: random.uuid()
    }))
    setProduct(allProduct)
    }
    useEffect(() => {
        fetchPhotos()
    }, [])
    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
    }

export default BuyPage
