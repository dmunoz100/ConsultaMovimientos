import { useState } from "react";

function App() {

const [SaldoInicial,setSaldoInicial] = useState(5000);
const [Saldo,setSaldo] = useState(0);
const [SaldoPromedio,setSaldoPromedio] = useState(0);

const DATA = [
  {
    day:1,
    Amount:1500
  },
  {
    day:2,
    Amount:-800
  },
  {
    day:3,
    Amount:200
  },
  {
    day:4,
    Amount:500
  },
  {
    day:5,
    Amount:-1200
  },
  {
    day:6,
    Amount:0
  },
  {
    day:7,
    Amount:0
  },
  {
    day:8,
    Amount:0
  },
  {
    day:9,
    Amount:750
  },
  {
    day:10,
    Amount:-450
  },
  {
    day:11,
    Amount:-200
  },
  {
    day:12,
    Amount:0
  },
  {
    day:13,
    Amount:0
  },

  {
    day:14,
    Amount:0
  },
  {
    day:15,
    Amount:2000
  },
  {
    day:16,
    Amount:3000
  },
  {
    day:17,
    Amount:0
  },
  {
    day:18,
    Amount:0
  },
  {
    day:19,
    Amount:0
  },
  {
    day:20,
    Amount:0
  },
  {
    day:21,
    Amount:-3500
  },

  {
    day:22,
    Amount:-250
  },
  {
    day:23,
    Amount:0
  },
  {
    day:24,
    Amount:320
  },
  {
    day:25,
    Amount:-400
  },
  {
    day:26,
    Amount:0
  },
  {
    day:27,
    Amount:100
  },
  {
    day:28,
    Amount:-200
  },
  {
    day:29,
    Amount:0
  },
  {
    day:30,
    Amount:-1370
  }
]


const ConsultarSaldo = () => {
  console.log(document.getElementById("Dia").value);
  var Sal = SaldoInicial;
  DATA.filter(x=> x.day <= parseInt(document.getElementById("Dia").value)).forEach(item=> {
    Sal = Sal + item.Amount
  });
  setSaldo(Sal);
}

const ConsultarSaldoPromedio = () => {
  console.log(document.getElementById("Dia").value);
  var Sal = SaldoInicial;
  var Sum = 0;
  DATA.filter(x=> x.day <= parseInt(document.getElementById("Dia").value)).forEach(item=> {
    Sal = Sal + item.Amount;
    Sum = Sum +Sal;
  });
  setSaldoPromedio(Sum/DATA.length);
}




  return (
    <div className="container">
        <h2>Consulta de Movimientos</h2>
        <h4>Saldo Inicial de la Cuenta : {SaldoInicial}</h4>
        <div className="row">
        <div  className=" form group col-4">
                <label>Calcular Saldo de un dia</label>
                <input type="number" id="Dia" placeholder="Dia" className="form-control"></input>
            </div>
            <div  className="col-4 pt-4">
                <button onClick={ConsultarSaldo} className="btn btn-primary">Consultar</button>
            </div>
            <div  className="col-4 pt-4">
                <button onClick={ConsultarSaldoPromedio} className="btn btn-info">Calcular Saldo Promedio</button>
            </div>
            <div className="col-6">
              <h4>
              {
                `Tu saldo al dia : ${document.getElementById("Dia").value} es de $: ${Saldo}`
              }
              </h4>
            </div>
            <div className="col-6">
            <h4>
              {
                `Tu saldo Promedio es de : ${SaldoPromedio}`
              }
              </h4>
            </div>
            <div className="col-12">
            <table class="table">
          <thead>
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Movimientos</th>
            </tr>
          </thead>
          <tbody>
            {
              DATA.map(x=> <tr>
                <td>{x.day}</td>
                <td>{x.Amount}</td>
              </tr> )
            }
          </tbody>
        </table>
            </div>
        </div>
    </div>
  );
}

export default App;
