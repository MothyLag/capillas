<template>
    <div class="container">
        <h1>Registro de Capillas</h1>
        <br>
        <div class="field">
            <div class="control">
                <input class="input is-primary" type="text" placeholder="nombre de la capilla" v-model="capilla.nombre">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input class="input is-primary" type="text" placeholder="dirección de la capilla" v-model="capilla.direccion">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input class="input is-primary" type="text" placeholder="administrador de la capilla" v-model="capilla.administrador">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input class="input is-primary" type="text" placeholder="teléfono de la capilla" v-model="capilla.telefono">
            </div>
        </div>

        <div class="select">
            <select>
                <option disabled>Ubicación</option>
                <option value="valles">Ciudad Valles</option>
                <option value="tamuin">Tamuin</option>
            </select>
        </div>

        <a @click="registrar" class="button is-success">Guardar</a>

    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'principal',
  data() {
      return{
        capilla:{
          nombre:'',
          direccion:'',
          administrador:'',
          telefono:''    
        }
      }
  },
  methods:{
      registrar(){
          alert("datos guardados :D");
          
      }
  }
}
</script>
