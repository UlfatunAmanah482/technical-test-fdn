import axios from "axios"
import { GET_DATA } from "../constants"

export const getAllData = () => (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: {
      load: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
    .then((res) => {
      dispatch({
        type: GET_DATA,
        payload: {
          load: false,
          data: res.data,
          error: false,
          redirect: false
        }
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_DATA,
        payload: {
          load: false,
          data: false,
          error: err,
          redirect: false
        }
      })
    })
}