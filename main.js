const methods = [
  {
    name: "length",
    function: item => {
      return item.length;
    },
    opis: "Wyswietla długość podanego stringa"
  },
  {
    name: "charAt",
    function: (str, index) => {
      return str.charAt(index+1);
    },
    opis: "wyswietla znak na podanej pozycji, Należy pamiętać pozycja jest liczona od zera a nie od jeden"
  },
  {
    name: "charCodeAt",
    function: (str, index) => {
      return str.charCodeAt();
    },
    opis: "wyswietla kod ascii na podanej pozycji, Należy pamiętać pozycja jest liczona od zera a nie od jeden"
  },
  {
    name: "toUpperCase",
    function: str => {
      return str.toUpperCase();
    },
    opis: "Konwertuje tekst do dużych znaków"
  },
  {
    name: "toLowerCase",
    function: str => {
      return str.toLowerCase();
    },
    opis: "Konwertuje tekst do małych znaków"
  },
  {
    name: "indexOf",
    function: (str, item) => {
      return str.indexOf(item);
    },
    opis: "wyswietla pozycję podanego znaku"
  },
  {
    name: "lastIndexOf",
    function: (str, item) => {
      str.lastIndexOf(item);
    },
    opis: "wyswietla pozycję podanego znaku"
  },
  {
    name: "substr",
    function: (str, position, length) => {
      return str.substr(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "substring",
    function: (str, position, length) => {
      return str.substring(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "slice",
    function: (str, position, length) => {
      return str.slice(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "replace",
    function: (str, sea, rep) => {
      str.replace(sea, rep);
      return str;
    },
    opis: "podmienia fragment jakiegoś tekstu na inny tekst"
  }
];
const buttonList = document.querySelector("aside");
const strInput = document.querySelector(".str");
const strParam1 = document.querySelector(".param1");
const strParam2 = document.querySelector(".param2");
const OutputElement = document.querySelector(".output")
const methDescP = document.querySelector(".methDescP")
methods.forEach(method => {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("methButton","btn-secondary","border-0","m-1");
  button.innerText = method.name;
  button.addEventListener("click", () => {
    methDescP.innerText=method.opis;
    result='no input'
    if(method.function.length==1)
      result=method.function(strInput.value);
    else if(method.function.length==2)
      result=method.function(strInput.value, strParam1.value);
    else if(method.function.length==3)
      result=method.function(strInput.value, strParam1.value, strParam2.value)
    OutputElement.value=result;
  });
  buttonList.appendChild(button);
});

