import * as React from 'react';
import './texto.css'; // sin uso

/* --- Información que el usuario enviará a través del input y aquí se esta especificando que valor o tipo debe ser con el interface -----*/
interface TextoProps {
    value: string;
    onPublishValue: any;
}

interface TextoState {
    value: string;
}

/* ---- Aquí se define la clase con un constructor un render y un evento*/
/* -- Aquí se crea una variable state y almacena el valor de Props para poderlo modificar*/
export class Texto extends React.Component <TextoProps, TextoState> {
 /*--------Iniciando las propiedades ------*/
    constructor (props: TextoProps) {
        console.log("Constructor");
        super(props);
        this.state = {
            value: props.value
        };
    }

    componentDidMount() {
        console.log("Did Mount");
    }
    /*--- Esta funcion no se llama pero si se ejecuta ya que es parte del cycloLife y sirve para actualizar el valor del input y asi pueda recibir el valor de valorActualTexto por medio del Props en:
     <Texto value={this.state.valorActualTexto} onPucdblishValue={this.setValue.bind(this)}/> ---*/
    componentWillReceiveProps(nextProps: Readonly<TextoProps>, nextContext: any): void {
        this.setState({
            value: nextProps.value
        });
    }

    /*---------- Pintando en pantalla -----------*/
    /*--- El bind permite apuntar a los variable dentro de la clase ---*/
    render() {
      return (
              <form>
                  <label>
                    Introduce un texto:
                    <br/>
                    <input className='text'
                           type="text"
                           name={"onPublishValue"}
                           placeholder={"Introduce un texto"}
                           value={this.state.value}
                           onChange={this.handleChange.bind(this)}
                    />
                  </label>
              </form>
        );
    }
/*--- eventos ---*/
    /*--- El valor introducido en el input esta almacenado en la variable newValue y en setState se usa para poder cambiar su valor ---*/
    handleChange (e) {
        let newValue =  e.target.value;
        this.setState({
            value: newValue
        });

        this.props.onPublishValue(newValue);
    }

    /*--- no se esta llamado ---*/
    componentWillUnmount(){
        alert ("destroy");
    }
}