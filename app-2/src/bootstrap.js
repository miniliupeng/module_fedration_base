import _ from "lodash";
console.log(_.add(1, 2));

(async () => {
  const { sayHello } = await import("app1/utils");
  sayHello();
  const {button} = await import("app1/components")
  console.log(button);
})();

console.log("Hello");
