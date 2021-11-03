import NodeCache from "node-cache";

const shorteningCache = new NodeCache(/* in case we want to delete them after some time { stdTTL: 100, checkperiod: 120 }*/);

export const encode = (url) => {
    let encoded = `${url}short`;
    shorteningCache.set(encoded, url);
    return encoded;
}

export const decode = (url) => {
    //handle non existing data
    let decoded = shorteningCache.get(url);
    return decoded;
}