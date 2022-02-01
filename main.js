const methods = [
  {
    name: "length",
    func: item => {
      return item.length;
    },
    opis: "Wyswietla długość podanego stringa"
  },
  {
    name: "charAt",
    func: (str, index) => {
      return str.charAt(parseInt(index)-1);
    },
    opis: "wyswietla znak na podanej pozycji, Należy pamiętać pozycja jest liczona od zera a nie od jeden"
  },
  {
    name: "charCodeAt",
    func: (str, index) => {
      return str.charCodeAt(parseInt(index)-1);
    },
    opis: "wyswietla kod ascii na podanej pozycji, Należy pamiętać pozycja jest liczona od zera a nie od jeden"
  },
  {
    name: "toUpperCase",
    func: str => {
      return str.toUpperCase();
    },
    opis: "Konwertuje tekst do dużych znaków"
  },
  {
    name: "toLowerCase",
    func: str => {
      return str.toLowerCase();
    },
    opis: "Konwertuje tekst do małych znaków"
  },
  {
    name: "indexOf",
    func: (str, item) => {
      return str.indexOf(item);
    },
    opis: "wyswietla pozycję podanego znaku"
  },
  {
    name: "lastIndexOf",
    func: (str, item) => {
      str.lastIndexOf(item);
    },
    opis: "wyswietla pozycję podanego znaku"
  },
  {
    name: "substr",
    func: (str, position, length) => {
      return str.substr(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "substring",
    func: (str, position, length) => {
      return str.substring(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "slice",
    func: (str, position, length) => {
      return str.slice(position, length);
    },
    opis: "wyswietla wycinek tekstu od pozycji startowej (parametr 1), przez podaną ilośc znaków (parametr 2)"
  },
  {
    name: "replace",
    func: (str, sea, rep) => {
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
  console.log(method.func.length)
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("methButton","btn-secondary","border-0","m-1");
  button.innerText = method.name;
  button.addEventListener("click", () => {
    console.log(method.func.length)
    methDescP.innerText=method.opis;
    result='no input'
    if(method.func.length==1)
      result=method.func(strInput.value);
    else if(method.func.length==2)
      result=method.func(strInput.value, strParam1.value);
    else if(method.func.length==3)
      result=method.func(strInput.value, strParam1.value, strParam2.value)
    console.log(result)
    OutputElement.value=result;
  });
  buttonList.appendChild(button);
});
