// node_modules/@supabase/node-fetch/browser.js
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
var fetch = globalObject.fetch;
var browser_default = globalObject.fetch.bind(globalObject);
var Headers = globalObject.Headers;
var Request = globalObject.Request;
var Response = globalObject.Response;

export {
  fetch,
  browser_default,
  Headers,
  Request,
  Response
};
//# sourceMappingURL=chunk-UYZFHDIX.js.map
