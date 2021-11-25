import axios from 'axios';

function http(params) {
  return axios({ ...params }).then(res => res.data).catch(err => err);
}

//处理单请求和多请求
async function network(params) {
  //判断是否是多次请求（并发请求）
  if (params instanceof Array) {
    //定义数组保存返回值
    let results = [];
    for (let i in params) {
      results.push(await http(params[i]))
      // let result=await http(params[i])
      // results.push(result)
    }
    return results
  } else {
    return await http(params)
  }
}

export default network;