import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../../admin/action/action";
import { takeLatest } from "@redux-saga/core/effects";
import { handle_Get_product_api, handle_delete_product_api, handle_post_product_api } from "../admin/manageProduct";

export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS,handle_Get_product_api);
  }
  export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRESS,handle_post_product_api);
  }
  export function* delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS,handle_delete_product_api);
  }