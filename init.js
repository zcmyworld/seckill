const redis = require('redis');
const co = require('co');
const Promise = require("bluebird");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

//构建Redis连接
let redisClient = redis.createClient({
  // port: '7000',
  // host: '127.0.0.1'
});

/**
 * 初始化购买系统
 */
async function init() {
  //初始化商品状态
  await redisClient.hmset('goods_status', {
    goodsId_count: 100,
    goodsId_start: 0,
    goodsId_access: 0
  })
  //
  await redisClient.hmset('goodsId', {
    total: 100,
    booked: 100
  })
  


}

co(async function() {
  await init();
})