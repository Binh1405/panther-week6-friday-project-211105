import React, {useState, useEffect} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap"
import { ClipLoader } from "react-spinners";
import { useParams } from 'react-router';
import {toast} from "react-toastify"
import api from "../apiService"
import { useDispatch, useSelector } from 'react-redux';
import prodAction from '../redux/actions/products.action';
const BACKEND_API = process.env.REACT_APP_BACKEND_API

const DetailPage = () => {
    const [addProduct, setAddProduct] = useState(false)
    const params = useParams()
    const productId = params.id
    const addToShoppingList = (product) => {
        setAddProduct(product)
    }
    const loading = useSelector((state) =>state.products.loading)
    const dispatch = useDispatch()
    const product = useSelector((state) =>state.products.selectedProduct)
    useEffect(() => {
        if(addProduct)
        dispatch(prodAction.addToShoppingList({addProduct}))
    }, [addProduct])
    useEffect(()=>{
        dispatch(prodAction.getDetail({productId}))
    }, [productId])

    return (
  
        <Container>
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#f86c6b" size={150} loading={true} />
            </div>
          ) : (
            <Row className="border border-info mt-5">
              <Col md={3}>
                {product && (
                  <img
                    className="w-100"
                    src={`${BACKEND_API}/${product.imageLink}`}
                    alt=""
                  />
                )}
              </Col>
              <Col md={9}>
                {product && (
                  <>
                    <h2>{product.title}</h2>
                    <div>
                      <strong>Author:</strong> {product.description}
                    </div>
                    <div>
                      <strong>Price:</strong> {product.price}
                    </div>
                    <div>
                      <strong>Country:</strong> {product.country}
                    </div>
                    <div>
                      <strong>Quantity:</strong> {product.quantity}
                    </div>
                    <div>
                      <strong>Language:</strong> {product.language}
                    </div>
                    <Button onClick={() => addToShoppingList(product)}>
                      Add to Reading List
                    </Button>{" "}
                  </>
                )}
              </Col>
            </Row>
          )}
        </Container>
      );
}

export default DetailPage
