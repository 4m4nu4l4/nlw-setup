const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-BR").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  // condicionais (logica de programação)
  if (dayExists) {
    alert("dia ja incluso")
    return
  }
  // aqui no return a função para

  alert("adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

//const data = {
//  run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
//  takePills: ["01-03"],
//  journal: ["01-04"],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
//pega os dados e guarda no localstorage
//pegou as informações do local, transformou em objeto e colocou ali pra mim
nlwSetup.setData(data)
nlwSetup.load()

