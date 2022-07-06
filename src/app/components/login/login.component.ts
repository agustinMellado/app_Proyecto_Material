import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables
  formulario: FormGroup;
  //Efecto de carga spinner
  loading= false;

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private router:Router) {
    this.formulario = this.fb.group({

      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  
  ingresar(){
    console.log(this.formulario);
    //constantes para atrapar los valores escritos en los inputs y validarlos.
    const usuario = this.formulario.value.usuario;
    const password = this.formulario.value.password;
    
    //caso de prueba, esto se debe hacer con un backend
    if(usuario=='agustin' && password=='12345'){
      //lo redireccionamos al dashboard
      this.fakeLoading();
    
    }else{
      //tiramos mensaje de error
      this.error();
      //reseteo de fomulario
      this.formulario.reset();

    }

  }
  // metodo para mensaje de error
  error(){
    /*Como primer parametro paso el mensaje,
    Segundo parametro es donde se coloca un boton pero lo dejamos vacio
    Tercer parametro coloco un objeto con la configuracion deseada.
    */
    this._snackbar.open('Usuario o Contraseña incorrectas','',{
      //duracion.
      duration: 5000,
      //posiciones del mensaje.
      horizontalPosition:'center',verticalPosition:'bottom'
    });
  }
  //metodo para la falsa carga
  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      //redireccion al dashboard
      this.router.navigate(['/dashboard']);
    },1500)
  }

}
