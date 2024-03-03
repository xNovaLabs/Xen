/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/x/',
    bare: '/y/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/dist/handler.js',
    client: '/dist/client.js',
    bundle: '/dist/bundle.js',
    config: '/dist/config.js',
    sw: '/dist/sw.js',
};
