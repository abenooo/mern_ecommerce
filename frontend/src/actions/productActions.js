import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCES,
    PRODUCT_LIST_FAIL
} from '../constants/productConstant'
import axios from 'axios'
/* action to fetch data from the server using function inside
another function and duspatch from the product reducer  */
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}