import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models';
import { UsuarioService } from 'src/app/services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  clave2: string = "";
  
  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  registrarse() {
    if (this.usuario.clave != this.clave2){
      alert('Las claves no coinciden');
      return;
    }

    this.usuarioService.crearUsuario(this.usuario)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          console.log(e);
          if (e.status == 200) alert(e.error.text);
          else alert(e.error);
          this.router.navigate(['/home'], { relativeTo: this.route });
        },
        complete: () => console.info('complete')
      });
  }
}
