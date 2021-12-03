import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../models';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    // getConfigResponse(): Observable<HttpResponse<Config>> {
    //     return this.http.get<Config>(
    //         this.configUrl, { observe: 'response' });
    // }

    // private showConfig() {
    //     this.configService.getConfig()
    //       .subscribe((data: Config) => this.url = data.urlBase);
    //   }
}
