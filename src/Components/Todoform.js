import React, { Component} from 'react';

class TodoForm extends Component {
constructor(){
super();
this.state = {
title:'',
responsable:'',
descripcion:'',
prioridad:'baja'

};
this.handleInputChange = this.handleInputChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(e){
e.preventDefault();
this.props.onAddTodo(this.state);
this.setState({
    titulo: '',
    responsable: '',
    descripcion: '',
    prioridad:'baja'
  });
}



handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }


render(){
    return(
        <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
            <div className="form-group">
              <input
              type="text"
              name="titulo"
              className="form-control"
              value={this.state.titulo}
              onChange={this.handleInputChange}
              placeholder="Titulo"

              />
            </div>

            <div className="form-group">
            <input
             type="text"
             name="responsable"
             className="form-control"
             value={this.state.responsable}
             onChange={this.handleInputChange}
             placeholder="Responsable"  

            />      
            </div>

            <div className="form-group">
            <input
             type="text"
             name="descripcion"
             className="form-control"
             value={this.state.descripcion}
             onChange={this.handleInputChange}
             placeholder="Descripcion"  

            />      
            </div>

            <div className="form-group">
            <select
               name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInputChange}
                >
                <option>baja</option>
                <option>media</option>
                <option>alta</option>
            </select>

            </div>
            <button type="Guardar" className="btn btn-primary">
             Guardar
            </button>
            </form>
        </div>
        )
}


}

export default TodoForm;