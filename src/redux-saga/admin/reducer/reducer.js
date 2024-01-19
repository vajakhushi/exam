import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCESS } from "../action/action";

  
  const initialState = {
    product: [],
    isLoading: false,
    isError: null,
  };
  
  const productReducer = (state = initialState, action) => {
    console.log(action, "from reducer");
  
    switch (action.type) {
      case GET_PRODUCT_PROGRESS: {
        return {
          ...state,
          isLoading: true,
          isError: null,
        };
      }
  
      case GET_PRODUCT_SUCESS: {
        return {
          ...state,
          isLoading: false,
          product: action.data,
          isError: null,
        };
      }
  
      case GET_PRODUCT_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: action.data,
        };
      }
  
  
    
  
      case POST_PRODUCT_PROGRESS:{
        return{
          ...state,
          isLoading:true,
  
        }
      }
  
      case POST_PRODUCT_SUCESS:{
        return{
          ...state,
          isLoading:false,
          product:state.product.concat(action.data),
          isError:null
        }
      }
  
      case POST_PRODUCT_ERROR:{
        return{
          ...state,
          isLoading:false,
          isError:action.payload
         
        }
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default productReducer;
  