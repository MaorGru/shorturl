import NodeCache from "node-cache";
import crypto from "crypto"

const shorteningCache = new NodeCache(/* in case we want to delete them after some time { stdTTL: 100, checkperiod: 120 }*/);

export const encode = (url) => {
    let hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 6);
    let encoded = `http://short.est/${hash}`;
    shorteningCache.set(encoded, url);
    return encoded;
}

export const decode = (url) => {
    //handle non existing data
    let decoded = shorteningCache.get(url);
    return decoded;
}