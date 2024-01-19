import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API } from "../../saga/constant";
import axios from 'axios';

export async function get_procuct(){
    return axios
    .get(BASE_URL+GET_PRODUCT_API).then((res)=>{
        const data = res.data;
        const status = res.status;
        return {
          data,
          status,
        };
    })
    .catch((err) => {
        console.log(err);
      });
      
}
export async function post_procuct(){
  return axios
  .get(BASE_URL+POST_PRODUCT_API).then((res)=>{
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
  })
  .catch((err) => {
      console.log(err);
    });
}
export async function delete_procuct(){
  return axios
  .get(BASE_URL+DELETE_PRODUCT_API).then((res)=>{
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
  })
  .catch((err) => {
      console.log(err);
    });
}