import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      DataisLoaded2: false,
      items2: [],
    };
  }

  async componentDidMount() {
    await fetch(
      "http://data.fixer.io/api/latest?access_key=532b07264af83b6f9cf5de665ca2b3be"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
    await fetch(
      "http://data.fixer.io/api/2021-12-02?access_key=532b07264af83b6f9cf5de665ca2b3be"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items2: json,
          DataisLoaded2: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items, DataisLoaded2, items2 } = this.state;
    if (!DataisLoaded || !DataisLoaded2)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <>
      <div>
        {/* Searching Form */}
      </div>
      <div className="Table">
        <tr>
          <th>Currency</th>
          <th>Price</th>
          <th>%Change</th>
        </tr>
        <tr>
          <td>BBD</td>
          <td>{items.rates.BBD}</td>
          <td className="coloredR">{(items.rates.BBD-items2.rates.BBD)*100/items.rates.BBD}%</td>
        </tr>
        <tr>
          <td>AFN</td>
          <td>{items.rates.AFN}</td>
          <td className="coloredR">{(items.rates.AFN-items2.rates.AFN)*100/items.rates.AFN}%</td>
        </tr>
        <tr>
          <td>INR</td>
          <td>{items.rates.INR}</td>
          <td className="coloredG">{(items.rates.INR-items2.rates.INR)*100/items.rates.INR}%</td>
        </tr>
        <tr>
          <td>BOB</td>
          <td>{items.rates.BOB}</td>
          <td className="coloredR">{(items.rates.BOB-items2.rates.BOB)*100/items.rates.BOB}%</td>
        </tr>
        <tr>
          <td>BRL</td>
          <td>{items.rates.BRL}</td>
          <td className="coloredR">{(items.rates.BRL-items2.rates.BRL)*100/items.rates.BRL}%</td>
        </tr>
        <tr>
          <td>CDF</td>
          <td>{items.rates.CDF}</td>
          <td className="coloredR">{(items.rates.CDF-items2.rates.CDF)*100/items.rates.CDF}%</td>
        </tr>
        <tr>
          <td>CUP</td>
          <td>{items.rates.CUP}</td>
          <td className="coloredR">{(items.rates.CUP-items2.rates.CUP)*100/items.rates.CUP}%</td>
        </tr>
        <tr>
          <td>FKP</td>
          <td>{items.rates.FKP}</td>
          <td className="coloredR">{(items.rates.FKP-items2.rates.FKP)*100/items.rates.FKP}%</td>
        </tr>
        <tr>
          <td>GBP</td>
          <td>{items.rates.GBP}</td>
          <td className="coloredG">{(items.rates.GBP-items2.rates.GBP)*100/items.rates.GBP}%</td>
        </tr>
        <tr>
          <td>HRK</td>
          <td>{items.rates.HRK}</td>
          <td className="coloredG">{(items.rates.HRK-items2.rates.HRK)*100/items.rates.HRK}%</td>
        </tr>
        <tr>
          <td>QAR</td>
          <td>{items.rates.QAR}</td>
          <td className="coloredR">{(items.rates.QAR-items2.rates.QAR)*100/items.rates.QAR}%</td>
        </tr>
        <tr>
          <td>SHP</td>
          <td>{items.rates.SHP}</td>
          <td className="coloredR">{(items.rates.SHP-items2.rates.SHP)*100/items.rates.SHP}%</td>
        </tr>
        <tr>
          <td>SVC</td>
          <td>{items.rates.SVC}</td>
          <td className="coloredR">{(items.rates.SVC-items2.rates.SVC)*100/items.rates.SVC}%</td>
        </tr>
        <tr>
          <td>THB</td>
          <td>{items.rates.THB}</td>
          <td className="coloredR">{ (items.rates.THB-items2.rates.THB)*100/items.rates.THB }%</td>
        </tr>
        <tr>
          <td>SOS</td>
          <td>{items.rates.SOS}</td>
          <td className="coloredR">{ (items.rates.SOS-items2.rates.SOS)*100/items.rates.SOS }%</td>
        </tr>
        <tr>
          <td>SYP</td>
          <td>{items.rates.SYP}</td>
          <td className="coloredR">{ (items.rates.SYP-items2.rates.SYP)*100/items.rates.SYP }%</td>
        </tr>
        <tr>
          <td>TJS</td>
          <td>{items.rates.TJS}</td>
          <td className="coloredR">{ (items.rates.TJS-items2.rates.TJS)*100/items.rates.TJS }%</td>
        </tr>
        <tr>
          <td>TND</td>
          <td>{items.rates.TND}</td>
          <td className="coloredR">{ (items.rates.TND-items2.rates.TND)*100/items.rates.TND }%</td>
        </tr>
        <tr>
          <td>TTD</td>
          <td>{items.rates.TTD}</td>
          <td className="coloredR">{ (items.rates.TTD-items2.rates.TTD)*100/items.rates.TTD }%</td>
        </tr>
        <tr>
          <td>TWD</td>
          <td>{items.rates.TWD}</td>
          <td className="coloredR">{ (items.rates.TWD-items2.rates.TWD)*100/items.rates.TWD }%</td>
        </tr>
        <tr>
          <td>UAH</td>
          <td>{items.rates.UAH}</td>
          <td className="coloredR">{ (items.rates.UAH-items2.rates.UAH)*100/items.rates.UAH }%</td>
        </tr>
        <tr>
          <td>AFN</td>
          <td>{items.rates.AFN}</td>
          <td className="coloredR">{ (items.rates.AFN-items2.rates.AFN)*100/items.rates.AFN }%</td>
        </tr>
        <tr>
          <td>XAF</td>
          <td>{items.rates.XAF}</td>
          <td className="coloredG">{ (items.rates.XAF-items2.rates.XAF)*100/items.rates.XAF }%</td>
        </tr>
        <tr>
          <td>XAG</td>
          <td>{items.rates.XAG}</td>
          <td className="coloredR">{ (items.rates.XAG-items2.rates.XAG)*100/items.rates.XAG }%</td>
        </tr>
        <tr>
          <td>ZMW</td>
          <td>{items.rates.ZMW}</td>
          <td className="coloredR">{ (items.rates.ZMW-items2.rates.ZMW)*100/items.rates.ZMW }%</td>
        </tr>
        <tr>
          <td>BTC</td>
          <td>{items.rates.BTC}</td>
          <td className="coloredR">{ (items.rates.BTC-items2.rates.BTC)*100/items.rates.BTC }%</td>
        </tr>
        <tr>
          <td>BWP</td>
          <td>{items.rates.BWP}</td>
          <td className="coloredG">{ (items.rates.BWP-items2.rates.BWP)*100/items.rates.BWP }%</td>
        </tr>
        <tr>
          <td>CAD</td>
          <td>{items.rates.CAD}</td>
          <td className="coloredR">{ (items.rates.CAD-items2.rates.CAD)*100/items.rates.CAD }%</td>
        </tr>
        <tr>
          <td>DKK</td>
          <td>{items.rates.DKK}</td>
          <td className="coloredG">{ (items.rates.DKK-items2.rates.DKK)*100/items.rates.DKK }%</td>
        </tr>
        <tr>
          <td>XAU</td>
          <td>{items.rates.XAU}</td>
          <td className="coloredR">{ (items.rates.XAU-items2.rates.XAU)*100/items.rates.XAU }%</td>
        </tr>
      </div>
      </>
    );
  }
}

export default App;
