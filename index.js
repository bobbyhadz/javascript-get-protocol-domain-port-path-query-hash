console.log('bobbyhadz.com');

// 👇️ Note: protocol contains the colon
const protocol = window.location.protocol;
console.log(protocol); // 👉️ http:

console.log(window.location.port); // 👉️ 41867

const host = window.location.host;
console.log(host); // localhost:41867

const fullURL =
  window.location.protocol + '//' + window.location.host;
console.log(fullURL); // http://localhost:41867

console.log(window.location.hash); // 👉️ #my-hash

// 👇️ '/blog/javascript-get-protocol-domain-port-path-query-hash'
console.log(window.location.pathname);
