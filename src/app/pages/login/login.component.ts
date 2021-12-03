import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models';
import { UsuarioService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.usuarioService.autenticar(this.login)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          console.log(e);
          if (e.status == 200) {
            alert(e.error.text);
            this.router.navigate(['/home'], { relativeTo: this.route });
          }
          else alert(e.error);
        },
        complete: () => console.info('complete')
      });
  }
}
