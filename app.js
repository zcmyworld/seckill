const redis = require('redis');
const co = require('co');
const Promise = require("bluebird");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

//构建Redis连接
let redisClient = redis.createClient({
  port: '7000',
  host: '127.0.0.1'
});

/**
 * 判断秒杀是否开始
 */
async function check() {

}

/**
 * 初始化购买系统
 */
async function init() {

}

/**
 * 获得购买资格
 */
async function buy() {

}