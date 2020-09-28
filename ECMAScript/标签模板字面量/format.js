// 数字格式化为美元
function dollabillsyall(strings, ...values) {
  return strings.reduce(function (s, v, idx) {
    if (idx > 0) {
      if (typeof values[idx - 1] === "number") {
        s += `$${values[idx - 1].toFixed(2)}`;
      } else {
        s += values[idx - 1];
      }
    }

    return s + v;
  }, "");
}

var amt1 = 11.99,
  amt2 = amt1 * 1.08,
  name = "Kyle";

var text = dollabillsyall`
Thanks for your purchase, ${name}! Your product cost was ${amt1}, which with tax comes out to ${amt2}.
`;

console.log(text);
