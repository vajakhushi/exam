import { call, put } from "redux-saga/effects";
import { get_procuct } from "../../admin/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCESS } from "../../admin/action/action";

export function* handle_Get_product_api(action) {
  try {
    const res = yield call(get_procuct, action);
    console.log(res, "from manageProduct");
    const status = res.status;
    const data = res.data;

    if (status === 200) {
      yield put({ type: GET_PRODUCT_SUCESS, data });
    } else {
      yield put({ type: GET_PRODUCT_ERROR, data });
    }
  } catch (e) {
    yield put({ type: GET_PRODUCT_ERROR, e });
  }
}

export function* handle_post_product_api(action) {
  try {
    const res = yield call(get_procuct, action);
    console.log(res, "from manageProduct");
    const status = res.status;
    const data = res.data;

    if (status === 200) {
      yield put({ type: POST_PRODUCT_SUCESS, data });
    } else {
      yield put({ type: POST_PRODUCT_ERROR, data });
    }
  } catch (e) {
    yield put({ type: POST_PRODUCT_ERROR, e });
  }
}
export function* handle_delete_product_api(action) {
  try {
    const res = yield call(get_procuct, action);
    console.log(res, "from manageProduct");
    const status = res.status;
    const data = res.data;

    if (status === 200) {
      yield put({ type: DELETE_PRODUCT_SUCESS, data });
    } else {
      yield put({ type: DELETE_PRODUCT_ERROR, data });
    }
  } catch (e) {
    yield put({ type: DELETE_PRODUCT_ERROR, e });
  }
}
