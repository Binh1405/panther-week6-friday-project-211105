import React, { useEffect, useState } from 'react'
import api from '../apiService'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import prodAction from "../redux/actions/products.action"
import { Alert, Col, Container, Row, Card, Form } from 'react-bootstrap'
import { ClipLoader } from "react-spinners";
import PaginationBar from '../components/PaginationBar'
// import SearchForm from '../components/SearchForm'

const BACKEND_API = process.env.REACT_APP_BACKEND_API

const Homepage = () => {
    const [page, setPage] = useState(1)
    const totalPage = 10;
    const limit = 10;
    const [loading, setLoading]= useState(false)
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const history = useNavigate()

    const handleClickProduct = (productId) => {
        history.push(`/products/${productId}`)
    }

    const handleSearchInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const dispatch = useDispatch()

    const products = useSelector((state)=> state.products.products)
    useEffect(() => {
        dispatch(prodAction.getProducts({page, limit, query}))
    }, [dispatch, page, limit, query])


    return (
        <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center">E-COMMERCE STORE</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form
              loading={loading}
              search={search}
              handleSearchChange={handleSearchInputChange}
              handleSubmit={handleSubmit}
            />
            <hr />
            <PaginationBar
              page={page}
              setPage={setPage}
              totalPageNum={totalPage}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {loading ? (
              <div className="text-center">
                <ClipLoader color="#f86c6b" size={150} loading={true} />
              </div>
            ) : (
              <ul className="list-unstyled d-flex flex-wrap justify-content-between">
                {products.map((product) => (
                  <li key={product.id} onClick={() => handleClickProduct(product.id)}>
                    <Card
                      style={{
                        width: "12rem",
                        height: "27rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={`${BACKEND_API}/${product.imageLink}`}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>@{product.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    );
  };

export default Homepage
