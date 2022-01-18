const methods = [
  {
    name: "length",
    function: item => {
      return item.length;
    }
  },
  {
    name: "charAt",
    function: (str, index) => {
      return str.charAt(index);
    }
  },
  {
    name: "charCodeAt",
    function: (str, index) => {
      return str.charCodeAt();
    }
  },
  {
    name: "toUpperCase",
    function: str => {
      return str.toUpperCase();
    }
  },
  {
    name: "toLowerCase",
    function: str => {
      return str.toLowerCase();
    }
  },
  {
    name: "indexOf",
    function: (str, item) => {
      return str.indexOf(item);
    }
  },
  {
    name: "lastIndexOf",
    function: (str, item) => {
      str.lastIndexOf(item);
    }
  },
  {
    name: "substr",
    function: (str, position, length) => {
      return str.substr(position, length);
    }
  },
  {
    name: "substring",
    function: (str, position, length) => {
      return str.substring(position, length);
    }
  },
  {
    name: "slice",
    function: (str, position, length) => {
      return str.slice(position, length);
    }
  },
  {
    name: "replace",
    function: (str, sea, rep) => {
      str.replace(sea, rep);
      return str;
    }
  }
];
const buttonList = document.querySelector("aside");
const strInput = document.querySelector(".str");
const strParam = document.querySelector(".param");
methods.forEach(method => {
  const button = document.createElement("button");
  button.type = "button";
  button.class = "methButton";
  button.innerText = method.name;
  button.addEventListener("click", () => {
    console.log(method.function(strInput.value, strParam.value));
  });
  buttonList.appendChild(button);
});
